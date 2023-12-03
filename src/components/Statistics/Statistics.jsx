const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return total === 0 ? (
    <h3>There is no statistics</h3>
  ) : (
    <div>
      <h3>Good: {good}</h3>
      <h3>Neutral: {neutral}</h3>
      <h3>Bad: {bad}</h3>
      <h3>Total: {total}</h3>
      <h3>Positive feedbacks: {positivePercentage}%</h3>
    </div>
  );
};

export default Statistics;
