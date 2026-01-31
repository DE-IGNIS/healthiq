import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  dayTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 14,
    marginBottom: 6,
  },
  mealRow: {
    flexDirection: "row",
    marginBottom: 4,
  },
  mealLabel: {
    width: 80,
    fontSize: 11,
    fontWeight: "bold",
  },
  mealContent: {
    flex: 1,
    fontSize: 11,
  },
  totals: {
    fontSize: 11,
    fontWeight: "bold",
    marginTop: 6,
  },
});

const dietData = {
  gain: {
    non_veg: [
      {
        day: 1,
        meals: {
          breakfast: "3 Egg Bhurji with 2 Whole Wheat Chapatis (light ghee)",
          lunch:
            "150g Chicken Curry with 1.5 cups Cooked Rice and 1 bowl Dal Tadka",
          dinner:
            "100g Grilled Fish (Rohu) with 2 Chapatis and 1 cup Mixed Vegetable Sabzi",
        },
        daily_totals: { calories: 1998, protein: 95.5, carbs: 241, fats: 56 },
      },
      {
        day: 2,
        meals: {
          breakfast: "2 Paneer Stuffed Parathas with 1 cup Curd (Dahi)",
          lunch: "150g Mutton Rogan Josh (lean cuts) with 1.5 cups Jeera Rice",
          dinner:
            "2 Boiled Egg Curries with 2 Chapatis and 1 bowl Yellow Moong Dal",
        },
        daily_totals: { calories: 2010, protein: 97.2, carbs: 238, fats: 54.5 },
      },
      {
        day: 3,
        meals: {
          breakfast: "1 cup Masala Oats with 2 Boiled Eggs",
          lunch: "150g Chicken Biryani (Home-made) with 1 cup Cucumber Raita",
          dinner:
            "100g Fish Fry (shallow) with 2 Chapatis and 1 cup Baingan Bharta",
        },
        daily_totals: { calories: 1995, protein: 94.8, carbs: 242, fats: 57 },
      },
      {
        day: 4,
        meals: {
          breakfast:
            "3 Egg Omelette (with onions/tomatoes) and 2 slices Whole Wheat Bread",
          lunch: "1 cup Rajma Masala with 1.5 cups Rice and 100g Chicken Kebab",
          dinner:
            "150g Lemon Chicken with 2 Chapatis and 1 cup Stir-fried Bhindi",
        },
        daily_totals: { calories: 2005, protein: 96.5, carbs: 235, fats: 56.2 },
      },
      {
        day: 5,
        meals: {
          breakfast: "1 bowl Poha with peanuts and 2 Egg Whites",
          lunch:
            "150g Fish Curry (Bengal Style) with 1.5 cups Rice and 1 bowl Chana Dal",
          dinner: "100g Chicken Keema with 3 Chapatis and a side Green Salad",
        },
        daily_totals: { calories: 1992, protein: 95.1, carbs: 240, fats: 54.8 },
      },
      {
        day: 6,
        meals: {
          breakfast: "2 Egg Parathas with 1 glass Butter Milk (Chaas)",
          lunch: "150g Butter Chicken (low cream) with 2 Butter Rotis",
          dinner: "1 cup Egg Pulao with 1 bowl Mixed Veg Curry and 1 cup Curd",
        },
        daily_totals: { calories: 2015, protein: 98, carbs: 236, fats: 58 },
      },
      {
        day: 7,
        meals: {
          breakfast: "1 cup Upma with vegetables and 2 Boiled Eggs",
          lunch:
            "150g Chicken Do Pyaza with 1.5 cups Rice and 1 bowl Masoor Dal",
          dinner:
            "100g Paneer & Egg Bhurji Mix with 2 Chapatis and 1 cup Lauki Sabzi",
        },
        daily_totals: { calories: 2002, protein: 96.3, carbs: 239, fats: 55.4 },
      },
    ],
    veg: [
      {
        day: 1,
        meals: {
          breakfast: "Paneer Bhurji (200g paneer) with 2 Multigrain Rotis",
          lunch:
            "Soya Chunk Curry (60g chunks) with 1 cup Brown Rice and 1 cup Thick Moong Dal",
          dinner:
            "Chickpea (Chole) Salad (1.5 cups) with 100g Hung Curd and 2 Jowar Rotis",
        },
        daily_totals: { calories: 2010, protein: 138, carbs: 235, fats: 58 },
      },
      {
        day: 2,
        meals: {
          breakfast:
            "Moong Dal Chilla (3 large crepes) stuffed with 100g Paneer and 1 cup Greek-style Dahi",
          lunch:
            "Rajma Masala (1.5 cups) with 1 cup Quinoa and Sauteed Seasonal Vegetables",
          dinner: "Matar Paneer (150g paneer) with 3 Bajra Rotis",
        },
        daily_totals: { calories: 1995, protein: 134, carbs: 242, fats: 55 },
      },
      {
        day: 3,
        meals: {
          breakfast:
            "Sprouted Moong Salad (1.5 cups) with mixed seeds (30g) and 1 cup Thick Lassi (made with 200g curd)",
          lunch:
            "Black Masoor Dal (1.5 cups) with 2 Ragi Rotis and 100g Grilled Tofu/Paneer",
          dinner:
            "Soya Keema Matar (70g soya granules) with 2 Whole Wheat Rotis and 1 cup Hung Curd",
        },
        daily_totals: { calories: 2005, protein: 137, carbs: 238, fats: 56 },
      },
      {
        day: 4,
        meals: {
          breakfast:
            "Paneer Paratha (2 parathas with 150g paneer filling) with 1 cup Plain Greek Yogurt",
          lunch:
            "Chana Dal with Lauki (1.5 cups) with 1 cup Brown Rice and 50g Soya Chunks Stir-fry",
          dinner:
            "Mixed Vegetable Kadai with 100g Paneer cubes and 3 Jowar Rotis",
        },
        daily_totals: { calories: 2020, protein: 135, carbs: 241, fats: 57 },
      },
      {
        day: 5,
        meals: {
          breakfast:
            "Besan Chilla (2 crepes) with 1 cup Sprouts and 100g Paneer cubes",
          lunch:
            "Toor Dal Fry (1.5 cups) with 1 cup Quinoa and 1 cup Thick Dahi",
          dinner:
            "Soya Chunk and Pea Pulao (60g soya) with 1 cup Hung Curd Raita and 15g Almonds",
        },
        daily_totals: { calories: 1985, protein: 136, carbs: 236, fats: 54 },
      },
      {
        day: 6,
        meals: {
          breakfast:
            "Oats Upma with 50g Soya Chunks and 1 cup Greek-style Dahi",
          lunch:
            "Kadhi Pakora (using 1 cup curd and besan) with 1 cup Brown Rice and 100g Paneer Tikka",
          dinner: "Lobia (Black-eyed peas) Curry (1.5 cups) with 3 Ragi Rotis",
        },
        daily_totals: { calories: 2000, protein: 138, carbs: 240, fats: 55 },
      },
      {
        day: 7,
        meals: {
          breakfast:
            "Paneer and Mixed Seed Sandwich (150g paneer) on Whole Grain Bread (3 slices)",
          lunch:
            "Urad Dal (1.5 cups) with 2 Bajra Rotis and 1 cup Seasonal Veg Sabzi",
          dinner:
            "Chickpea Curry (1.5 cups) with 1 cup Quinoa and 100g Hung Curd",
        },
        daily_totals: { calories: 2015, protein: 134, carbs: 243, fats: 57 },
      },
    ],
  },
  lose: {
    vegan: [
      {
        day: 1,
        meals: {
          breakfast: "Moong Dal Cheela (3 pieces) with Mint Chutney",
          lunch:
            "Soya Chunk Curry (1.5 cups) with 2 Multigrain Rotis and Cucumber Salad",
          dinner: "Mixed Vegetable Dal (1.5 cups) with 1/2 cup Brown Rice",
          snacks: "Roasted Chana (1/2 cup) and 1 medium Apple",
        },
        daily_totals: { calories: 2002, protein: 97, carbs: 241, fats: 56 },
      },
      {
        day: 2,
        meals: {
          breakfast:
            "Tofu Bhurji (scrambled tofu with veggies, 150g) with 2 slices Whole Wheat Toast",
          lunch:
            "Rajma Masala (1.5 cups) with 1 cup Quinoa and Kachumber Salad",
          dinner:
            "Lauki (Bottle Gourd) Sabzi with 1 cup Yellow Moong Dal and 1 Roti",
          snacks: "Walnuts (5-6 halves) and 1 cup Soy Buttermilk",
        },
        daily_totals: { calories: 1998, protein: 95, carbs: 238, fats: 55 },
      },
      {
        day: 3,
        meals: {
          breakfast:
            "Oats Upma with plenty of green peas and peanuts (1.5 cups)",
          lunch:
            "Chana Masala (1.5 cups) with 2 Bajra (Millet) Rotis and Steamed Broccoli",
          dinner:
            "Palak Tofu (Tofu in Spinach Gravy, 200g) with 1/2 cup Brown Rice",
          snacks: "1 medium Banana and 1 tbsp Pumpkin Seeds",
        },
        daily_totals: { calories: 2005, protein: 98, carbs: 242, fats: 54 },
      },
      {
        day: 4,
        meals: {
          breakfast:
            "Sprouted Moong Salad with lemon and chaat masala (2 cups)",
          lunch: "Soya Matar (Soy chunks & peas) Keema with 2 Multigrain Rotis",
          dinner: "Black Urad Dal (1.5 cups) with Baingan Bharta and 1 Roti",
          snacks: "1 Pear and a handful of Roasted Makhana (Foxnuts)",
        },
        daily_totals: { calories: 2001, protein: 96, carbs: 235, fats: 57 },
      },
      {
        day: 5,
        meals: {
          breakfast:
            "Besan (Gram Flour) Chilla with spinach stuffing (3 pieces)",
          lunch: "Tofu Tikka Masala (200g) with 1 cup Jeera Brown Rice",
          dinner: "Masoor Dal (Red Lentil) Tadka with 1 Jowar Bhakri and salad",
          snacks: "1 cup Soy Yogurt (Unsweetened) with 1 tsp Flaxseeds",
        },
        daily_totals: { calories: 1999, protein: 94, carbs: 240, fats: 55 },
      },
      {
        day: 6,
        meals: {
          breakfast:
            "Ragi (Finger Millet) Idli (4 pieces) with Vegetable Sambar",
          lunch:
            "Lobia (Black-eyed peas) Curry (1.5 cups) with 2 Rotis and Cabbage Sabzi",
          dinner:
            "Vegan Khichdi (Moong dal and Brown Rice) with a side of Roasted Papad",
          snacks: "1 Orange and 10-12 soaked Almonds",
        },
        daily_totals: { calories: 2003, protein: 97, carbs: 239, fats: 56 },
      },
      {
        day: 7,
        meals: {
          breakfast:
            "Peanut Butter & Banana sandwich on 2 slices Whole Wheat Bread",
          lunch:
            "Mixed Bean Salad (Chickpeas, kidney beans, black beans) with lemon dressing",
          dinner: "Tofu and Vegetable Stir-fry with 1 cup Quinoa",
          snacks: "Roasted Chana (1/2 cup) and 1 glass of Coconut Water",
        },
        daily_totals: { calories: 2000, protein: 95, carbs: 243, fats: 55 },
      },
    ],
    veg: [
      {
        day: 1,
        meals: {
          breakfast:
            "Moong Dal Chilla with Paneer Stuffing (2 large) + 1 cup Greek Yogurt",
          lunch: "Soya Chunk Matar Pulav (1.5 cups) + Mixed Veg Raita (1 cup)",
          dinner: "2 Multigrain Rotis + Paneer Bhurji (150g) + Green Salad",
          snacks: "Roasted Makhana (1 bowl) + 1 Apple",
        },
        daily_totals: { calories: 2002, protein: 97, carbs: 240, fats: 56 },
      },
      {
        day: 2,
        meals: {
          breakfast:
            "Vegetable Oats Upma with Peanuts (1.5 cups) + 2 Boiled Eggs (or 100g Tofu for strict veg)",
          lunch: "Rajma Masala (1 cup) + Brown Rice (1 cup) + Cucumber Salad",
          dinner: "Palak Paneer (150g) + 2 Bajra Rotis",
          snacks: "Greek Yogurt with Chia Seeds (1 cup) + 5 Almonds",
        },
        daily_totals: { calories: 1998, protein: 95, carbs: 238, fats: 57 },
      },
      {
        day: 3,
        meals: {
          breakfast: "Besan Chilla with Grated Paneer (2) + Mint Chutney",
          lunch:
            "Chickpea (Chole) Salad with Veggies (2 cups) + 1 Multigrain Roti",
          dinner:
            "Tofu & Mixed Veg Stir Fry (200g) + 1 cup Dal Tadka + 1 cup Brown Rice",
          snacks: "Sprouted Moong Chaat (1 cup) + 1 Orange",
        },
        daily_totals: { calories: 2005, protein: 98, carbs: 235, fats: 54 },
      },
      {
        day: 4,
        meals: {
          breakfast: "Paneer Paratha (2 small, no oil/ghee) + 1 cup Curd",
          lunch:
            "Lobiya (Black-eyed Peas) Curry (1 cup) + 2 Jowar Rotis + Salad",
          dinner:
            "Soya Keema Matar (1.5 cups) + 1 Multigrain Roti + Buttermilk",
          snacks:
            "1 scoop Whey Protein in Water (or 1 cup Roasted Chana) + 1 Banana",
        },
        daily_totals: { calories: 2001, protein: 96, carbs: 242, fats: 55 },
      },
      {
        day: 5,
        meals: {
          breakfast: "Sprouted Moong Dal Poha (1.5 cups) + 1 cup Greek Yogurt",
          lunch: "Paneer Tikka (150g) + Mint Chutney + 1 cup Quinoa or Millets",
          dinner: "Mixed Dal (1.5 cups) + Baingan Bharta + 2 Wheat Rotis",
          snacks: "Walnuts (4 halves) + 1 Pear + Buttermilk (1 glass)",
        },
        daily_totals: { calories: 1999, protein: 94, carbs: 240, fats: 56 },
      },
      {
        day: 6,
        meals: {
          breakfast:
            "Dalia (Broken Wheat) with Veggies (1.5 cups) + 1 cup Soy Milk",
          lunch:
            "Masoor Dal (1 cup) + 1 cup Sautéed Paneer & Bell Peppers + 1 cup Brown Rice",
          dinner:
            "Vegetable Khichdi with Soya Chunks (1.5 cups) + Curd (1 cup)",
          snacks: "Peanut Salad (small bowl) + 1 Guava",
        },
        daily_totals: { calories: 2003, protein: 97, carbs: 237, fats: 58 },
      },
      {
        day: 7,
        meals: {
          breakfast: "Paneer Bhurji (100g) + 2 Slices Whole Wheat Bread",
          lunch: "Black Chana Curry (1 cup) + 2 Multigrain Rotis + Salad",
          dinner:
            "Kadai Tofu with Veggies (200g) + 1 cup Dal + 1/2 cup Brown Rice",
          snacks: "Greek Yogurt with Berries (1 cup) + 10 Pistachios",
        },
        daily_totals: { calories: 2000, protein: 96, carbs: 240, fats: 54 },
      },
    ],
  },
  maintain: {
    vegan: [
      {
        day: 1,
        meals: {
          breakfast: "Moong Dal Cheela (3 pieces) with Mint Chutney",
          lunch:
            "Soya Chunk Curry (1.5 cups) with 2 Multigrain Rotis and Cucumber Salad",
          dinner: "Mixed Vegetable Dal (1.5 cups) with 1/2 cup Brown Rice",
          snacks: "Roasted Chana (1/2 cup) and 1 medium Apple",
        },
        daily_totals: { calories: 2002, protein: 97, carbs: 241, fats: 56 },
      },
      {
        day: 2,
        meals: {
          breakfast:
            "Tofu Bhurji (scrambled tofu with veggies, 150g) with 2 slices Whole Wheat Toast",
          lunch:
            "Rajma Masala (1.5 cups) with 1 cup Quinoa and Kachumber Salad",
          dinner:
            "Lauki (Bottle Gourd) Sabzi with 1 cup Yellow Moong Dal and 1 Roti",
          snacks: "Walnuts (5-6 halves) and 1 cup Soy Buttermilk",
        },
        daily_totals: { calories: 1998, protein: 95, carbs: 238, fats: 55 },
      },
      {
        day: 3,
        meals: {
          breakfast:
            "Oats Upma with plenty of green peas and peanuts (1.5 cups)",
          lunch:
            "Chana Masala (1.5 cups) with 2 Bajra (Millet) Rotis and Steamed Broccoli",
          dinner:
            "Palak Tofu (Tofu in Spinach Gravy, 200g) with 1/2 cup Brown Rice",
          snacks: "1 medium Banana and 1 tbsp Pumpkin Seeds",
        },
        daily_totals: { calories: 2005, protein: 98, carbs: 242, fats: 54 },
      },
      {
        day: 4,
        meals: {
          breakfast:
            "Sprouted Moong Salad with lemon and chaat masala (2 cups)",
          lunch: "Soya Matar (Soy chunks & peas) Keema with 2 Multigrain Rotis",
          dinner: "Black Urad Dal (1.5 cups) with Baingan Bharta and 1 Roti",
          snacks: "1 Pear and a handful of Roasted Makhana (Foxnuts)",
        },
        daily_totals: { calories: 2001, protein: 96, carbs: 235, fats: 57 },
      },
      {
        day: 5,
        meals: {
          breakfast:
            "Besan (Gram Flour) Chilla with spinach stuffing (3 pieces)",
          lunch: "Tofu Tikka Masala (200g) with 1 cup Jeera Brown Rice",
          dinner: "Masoor Dal (Red Lentil) Tadka with 1 Jowar Bhakri and salad",
          snacks: "1 cup Soy Yogurt (Unsweetened) with 1 tsp Flaxseeds",
        },
        daily_totals: { calories: 1999, protein: 94, carbs: 240, fats: 55 },
      },
      {
        day: 6,
        meals: {
          breakfast:
            "Ragi (Finger Millet) Idli (4 pieces) with Vegetable Sambar",
          lunch:
            "Lobia (Black-eyed peas) Curry (1.5 cups) with 2 Rotis and Cabbage Sabzi",
          dinner:
            "Vegan Khichdi (Moong dal and Brown Rice) with a side of Roasted Papad",
          snacks: "1 Orange and 10-12 soaked Almonds",
        },
        daily_totals: { calories: 2003, protein: 97, carbs: 239, fats: 56 },
      },
      {
        day: 7,
        meals: {
          breakfast:
            "Peanut Butter & Banana sandwich on 2 slices Whole Wheat Bread",
          lunch:
            "Mixed Bean Salad (Chickpeas, kidney beans, black beans) with lemon dressing",
          dinner: "Tofu and Vegetable Stir-fry with 1 cup Quinoa",
          snacks: "Roasted Chana (1/2 cup) and 1 glass of Coconut Water",
        },
        daily_totals: { calories: 2000, protein: 95, carbs: 243, fats: 55 },
      },
    ],
    veg: [
      {
        day: 1,
        meals: {
          breakfast:
            "Moong Dal Chilla with Paneer Stuffing (2 large) + 1 cup Greek Yogurt",
          lunch: "Soya Chunk Matar Pulav (1.5 cups) + Mixed Veg Raita (1 cup)",
          dinner: "2 Multigrain Rotis + Paneer Bhurji (150g) + Green Salad",
          snacks: "Roasted Makhana (1 bowl) + 1 Apple",
        },
        daily_totals: { calories: 2002, protein: 97, carbs: 240, fats: 56 },
      },
      {
        day: 2,
        meals: {
          breakfast:
            "Vegetable Oats Upma with Peanuts (1.5 cups) + 2 Boiled Eggs (or 100g Tofu for strict veg)",
          lunch: "Rajma Masala (1 cup) + Brown Rice (1 cup) + Cucumber Salad",
          dinner: "Palak Paneer (150g) + 2 Bajra Rotis",
          snacks: "Greek Yogurt with Chia Seeds (1 cup) + 5 Almonds",
        },
        daily_totals: { calories: 1998, protein: 95, carbs: 238, fats: 57 },
      },
      {
        day: 3,
        meals: {
          breakfast: "Besan Chilla with Grated Paneer (2) + Mint Chutney",
          lunch:
            "Chickpea (Chole) Salad with Veggies (2 cups) + 1 Multigrain Roti",
          dinner:
            "Tofu & Mixed Veg Stir Fry (200g) + 1 cup Dal Tadka + 1 cup Brown Rice",
          snacks: "Sprouted Moong Chaat (1 cup) + 1 Orange",
        },
        daily_totals: { calories: 2005, protein: 98, carbs: 235, fats: 54 },
      },
      {
        day: 4,
        meals: {
          breakfast: "Paneer Paratha (2 small, no oil/ghee) + 1 cup Curd",
          lunch:
            "Lobiya (Black-eyed Peas) Curry (1 cup) + 2 Jowar Rotis + Salad",
          dinner:
            "Soya Keema Matar (1.5 cups) + 1 Multigrain Roti + Buttermilk",
          snacks:
            "1 scoop Whey Protein in Water (or 1 cup Roasted Chana) + 1 Banana",
        },
        daily_totals: { calories: 2001, protein: 96, carbs: 242, fats: 55 },
      },
      {
        day: 5,
        meals: {
          breakfast: "Sprouted Moong Dal Poha (1.5 cups) + 1 cup Greek Yogurt",
          lunch: "Paneer Tikka (150g) + Mint Chutney + 1 cup Quinoa or Millets",
          dinner: "Mixed Dal (1.5 cups) + Baingan Bharta + 2 Wheat Rotis",
          snacks: "Walnuts (4 halves) + 1 Pear + Buttermilk (1 glass)",
        },
        daily_totals: { calories: 1999, protein: 94, carbs: 240, fats: 56 },
      },
      {
        day: 6,
        meals: {
          breakfast:
            "Dalia (Broken Wheat) with Veggies (1.5 cups) + 1 cup Soy Milk",
          lunch:
            "Masoor Dal (1 cup) + 1 cup Sautéed Paneer & Bell Peppers + 1 cup Brown Rice",
          dinner:
            "Vegetable Khichdi with Soya Chunks (1.5 cups) + Curd (1 cup)",
          snacks: "Peanut Salad (small bowl) + 1 Guava",
        },
        daily_totals: { calories: 2003, protein: 97, carbs: 237, fats: 58 },
      },
      {
        day: 7,
        meals: {
          breakfast: "Paneer Bhurji (100g) + 2 Slices Whole Wheat Bread",
          lunch: "Black Chana Curry (1 cup) + 2 Multigrain Rotis + Salad",
          dinner:
            "Kadai Tofu with Veggies (200g) + 1 cup Dal + 1/2 cup Brown Rice",
          snacks: "Greek Yogurt with Berries (1 cup) + 10 Pistachios",
        },
        daily_totals: { calories: 2000, protein: 96, carbs: 240, fats: 54 },
      },
    ],
  },
};


function DietPDF({ goal = "gain", dietType = "veg" }) {
  const schedule = dietData[goal]?.[dietType] || [];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>
          7-Day {goal.toUpperCase()} Diet Plan ({dietType.replace("_", " ")})
        </Text>

        {schedule.map((dayPlan) => (
          <View key={dayPlan.day}>
            <Text style={styles.dayTitle}>Day {dayPlan.day}</Text>

            {Object.entries(dayPlan.meals).map(([meal, value]) => (
              <View style={styles.mealRow} key={meal}>
                <Text style={styles.mealLabel}>
                  {meal.charAt(0).toUpperCase() + meal.slice(1)}:
                </Text>
                <Text style={styles.mealContent}>{value}</Text>
              </View>
            ))}

            <Text style={styles.totals}>
              Calories: {dayPlan.daily_totals.calories} kcal | Protein:{" "}
              {dayPlan.daily_totals.protein} g | Carbs:{" "}
              {dayPlan.daily_totals.carbs} g | Fats: {dayPlan.daily_totals.fats}{" "}
              g
            </Text>
          </View>
        ))}
      </Page>
    </Document>
  );
}

export default DietPDF;
