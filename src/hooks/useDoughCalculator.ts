import { useState, ChangeEvent } from 'react';
import { calculateIngredients } from '@/utils/calculateIngredients';
import { DoughInputs, Ingredients } from '@/types/calculator';

const DEFAULT_INPUTS: DoughInputs = {
  hydration: 65,
  doughWeight: 250,
  numberOfDoughs: 4,
};

export function useDoughCalculator() {
  const [inputs, setInputs] = useState<DoughInputs>(DEFAULT_INPUTS);
  const ingredients: Ingredients = calculateIngredients(inputs);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  return {
    inputs,
    ingredients,
    handleInputChange,
  };
}