<template>
  <div>
    <NavBarMain></NavBarMain>
    <div class="home-container columns">
      <div class="details is-flex is-flex-direction-column is-align-items-center mt-4 column">
        <h1 id="Header">{{canteen_name}}</h1>
        <div class="form-item is-flex is-flex-direction-row mt-6">
          <div class="items">
            <table class=" is-flex is-flex-direction-column is-align-items-start mr-4">
              <tr id="item">CANTEEN CODE:</tr>
              <tr id="item">OWNER NAME:</tr>
              <tr id="item">CONTACT NO:</tr>
              <tr id="item">AVAILABILITY:</tr>
            </table>
          </div>
          <div class="details">
            <table class="is-flex is-flex-direction-column">
              <tr id="detail">00000001</tr>
              <tr id="detail">NIMAL MENDIS</tr>
              <tr id="detail">071 444 5588</tr>
              <tr id="detail">AVAILABLE</tr>
            </table>
          </div>
        </div>
        <b-button class="edit-Btn is-black mt-3" @click="editDetails">EDIT DETAILS</b-button>
        <b-button class="topUpBtn is-light mt-2">TOP UP WALLETS</b-button>
      </div>
      <div class="backImage column">
        <img id="image" src="../../assets/Images/User flow-pana.png"/>
      </div>
    </div>
    <div class="footer has-text-centered-desktop has-text-centered-mobile is-paddingless bg-is-warning">
      <p>Copyright ©2023 Thilina Srimal. All Rights Reserved </p>
    </div>
  </div>
</template>

<script>
import NavBarMain from "../../sharedComponents/mainNavBar/NavBarMain.vue";

export default {
  name: 'CanteenHome',
  components: {NavBarMain},
  data(){
    return{
      canteen_name:'CANTEEN NAME',
      canteen_code:'AA001',
      owner_name:'NIMAL MENDIS',
    }
  },
  methods:{
    editDetails(){
      this.$router.push({name:'CanteenEdit'})
    }
  }

}
</script>

<style scoped>
#Header{
  font-weight: 600;
  font-family: "Century Gothic";
  font-size: 22px;
  color: black;
}
.form-item{
  background: #eabe6d;
  padding: 1rem 1rem 1rem 1rem;
  border-radius: 15px;
  width: 500px;
  height: 200px;
}
#item{
  color: #070707;
  font-weight: 600;
  margin-bottom: 17px;
}
#detail{
  color: black;
  border-bottom: groove;
  border-bottom-color: #070707;
  margin-bottom: 15px;
}
.home-container{
  display: flex;
  flex-direction: row;
  margin-top: 5rem;
  margin-bottom: 5rem;
}
#image{
  height: auto;
  width: 400px;
}
.edit-Btn{
  padding-inline: 49px;
  border-radius: 15px;
  font-weight: 600;
  font-size: 15px;
}
.topUpBtn{
  padding-inline: 35px;
  border-radius: 15px;
  font-weight: 600;
  font-size: 15px;
}

@media screen and (max-width: 768px) {
  .home-container{
    display: flex;
    flex-direction: column;
    margin-top: 0;
    margin-bottom: 0;
  }
  #image{
    height: auto;
    width: 350px;
  }
  .form-item {
    width: 350px;
    height: 150px;
  }
  #item{
    margin-bottom: 3px;
  }
  #detail{
    margin-bottom: 2px;
  }

}
</style>
