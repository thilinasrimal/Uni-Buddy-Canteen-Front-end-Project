<template>
  <nav class="navbar navbar-light is-warning">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img class="logo" src="../../assets/Icons/Plain Logo.png"/>
        <div class="header is-flex is-flex-direction-column">
          <h5 class="has-text-weight-bold">Uni Canteen Buddy </h5>
          <p>FAST | TASTY | SMART</p>
        </div>
        <div class="home">
          <HomeBtn></HomeBtn>
        </div>
      </a>
    </div>
  </nav>
</template>

<script>
import HomeBtn from "../buttons/HomeBtn.vue";

export default {
  name: 'NavBar',
  components: {HomeBtn},

}
</script>

<style scoped>
.navbar{
  height: 6rem;
}
.logo{
  margin-top: -1.5rem;
  margin-left: -2rem;
  width: 208px;
}
.header{
  margin-top: 1rem;
}
.home{
  margin-inline: 64rem;
}
@media screen and (max-width: 768px) {
  .header{
    margin-left: -3rem;
  }
  .logo{
    margin-left: -4rem;
  }
  .home{
    //margin-bottom: rem;
    margin-top: 0.5rem;
    margin-inline: 0.4rem;
  }
}
</style>
