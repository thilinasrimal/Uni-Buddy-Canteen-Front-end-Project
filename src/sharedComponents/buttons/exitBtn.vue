<template>
  <div>
    <b-button class="homeBtn" :disabled="disabled" @click="exit">
      <img src="../../assets/Icons/exit.png" height="17" width="17"/>
      EXIT
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'ExitBtn',
  props: ['disabled'],
  methods: {
    exit() {
      this.$router.push({
        name: 'Home'
      })
    }
  }
}
</script>

<style scoped>
.homeBtn {
  border-radius: 10px;
  padding-inline: 13px;
  background: rgba(255, 9, 0, 0.62);
  border: none;
}

@media screen and (max-width: 768px) {
  .homeBtn {
    border-radius: 10px;
    padding-inline: 13px;
  }
}
</style>
