<template>
  <div class="w-full max-w-md mx-auto grid gap-8">
    <div class="space-y-4">
      <UFormField
        label="Hydration (%)"
        name="hydration"
      >
        <UInput
          v-model.number="inputs.hydration"
          type="number"
          min="50"
          max="100"
          icon="i-carbon-humidity"
        />
      </UFormField>

      <UFormField
        label="Dough Weight (g)"
        name="doughWeight"
      >
        <UInput
          v-model.number="inputs.doughWeight"
          type="number"
          min="100"
          icon="i-carbon-scale"
        />
      </UFormField>

      <UFormField
        label="Number of Doughs"
        name="numberOfDoughs"
      >
        <UInput
          v-model.number="inputs.numberOfDoughs"
          type="number"
          min="1"
          icon="i-carbon-hashtag"
        />
      </UFormField>
    </div>

    <UCard>
      <template #header>
        <h2 class="text-xl font-bold">Required Ingredients</h2>
      </template>

      <div class="space-y-4">
        <UAlert
          color="secondary"
          variant="soft"
          title="Only use yeast or fresh yeast, not both"
          icon="i-carbon-information"
        />

        <div class="space-y-2">
          <div
            v-for="([ingredient, amount], index) in Object.entries(ingredients)"
            :key="index"
            class="flex justify-between items-center"
          >
            <span class="capitalize">
              {{ formatIngredientName(ingredient) }}:
            </span>
            <span class="font-bold">{{ amount }}g</span>
          </div>
        </div>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const { inputs, ingredients } = useDoughCalculator()

function formatIngredientName(name: string): string {
  return name.split(/(?=[A-Z])/).join(' ')
}
</script>
