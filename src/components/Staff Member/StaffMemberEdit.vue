<template>
  <div>
    <NavBar></NavBar>
    <div class="login-container">
      <div class="BackImage">
        <div>
          <img id="image" src="../../assets/Images/Editing-body-text-pana.webp"/>
        </div>
      </div>
      <div class="container-login">
        <div>
          <h1><b style="font-family: 'Century Gothic'">EDIT PROFILE</b></h1>
        </div>


        <form @submit.prevent class="is-flex is-flex-direction-column is-align-items-center">

          <div class="form-group">
            <label class="form-label" style="float: left">Name</label>
            <b-input class="input-login" id="studentName" required
                     placeholder="Student Name" v-model="student_name"
            ></b-input>
          </div>

          <div class="form-group">
            <label class="form-label" style="float: left">Employee Number</label>
            <b-input class="input-login" id="registerNo" required
                     placeholder="Your Registration Number"
                     v-model="regiter_no"></b-input>
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
        <div class="button-container is-flex is-flex-direction-column is-align-items-center">
          <b-button type="button" style="background: #f6883a" class="btn-outline-dark" @click="update">UPDATE</b-button>
          <b-button type="button" style="background: #f3c675" class="btn-outline-dark" @click="goToHome">CANCEL</b-button>
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
  name: 'StaffMemberEdit',
  components: {NavBar},
  methods: {
    goToHome() {
      this.$router.push({
        name: 'StaffMemberHome'
      })
    },
    update() {

    }
  }
}
</script>

<style scoped>
body{
  transition-delay: 2000s;
}
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
//margin-bottom: 10px;
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
  color: #070707;
  font-weight: 600;
  margin-top: 2%;
  width: 35%;
}

.container-login {
  padding: 2% 5%;
  margin-bottom: -5px;
}
#image{
  height: 500px;
  width: 500px;
}
@media screen and (max-width: 768px) {
  .login-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  .BackImage {
    margin-bottom: 10px;
    width: 100%;
  }

  #image{
    height: 250px;
    width: 250px;
  }

  form {
    width: 21rem;
  }
}
</style>
