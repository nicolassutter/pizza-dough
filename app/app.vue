<script setup>
useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: {
    lang: 'en',
  },
})

const title = 'CyberDough - Pizza Dough Calculator'
const description =
  'Calculate the perfect pizza dough ingredients for your homemade pizzas. Adjust hydration, weight, and quantity to get precise measurements.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image',
})

const { $pwa } = useNuxtApp()

onMounted(() => {
  if ($pwa.needRefresh) {
    $pwa.updateServiceWorker(true)
  }
})
</script>

<template>
  <UApp>
    <NuxtPwaManifest />
    <NuxtPage />
  </UApp>
</template>
