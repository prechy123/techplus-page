// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      title: 'Prechy Nuxt',
      meta: [
        {name: 'description', content: 'Everything about prechy learning nuxt 3'}
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0'}
      ]
    }
  },
})