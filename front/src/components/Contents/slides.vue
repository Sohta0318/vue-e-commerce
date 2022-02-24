<template>
  <div class="container">
    <carousel :items-to-show="1">
      <slide v-for="slide in contents" :key="slide.title" class="slide">
        <img :src="slide.imgUrl" :alt="slide.title" />
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      contents: [
        {
          title: "Content 1",
          imgUrl: require("../../assets/images/images015.jpg"),
        },
        {
          title: "Content 2",
          imgUrl: require("../../assets/images/images022.jpg"),
        },
        {
          title: "Content 3",
          imgUrl: require("../../assets/images/images023.jpg"),
        },
        // {
        //   title: "Content 4",
        //   imgUrl: require("../../assets/images/images028.jpg"),
        // },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  width: 90%;
  margin: auto;
}
img {
  width: 80em;
}
</style>
