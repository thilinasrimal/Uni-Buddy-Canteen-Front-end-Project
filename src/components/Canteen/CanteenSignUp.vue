<template>
  <div>
    <NavBar></NavBar>
    <div class="login-container">
      <div class="BackImage">
        <div class="title">
          <h1>Welcome to</h1>
          <h1><b>Canteen Sign In !</b></h1>
        </div>
        <div>
          <img src="../../assets/Images/Mobile login-pana.png" height="400" width="400"/>
        </div>
      </div>
      <div class="container-login">
        <div>
          <h1><b style="font-family: 'Century Gothic'">Sign In</b></h1>
        </div>

        <!--            Username-->
        <form @submit.prevent class="is-flex is-flex-direction-column is-align-items-center">
          <div class="form-group">
            <label class="form-label" style="float: left">Username</label>
            <b-input required type="email" class="input-login" id="email" aria-describedby="emailHelp"
                     placeholder="Enter Username Here" v-model="username"
            ></b-input>
          </div>
          <!--          Password-->
          <div class="form-group">
            <label class="form-label" style="float: left">Password</label>
            <b-input required type="password" class="input-login" id="password" password-reveal
                     placeholder="Enter Password Here"
                     v-model="password"></b-input>
          </div>
        </form>
        <b-button @click="handleSubmit" :disabled="isActive" type="button" class="btn btn-outline-dark">SIGN UP
        </b-button>

        <div class="signUp">
          <p style="color: #070707; font-weight: 600">Do You Already Have an Account?</p>
          <b-button class="btn btn-outline-dark" @click="signIn">SIGN IN</b-button>
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
  name:'CanteenSignUp',
  components: {NavBar}

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
</style>
