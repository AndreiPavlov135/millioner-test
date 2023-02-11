import { Link } from "react-router-dom";
import cl from "../styles/start.module.scss";

interface IContent {
  content: string;
  link: string;
}

function HexagonButton(props: IContent) {
  return (
    <div className={cl.wrapper}>
      <div className={cl.horizontLine}></div>
      <div className={cl.questionBox}>
        <Link to={props.link}>
          <div className={cl.questionContent}>
            <h2>{props.content}</h2>
          </div>
        </Link>
      </div>
      <div className={cl.horizontLine}></div>
    </div>
  );
}

export default HexagonButton;

