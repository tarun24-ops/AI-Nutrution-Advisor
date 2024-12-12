import React from 'react';
import { HealthData } from '../types';
import { calculateBMR, getActivityMultiplier, calculateMacros } from '../utils/calculations';
import MacroBreakdown from './nutrition/MacroBreakdown';
import SupplementAdvice from './nutrition/SupplementAdvice';
import MealPlan from './nutrition/MealPlan';

type NutritionAdviceProps = {
  healthData: HealthData;
};

export default function NutritionAdvice({ healthData }: NutritionAdviceProps) {
  const bmr = calculateBMR(
    parseFloat(healthData.weight),
    parseFloat(healthData.height),
    parseFloat(healthData.age),
    true // Assuming male for now, could be added to form
  );
  
  const activityMultiplier = getActivityMultiplier(healthData.activityLevel);
  const dailyCalories = Math.round(bmr * activityMultiplier);
  
  // Adjust calories based on fitness goal
  const adjustedCalories = healthData.fitnessGoal === 'muscle-gain'
    ? dailyCalories + 500
    : healthData.fitnessGoal === 'fat-loss'
    ? dailyCalories - 500
    : dailyCalories;

  const macros = calculateMacros(
    adjustedCalories,
    healthData.fitnessGoal,
    healthData.workoutIntensity
  );

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Daily Caloric Target</h3>
        <p className="text-blue-800">
          Recommended Daily Calories: <span className="font-bold">{adjustedCalories}</span>
          {healthData.fitnessGoal !== 'maintenance' && (
            <span className="text-sm ml-2">
              ({healthData.fitnessGoal === 'muscle-gain' ? '+' : '-'}500 calories for your goal)
            </span>
          )}
        </p>
      </div>

      <MacroBreakdown macros={macros} dailyCalories={adjustedCalories} />
      
      <MealPlan
        cuisinePreference={healthData.cuisinePreference}
        fitnessGoal={healthData.fitnessGoal}
        dailyCalories={adjustedCalories}
      />
      
      <SupplementAdvice
        fitnessGoal={healthData.fitnessGoal}
        workoutIntensity={healthData.workoutIntensity}
      />
    </div>
  );
}