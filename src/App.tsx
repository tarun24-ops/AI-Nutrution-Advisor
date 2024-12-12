import React, { useState } from 'react';
import { Brain } from 'lucide-react';
import HealthDataForm from './components/HealthDataForm';
import NutritionAdvice from './components/NutritionAdvice';

type HealthData = {
  age: string;
  weight: string;
  height: string;
  activityLevel: string;
  dietaryRestrictions: string[];
  healthConditions: string[];
};

function App() {
  const [healthData, setHealthData] = useState<HealthData | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">AI Nutrition Advisor</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {!healthData ? (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Get Personalized Nutrition Advice
              </h2>
              <HealthDataForm onSubmit={setHealthData} />
            </div>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Your Personalized Plan</h2>
                <button
                  onClick={() => setHealthData(null)}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Start Over
                </button>
              </div>
              <NutritionAdvice healthData={healthData} />
            </div>
          )}
        </div>
      </main>

      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            Disclaimer: This is an AI-powered recommendation system. Please consult with healthcare
            professionals before making significant changes to your diet.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;