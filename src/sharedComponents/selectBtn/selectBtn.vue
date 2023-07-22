<template>
  <div>
    <div
      :class="`outer-box has-text-centered ${
        nowHoveringId === id || selected === id
          ? `hovering-style`
          : `not-hovering-style`
      }`"


      @click="
        () => {
          select(id);
          if (clickFunc) {
            clickFunc();
          }
        }
      "
      @mouseover="
        () => {
          nowHoveringId = id;
          hovering(id);
        }
      "
      @mouseleave="
        () => {
          nowHoveringId = 0;
          hovering(0);
        }
      "
    >
      <img
        v-if="imageSource"
        height="auto"
        :src="imageSource"
        :alt="imageAlternativeText"
        :width="imageWidth"
        class="has-text-centered mt-3"
      />
      <div v-if="text" class="mt-1">{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectCard",
  props: [
    "id",
    "text",
    "selected",
    "select",
    "imageWidth",
    "imageAlternativeText",
    "imageSource",
    "hovering",
    "clickFunc",
    "width"
  ],
  data() {
    return {
      nowHoveringId: 0,
    };
  },
  methods: {
    test(hello) {
      console.log(hello);
    },
  },
};
</script>

<style scoped>
.outer-box {
  margin: auto;
  cursor: pointer;
  width: 260px;
  height: 140px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  transition: 0.5s ease-in-out;
}

.not-hovering-style {
  background: #efe8e2;
  box-shadow: 5px 5px 10px #ee9e4f, -5px -5px 10px #fa8585;
  font-weight: 600;
  font-size:25px ;
  color: #070707;
}
.hovering-style {
  background: #efe8e2;
  box-shadow: 2px 2px 23px 0px rgba(194, 76, 65, 0.32);
  border: 1px solid #e56038;
  color: #1f1f1e;
  font-size:25px ;
  font-weight: 600;
  transform: scale(0.05) !important;
}
.outer-box:hover {
  transform: scale(1.05) !important;
}
</style>
