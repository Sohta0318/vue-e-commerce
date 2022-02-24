<template>
  <layout-all>
    <div class="body">
      <h1>News&Events</h1>
      <up-coming />
      <events />
    </div>
  </layout-all>
</template>

<script>
import UpComing from "../components/Product/Cards/upComing.vue";
import Events from "../components/Product/Cards/events.vue";
export default {
  components: {
    UpComing,
    Events,
  },
};
</script>

<style scoped>
.body h1 {
  text-align: center;
}
</style>
