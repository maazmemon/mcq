import React, { useState, useEffect } from "react";
import "./App.css";
const data = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "London", "Rome"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    id: 3,
    question: "In which year did the Titanic sink?",
    options: ["1912", "1905", "1920", "1935"],
    correctAnswer: "1912",
  },
  {
    id: 4,
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Homer"],
    correctAnswer: "William Shakespeare",
  },
  {
    id: 5,
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
    correctAnswer: "Blue Whale",
  },
  {
    id: 6,
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "Vietnam"],
    correctAnswer: "Japan",
  },
  {
    id: 7,
    question: "What is the currency of Brazil?",
    options: ["Peso", "Real", "Rupiah", "Baht"],
    correctAnswer: "Real",
  },
  {
    id: 8,
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Claude Monet",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    id: 9,
    question: "Which element has the chemical symbol 'O'?",
    options: ["Oxygen", "Gold", "Silver", "Iron"],
    correctAnswer: "Oxygen",
  },
  {
    id: 10,
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
];

function App() {
  const [fetchData, setFetchData] = useState(data[0]);
  const [indexNumber, setIndexNumber] = useState(0);
  const [getAnswer, setGetAnswer] = useState("");
  const [checkedOption, setCheckedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    setFetchData(data[indexNumber]);
    setCheckedOption(null);
  }, [indexNumber]);

  const handleNextQuestion = () => {
    if (checkedOption) {
      if (
        checkedOption.toLowerCase() === fetchData.correctAnswer.toLowerCase()
      ) {
        setScore((prevScore) => prevScore + 1);
      }
    } else {
      setGetAnswer("Please select an answer");
    }

    if (indexNumber < data.length - 1) {
      setIndexNumber((prevIndex) => prevIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const Result = () => (
    <div className="text result">
      <h3 className="text score">
        Score: {score}/{data.length}
      </h3>
      <button onClick={restartQuiz}>Restart</button>
    </div>
  );

  const restartQuiz = () => {
    setIndexNumber(0);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <>
      <h1 className="name">By Mohammad Maaz</h1>

      <div className="body">
        {quizCompleted ? (
          <Result />
        ) : (
          <form className="form">
            <h1 className="text">{fetchData && fetchData.question}</h1>

            {fetchData &&
              fetchData.options.map((option, i) => (
                <div key={i} className="input">
                  <input
                    type="radio"
                    name={`capital-${fetchData.id}`}
                    id={`option-${fetchData.id}-${i}`}
                    checked={checkedOption === option}
                    onChange={() => setCheckedOption(option)}
                  />
                  <label htmlFor={`option-${fetchData.id}-${i}`}>
                    {option}
                  </label>
                </div>
              ))}

            <p>{getAnswer}</p>
          </form>
        )}
        {!quizCompleted && (
          <button onClick={handleNextQuestion}>
            {indexNumber < data.length - 1 ? "Next" : "Finish"}
          </button>
        )}
      </div>
    </>
  );
}

export default App;
