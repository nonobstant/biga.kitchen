import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebook,faTwitter,faInstagram)




createApp(App).use(router, AOS.init()).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
