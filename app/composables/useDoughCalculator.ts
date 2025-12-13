import type { DoughInputs, Ingredients } from '~/types/calculator'

const DEFAULT_INPUTS: DoughInputs = {
  hydration: 67,
  doughWeight: 290,
  numberOfDoughs: 4,
}

const KEY = 'dough-inputs'

function calculateIngredients(inputs: DoughInputs): Ingredients {
  const { hydration, doughWeight, numberOfDoughs } = inputs
  const totalWeight = doughWeight * numberOfDoughs

  const data: Record<
    keyof Ingredients,
    {
      percentage: number
      optional?: boolean
    }
  > = {
    flour: {
      percentage: 100,
    },
    water: {
      percentage: hydration,
    },
    salt: {
      percentage: 2.5,
    },
    yeast: {
      percentage: 0.4,
      optional: true,
    },
    freshYeast: {
      percentage: 1.2,
      optional: true,
    },
  }

  // we do not add yeast to the total percentage because it is not important in the final dough weight
  const totalPercentage = Object.values(data).reduce(
    (acc, { percentage, optional }) => (optional ? acc : acc + percentage),
    0,
  )

  const finalData = Object.fromEntries(
    Object.entries(data).map(([key, { percentage }]) => {
      return [
        key,
        Math.round((totalWeight * percentage) / totalPercentage),
      ] as const
    }),
  ) as unknown as Ingredients

  return finalData
}


export function useDoughCalculator() {
  const inputs = useState<DoughInputs>(KEY, () => {
    if (import.meta.client) {
      const stored = localStorage.getItem(KEY)
      if (stored) {
        return JSON.parse(stored)
      }
    }
    return DEFAULT_INPUTS
  })

  const ingredients = computed<Ingredients>(() =>
    calculateIngredients(inputs.value),
  )

  watch(
    inputs,
    (newInputs) => {
      if (import.meta.client) {
        localStorage.setItem(KEY, JSON.stringify(newInputs))
      }
    },
    { deep: true },
  )

  return {
    inputs,
    ingredients,
  }
}
