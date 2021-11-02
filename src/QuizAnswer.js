function QuizAnswer({ answer, answerCall }) {
  return (
    <div className="question-box" onClick={() => answerCall(answer)} style={{display: (answer == "" ? "none" : "flex")}}>
      <p>{answer}</p>
    </div>
  )
}

export default QuizAnswer;