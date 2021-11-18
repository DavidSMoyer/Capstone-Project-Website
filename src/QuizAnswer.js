function QuizAnswer({ answer, answerCall, quizId }) {

  console.log(answer.substring(5, answer.length));

  return (
    <div className="question-box" onClick={() => answerCall(quizId)} style={{display: (answer == "" ? "none" : "flex")}}>
      {
        answer.substring(0, 5) == "link|"
        ? (<img src={answer.substring(5, answer.length)} />)
        : (<p>{answer}</p>)
      }
    </div>
  )
}

export default QuizAnswer;