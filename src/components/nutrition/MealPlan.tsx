import React from 'react';
import { Clock } from 'lucide-react';
import { CuisineType, FitnessGoal } from '../../types';
import { getMealPlan } from '../../utils/mealPlans';

type MealPlanProps = {
  cuisinePreference: CuisineType;
  fitnessGoal: FitnessGoal;
  dailyCalories: number;
};

export default function MealPlan({ cuisinePreference, fitnessGoal, dailyCalories }: MealPlanProps) {
  const meals = getMealPlan(cuisinePreference, fitnessGoal, dailyCalories);

  return (
    <div className="bg-green-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold text-green-900 mb-4">Daily Meal Plan</h3>
      <div className="grid gap-4">
        {meals.map((meal) => (
          <div key={meal.time} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-green-600" />
              <h4 className="font-medium text-gray-900">{meal.time}</h4>
            </div>
            <p className="text-gray-900 font-medium mb-1">{meal.name}</p>
            <p className="text-sm text-gray-600 mb-2">{meal.description}</p>
            <p className="text-sm text-green-600">
              Calories: {meal.calories} | Protein: {meal.protein}g
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}