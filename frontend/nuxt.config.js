export default {
    mode: 'spa',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        script: [
            { src: 'vendor/jquery/jquery.min.js' },
            { src: 'vendor/popper/popper.min.js' },
            { src: "js/bootstrap/bootstrap.min.js" },
            { src: 'vendor/fontawesome/js/fontawesome-all.min.js' },
            { src: 'vendor/bootstrap-select/js/bootstrap-select.min.js' },
            { src: 'vendor/bootstrap-tagsinput/bootstrap-tagsinput.min.js' },
            { src: 'vendor/input-mask/input-mask.min.js' },
            { src: 'vendor/nouislider/js/nouislider.min.js' },
            { src: 'vendor/textarea-autosize/textarea-autosize.min.js' },
            { src: 'js/theme.js' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:400,600,700,800|Roboto:400,500,700' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [
        '@/assets/css/theme.css'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~/plugins/vue-resource',
        '~/plugins/v-click-outside',
        '~/plugins/sweet-modal-vue',
        '~/plugins/vue-m-message'
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://bootstrap-vue.js.org
        'bootstrap-vue/nuxt',
    ],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}