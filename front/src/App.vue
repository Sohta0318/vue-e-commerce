<template>
  <router-view />
</template>

<script>
export default {};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Courier New", Courier, monospace;
}
html {
  height: 100%;
}

body {
  /* height: 100%; */
  font-family: Raleway, sans-serif;
  font: 11px "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.body {
  margin-top: 17em;
}
li {
  list-style: none;
}
</style>
