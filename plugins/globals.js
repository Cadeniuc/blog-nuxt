import Vue from 'vue'
import VueMArkdown from 'vue-markdown'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(Element, { locale })
Vue.component('vue-markdown', VueMArkdown)
