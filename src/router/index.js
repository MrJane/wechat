import Vue from 'vue';
import Router from 'vue-router';
import WebChat from '../components/WebChat/WebChat';
import Self from '../components/Self/Self';
import Contact from '../components/Contact/Contact';
import Explore from '../components/Explore/Explore'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'home', component: WebChat},
    {path: '/self', name: 'self', component: Self},
    {path: '/contact', name: 'contact', component: Contact},
    {path: '/explore', name: 'explore', component: Explore}
  ]
})
