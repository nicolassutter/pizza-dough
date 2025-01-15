import React from 'react'
import ScaleIcon from '~icons/carbon/scale'
import WaterIcon from '~icons/carbon/humidity'
import NumberIcon from '~icons/carbon/hashtag'
import { Input } from './Input'
import { useDoughCalculator } from '@/hooks/useDoughCalculator'

export const DoughCalculator: React.FC = () => {
  const { inputs, ingredients, handleInputChange } = useDoughCalculator()

  return (
    <div className='w-full max-w-md mx-auto space-y-8'>
      <div className='space-y-4'>
        <Input
          label='Hydration (%)'
          type='number'
          name='hydration'
          value={inputs.hydration}
          onChange={handleInputChange}
          min='50'
          max='100'
          icon={<WaterIcon className='w-5 h-5' />}
        />

        <Input
          label='Dough Weight (g)'
          type='number'
          name='doughWeight'
          value={inputs.doughWeight}
          onChange={handleInputChange}
          min='100'
          icon={<ScaleIcon className='w-5 h-5' />}
        />

        <Input
          label='Number of Doughs'
          type='number'
          name='numberOfDoughs'
          value={inputs.numberOfDoughs}
          onChange={handleInputChange}
          min='1'
          icon={<NumberIcon className='w-5 h-5' />}
        />
      </div>

      <div className='p-6 bg-cyber-background-light/5 dark:bg-cyber-background-dark/5 rounded-lg border-2 border-cyber-accent shadow-cyber'>
        <h2 className='text-xl font-cyber font-bold mb-4 text-cyber-accent'>
          Required Ingredients
        </h2>
        <p className='text-cyber-text-light dark:text-cyber-text-dark my-4 font-cyber italic text-sm'>
          Only use yeast or fresh yeast, not both
        </p>
        <div className='space-y-2 font-cyber'>
          {Object.entries(ingredients).map(([ingredient, amount]) => (
            <p
              key={ingredient}
              className='text-cyber-text-light dark:text-cyber-text-dark flex justify-between'
            >
              <span className='capitalize'>
                {ingredient.split(/(?=[A-Z])/).join(' ') ?? ingredient}:
              </span>
              <span className='font-bold text-cyber-accent'>{amount}g</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
