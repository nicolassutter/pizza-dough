import React from 'react'
import { DoughInputsSection } from './DoughInputs'
import { IngredientsDisplay } from './IngredientsDisplay'
import { useDoughCalculator } from '@/hooks/useDoughCalculator'

export const DoughCalculator: React.FC = () => {
  const { inputs, ingredients, handleInputChange } = useDoughCalculator()

  return (
    <div className='w-full max-w-md mx-auto space-y-8'>
      <DoughInputsSection
        inputs={inputs}
        onInputChange={handleInputChange}
      />
      <IngredientsDisplay ingredients={ingredients} />
    </div>
  )
}
