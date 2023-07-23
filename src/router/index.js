import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home.vue";
import CanteenSignIn from "../components/Canteen/CanteenSignIn.vue";
import StudentSignIn from "../components/Student/StudentSignIn.vue";
import StaffMemberSignIn from "../components/Staff Member/StaffMemberSignIn.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/canteen-sign-in',
      name:'CanteenSignIn',
      component:CanteenSignIn
    },
    {
      path:'/student-sign-in',
      name:'StudentSignIn',
      component:StudentSignIn,
    },
    {
      path:'/staffMember-sign=in',
      name:'StaffMemberSignIn',
      component:StaffMemberSignIn,
    }
  ]
})
