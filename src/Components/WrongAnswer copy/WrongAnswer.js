import "./WrongAnswer.scss";

function WrongAnswer({ setShow }) {
  const handleWrongAnswerClick = () => {
    setShow(false);
  };
  return (
    <>
      <div className="modal">
        <div className="modal__container">
          <h1 className="modal__heading">Wrong Answer</h1>
          <h2 className="modal__header" onClick={handleWrongAnswerClick}>
            Try Again ?{" "}
          </h2>
        </div>
      </div>
    </>
  );
}

export default WrongAnswer;
