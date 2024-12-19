import React from 'react';
import type { Ingredients } from '@/types/calculator';

interface IngredientsDisplayProps {
  ingredients: Ingredients;
}

export const IngredientsDisplay: React.FC<IngredientsDisplayProps> = ({ ingredients }) => {
  return (
    <div className="p-6 bg-cyber-background-light/5 dark:bg-cyber-background-dark/5 rounded-lg border-2 border-cyber-accent shadow-cyber">
      <h2 className="text-xl font-cyber font-bold mb-4 text-cyber-accent">
        Required Ingredients
      </h2>
      <div className="space-y-2 font-cyber">
        {Object.entries(ingredients).map(([ingredient, amount]) => (
          <p key={ingredient} className="text-cyber-text-light dark:text-cyber-text-dark flex justify-between">
            <span className="capitalize">{ingredient}:</span>
            <span className="font-bold text-cyber-accent">{amount}g</span>
          </p>
        ))}
      </div>
    </div>
  );
};