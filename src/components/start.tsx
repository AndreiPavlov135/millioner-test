import "../styles/start.scss";
import HexagonButton from "../utils/hexagon-button";

function Start() {
  return (
    <div>
      <h1>Start page.</h1>
      <p>
        On this page user enters the game using his login and password or
        registers.
      </p>
      <HexagonButton content="home" link="/home" />
      <HexagonButton content="progress" link="/progress" />
      <HexagonButton content="question" link="/question" />
    </div>
  );
}
export default Start;
