import React from 'react';
import { Beef, Cookie, Droplet } from 'lucide-react';

type MacroBreakdownProps = {
  macros: {
    protein: number;
    carbs: number;
    fat: number;
  };
  dailyCalories: number;
};

export default function MacroBreakdown({ macros, dailyCalories }: MacroBreakdownProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Macro Breakdown</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Beef className="w-5 h-5 text-red-500" />
            <h4 className="font-medium text-gray-900">Protein</h4>
          </div>
          <p className="text-2xl font-bold text-gray-900">{macros.protein}g</p>
          <p className="text-sm text-gray-600">
            {Math.round((macros.protein * 4 / dailyCalories) * 100)}% of calories
          </p>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Cookie className="w-5 h-5 text-yellow-500" />
            <h4 className="font-medium text-gray-900">Carbs</h4>
          </div>
          <p className="text-2xl font-bold text-gray-900">{macros.carbs}g</p>
          <p className="text-sm text-gray-600">
            {Math.round((macros.carbs * 4 / dailyCalories) * 100)}% of calories
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Droplet className="w-5 h-5 text-blue-500" />
            <h4 className="font-medium text-gray-900">Fats</h4>
          </div>
          <p className="text-2xl font-bold text-gray-900">{macros.fat}g</p>
          <p className="text-sm text-gray-600">
            {Math.round((macros.fat * 9 / dailyCalories) * 100)}% of calories
          </p>
        </div>
      </div>
    </div>
  );
}