import React from 'react';
import { UtensilsCrossed } from 'lucide-react';
import { CuisineType } from '../../types';

type CuisineSelectionProps = {
  cuisinePreference: CuisineType;
  onChange: (field: string, value: CuisineType) => void;
};

export default function CuisineSelection({ cuisinePreference, onChange }: CuisineSelectionProps) {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
        <UtensilsCrossed className="w-4 h-4" />
        Preferred Cuisine
      </label>
      <select
        value={cuisinePreference}
        onChange={(e) => onChange('cuisinePreference', e.target.value as CuisineType)}
        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
      >
        <option value="indian">Indian Cuisine</option>
        <option value="mexican">Mexican Cuisine</option>
        <option value="american">American Cuisine</option>
        <option value="mediterranean">Mediterranean Cuisine</option>
        <option value="asian">Asian Cuisine</option>
      </select>
    </div>
  );
}