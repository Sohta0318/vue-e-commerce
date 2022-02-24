<template>
  <div>
    <main>
      <!-- <layout-header /> -->
      <layout-header-2 />
      <slot />
    </main>
    <layout-footer2 />
  </div>
</template>

<script>
// import LayoutHeader from "./header";
// import LayoutFooter from "./footer.vue";
import LayoutFooter2 from "./footer2.vue";
import LayoutHeader2 from "./header2.vue";
export default {
  components: {
    // LayoutHeader,
    // LayoutFooter,
    LayoutHeader2,
    LayoutFooter2,
  },
  props: ["purchase"],
};
</script>

<style scoped>
main {
  position: relative;
  z-index: 2;
  background: white;
  height: 100%;
  margin-bottom: 7em;
  /* box-shadow: 3px 2px 2px 0px rgba(51, 51, 51, 0.5); */
}
</style>
