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

const colorMode = useColorMode()

const metaColorModes = {
  light: '#ffffff',
  dark: '#0f172b',
}

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image',
  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      content: metaColorModes.light,
    },
    {
      media: '(prefers-color-scheme: dark)',
      content: metaColorModes.dark,
    },
    // reactive meta tag for theme color
    {
      content: computed(() => {
        return colorMode.value === 'dark'
          ? metaColorModes.dark
          : metaColorModes.light
      }),
    },
  ],
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
