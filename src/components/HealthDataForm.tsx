import React, { useState } from 'react';
import { Scale, Heart, Activity, Apple, Calendar } from 'lucide-react';
import { HealthData } from '../types';
import GoalSelection from './forms/GoalSelection';
import CuisineSelection from './forms/CuisineSelection';

type HealthDataFormProps = {
  onSubmit: (data: HealthData) => void;
};

export default function HealthDataForm({ onSubmit }: HealthDataFormProps) {
  const [formData, setFormData] = useState<HealthData>({
    age: '',
    weight: '',
    height: '',
    activityLevel: 'moderate',
    dietaryRestrictions: [],
    healthConditions: [],
    fitnessGoal: 'muscle-gain',
    workoutIntensity: 'intermediate',
    workoutFrequency: 4,
    cuisinePreference: 'american',
  });

  const handleChange = (field: string, value: string | number | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Calendar className="w-4 h-4" />
            Age
          </label>
          <input
            type="number"
            value={formData.age}
            onChange={(e) => handleChange('age', e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Scale className="w-4 h-4" />
            Weight (kg)
          </label>
          <input
            type="number"
            value={formData.weight}
            onChange={(e) => handleChange('weight', e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Activity className="w-4 h-4" />
            Height (cm)
          </label>
          <input
            type="number"
            value={formData.height}
            onChange={(e) => handleChange('height', e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Activity className="w-4 h-4" />
            Daily Activity Level
          </label>
          <select
            value={formData.activityLevel}
            onChange={(e) => handleChange('activityLevel', e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="sedentary">Sedentary (Office Job)</option>
            <option value="light">Light Activity</option>
            <option value="moderate">Moderately Active</option>
            <option value="active">Very Active</option>
            <option value="very-active">Athlete Level</option>
          </select>
        </div>
      </div>

      {/* Fitness Goals Section */}
      <GoalSelection
        fitnessGoal={formData.fitnessGoal}
        workoutIntensity={formData.workoutIntensity}
        workoutFrequency={formData.workoutFrequency}
        onChange={handleChange}
      />

      {/* Cuisine Preference Section */}
      <CuisineSelection
        cuisinePreference={formData.cuisinePreference}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
      >
        Get Your Personalized Plan
      </button>
    </form>
  );
}