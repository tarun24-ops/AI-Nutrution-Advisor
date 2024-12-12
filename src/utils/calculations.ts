import { FitnessGoal, WorkoutIntensity, HealthData } from '../types';

export const calculateBMR = (weight: number, height: number, age: number, isMale: boolean): number => {
  // Mifflin-St Jeor Equation
  const bmr = 10 * weight + 6.25 * height - 5 * age;
  return isMale ? bmr + 5 : bmr - 161;
};

export const getActivityMultiplier = (activityLevel: string): number => {
  const multipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    'very-active': 1.9,
  };
  return multipliers[activityLevel as keyof typeof multipliers] || 1.55;
};

export const calculateMacros = (
  dailyCalories: number,
  fitnessGoal: FitnessGoal,
  workoutIntensity: WorkoutIntensity
) => {
  let proteinMultiplier = 2.0; // g per kg of body weight
  let fatPercentage = 0.25;
  let carbsPercentage = 0;

  switch (fitnessGoal) {
    case 'muscle-gain':
      proteinMultiplier = 2.2;
      fatPercentage = 0.25;
      break;
    case 'fat-loss':
      proteinMultiplier = 2.4;
      fatPercentage = 0.3;
      break;
    case 'maintenance':
      proteinMultiplier = 2.0;
      fatPercentage = 0.25;
      break;
  }

  // Adjust based on workout intensity
  if (workoutIntensity === 'advanced') {
    proteinMultiplier += 0.2;
  }

  const protein = Math.round(proteinMultiplier * 4); // 4 calories per gram of protein
  const fat = Math.round(dailyCalories * fatPercentage / 9); // 9 calories per gram of fat
  const carbs = Math.round((dailyCalories - (protein * 4) - (fat * 9)) / 4); // Remaining calories from carbs

  return { protein, fat, carbs };
};