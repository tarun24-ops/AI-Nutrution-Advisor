import React from 'react';
import { Pill } from 'lucide-react';
import { FitnessGoal, WorkoutIntensity } from '../../types';

type SupplementAdviceProps = {
  fitnessGoal: FitnessGoal;
  workoutIntensity: WorkoutIntensity;
};

export default function SupplementAdvice({ fitnessGoal, workoutIntensity }: SupplementAdviceProps) {
  const getSupplements = () => {
    const basics = [
      {
        name: 'Whey Protein',
        timing: 'Post-workout or between meals',
        description: 'Supports muscle recovery and growth',
      },
      {
        name: 'Creatine Monohydrate',
        timing: '5g daily, timing doesn\'t matter',
        description: 'Improves strength and muscle gains',
      },
    ];

    const advanced = [
      {
        name: 'Pre-Workout',
        timing: '30 minutes before training',
        description: 'Enhances energy and focus',
      },
      {
        name: 'BCAAs',
        timing: 'During workouts',
        description: 'Supports muscle retention and recovery',
      },
    ];

    return workoutIntensity === 'advanced' ? [...basics, ...advanced] : basics;
  };

  return (
    <div className="bg-purple-50 p-6 rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <Pill className="w-5 h-5 text-purple-600" />
        <h3 className="text-lg font-semibold text-purple-900">Recommended Supplements</h3>
      </div>
      
      <div className="grid gap-4">
        {getSupplements().map((supplement) => (
          <div key={supplement.name} className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-gray-900 mb-1">{supplement.name}</h4>
            <p className="text-sm text-purple-600 mb-2">{supplement.timing}</p>
            <p className="text-sm text-gray-600">{supplement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}