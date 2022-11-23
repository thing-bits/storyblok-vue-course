// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      '@storyblok/nuxt',
      {
				accessToken: '6Owjwu679yYSbGJJrRvvwwtt',
				// If Server Location === US then:
				// apiOptions: { region: 'us' }
			},
    ],
    '@nuxtjs/tailwindcss'

  ]
})