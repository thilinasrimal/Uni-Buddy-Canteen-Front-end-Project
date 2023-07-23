<template>
<div>
  <b-button class="homeBtn" :disabled="disabled" @click="goHome">
    <a>
      <img class="imageHome" src="../../assets/Icons/home.png"/>
    </a>
  </b-button>
</div>
</template>

<script>
export default {
name:'homeBtn',
props:['disabled'],
  methods:{
    goHome(){
      this.$router.push({
        name:'Home'
      })
    }
  }
}
</script>

<style scoped>
.homeBtn{
  border-radius: 70px;
  padding: 35px;
  padding-inline: 13px;
  background: rgba(255, 115, 0, 0.62);
  border: none;
}
.imageHome{
  width: 46px;
}
@media screen and (max-width: 768px) {
  .homeBtn{
    border-radius: 80px;
    padding: 30px;
    padding-inline: 13px;
  }
  .imageHome{
    width: 37px;
  }
}
</style>
