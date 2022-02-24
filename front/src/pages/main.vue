<template>
  <layout-all
    ><div class="body">
      <slide />
      <list-of-image :images="images" path="/items" /><list-of-image
        :images="newRelease"
        :only="true"
        title="Bentou New Release"
        path="/news&events"
      />
      <list-of-image
        title="Ranking"
        :only="true"
        path="/items"
        :images="cutImage"
        :scale="true"
      />
      <list-of-image
        :images="images"
        :only="true"
        title="Trending"
        path="/items"
      /></div
  ></layout-all>
</template>

<script>
import ListOfImage from "../components/Contents/listOfImages.vue";
import Slide from "../components/Contents/slides.vue";
export default {
  components: {
    ListOfImage,
    Slide,
  },
  computed: {
    images() {
      return this.$store.getters["items/images"];
    },
    newRelease() {
      return this.$store.getters["items/newRelease"];
    },
    cutImage() {
      const allImages = this.$store.getters["items/images"];
      return allImages.slice(0, 2);
    },
  },
};
</script>

<style></style>
