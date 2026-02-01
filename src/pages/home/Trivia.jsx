import { useState, useEffect } from "react";
import "./styling/Trivia.css";

const allQuestions = [
  {
    q: "Which vitamin boosts immunity?",
    options: ["A", "B12", "C", "K"],
    ans: 2,
  },
  {
    q: "Which organ pumps blood?",
    options: ["Brain", "Heart", "Lungs", "Kidney"],
    ans: 1,
  },
  {
    q: "Asthma affects which organ?",
    options: ["Heart", "Brain", "Lungs", "Kidney"],
    ans: 2,
  },
  {
    q: "Ideal sleep for adults?",
    options: ["4–5", "6–8", "9–10", "10+"],
    ans: 1,
  },
  {
    q: "High blood sugar causes?",
    options: ["TB", "Diabetes", "Cancer", "Asthma"],
    ans: 1,
  },
  {
    q: "Iron-rich food?",
    options: ["Milk", "Spinach", "Rice", "Apple"],
    ans: 1,
  },
  {
    q: "Smoking mostly affects?",
    options: ["Brain", "Lungs", "Heart", "Stomach"],
    ans: 1,
  },
  { q: "Vitamin for strong bones?", options: ["A", "C", "D", "B6"], ans: 2 },
  {
    q: "Dehydration symptom?",
    options: ["Chest pain", "Dry mouth", "Fever", "Cough"],
    ans: 1,
  },
  {
    q: "Mosquito-borne disease?",
    options: ["TB", "Malaria", "Flu", "Asthma"],
    ans: 1,
  },

  {
    q: "Which nutrient builds muscles?",
    options: ["Fat", "Protein", "Sugar", "Salt"],
    ans: 1,
  },
  {
    q: "Which disease affects lungs?",
    options: ["Diabetes", "Asthma", "Arthritis", "Anemia"],
    ans: 1,
  },
  {
    q: "Hand washing prevents?",
    options: ["Infections", "Stress", "Obesity", "Cancer"],
    ans: 0,
  },
  {
    q: "BMI measures?",
    options: ["Blood pressure", "Body fat", "Sugar", "Heart rate"],
    ans: 1,
  },
  { q: "Which vitamin helps vision?", options: ["A", "B", "C", "D"], ans: 0 },
  {
    q: "Which organ removes toxins?",
    options: ["Heart", "Liver", "Lungs", "Brain"],
    ans: 1,
  },
  {
    q: "Junk food causes?",
    options: ["Good health", "Obesity", "Strong bones", "Immunity"],
    ans: 1,
  },
  {
    q: "Which mineral strengthens teeth?",
    options: ["Iron", "Calcium", "Zinc", "Potassium"],
    ans: 1,
  },
  {
    q: "What spreads dengue?",
    options: ["Air", "Water", "Mosquito", "Food"],
    ans: 2,
  },
  {
    q: "Daily water intake?",
    options: ["1 L", "2–3 L", "5 L", "Depends"],
    ans: 1,
  },

  {
    q: "Which habit improves mental health?",
    options: ["Exercise", "Stress", "No sleep", "Smoking"],
    ans: 0,
  },
  {
    q: "Which organ controls body?",
    options: ["Heart", "Brain", "Lungs", "Kidney"],
    ans: 1,
  },
  {
    q: "Deficiency of iron causes?",
    options: ["Anemia", "Asthma", "Cancer", "Diabetes"],
    ans: 0,
  },
  {
    q: "Fast food increases?",
    options: ["Energy", "Cholesterol", "Immunity", "Focus"],
    ans: 1,
  },
  {
    q: "Yoga helps in?",
    options: ["Stress", "Pain", "Flexibility", "All"],
    ans: 3,
  },
  {
    q: "Which vitamin helps wound healing?",
    options: ["C", "A", "D", "K"],
    ans: 0,
  },
  {
    q: "Which disease affects liver?",
    options: ["Asthma", "Hepatitis", "Diabetes", "TB"],
    ans: 1,
  },
  {
    q: "Too much sugar leads to?",
    options: ["Fitness", "Diabetes", "Strength", "Sleep"],
    ans: 1,
  },
  {
    q: "Which organ filters blood?",
    options: ["Heart", "Lungs", "Kidney", "Brain"],
    ans: 2,
  },
  {
    q: "Exercise daily improves?",
    options: ["Health", "Stress", "Weight gain", "Weakness"],
    ans: 0,
  },

  {
    q: "Which vitamin helps blood clotting?",
    options: ["A", "B", "C", "K"],
    ans: 3,
  },
  {
    q: "Common cold is caused by?",
    options: ["Bacteria", "Virus", "Fungus", "Parasite"],
    ans: 1,
  },
  {
    q: "Which food gives instant energy?",
    options: ["Fruits", "Protein", "Fat", "Fiber"],
    ans: 0,
  },
  {
    q: "Smoking increases risk of?",
    options: ["Cancer", "Fitness", "Sleep", "Focus"],
    ans: 0,
  },
  {
    q: "Which organ helps breathing?",
    options: ["Heart", "Lungs", "Kidney", "Liver"],
    ans: 1,
  },
  {
    q: "Excess salt causes?",
    options: ["Low BP", "High BP", "Energy", "Sleep"],
    ans: 1,
  },
  {
    q: "Which vitamin reduces fatigue?",
    options: ["B12", "A", "K", "D"],
    ans: 0,
  },
  {
    q: "Obesity mainly caused by?",
    options: ["Exercise", "Balanced diet", "Overeating", "Sleep"],
    ans: 2,
  },
  {
    q: "Which habit improves immunity?",
    options: ["Sleep", "Exercise", "Diet", "All"],
    ans: 3,
  },
  {
    q: "Which organ stores bile?",
    options: ["Liver", "Gallbladder", "Kidney", "Heart"],
    ans: 1,
  },
];

const QUIZ_LIMIT = 10;

const healthTips = [
  "💧 Drink enough water daily",
  "🚶 Walk at least 30 minutes",
  "😴 Sleep 7–8 hours",
  "🥗 Eat more vegetables",
  "🧘 Manage stress regularly",
];

function getRandomQuestions(all, count) {
  const shuffled = [...all].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export default function HealthTrivia() {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [answered, setAnswered] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Initialize quiz on mount
  useEffect(() => {
    const selected = getRandomQuestions(allQuestions, QUIZ_LIMIT);
    setQuizQuestions(selected);
    setUserAnswers(new Array(selected.length).fill(null));
  }, []);

  const handleAnswer = (selectedIndex) => {
    const newAnswers = [...userAnswers];

    if (newAnswers[currentIndex] !== null) {
      if (quizQuestions[currentIndex].ans === newAnswers[currentIndex]) {
        setScore((prev) => prev - 1);
      }
    }

    newAnswers[currentIndex] = selectedIndex;
    setUserAnswers(newAnswers);

    if (quizQuestions[currentIndex].ans === selectedIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (
      currentIndex === quizQuestions.length - 1 &&
      userAnswers[currentIndex] === null
    ) {
      if (
        !window.confirm("You haven't answered this question. Finish anyway?")
      ) {
        return;
      }
    }

    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setAnswered(userAnswers[currentIndex - 1] !== null);
    }
  };

  const handleRetake = () => {
    const newQuestions = getRandomQuestions(allQuestions, QUIZ_LIMIT);
    setQuizQuestions(newQuestions);
    setUserAnswers(new Array(newQuestions.length).fill(null));
    setCurrentIndex(0);
    setScore(0);
    setAnswered(false);
    setShowResult(false);
  };

  const progress =
    quizQuestions.length > 0
      ? ((currentIndex + 1) / quizQuestions.length) * 100
      : 0;
  const currentTip = healthTips[currentIndex % healthTips.length];

  if (showResult) {
    return (
      <div className="result-container">
        <h1>🎉 Quiz Completed!</h1>
        <h2>
          Your Score: {score} / {quizQuestions.length}
        </h2>

        <div className="answer-review">
          {quizQuestions.map((q, i) => {
            const userIdx = userAnswers[i];
            const userAnswer =
              userIdx !== null ? q.options[userIdx] : "Not Answered";
            const correctAnswer = q.options[q.ans];
            const isCorrect = userIdx === q.ans;

            return (
              <div
                key={i}
                className="review-item"
                style={{
                  borderLeft: `6px solid ${isCorrect ? "#27ae60" : "#e74c3c"}`,
                }}
              >
                <strong>
                  Q{i + 1}. {q.q}
                </strong>
                <br />
                <br />
                <div>
                  🧑 Your Answer:{" "}
                  <span style={{ color: isCorrect ? "green" : "red" }}>
                    {userAnswer}
                  </span>
                </div>
                <div>
                  ✅ Correct Answer:{" "}
                  <span style={{ color: "green" }}>{correctAnswer}</span>
                </div>
              </div>
            );
          })}
        </div>

        <button onClick={handleRetake} className="retake-btn">
          🔁 Retake Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header>
        <h2>🩺 Health Trivia</h2>
        <div className="progress-text">
          Question {currentIndex + 1} / {quizQuestions.length}
        </div>
      </header>

      <div className="layout">
        {/* Sidebar / Tips */}
        <aside className="sidebar">
          <h3>💡 Health Tip</h3>
          <p>{currentTip}</p>
          <div className="emoji">😊</div>

          <div className="side-info">
            <p>
              📋 Total Questions: <strong>{quizQuestions.length}</strong>
            </p>
            <p>⏱️ No time limit</p>
            <p>🔁 Retake anytime</p>
          </div>
        </aside>

        {/* Main Quiz Area */}
        <main className="main-content">
          {currentIndex === 0 && (
            <div className="intro-card">
              <h2>👋 Welcome to Health Trivia</h2>
              <p>This quiz will test your basic health awareness.</p>
              <ul>
                <li>✔ {QUIZ_LIMIT} random questions</li>
                <li>✔ One answer per question</li>
                <li>✔ Correct answers shown at the end</li>
              </ul>
              <p className="note">👉 Select an option to continue</p>
            </div>
          )}

          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>

          {quizQuestions.length > 0 && currentIndex < quizQuestions.length && (
            <div className="question-card">
              <h2>
                Q{currentIndex + 1}. {quizQuestions[currentIndex].q}
              </h2>

              <div className="options">
                {quizQuestions[currentIndex].options.map((option, idx) => (
                  <label
                    key={idx}
                    className={`option-label ${
                      userAnswers[currentIndex] === idx ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name={`q${currentIndex}`}
                      value={idx}
                      checked={userAnswers[currentIndex] === idx}
                      onChange={() => handleAnswer(idx)}
                    />
                    {/* {option} */}
                    <span className="option-text">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          <div className="controls">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="nav-btn"
            >
              ⬅ Prev
            </button>
            <button
              onClick={handleNext}
              disabled={!answered && currentIndex == quizQuestions.length - 1}
              className={`nav-btn next ${!answered ? "disabled" : ""}`}
            >
              {currentIndex === quizQuestions.length - 1 ? "Finish" : "Next ➡"}
            </button>
          </div>
        </main>
      </div>

      <footer>
        <p>Stay aware, stay healthy 💚</p>
      </footer>
    </div>
  );
}
