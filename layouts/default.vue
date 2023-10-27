<template>
  <div class="app">
    <TheNavigation />
    <div class="wrapper">
      <NuxtPage />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  background: #fff;
  display: flex;
  justify-content: center;
  font-family: Open sans, sans-serif;
  position: relative;
}

.wrapper {
  max-width: 1440px;
  width: 100%;
  margin: 70px 0 40px 0 !important;
  position: inherit !important;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  padding: 0 25px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  overflow: auto;
}
</style>
