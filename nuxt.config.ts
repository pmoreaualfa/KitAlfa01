// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // modules: ['@nuxtjs/tailwindcss','@nuxt/content','@pinia/nuxt'],
    modules: ['@nuxtjs/tailwindcss','@nuxt/content',
        ['@pinia/nuxt', {
            autoImports: ['defineStore',['defineStore', 'definePiniaStore']]
            }]],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config',
        exposeConfig: false,
        //config: {},
        injectPosition: 0,
        viewer: true,
    },
/*     content: {
      } */
})