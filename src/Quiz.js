import { useEffect, useState } from 'react';
import QuizAnswer from "./QuizAnswer.js";
import Swal from 'sweetalert2';

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
      correctAnswer: 4,
      incorrectText: "Sorry, that's incorrect. There is more than one answer to this question.",
      correctText: "Correct! These are all prevelant dangers of the night that you should be looking out for."
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
      correctAnswer: 2,
      incorrectText: "Incorrect.",
      correctText: "That's correct! You should dim your headlights when within 200m of oncoming traffic so that you do not impair their sight."
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
      correctAnswer: 2,
      incorrectText: "Incorrect. Turning on your high beams will reflect in the water crystals, and reduce your sight further.",
      correctText: "Correct! Low beams allow you to see the road without reflecting the light off of the water in the air."
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
      correctAnswer: 1,
      incorrectText: "That's incorrect.",
      correctText: "That's correct. After 4pm, most people are heading home, depending on how late it is they may be coming home from bars or just rushing to get home."
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
      correctAnswer: 4,
      incorrectText: "Sorry, that's incorrect.",
      correctText: "Correct! You should never drive while drowsy, or else you could endanger yourself and others by being less alert."
    },
    {
      question: "At what distance must you dim your headlights while following another vehicle?",
      answers: [
        "60m",
        "200m",
        "30m",
        "120m"
      ],
      correctAnswer: 1,
      incorrectText: "Sorry, that's incorrect.",
      correctText: "Correct! If you are within 60m of a vehicle that you are following, you must dim your headlights."
    }
  ]);

  useEffect(() => {
    setQuestions(Shuffle(questions))
  }, [])

  let nextQuestion = (correctAnswer) => {
    if (correctAnswer) setCorrect(correct + 1);
    setAnswered(answered + 1);
    if (questionIdx >= questions.length - 1) {
      setFinished(true);
      return;
    }
    setQuestionIdx(questionIdx + 1);
  }

  let guess = (answer) => {
    if (finished) return;
    let correctAnswer = answer == questions[questionIdx].correctAnswer;
    Swal.fire({
      title: correctAnswer ? "Correct!" : "Incorrect!",
      text: correctAnswer ? questions[questionIdx].correctText : questions[questionIdx].incorrectText,
      icon: correctAnswer ? "success" : "error",
      confirmButtonText: correctAnswer ? "Hooray!" : "Oh no!",
      didClose: () => nextQuestion(correctAnswer)
    });
  }

  let reset = () => {
    setQuestions(Shuffle(questions));
    setAnswered(0);
    setFinished(false);
    setCorrect(0);
    setQuestionIdx(0);
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
          {
            Shuffle([
              <QuizAnswer answer={questions[questionIdx].answers[0]} answerCall={guess} quizId={1} />,
              <QuizAnswer answer={questions[questionIdx].answers[1]} answerCall={guess} quizId={2} />,
              <QuizAnswer answer={questions[questionIdx].answers[2]} answerCall={guess} quizId={3} />,
              <QuizAnswer answer={questions[questionIdx].answers[3]} answerCall={guess} quizId={4} />
            ])
          }
        </div>
        )
        : (
          <div id="quiz-popup">
            <h3>Quiz Complete!</h3>
            <p>You got {correct}/{questions.length}</p>
            <p>
              {
                correct == answered ?
                (
                  "You got it all correct, nice work! You can take the quiz again, or continue looking into other topics!"
                )
                :
                (
                  "There's still area to improve! Read through all the material once more, then take a chance in the quiz!"
                )
              }
            </p>
            <button onClick={reset}>Retry?</button>
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
      let idx = Math.floor(Math.random() * copy.length)
      let temp = copy[idx];
      copy[idx] = copy[j];
      copy[j] = temp;
    }
  }

  return copy;
}

export default Quiz;