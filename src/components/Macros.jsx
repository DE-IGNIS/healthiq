import { useEffect, useState } from "react";
import "./styling/Macros.css";
import DietPDF from "./DietPDF";
import { PDFDownloadLink } from "@react-pdf/renderer";

function Macros({ formData }) {
  const [promptResponses, setpromptResponses] = useState([]);
  // RMR or BMR
  const [maleRMR, setMaleRMR] = useState(0.0);
  const [femaleRMR, setFemaleRMR] = useState(0.0);

  // TDEE
  const [tdee, setTDEE] = useState(0.0);

  useEffect(() => {
    if (!formData?.gender) return;

    if (formData.gender === "male") {
      let rmr1 = 9.99 * formData.weight;
      let rmr2 = 6.25 * formData.height;
      let rmr3 = 4.92 * formData.age + 5;

      let RMR_MALE = rmr1 + rmr2 - rmr3;
      setMaleRMR(RMR_MALE);

      let final_tdee_male = RMR_MALE * parseFloat(formData.activity);
      setTDEE(final_tdee_male);
    } else {
      let rmr1 = 9.99 * formData.weight;
      let rmr2 = 6.25 * formData.height;
      let rmr3 = 4.92 * formData.age - 161;

      let RMR_FEMALE = rmr1 + rmr2 - rmr3;
      setFemaleRMR(RMR_FEMALE);

      let final_tdee_female = RMR_FEMALE * parseFloat(formData.activity);
      setTDEE(final_tdee_female);
    }
  }, [
    formData.gender,
    formData.weight,
    formData.height,
    formData.age,
    formData.activity,
  ]);

  const protein_g = formData.weight * 0.8;
  const fat_g = (tdee * 0.25) / 9;
  const carb_g = (tdee - protein_g * 4 - fat_g * 9) / 4;

  return (
    <>
      <div className="macros-container">
        <h1>Your Suggested Macros</h1>

        <div className="macro-grid">
          <div className="macro-item">
            <span className="macro-label">Calories</span>
            <span className="macro-value">{tdee.toFixed(2)} kcal</span>
          </div>

          <div className="macro-item">
            <span className="macro-label">Protein</span>
            <span className="macro-value">{protein_g.toFixed(2)} g</span>
          </div>

          <div className="macro-item">
            <span className="macro-label">Carbohydrates</span>
            <span className="macro-value">{carb_g.toFixed(2)} g</span>
          </div>

          <div className="macro-item">
            <span className="macro-label">Fats</span>
            <span className="macro-value">{fat_g.toFixed(2)} g</span>
          </div>
        </div>
      </div>

      <PDFDownloadLink
        document={
          <DietPDF
            goal={formData.goal}
            dietType={formData.diet}
            calories={tdee.toFixed(2)}
            protein={protein_g.toFixed(2)}
            carbs={carb_g.toFixed(2)}
            fats={fat_g.toFixed(2)}
          />
        }
        fileName="diet-plan.pdf"
      >
        {({ loading }) => (
          <button className="download-btn" disabled={loading}>
            {loading ? "Generating pdf..." : "Get Meal Planner (PDF)"}
          </button>
        )}
      </PDFDownloadLink>
    </>
  );
}

export default Macros;
