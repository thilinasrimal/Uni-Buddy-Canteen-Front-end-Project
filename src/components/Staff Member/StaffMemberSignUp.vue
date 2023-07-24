<template>
  <div>
    <NavBar></NavBar>
    <div class="login-container">
      <div class="BackImage">
        <div class="title">
          <h1>Welcome to</h1>
          <h1><b>Staff Member Sign Up !</b></h1>
        </div>
        <div>
          <img src="../../assets/Images/Sign up-pana.png" height="400" width="400"/>
        </div>
      </div>
      <div class="container-login">
        <div>
          <h1><b style="font-family: 'Century Gothic'">Sign Up</b></h1>
        </div>


        <form @submit.prevent class="is-flex is-flex-direction-column is-align-items-center">

          <div class="form-group">
            <label class="form-label" style="float: left">Name</label>
            <b-input class="input-login" id="studentName" required
                     placeholder="Name" v-model="student_name"
            ></b-input>
          </div>

          <div class="form-group">
            <label class="form-label" style="float: left">Employee Number</label>
            <b-input class="input-login" id="employeeNo" required
                     placeholder="Your Employee Number"
                     v-model="emp_no"></b-input>
          </div>

          <div class="form-group">
            <label class="form-label" style="float: left">Contact Number</label>
            <b-input class="input-login" id="contactNumber" required
                     placeholder="Contact Number" maxlength="10" typeof="mobile"
                     v-model="contact_number"></b-input>
          </div>

          <div class="form-group">
            <label class="form-label" style="float: left">Username / Email</label>
            <b-input type="email" class="input-login" id="email" required
                     placeholder="example@gmail.com"
                     v-model="email"></b-input>
          </div>

          <div class="form-group">
            <label class="form-label" style="float: left">Password</label>
            <b-input type="password" class="input-login" id="canteenCode" required password-reveal
                     placeholder="Enter a Password"
                     v-model="password"></b-input>
          </div>

        </form>
        <b-button  type="button" class="btn btn-outline-dark" @click="signUp">SIGN UP
        </b-button>

        <div class="signUp">
          <p style="color: #070707; font-weight: 600">Do You Already Have an Account?</p>
          <b-button class="btn btn-outline-dark" @click="goToSignIn">SIGN IN</b-button>
        </div>
      </div>
    </div>

    <div class="footer has-text-centered-desktop has-text-centered-mobile is-paddingless bg-is-warning">
      <p>Copyright ©2023 Thilina Srimal. All Rights Reserved </p>
    </div>
  </div>
</template>

<script>
import NavBar from "../../sharedComponents/HomeNavBar/navBar.vue";

export default {
  name:'StudentSignUp',
  components: {NavBar},
  methods:{
    goToSignIn() {
      this.$router.push({
        name:'StaffMemberSignIn'
      })
    },
    signUp(){

    }
  }
}
</script>

<style scoped>
h1 {
  font-family: "Century Gothic";
}

@import url('https://fonts.googleapis.com/css?family=Proza+Libre');

.form-label {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
}

.BackImage {
  margin-top: 20px;
  margin-bottom: 10px;
  width: 50%;
}

.login-container {
  margin-bottom: 63px;
  display: flex;
  flex-direction: row;
}

#container-front h1 {
  color: black;
  font-size: 4rem;
}

#container-login input {
  padding: 0.5rem;
  padding-inline-end: 8%;
  border-radius: 1rem;
  border: none;
  margin-bottom: 0.5rem;
  width: 100%;
}

.container-login label {
  color: black;
  margin-bottom: 0.3rem;
}

.container-login h1 {
  color: black;
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

form {
  width: 30rem;
}

.form-group {
  width: 80%;
  margin-bottom: 0.4rem;
}

.btn-outline-dark {
  font-size: initial;
  border-radius: 3rem;
  background: black;
  color: antiquewhite;
  padding: 1rem;
  margin-top: 2%;
  width: 35%;
  float: right;
  margin-right: 10%;
}

.container-login {
  padding: 2% 5%;
  margin: auto;
}
.signUp{
  margin-top: 5rem;
}

@media screen and (max-width: 768px) {
  .login-container {
    display: flex;
    flex-direction: column;
  }

  .container-login {

  }

  .BackImage {
    margin-bottom: 10px;
    width: 100%;
  }

  form {
    width: 21rem;
  }
}
</style>
