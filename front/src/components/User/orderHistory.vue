<template>
  <div class="container">
    <h1>Your Order History</h1>
    <h2 v-if="checkCart">You haven't ordered yet</h2>
    <div class="item-list">
      <ul class="list-item">
        <li v-for="item in allItem" :key="item.id" :id="item.id" class="item">
          <img :src="item.image" :alt="item.title" />
          <div class="detail">
            <p>
              {{ item.title }}
            </p>
            <span>${{ item.price }}</span>
            <p>
              Item <span>{{ item.item }}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["allItem"],
  computed: {
    checkCart() {
      return this.allItem.length === 0;
    },
  },
};
</script>

<style scoped>
.container h1 {
  text-align: center;
  margin-bottom: 3em;
}

.list-item {
  display: flex;
  flex-direction: column;
  padding: 0;
}
.item {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  line-height: 2em;
}
.detail {
  width: 30%;
}

img {
  width: 30em;
}

ul,
ol {
  background: #fffcf4;
  border-radius: 8px; /*角の丸み*/
  box-shadow: 0px 0px 5px silver; /*5px=影の広がり具合*/
  padding: 0.5em 0.5em 0.5em 2em;
}
ul li,
ol li {
  line-height: 1.5;
  padding: 0.5em 0;
}
</style>
