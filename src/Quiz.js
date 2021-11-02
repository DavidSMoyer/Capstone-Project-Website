import { useState } from 'react';
import QuizAnswer from "./QuizAnswer.js";

function Quiz() {
  let [questionIdx, setQuestionIdx] = useState(0);
  let [correct, setCorrect] = useState(0);
  let [answered, setAnswered] = useState(0);
  let [finished, setFinished] = useState(false);
  let [questions, setQuestions] = useState([
    {
      question: "Question 1",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "2"
    },
    {
      question: "Question 2",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "4"
    },
    {
      question: "Question 3",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "3"
    },
    {
      question: "Question 5",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "4"
    },
    {
      question: "Question 5",
      answers: ["true", "false", "", ""],
      correctAnswer: "true"
    },
    {
      question: "Question 6",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "4"
    }
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
      <div id="questions">
        <QuizAnswer answer={questions[questionIdx].answers[0]} answerCall={guess} />
        <QuizAnswer answer={questions[questionIdx].answers[1]} answerCall={guess} />
        <QuizAnswer answer={questions[questionIdx].answers[2]} answerCall={guess} />
        <QuizAnswer answer={questions[questionIdx].answers[3]} answerCall={guess} />
      </div>
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