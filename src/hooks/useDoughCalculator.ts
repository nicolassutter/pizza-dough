import { ChangeEvent } from 'react'
import { calculateIngredients } from '@/utils/calculateIngredients'
import { DoughInputs, Ingredients } from '@/types/calculator'
import { useLocalStorageState } from './useLocalStorage'

const DEFAULT_INPUTS: DoughInputs = {
  hydration: 67,
  doughWeight: 310,
  numberOfDoughs: 4,
}

export function useDoughCalculator() {
  const [inputs, setInputs] = useLocalStorageState<DoughInputs>(
    'inputs',
    DEFAULT_INPUTS,
  )
  const ingredients: Ingredients = calculateIngredients(inputs)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setInputs((prev) => ({
      ...prev,
      [name]: Number(value),
    }))
  }

  return {
    inputs,
    ingredients,
    handleInputChange,
  }
}
