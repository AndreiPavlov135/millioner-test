import hintStyle from "../styles/hint.module.scss";
import { ICase, IQuestion } from "../types.ts/iquestion";
interface IBooleanOptions {
    visibleHintBoolean: Boolean
    setVisibleHintBoolean: Function
    question: Array<ICase>;
    setTimeOn: Function;
    setTimer: Function;
    setItemHintBoolean: Function
}

function HintBoolean(props: IBooleanOptions) {
    const arrLeters = ['A', 'B', 'C', 'D']
    function returnQuest() {
        props.setVisibleHintBoolean(false)
        props.setTimer(30)
        props.setTimeOn(true)
        props.setItemHintBoolean(true)


    }

    return (
        <div style={{ display: props.visibleHintBoolean ? 'flex' : 'none' }} className={hintStyle.hintWrapper}>
            <div className={hintStyle.hintContainer}> Hint boolean
                {props.question.map((x, i) =>
                    (<div key={i}>{arrLeters[i]}--{x.check ? 'TRUEE' : 'FALSEE'}</div>)
                )}
                <button
                    onClick={returnQuest}
                >Вернуться к вопросу</button>
            </div>

        </div>
    )
}
export default HintBoolean;