const FeedbackOptions = ({ onClick }) => {
  return (
    <>
      <h1>Please leave feedback</h1>
      <button type="button" onClick={onClick}>
        Good
      </button>
      <button type="button">Neutral</button>
      <button type="button">Bad</button>
    </>
  );
};

export default FeedbackOptions;
