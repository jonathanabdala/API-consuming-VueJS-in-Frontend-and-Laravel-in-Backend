import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import LoginComponent from './pages/Login/LoginComponent'
import HomeComponent from './pages/Home/HomeComponent'
import ProductsComponent from './pages/Products/ProductsComponent'


Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'login', component: LoginComponent },
    { path: '/home', name: 'home', component: HomeComponent },
    { path: '/produtos', name: 'products', component: ProductsComponent },

   
]

const router = new VueRouter({
    routes //short for'router : router'
})

/*eslint-desable no-new*/
new Vue({
    router,
    render: h => h(App),
}).$mount('app')


