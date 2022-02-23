import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GmapVue from 'gmap-vue'

Vue.config.productionTip = false

Vue.use(GmapVue, {
  load: {
    // [REQUIRED] This is the unique required value by Google Maps API
    key: 'AIzaSyCXTHyFfkwHNaBdNqlvW9J7QqK0XiaQh6M',
    // [OPTIONAL] This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
    libraries: 'places,drawing,visualization',
  },

  // [OPTIONAL] If you intend to programmatically custom event listener code
  // (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  // instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  // you might need to turn this on.
  autoBindAllEvents: false,

  // [OPTIONAL] If you want to manually install components, e.g.
  // import {GmapMarker} from 'gmap-vue/src/components/marker'
  // Vue.component('GmapMarker', GmapMarker)
  // then set installComponents to 'false'.
  // If you want to automatically install all the components this property must be set to 'true':
  installComponents: true,

  // Load the Google Maps API dynamically, if you set this to `true` the plugin doesn't load the Google Maps API
  dynamicLoad: false,
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

