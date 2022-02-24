<template>
  <section class="wrapper">
    <h2>UpComing...</h2>
    <div class="img-container">
      <div class="each-item">
        <img src="../../../assets/images/images05.jpg" alt="obento" />
        <p>3/13 2022</p>
      </div>
      <div class="each-item">
        <img src="../../../assets/images/images04.jpg" alt="obento" />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  width: 60%;
}
.img-container {
  display: flex;
  /* justify-content: space-evenly; */
}
.wrapper {
  margin-top: 6em;
}
.each-item {
  text-align: center;
}
</style>
