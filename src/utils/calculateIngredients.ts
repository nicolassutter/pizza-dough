import { DoughInputs, Ingredients } from '../types/calculator';

export function calculateIngredients(inputs: DoughInputs): Ingredients {
  const { hydration, doughWeight, numberOfDoughs } = inputs;
  const totalWeight = doughWeight * numberOfDoughs;
  
  // Calculate flour based on hydration percentage
  const flourPercentage = 100;
  const waterPercentage = hydration;
  const saltPercentage = 2.5;
  const yeastPercentage = 0.4;
  
  const totalPercentage = flourPercentage + waterPercentage + saltPercentage + yeastPercentage;
  
  const flour = (totalWeight * flourPercentage) / totalPercentage;
  const water = (totalWeight * waterPercentage) / totalPercentage;
  const salt = (totalWeight * saltPercentage) / totalPercentage;
  const yeast = (totalWeight * yeastPercentage) / totalPercentage;
  
  return {
    flour: Math.round(flour),
    water: Math.round(water),
    salt: Math.round(salt),
    yeast: Math.round(yeast),
  };
}