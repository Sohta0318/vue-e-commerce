<template>
  <div id="sec">
    <ul>
      <li>
        <img :src="selectedItem.image" :alt="selectedItem.title" />
        <span class="fa fa-code"></span>
        <p class="title01">{{ selectedItem.title }}</p>
        <p>{{ selectedItem.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    selectedItem() {
      const selectedItem = this.$store.getters["items/items"];
      const itemId = +this.$route.params.id;
      return selectedItem.find((item) => item.id === itemId);
    },
  },
};
</script>

<style scoped>
img {
  width: 30em;
}
.detail {
  text-align: center;
}

#sec {
  padding: 0;
  background: #fff;
  text-align: center;
  word-wrap: break-word;
}

#sec ul {
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  list-style: none;
  border: none;
}
#sec ul li {
  padding: 40px;
  /* width: 320px; */
  transition: box-shadow 0.3s;
}
#sec ul li:hover {
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
#sec ul li:hover span {
  color: #63b7e6;
}
#sec ul li:hover p {
  color: #555;
}
#sec ul li:hover .title01 {
  color: #63b7e6;
}
#sec ul li:hover .title01:after {
  width: 25px;
}
#sec ul li span {
  font-size: 2.6em;
  display: block;
  transition: color 0.3s;
  color: #a2a2a2;
}
#sec ul li span:before,
#sec ul li span:after {
  position: static;
}
#sec ul li .title01 {
  color: #6f6f6f;
  display: inline-block;
  font-size: 24px;
  font-weight: 100;
  transition: color 0.3s;
}
#sec ul li .title01:after {
  content: "";
  position: relative;
  left: 50%;
  top: 6px;
  transform: translateX(-50%);
  display: block;
  width: 40px;
  height: 1px;
  background: #6f6f6f;
  transition: width 0.3s;
}
#sec ul li p {
  color: #a2a2a2;
  text-align: left;
  text-indent: 1em;
  font-size: 16px;
  line-height: 26px;
  transition: color 0.3s;
}

p {
  margin-top: 3em;
}
</style>
