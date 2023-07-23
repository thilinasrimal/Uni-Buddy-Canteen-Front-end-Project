<template>
  <div class="homePage">
    <NavBar :disabled="disabled"></NavBar>
      <div class="backContainer">
        <img src="../assets/Images/backImage.webp" height="450" width="450"/>
      </div>
      <div class="card-container columns">
        <div class="column">
          <SelectCard
            :id="1"
            text="Canteen"
            :clickFunc="
                () => {
                  $router.push({
                  name:'CanteenSignIn'
                  });
                }
              "
            :imageSource="
                nowHovering === 1 || selected === 1 ? ownerIconLO : ownerIcon
              "
            imageAlternativeText="owner Icon"
            imageWidth="75px"
            :hovering="hovering"
            :selected="selected"
            :select="select"
          />
        </div>

        <div class="column">
          <SelectCard
            :id="2"
            text="Student"
            :clickFunc="
                () => {
                  $router.push({
                  name:'StudentSignIn'
                  });
                }
              "
            :imageSource="
                nowHovering === 2 || selected === 2 ? studentIconLO : studentIcon
              "
            imageAlternativeText="student Icon"
            imageWidth="95px"
            :hovering="hovering"
            :selected="selected"
            :select="select"
          />
        </div>

        <div class="column">
          <SelectCard
            :id="3"
            text="Staff Member"
            :clickFunc="
                () => {
                  $router.push({
                  name:'StaffMemberSignIn'
                  });
                }
              "
            :imageSource="
                nowHovering === 3 || selected === 3 ? staffIconLO : staffIcon
              "
            imageAlternativeText="staff Icon"
            imageWidth="75px"
            :hovering="hovering"
            :selected="selected"
            :select="select"
          />
        </div>

      </div>
    <div class="footer has-text-centered-desktop has-text-centered-mobile is-paddingless bg-is-warning">
      <p>Copyright ©2023 Thilina Srimal. All Rights Reserved </p>
    </div>
  </div>
</template>

<script>
import SelectCard from "../sharedComponents/selectBtn/selectBtn.vue";
import ownerIconLO from "../assets/Icons/ownerIconLO.webp";
import ownerIcon from "../assets/Icons/OwnerIcon.webp";
import studentIconLO from "../assets/Icons/studentIconLO.webp"
import studentIcon from "../assets/Icons/studentIcon.webp"
import staffIconLO from "../assets/Icons/staffIconLO.webp"
import staffIcon from "../assets/Icons/staffIcon.webp"
import NavBar from "../sharedComponents/HomeNavBar/navBar.vue";

export default {
  name: 'Home',
  props:['disabled'],
  components: {NavBar, SelectCard},
  data() {
    return {
      nowHovering: 0,
      selected: 0,
      ownerIconLO:ownerIconLO,
      ownerIcon:ownerIcon,
      studentIconLO:studentIconLO,
      studentIcon:studentIcon,
      staffIconLO:staffIconLO,
      staffIcon:staffIcon,
    }
  },
  methods:{
    hovering(id) {
      this.nowHovering = id;
    },
    select(id) {
      this.selected = id;
      // this.$root.formData.user_type = id === 1 ? "Apartment_Owner" : "Tenant";
    },
  },
}
</script>


<style scoped>
.homePage {
  background: orangered;
}


@media screen and (max-width: 768px) {
}
</style>
