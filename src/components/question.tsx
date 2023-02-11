import { createContext, useEffect, useState } from "react";
import useSound from "use-sound";
import { dataQuestion } from "../data/questions";
import { questState } from "../types.ts/iquest-state";
import { ICase, IQuestion } from "../types.ts/iquestion";
import End from "../utils/end";
import HintBoolean from "../utils/hint-boolean";
import HintCall from "../utils/hint-call";
import ProgressShema from "../utils/progress-shema";
import QuestionHeader from "../utils/question-header";
import QuizContent from "../utils/quiz-content";
import Timer from "../utils/timer";

function Question() {
  const [level, setLevel] = useState(0);
  let [totalPoints, setTotalPoints] = useState(0);
  const [timeOn, setTimeOn] = useState(true);
  const [timer, setTimer] = useState(30);
  const [answerShema, setAnswerShema] = useState(questState.quiz);
  const [rightAnswerStyle, setRightAnswerStyle] = useState({});
  const [fiftyFiftyStyle, setFiftyFiftyStyle] = useState({});
  const [booleanStyle,setBooleanStyle]=useState({});
  const [visibleHintBoolean, setVisibleHintBoolean] = useState(false);
  const [visibleHintCall, setVisibleHintCall] = useState(false);
  const [itemHintBoolean, setItemHintBoolean] = useState(false);
  const [itemFiftyFifty, setItemFiftyFifty] = useState(false);
  const [itemCall, setItemCall] = useState(false);

  function addPoints() {
    setTotalPoints(totalPoints + 100);
  }
  function repeatGame() {
    window.location.reload();
  }

  function shuffleArr(arr: IQuestion[] | ICase[]|String[]) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]

    }
  }
  let questionArr: Array<IQuestion> = dataQuestion[level];
  useEffect(() => {
    shuffleArr(questionArr);
    shuffleArr(questionArr[0].ans)
  }
    , [level])
  const question: IQuestion = questionArr[0];
  let answers = question.ans;
  useEffect(() => { shuffleArr(answers) }, []);


  if (answerShema === questState.quiz) {
    return (
      <div>
        <HintCall
          visibleHintCall={visibleHintCall}
          setVisibleHintCall={setVisibleHintCall}
          setItemCall={setItemCall}
          setTimeOn={setTimeOn}
          setTimer={setTimer}
          question={answers}

        />
        <HintBoolean
          visibleHintBoolean={visibleHintBoolean}
          setVisibleHintBoolean={setVisibleHintBoolean}
          question={question.ans}
          setTimeOn={setTimeOn}
          setTimer={setTimer}
          setItemHintBoolean={setItemHintBoolean}
        />

        <QuestionHeader
          setVisibleHintBoolean={setVisibleHintBoolean}
          setTimeOn={setTimeOn}
          itemHintBoolean={itemHintBoolean}
          setItemHintBoolean={setItemHintBoolean}
          itemFiftyFifty={itemFiftyFifty}
          setItemFiftyFifty={setItemFiftyFifty}
          setFiftyFiftyStyle={setFiftyFiftyStyle}
          setTimer={setTimer}
          setVisibleHintCall={setVisibleHintCall}
          itemHintCall={itemCall}
          booleanStyle={booleanStyle}
          setBooleanStyle={setBooleanStyle}
          
        />

        <Timer
          setTimeOn={setTimeOn}
          timeOn={timeOn}
          setTimer={setTimer}
          setAnswerShema={setAnswerShema}
          timer={timer}
          setRightAnswerStyle={setRightAnswerStyle}
        />
        <QuizContent
          ask={question.ask}
          anses={question.ans}
          level={level}
          setLevel={setLevel}
          addPoints={addPoints}
          setTimeOn={setTimeOn}
          setTimer={setTimer}
          timer={timer}
          setAnswerShema={setAnswerShema}
          rightAnswerStyle={rightAnswerStyle}
          setRightAnswerStyle={setRightAnswerStyle}
          fiftyFiftyStyle={fiftyFiftyStyle}
          setFiftyFiftyStyle={setFiftyFiftyStyle}
          shuffleArr={shuffleArr}
          booleanStyle={booleanStyle}
          setBooleanStyle={setBooleanStyle}
          // play={play}
        />
      </div>
    );
  } else if (answerShema === questState.progress) {
    return (
      <ProgressShema
        level={level}
        setLevel={setLevel}
        setAnswerShema={setAnswerShema}
        setTimer={setTimer}
        setTimeOn={setTimeOn}
      />
    );
  } else {
    return <End totalPoints={totalPoints}
                repeatGame={repeatGame}/>;
  }
}
export default Question;

