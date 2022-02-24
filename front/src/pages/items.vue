<template>
  <layout-all>
    <div class="body">
      <slide />
      <h1>Items</h1>

      <item-list :allItem="allItem" @select="selectItem" />
    </div>
  </layout-all>
</template>

<script>
import ItemList from "../components/Product/ItemList.vue";
import Slide from "../components/Contents/slides.vue";

export default {
  components: {
    ItemList,
    Slide,
  },
  methods: {
    selectItem(item) {
      const product = {
        title: item.title,
        price: item.price,
        items: item.item,
        imageUrl: item.image,
      };
      this.$store.dispatch("items/sendToBack", product);
      this.$store.dispatch("items/fetchProducts");
    },
  },
  computed: {
    allItem() {
      return this.$store.getters["items/items"];
    },
  },
};
</script>

<style scoped>
.body {
  position: relative;
}
</style>
