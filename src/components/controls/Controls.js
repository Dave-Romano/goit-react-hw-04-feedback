import PropTypes from "prop-types";
import { ControlsStyled } from "./ControlsStyled";

const Controls = ({
  setGood,
  setNeutral,
  setNegative,
  good,
  neutral,
  negative,
}) => {
  return (
    <ControlsStyled>
      <h1 className="title">Please leave feedback</h1>
      <ul className="bt-list">
        <button
          type="button"
          name="good"
          className="bt-good"
          onClick={() => setGood(good + 1)}
        >
          good
        </button>
        <button
          type="button"
          name="neutral"
          className="bt-neutral"
          onClick={() => setNeutral(neutral + 1)}
        >
          neutral
        </button>
        <button
          type="button"
          name="negative"
          className="bt-bad"
          onClick={() => setNegative(negative + 1)}
        >
          bad
        </button>
      </ul>
    </ControlsStyled>
  );
};

Controls.propTypes = {
  setGood: PropTypes.func.isRequired,
  setNeutral: PropTypes.func.isRequired,
  setNegative: PropTypes.func.isRequired,
};

export default Controls;
