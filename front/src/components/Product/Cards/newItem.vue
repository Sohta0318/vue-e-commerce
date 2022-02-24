<template>
  <div @change="selectItem" class="container">
    <h2>New</h2>
    <label v-for="item in allItem" :key="item.id" :id="item.id">
      <input type="radio" :value="JSON.stringify(item)" class="item-input" />
      <div class="item-list">
        <router-link :to="`/items/${item.id}`">
          <img :src="item.image" :alt="item.title" />
        </router-link>
        <p>
          {{ item.title }}
        </p>
        <p>Price: ${{ item.price }}</p>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  props: ["allItem"],
  data() {
    return {
      item: null,
    };
  },
  emits: ["select"],
  methods: {
    selectItem(e) {
      const itemDetail = JSON.parse(e.target.value);
      // console.log(itemDetail);
      this.item = {
        id: itemDetail.id,
        title: itemDetail.title,
        price: itemDetail.price,
        item: itemDetail.item,
        image: itemDetail.image,
      };
      this.$emit("select", this.item);
    },
  },
};
</script>

<style scoped>
.item-list {
  justify-content: space-between;
}
.item-input {
  display: none;
}
.container {
  display: flex;
  justify-content: space-around;
}
img {
  width: 20em;
  border-radius: 10%;
}
img:hover {
  scale: 1.1;
}
</style>
