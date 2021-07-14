import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);



import Planning from "../views/Planning";
import home from "../views/home";
import Activites from "../views/Activites";
import lespack from "../views/lespack";
import contact from "../views/contact";
const routes = [
  {
    path: '/contact',
    name: 'contact',
    component: contact
  }, {
    path: '/lespack',
    name: 'lespack',
    component: lespack
  }, {
    path: '/Planning',
    name: 'Planning',
    component: Planning
  },    {
    path: '/Home',
    name: 'Home',
    component: home
  },    {
    path: '',
    name: '',
    component: home
  },    {
    path: '/Activites',
    name: 'Activites',
    component: Activites
  },  
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
