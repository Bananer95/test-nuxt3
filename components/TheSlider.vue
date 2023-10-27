<template>
  <div class="wrapper">
    <div
      class="slider"
      :style="{ 'margin-left': '-' + 100 * slideIndex + '%' }"
      :class="customClass"
    >
      <slot> </slot>
    </div>
    <div class="btn--footer">
      <button @click="prev">Prev</button>
      <button @click="next">Next</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  amountOfSlides: {
    type: String,
    requred: false,
    default: '4',
  },
  customClass: {
    type: String,
    requred: false,
  },
});
const slideIndex = ref(0);

function next() {
  slideIndex.value++;
  if (slideIndex.value >= props.amountOfSlides) {
    slideIndex.value = 0;
  }
}

function prev() {
  if (slideIndex.value > 0) {
    slideIndex.value--;
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  overflow: hidden;
  margin: 0 auto 20px auto;
  max-width: 690px;
}
.slider {
  display: flex;
  transition: margin-left ease 0.5s;
  gap: 13px;
}

.btn--footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  margin: 10px auto;
}

.grid-cards {
  display: grid;
  transition: margin-left ease 0.5s;
  gap: 13px;
  grid-template-columns: repeat(8, 332px);
}
</style>
