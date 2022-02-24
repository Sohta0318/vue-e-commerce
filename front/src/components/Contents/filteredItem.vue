<template>
  <div class="balloon4">
    <ul>
      <li v-for="item in filteredItem" :key="item.id">
        <a :href="`#${item.id}`">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["filteredItem"],
};
</script>

<style scoped>
.balloon4 {
  position: relative;
  margin: 3em 10em 2em 4em;
  padding: 15px;
  background: #fff0c6;
  border-radius: 30px;
  text-align: center;
}

.balloon4:before {
  content: "";
  position: absolute;
  top: -30px;
  left: 60px;
  width: 13px;
  height: 12px;
  bottom: 0;
  background: #fff0c6;
  border-radius: 50%;
}

.balloon4:after {
  content: "";
  position: absolute;
  top: -15px;
  left: 54px;
  width: 20px;
  height: 18px;
  bottom: 3px;
  background: #fff0c6;
  border-radius: 50%;
}
.balloon4 a {
  color: rgb(8, 68, 8);
  line-height: 2em;
  padding: 1em;
  text-align: center;
  display: inline-block;
  text-decoration: none !important;
  font-size: 1.5em;
}
.balloon4 ul {
  display: inline-block;
  margin: 0;
  padding: 0;
}
.balloon4 li {
  padding: 2px 5px;
}
</style>
