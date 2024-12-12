export type FitnessGoal = 'muscle-gain' | 'fat-loss' | 'maintenance';

export type WorkoutIntensity = 'beginner' | 'intermediate' | 'advanced';

export type CuisineType = 'indian' | 'mexican' | 'american' | 'mediterranean' | 'asian';

export type HealthData = {
  age: string;
  weight: string;
  height: string;
  activityLevel: string;
  dietaryRestrictions: string[];
  healthConditions: string[];
  fitnessGoal: FitnessGoal;
  workoutIntensity: WorkoutIntensity;
  workoutFrequency: number;
  cuisinePreference: CuisineType;
};