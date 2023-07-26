<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" >
        <img src="../../assets/Icons/Plain Logo.png" alt="" width="30" height="24"
             class="logo d-inline-block align-text-top">
        <div class="header is-flex is-flex-direction-column">
          <h5 class="has-text-weight-bold">Uni Canteen Buddy </h5>
        </div>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link has-text-weight-bold" aria-current="page" href="/canteen-home">
            <img style="margin-top: -0.2rem" src="../../assets/Icons/home.png" height="17" width="17"/>
            Home
          </a>
          <a class="nav-link has-text-weight-bold" href="#">
            <img style="margin-top: -0.2rem" src="../../assets/Icons/menu.png" height="18" width="18"/>
            Menu
          </a>
          <a class="nav-link has-text-weight-bold" href="#">
            <img style="margin-top: -0.2rem" src="../../assets/Icons/order.png" height="18" width="18"/>
            Orders
          </a>
          <a class="nav-link">
            <exit-btn></exit-btn>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import ExitBtn from "../buttons/exitBtn.vue";

export default {
  name: 'NavBarMain',
  components: {ExitBtn},

}
</script>

<style scoped>
.logo {
  margin-top: 1.5rem;
//margin-left: -2rem; width: 208px;
}

.navbar {
  height: 6rem;
}

.header {
  margin-top: 4.8rem;
}

.navbar-nav{
  display: flex;
  flex-direction: row;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .logo {
    margin-left: -4rem;
  }

  .header {
    margin-left: -3rem;
    margin-top: 1.8rem;
  }

  .logo {
    margin-top: -1.5rem;
  }

  .navbar-toggler {
    margin-top: -3rem;
  }
  .navbar-nav{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .navbar-collapse{
    background: rgba(239, 234, 226, 0.91);
  }
}
</style>
