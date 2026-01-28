import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#2c3e50",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#34495e",
  },
  dayTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    color: "#2980b9",
  },
  mealRow: {
    flexDirection: "row",
    marginBottom: 6,
  },
  mealLabel: {
    width: 90,
    fontSize: 12,
    fontWeight: "bold",
  },
  mealContent: {
    flex: 1,
    fontSize: 12,
  },
  totals: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 8,
    color: "#27ae60",
  },
  targetBox: {
    backgroundColor: "#f8f9fa",
    padding: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
  },
  targetRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
    fontSize: 13,
  },
  targetLabel: {
    fontWeight: "bold",
    width: 140,
  },
});

function DietPDF() {
  const dietPlan = {
    target_daily_average: {
      calories: "2000 kcal",
      protein: "136g",
      carbohydrates: "239g",
      fats: "56g",
    },
    schedule: [
      {
        day: "Day 1",
        meals: {
          breakfast:
            "Paneer Bhurji (200g paneer) with 2 Multigrain Rotis",
          lunch:
            "Soya Chunk Curry (60g chunks) with 1 cup Brown Rice and 1 cup Thick Moong Dal",
          dinner:
            "Chickpea (Chole) Salad (1.5 cups) with 100g Hung Curd and 2 Jowar Rotis",
        },
        daily_totals:
          "Daily Totals: 2010 kcal, 138g protein, 235g carbs, 58g fats",
      },
      {
        day: "Day 2",
        meals: {
          breakfast:
            "Moong Dal Chilla (3 large crepes) stuffed with 100g Paneer and 1 cup Greek-style Dahi",
          lunch:
            "Rajma Masala (1.5 cups) with 1 cup Quinoa and Sauteed Seasonal Vegetables",
          dinner: "Matar Paneer (150g paneer) with 3 Bajra Rotis",
        },
        daily_totals:
          "Daily Totals: 1995 kcal, 134g protein, 242g carbs, 55g fats",
      },
      {
        day: "Day 3",
        meals: {
          breakfast:
            "Sprouted Moong Salad (1.5 cups) with mixed seeds (30g) and 1 cup Thick Lassi (made with 200g curd)",
          lunch:
            "Black Masoor Dal (1.5 cups) with 2 Ragi Rotis and 100g Grilled Tofu/Paneer",
          dinner:
            "Soya Keema Matar (70g soya granules) with 2 Whole Wheat Rotis and 1 cup Hung Curd",
        },
        daily_totals:
          "Daily Totals: 2005 kcal, 137g protein, 238g carbs, 56g fats",
      },
      {
        day: "Day 4",
        meals: {
          breakfast:
            "Paneer Paratha (2 parathas with 150g paneer filling) with 1 cup Plain Greek Yogurt",
          lunch:
            "Chana Dal with Lauki (1.5 cups) with 1 cup Brown Rice and 50g Soya Chunks Stir-fry",
          dinner:
            "Mixed Vegetable Kadai with 100g Paneer cubes and 3 Jowar Rotis",
        },
        daily_totals:
          "Daily Totals: 2020 kcal, 135g protein, 241g carbs, 57g fats",
      },
      {
        day: "Day 5",
        meals: {
          breakfast:
            "Besan Chilla (2 crepes) with 1 cup Sprouts and 100g Paneer cubes",
          lunch:
            "Toor Dal Fry (1.5 cups) with 1 cup Quinoa and 1 cup Thick Dahi",
          dinner:
            "Soya Chunk and Pea Pulao (60g soya) with 1 cup Hung Curd Raita and 15g Almonds",
        },
        daily_totals:
          "Daily Totals: 1985 kcal, 136g protein, 236g carbs, 54g fats",
      },
      {
        day: "Day 6",
        meals: {
          breakfast:
            "Oats Upma with 50g Soya Chunks and 1 cup Greek-style Dahi",
          lunch:
            "Kadhi Pakora (using 1 cup curd and besan) with 1 cup Brown Rice and 100g Paneer Tikka",
          dinner:
            "Lobia (Black-eyed peas) Curry (1.5 cups) with 3 Ragi Rotis",
        },
        daily_totals:
          "Daily Totals: 2000 kcal, 138g protein, 240g carbs, 55g fats",
      },
      {
        day: "Day 7",
        meals: {
          breakfast:
            "Paneer and Mixed Seed Sandwich (150g paneer) on Whole Grain Bread (3 slices)",
          lunch:
            "Urad Dal (1.5 cups) with 2 Bajra Rotis and 1 cup Seasonal Veg Sabzi",
          dinner:
            "Chickpea Curry (1.5 cups) with 1 cup Quinoa and 100g Hung Curd",
        },
        daily_totals:
          "Daily Totals: 2015 kcal, 134g protein, 243g carbs, 57g fats",
      },
    ],
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>7-Day Lacto-Vegetarian Indian Diet Plan</Text>

        <View style={styles.targetBox}>
          <Text style={{ fontSize: 14, fontWeight: "bold", marginBottom: 8 }}>
            Target Daily Average
          </Text>
          <View style={styles.targetRow}>
            <Text style={styles.targetLabel}>Calories:</Text>
            <Text>{dietPlan.target_daily_average.calories}</Text>
          </View>
          <View style={styles.targetRow}>
            <Text style={styles.targetLabel}>Protein:</Text>
            <Text>{dietPlan.target_daily_average.protein}</Text>
          </View>
          <View style={styles.targetRow}>
            <Text style={styles.targetLabel}>Carbohydrates:</Text>
            <Text>{dietPlan.target_daily_average.carbohydrates}</Text>
          </View>
          <View style={styles.targetRow}>
            <Text style={styles.targetLabel}>Fats:</Text>
            <Text>{dietPlan.target_daily_average.fats}</Text>
          </View>
        </View>

        {dietPlan.schedule.map((dayPlan) => (
          <View key={dayPlan.day}>
            <Text style={styles.dayTitle}>{dayPlan.day}</Text>

            <View style={styles.mealRow}>
              <Text style={styles.mealLabel}>Breakfast:</Text>
              <Text style={styles.mealContent}>{dayPlan.meals.breakfast}</Text>
            </View>

            <View style={styles.mealRow}>
              <Text style={styles.mealLabel}>Lunch:</Text>
              <Text style={styles.mealContent}>{dayPlan.meals.lunch}</Text>
            </View>

            <View style={styles.mealRow}>
              <Text style={styles.mealLabel}>Dinner:</Text>
              <Text style={styles.mealContent}>{dayPlan.meals.dinner}</Text>
            </View>

            <Text style={styles.totals}>{dayPlan.daily_totals}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );
}

export default DietPDF;