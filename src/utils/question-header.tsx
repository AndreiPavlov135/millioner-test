import useSound from "use-sound";
import headerStyle from "../styles/question-header.module.scss";
import { musicUrlEnum } from "../types.ts/music-url";
interface IHeaderOptions {
  setVisibleHintBoolean: Function;
  setTimeOn: Function;
  itemHintBoolean: boolean;
  setItemHintBoolean: Function;
  itemFiftyFifty: boolean;
  setItemFiftyFifty:Function;
  setFiftyFiftyStyle:Function;
  setTimer:Function;
  setVisibleHintCall:Function;
  itemHintCall:boolean;
  booleanStyle:object;
  setBooleanStyle:Function;
}
function QuestionHeader(props: IHeaderOptions) {
  const[playFiftyFifty]=useSound(musicUrlEnum.fiftyFifty)
  function booleanHundler() {
    props.setItemHintBoolean(true)
    props.setBooleanStyle({display:'flex'});
    props.setTimeOn(false);
    playFiftyFifty()
  }

  function fiftyFiftyHundler(){
    props.setItemFiftyFifty(true)
    props.setFiftyFiftyStyle({backgroundColor:'white'})  
    props.setTimeOn(false)
    playFiftyFifty()
  }
  function callHundler(){
    props.setVisibleHintCall(true);
    props.setTimeOn(false);


  }
  return (
    <div className={headerStyle.headerBox}>
      <div className={headerStyle.headerHints}>
        <div
          onClick={!props.itemHintBoolean ? booleanHundler : () => {}}
          style={{ backgroundColor: props.itemHintBoolean ? "black" : "" }}
          className={headerStyle.headerItem}
        >
          Boolean
        </div>
        <div
        onClick={!props.itemFiftyFifty ? fiftyFiftyHundler : () => {}}
         style={{ backgroundColor: props.itemFiftyFifty ? "black" : "" }}
        className={headerStyle.headerItem}>
          50:50
        </div>
        <div
        onClick={!props.itemHintCall ? callHundler : () => {}}
        style={{ backgroundColor: props.itemHintCall ? "black" : "" }}
        className={headerStyle.headerItem}>
          Call
        </div>
      </div>
      <div className={headerStyle.headerHints}>
        <div className={headerStyle.headerItem}></div>
        <div className={headerStyle.headerItem}></div>
      </div>
    </div>
  );
}
export default QuestionHeader;
