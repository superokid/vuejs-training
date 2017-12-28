import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vue-axios-7792f.firebaseio.com'
axios.defaults.headers.common['Authorization'] = 'asfsdf'
axios.defaults.headers.get['Accepts'] = 'application/json'

const reqInterceptor = axios.interceptors.request.use(config => {
	console.log('Request interceptors', config)
	return config
})
const resInterceptor = axios.interceptors.response.use(res => {
	console.log('response interceptors', res)
	return res
})

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.request.eject(resInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
