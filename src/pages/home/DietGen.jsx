import { useState } from "react";
import "./styling/Feature4.css";
import Macros from "../../components/Macros";

function Feature4() {
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    age: "",
    gender: "",
    activity: "",
    goal: "",
    diet: "",
    calories: "",
    protein: "",
    carbs: "",
    fats: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.weight ||
      !formData.height ||
      !formData.age ||
      !formData.gender ||
      !formData.activity ||
      !formData.goal ||
      !formData.diet
    ) {
      alert("Please fill in all required fields!");
      return;
    }

    if (formData !== null) {
      setLoading(true);
    }
  };

  return (
    <div className="diet-form-container">
      <h1>AI Enhanced Diet Planner</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Height (cm)</label>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            placeholder="170"
            required
            min="100"
            max="250"
          />
        </div>

        <div className="form-group">
          <label>Weight (kg)</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="70"
            required
            min="30"
            max="300"
            step="0.1"
          />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            placeholder=" 26"
            min="16"
            max="100"
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="form-group">
          <label>Activity Level</label>
          <select
            name="activity"
            value={formData.activity}
            onChange={handleChange}
            required
          >
            <option value="">Select activity level</option>
            <option name="sedentary" value="1.2">
              Sedentary (little or no exercise)
            </option>
            <option name="light-active" value="1.375">
              Lightly active (light exercise 1-3 days/week)
            </option>
            <option name="moderate-active" value="1.55">
              Moderately active (moderate exercise 3-5 days/week)
            </option>
            <option name="very-active" value="1.725">
              Very active (hard exercise 6-7 days/week)
            </option>
            <option name="extreme-active" value="1.9">
              Extremely active (very hard exercise & physical job)
            </option>
          </select>
        </div>

        <div className="form-group">
          <label>Your Goal</label>
          <select
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="lose">Lose Weight</option>
            <option value="maintain">Maintain Weight</option>
            <option value="gain">Gain Weight</option>
          </select>
        </div>

        <div className="form-group">
          <label>Diet Preference</label>
          <select
            name="diet"
            value={formData.diet}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="non_veg">Non-Vegetarian Diet</option>
            <option value="veg">Vegetarian Diet</option>
            <option value="vegan">Vegan Diet</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          Get My Macros
        </button>
      </form>

      <div>
        {loading ? (
          <>
            <Macros formData={formData} />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Feature4;
