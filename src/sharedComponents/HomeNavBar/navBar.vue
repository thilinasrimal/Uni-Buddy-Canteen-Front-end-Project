<template>
  <nav class="navbar navbar-light is-warning">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img class="logo" src="../../assets/Icons/Plain Logo.png"/>
        <div class="header is-flex is-flex-direction-column">
          <h5 class="has-text-weight-bold">Uni Canteen Buddy </h5>
          <p>FAST | TASTY | SMART</p>
        </div>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',

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

@media screen and (max-width: 768px) {
  .header{
    margin-left: -3rem;
  }
}
</style>
