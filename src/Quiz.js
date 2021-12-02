import { useState } from 'react';
import QuizAnswer from "./QuizAnswer.js";

function Quiz() {
  let [questionIdx, setQuestionIdx] = useState(0);
  let [correct, setCorrect] = useState(0);
  let [answered, setAnswered] = useState(0);
  let [finished, setFinished] = useState(false);
  let [questions, setQuestions] = useState([
    {
      question: "Why is it dangerous to drive at night?",
      answers: 
      [
        "Reduced Visibility", 
        "Impaired Drivers",
        "Rushing Drivers",
        "All of the above"
      ],
      correctAnswer: 4
    },
    {
      question: "Within what distance must you dim your headlights against oncoming traffic?",
      answers: 
      [
        "60m", 
        "200m",
        "500m",
        "120m"
      ],
      correctAnswer: 2
    },
    {
      question: "When conditions are snowy or foggy, you must have your high beams on to increase visibility.",
      answers: 
      [
        "True", 
        "False",
        "",
        ""
      ],
      correctAnswer: 2
    },
    {
      question: "More crashes occur between 4pm-8pm than any other time.",
      answers: 
      [
        "True", 
        "False",
        "",
        ""
      ],
      correctAnswer: 1
    },
    {
      question: "What should not NOT do when driving at night?",
      answers: 
      [
        "Dim your dashboard", 
        "Look away from the headlights of other cars",
        "Drive at a reduced speed",
        "Drive even if you're drowsy"
      ],
      correctAnswer: 4
    },
  ]);
  //setQuestions(Shuffle(questions))

  let guess = (answer) => {
    if (finished) return;
    if (answer == questions[questionIdx].correctAnswer) setCorrect(correct + 1);
    setAnswered(answered + 1);
    if (questionIdx >= questions.length - 1) {
      setFinished(true);
      return;
    }
    setQuestionIdx(questionIdx + 1);
  }

  return (
    <div id="quiz-container">
      <div className="bar-outer" id="quiz-progress">
        <div className="bar-inner" style={{width: (((answered / questions.length) * 100) + "%")}}></div>
        <span className="bar-text">{answered}/{questions.length}</span>
      </div>
      <div className="bar-outer" id="quiz-correct">
        <div className="bar-inner" style={{width: (((correct / questions.length) * 100) + "%")}}></div>
        <span className="bar-text">{correct}/{questions.length}</span>
      </div>
      <h3 id="quiz-question">
        Question {questionIdx + 1}
        <br />
        <span>
          {questions[questionIdx].question}
        </span>
      </h3>
      {
        !finished 
        ? (
        <div id="questions">
          <QuizAnswer answer={questions[questionIdx].answers[0]} answerCall={guess} quizId={1} />
          <QuizAnswer answer={questions[questionIdx].answers[1]} answerCall={guess} quizId={2} />
          <QuizAnswer answer={questions[questionIdx].answers[2]} answerCall={guess} quizId={3} />
          <QuizAnswer answer={questions[questionIdx].answers[3]} answerCall={guess} quizId={4} />
        </div>
        )
        : (
          <div id="quiz-popup">
            <h3>Quiz Complete</h3>
            <p>You got {correct}/{questions.length}</p>
          </div>
        )
      }
    </div>
  )
}

function Shuffle(arr) {
  let copy = [...arr];

  for (let i = 0; i < copy.length; i++) {
    for (let j = 0; j < copy.length; j++) {
      let temp = copy[i];
      copy[i] = copy[j];
      copy[j] = temp;
    }
  }

  return arr;
}

export default Quiz;