import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home.vue";
import CanteenSignIn from "../components/Canteen/CanteenSignIn.vue";
import StudentSignIn from "../components/Student/StudentSignIn.vue";
import StaffMemberSignIn from "../components/Staff Member/StaffMemberSignIn.vue";
import CanteenSignUp from "../components/Canteen/CanteenSignUp.vue";
import StudentSignUp from "../components/Student/StudentSignUp.vue";
import StaffMemberSignUp from "../components/Staff Member/StaffMemberSignUp.vue";
import CanteenHomePage from "../components/Canteen/CanteenHomePage.vue";
import StudentHome from "../components/Student/studentHome.vue";
import StudentEdit from "../components/Student/studentEdit.vue";
import staffMemberHome from "../components/Staff Member/StaffMemberHome.vue";
import StaffMemberEdit from "../components/Staff Member/StaffMemberEdit.vue";
import CanteenEdit from "../components/Canteen/CanteenEdit.vue";

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
      path:'/staffMember-sign-in',
      name:'StaffMemberSignIn',
      component:StaffMemberSignIn,
    },
    {
      path:'/canteen-sign-up',
      name:'CanteenSignUp',
      component:CanteenSignUp,
    },
    {
      path:'/student-sign-up',
      name:'StudentSignUp',
      component:StudentSignUp
    },
    {
      path:'/staffMember-sign-up',
      name:'StaffMemberSignUp',
      component:StaffMemberSignUp
    },
    {
      path:'/canteen-home',
      name:'CanteenHome',
      component:CanteenHomePage,
    },
    {
      path:'/student-home',
      name:'StudentHome',
      component:StudentHome
    },
    {
      path:'/student-edit',
      name:'StudentEdit',
      component:StudentEdit
    },
    {
      path:'/staffMember-home',
      name:'StaffMemberHome',
      component:staffMemberHome
    },
    {
      path:'/staffMember-edit',
      name:'StaffMemberEdit',
      component:StaffMemberEdit
    },
    {
      path:'/canteen-edit',
      name:'CanteenEdit',
      component:CanteenEdit
    },
  ]
})
