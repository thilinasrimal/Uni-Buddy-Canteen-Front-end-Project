<template>
  <div>
    <NavBar></NavBar>
    <div class="home-container columns">
      <div class="details is-flex is-flex-direction-column is-align-items-center mt-4 column">
        <h1 id="Header">STAFF MEMBER PROFILE</h1>
        <div class="form-item is-flex is-flex-direction-row mt-6">
          <div class="items">
            <table class=" is-flex is-flex-direction-column is-align-items-start mr-4">
              <tr id="item">EMPLOYEE NO:</tr>
              <tr id="item">NAME:</tr>
              <tr id="item">CONTACT NO:</tr>
              <tr id="item">EMAIL:</tr>
            </table>
          </div>
          <div class="details">
            <table class="is-flex is-flex-direction-column">
              <tr id="detail">MGT01456</tr>
              <tr id="detail">Tharanga Viraj</tr>
              <tr id="detail">071 444 5588</tr>
              <tr id="detail">tharanga3@gmail.com</tr>
            </table>
          </div>
        </div>
        <b-button class="edit-Btn is-black mt-3" @click="edit">EDIT PROFILE</b-button>
        <b-button class="topUpBtn is-light mt-2">ORDER FOOD</b-button>
      </div>
      <div class="backImage column is-flex is-align-items-center is-flex-direction-column">
        <h1 class="mb-4">MY CASH WALLET</h1>
        <div class="card">
          <h1 class="mt-5">CASH BALANCE: 0000.00</h1>
        </div>
        <img id="image" src="../../assets/Images/E-Wallet-bro.png"/>
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
  name: 'StaffMemberHome',
  components: {NavBar},
  data() {
    return {

    }
  },
  methods:{
    edit(){
      this.$router.push({
        name:'StaffMemberEdit',
      })
    }
  }

}
</script>

<style scoped>
#Header, h1 {
  font-weight: 600;
  font-family: "Century Gothic";
  font-size: 22px;
  color: black;
}

.form-item {
  background: #eabe6d;
  padding: 1rem 1rem 1rem 1rem;
  border-radius: 15px;
  width: 500px;
  height: 200px;
}

#item {
  color: #070707;
  font-weight: 600;
  margin-bottom: 17px;
}

#detail {
  color: black;
  border-bottom: groove;
  border-bottom-color: #070707;
  margin-bottom: 15px;
}

.home-container {
  display: flex;
  flex-direction: row;
  margin-top: 5rem;
  margin-bottom: 5rem;
}

.backImage{
  margin-bottom: 6rem;
  margin-top: 12px;
}

#image {
  height: auto;
  width: 300px;
  z-index: 1;
  position: absolute;
  top: 46%;
}

.edit-Btn {
  padding-inline: 49px;
  border-radius: 15px;
  font-weight: 600;
  font-size: 15px;
}

.topUpBtn {
  padding-inline: 48px;
  border-radius: 15px;
  font-weight: 600;
  font-size: 15px;
}

.card {
  width: 65%;
  height: 250px;
  background: #f6ba38;
  border-radius: 15px;
}

@media screen and (max-width: 768px) {
  .home-container {
    display: flex;
    flex-direction: column;
    margin-top: 0;
    margin-bottom: 0;
  }
  .form-item {
    width: 350px;
    height: 150px;
  }

  #image {
    height: auto;
    width: 210px;
    position: absolute;
    z-index: 1;
    top: 72%;
  }

  #item{
    margin-bottom: 3px;
  }
  #detail{
    margin-bottom: 2px;
  }

  .backImage{
    margin-bottom: 9.5rem;
    margin-top: 10px;
  }

  .card {
    width: 70%;
    height: 130px;
    padding: 10px 10px 10px 10px;
  }
}
</style>
