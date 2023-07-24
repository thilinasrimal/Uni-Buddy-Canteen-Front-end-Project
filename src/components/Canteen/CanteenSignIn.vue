<template>
  <div class="loginPage">
    <NavBar></NavBar>
    <b-notification
      auto-close
      v-model="isActive"
      id="alert"
      type="is-danger is-light"
      aria-close-label="Close notification"
      role="alert">
      Username or Password is invalid!
    </b-notification>

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
        <b-button @click="handleSubmit" :disabled="isActive" type="button" class="btn btn-outline-dark">SIGN IN
        </b-button>

        <div class="signUp">
          <p style="color: #070707; font-weight: 600">Don't You Have and Account?</p>
          <b-button class="btn btn-outline-dark" @click="signUp">Sign Up</b-button>
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
  name: 'CanteenSignIn',
  components: {NavBar},
  data() {
    return {
      username: '',
      password: '',
      isActive: false,
    }
  },
  methods: {
    handleSubmit: function () {
      if (this.username && this.password) {
        this.$router.push({name:'CanteenHome'})
      } else {
        this.isActive = true;
      }
    },

    signUp(){
      this.$router.push({
        name:'CanteenSignUp'
      })
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
  margin-bottom: 1rem;
  width: 100%;
}

.container-login label {
  color: black;
  margin-bottom: 0.5rem;
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
  margin-bottom: 1rem;
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
