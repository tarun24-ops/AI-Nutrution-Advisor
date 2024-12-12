import { CuisineType, FitnessGoal } from '../types';

type Meal = {
  time: string;
  name: string;
  description: string;
  calories: number;
  protein: number;
};

const cuisineMeals: Record<CuisineType, Record<'breakfast' | 'lunch' | 'dinner' | 'snack', Meal[]>> = {
  indian: {
    breakfast: [
      {
        time: 'Breakfast (8:00 AM)',
        name: 'Masala Dosa with Sambar',
        description: 'Fermented rice crepe with lentil soup and chutney',
        calories: 450,
        protein: 15,
      },
      {
        time: 'Breakfast (8:00 AM)',
        name: 'Paneer Paratha with Yogurt',
        description: 'Whole wheat flatbread stuffed with cottage cheese',
        calories: 500,
        protein: 22,
      },
    ],
    lunch: [
      {
        time: 'Lunch (1:00 PM)',
        name: 'Dal Makhani with Brown Rice',
        description: 'Creamy lentils with whole grain rice and vegetables',
        calories: 600,
        protein: 25,
      },
    ],
    dinner: [
      {
        time: 'Dinner (7:00 PM)',
        name: 'Chicken Tikka with Roti',
        description: 'Grilled marinated chicken with whole wheat flatbread',
        calories: 550,
        protein: 40,
      },
    ],
    snack: [
      {
        time: 'Snack (4:00 PM)',
        name: 'Chana Chaat',
        description: 'Spiced chickpeas with vegetables',
        calories: 250,
        protein: 12,
      },
    ],
  },
  mexican: {
    breakfast: [
      {
        time: 'Breakfast (8:00 AM)',
        name: 'Huevos Rancheros',
        description: 'Eggs with tortilla, beans, and salsa',
        calories: 450,
        protein: 25,
      },
    ],
    lunch: [
      {
        time: 'Lunch (1:00 PM)',
        name: 'Chicken Fajita Bowl',
        description: 'Grilled chicken with rice, beans, and vegetables',
        calories: 600,
        protein: 35,
      },
    ],
    dinner: [
      {
        time: 'Dinner (7:00 PM)',
        name: 'Fish Tacos',
        description: 'Grilled fish with avocado and cabbage slaw',
        calories: 500,
        protein: 30,
      },
    ],
    snack: [
      {
        time: 'Snack (4:00 PM)',
        name: 'Mexican Trail Mix',
        description: 'Pumpkin seeds, nuts, and dried fruit',
        calories: 250,
        protein: 10,
      },
    ],
  },
  american: {
    breakfast: [
      {
        time: 'Breakfast (8:00 AM)',
        name: 'Protein Pancakes',
        description: 'Oat and protein pancakes with berries',
        calories: 400,
        protein: 25,
      },
    ],
    lunch: [
      {
        time: 'Lunch (1:00 PM)',
        name: 'Turkey Club Sandwich',
        description: 'Whole grain bread with turkey and avocado',
        calories: 550,
        protein: 35,
      },
    ],
    dinner: [
      {
        time: 'Dinner (7:00 PM)',
        name: 'Grilled Chicken Salad',
        description: 'Mixed greens with grilled chicken and vinaigrette',
        calories: 450,
        protein: 40,
      },
    ],
    snack: [
      {
        time: 'Snack (4:00 PM)',
        name: 'Greek Yogurt Parfait',
        description: 'Yogurt with granola and honey',
        calories: 250,
        protein: 15,
      },
    ],
  },
  mediterranean: {
    breakfast: [
      {
        time: 'Breakfast (8:00 AM)',
        name: 'Greek Yogurt Bowl',
        description: 'Yogurt with honey, nuts, and fresh fruits',
        calories: 400,
        protein: 20,
      },
    ],
    lunch: [
      {
        time: 'Lunch (1:00 PM)',
        name: 'Mediterranean Quinoa Bowl',
        description: 'Quinoa with chickpeas, feta, and vegetables',
        calories: 550,
        protein: 25,
      },
    ],
    dinner: [
      {
        time: 'Dinner (7:00 PM)',
        name: 'Grilled Fish with Herbs',
        description: 'Fresh fish with olive oil and roasted vegetables',
        calories: 500,
        protein: 35,
      },
    ],
    snack: [
      {
        time: 'Snack (4:00 PM)',
        name: 'Hummus with Pita',
        description: 'Chickpea dip with whole grain pita',
        calories: 250,
        protein: 10,
      },
    ],
  },
  asian: {
    breakfast: [
      {
        time: 'Breakfast (8:00 AM)',
        name: 'Rice Congee with Chicken',
        description: 'Rice porridge with shredded chicken and ginger',
        calories: 400,
        protein: 25,
      },
    ],
    lunch: [
      {
        time: 'Lunch (1:00 PM)',
        name: 'Teriyaki Chicken Bowl',
        description: 'Grilled chicken with brown rice and vegetables',
        calories: 600,
        protein: 35,
      },
    ],
    dinner: [
      {
        time: 'Dinner (7:00 PM)',
        name: 'Tofu Stir-Fry',
        description: 'Tofu with mixed vegetables and brown rice',
        calories: 450,
        protein: 25,
      },
    ],
    snack: [
      {
        time: 'Snack (4:00 PM)',
        name: 'Edamame',
        description: 'Steamed soybeans with sea salt',
        calories: 200,
        protein: 15,
      },
    ],
  },
};

export const getMealPlan = (
  cuisineType: CuisineType,
  fitnessGoal: FitnessGoal,
  dailyCalories: number
): Meal[] => {
  const cuisine = cuisineMeals[cuisineType];
  const meals = [
    cuisine.breakfast[0],
    cuisine.lunch[0],
    cuisine.snack[0],
    cuisine.dinner[0],
  ];

  // Adjust portions based on calorie goals
  const totalBaseCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);
  const calorieAdjustmentFactor = dailyCalories / totalBaseCalories;

  return meals.map(meal => ({
    ...meal,
    calories: Math.round(meal.calories * calorieAdjustmentFactor),
    protein: Math.round(meal.protein * (fitnessGoal === 'muscle-gain' ? 1.2 : 1)),
  }));
};