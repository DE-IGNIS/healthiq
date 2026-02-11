import "./styling/Faq.css";

const faqs = [
  {
    question: "What is HealthIQ?",
    answer:
      "HealthIQ is a smart nutrition platform that helps you understand your diet, track macros, and make informed food choices using data-driven insights.",
  },
  {
    question: "How does HealthIQ calculate calories and macros?",
    answer:
      "We use standard nutritional formulas based on your age, height, weight, activity level, and health goals to give accurate recommendations.",
  },
  {
    question: "Is HealthIQ beginner-friendly?",
    answer:
      "Yes. HealthIQ is designed for everyone — whether you're new to nutrition or already tracking your diet seriously.",
  },
  {
    question: "Can HealthIQ help with weight loss or muscle gain?",
    answer:
      "Absolutely. You can choose your goal and HealthIQ adapts calorie and macro targets accordingly.",
  },
  {
    question: "How secure is my data?",
    answer:
      "Your data is encrypted and never shared. HealthIQ is built with privacy and security as a top priority.",
  },
];

function Faq() {
  return (
    <div className="faq-wrapper">

      <div className="faq-header">
        <h1>Questions, answered.</h1>
        <p>
          Everything you need to know about how <span>HealthIQ</span> works
        </p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;