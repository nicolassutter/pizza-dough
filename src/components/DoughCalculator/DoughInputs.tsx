import React from 'react';
import ScaleIcon from '~icons/carbon/scale';
import WaterIcon from '~icons/carbon/humidity';
import NumberIcon from '~icons/carbon/number';
import { Input } from '../Input';
import type { DoughInputs } from '@/types/calculator';

interface DoughInputsProps {
  inputs: DoughInputs;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DoughInputsSection: React.FC<DoughInputsProps> = ({ 
  inputs, 
  onInputChange 
}) => {
  return (
    <div className="space-y-4">
      <Input
        label="Hydration (%)"
        type="number"
        name="hydration"
        value={inputs.hydration}
        onChange={onInputChange}
        min="50"
        max="100"
        icon={<WaterIcon className="w-5 h-5" />}
      />

      <Input
        label="Dough Weight (g)"
        type="number"
        name="doughWeight"
        value={inputs.doughWeight}
        onChange={onInputChange}
        min="100"
        icon={<ScaleIcon className="w-5 h-5" />}
      />

      <Input
        label="Number of Doughs"
        type="number"
        name="numberOfDoughs"
        value={inputs.numberOfDoughs}
        onChange={onInputChange}
        min="1"
        icon={<NumberIcon className="w-5 h-5" />}
      />
    </div>
  );
};