import React from 'react';
import { Dumbbell, Target, Scale } from 'lucide-react';
import { FitnessGoal, WorkoutIntensity } from '../../types';

type GoalSelectionProps = {
  fitnessGoal: FitnessGoal;
  workoutIntensity: WorkoutIntensity;
  workoutFrequency: number;
  onChange: (field: string, value: string | number) => void;
};

export default function GoalSelection({
  fitnessGoal,
  workoutIntensity,
  workoutFrequency,
  onChange,
}: GoalSelectionProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <Target className="w-4 h-4" />
          Fitness Goal
        </label>
        <select
          value={fitnessGoal}
          onChange={(e) => onChange('fitnessGoal', e.target.value)}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="muscle-gain">Build Muscle</option>
          <option value="fat-loss">Lose Fat</option>
          <option value="maintenance">Maintain Current Physique</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <Dumbbell className="w-4 h-4" />
          Workout Experience
        </label>
        <select
          value={workoutIntensity}
          onChange={(e) => onChange('workoutIntensity', e.target.value)}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="beginner">Beginner (0-1 year)</option>
          <option value="intermediate">Intermediate (1-3 years)</option>
          <option value="advanced">Advanced (3+ years)</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <Scale className="w-4 h-4" />
          Workouts per Week
        </label>
        <select
          value={workoutFrequency}
          onChange={(e) => onChange('workoutFrequency', Number(e.target.value))}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          {[2, 3, 4, 5, 6].map((num) => (
            <option key={num} value={num}>
              {num} times per week
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}