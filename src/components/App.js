import { useState, useEffect } from "react";
import Controls from "./controls/Controls";
import Statistic from "./statistic/Statistic";

//custom hook
// const useTotal = (numbers) => {
//   const [total, setTotal] = useState(0);
//   setTotal(numbers.reduce((prev, number) => prev + number, 0));
//   return total;
// };

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [negative, setNegative] = useState(0);
  const [total, setTotal] = useState(0);
  const [percent, setPercent] = useState(0);

  const calculation = () => {
    setTotal(good + neutral + negative);
    setPercent(parseInt((good / (good + neutral + negative)) * 100));
  };

  useEffect(() => {
    calculation();
  }, [good, neutral, negative]);

  return (
    <>
      <Controls
        setGood={setGood}
        setNeutral={setNeutral}
        setNegative={setNegative}
        good={good}
        neutral={neutral}
        negative={negative}
      />
      <Statistic
        good={good}
        neutral={neutral}
        negative={negative}
        total={total}
        percent={percent}
      />
    </>
  );
};
export default App;
