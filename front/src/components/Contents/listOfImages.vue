<template>
  <div class="wrapper">
    <div class="title">
      <h1 v-if="only">{{ title }}</h1>
      <router-link :to="path">See All Lists</router-link>
    </div>
    <transition-group tag="ul" name="list" appear>
      <li v-for="image in images" :key="image.id">
        <img :src="image.url" :alt="image.title" />
        <!-- <p>{{image.releaseDate}}</p> -->
        <p>12/22 2022</p>
        <!-- Needs to be fixed each heart -->
        <div class="heart" @click="favorite(image.id)">
          <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            :fill="changeColor"
            class="bi bi-heart"
            viewBox="0 0 16 16"
            ref="heartRef"
          >
            <path
              d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
            />
          </svg> -->
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: ["images", "title", "only", "path"],
  data() {
    return {
      // isClicked: false,
    };
  },
  // methods: {
  //   favorite(id) {
  //     // const heart = this.$refs.heartRef[id - 1].attributes;
  //     // console.log(heart.fill);
  //     const result = this.images.filter((image) => image.id === id);
  //     console.log(result);
  //     this.isClicked = !this.isClicked;
  //   },
  // },
  // computed: {
  //   changeColor() {
  //     return this.isClicked ? "red" : "currentColor";
  //   },
  // },
};
</script>

<style scoped>
img {
  width: 30em;
  border-radius: 10%;
}
ul {
  display: flex;
  padding: 0;
  align-items: flex-start;
  justify-content: space-evenly;
}
.list-enter-from {
  opacity: 0;
  transform: translateY(40px);
}
.list-enter-active {
  transition: all 2s ease-in;
}
.list-enter-to {
  opacity: 1;
  transform: translateY(0);
}
a {
  font-size: 2em;
  text-decoration: none;
  margin: auto;
  margin-left: 3em;
}
a:hover {
  border-bottom: 3px solid black;
}
.wrapper {
  margin-top: 7em;
}
.title {
  display: flex;
}
.heart {
  fill: red;
  width: 2em;
  position: absolute;
  right: 3em;
}
li {
  position: relative;
  margin-top: 3em;
}
.big {
  transform: scale(2, 2);
}
h1 {
  margin-left: 1em;
}
</style>
