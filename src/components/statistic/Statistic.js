import PropTypes from "prop-types";
import { StatisticStyled } from "./StatisticStyled";

const Statistic = ({ good, neutral, negative, total, percent }) => {
  return (
    <StatisticStyled>
      <h1 className="title">Statistic</h1>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <ul>
          <li>{`Good: ${good}`}</li>
          <li>{`Neutral :${neutral}`}</li>
          <li>{`negative: ${negative}`}</li>
          <li>{`Total: ${total}`}</li>
          <li>{`Possitive Feedback: ${percent}%`}</li>
        </ul>
      )}
    </StatisticStyled>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  negative: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};

export default Statistic;
