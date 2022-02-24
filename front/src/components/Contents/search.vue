<template>
  <div id="search-wrap">
    <form @submit.prevent="">
      <input type="text" v-model="searchInput" id="search-text" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: "",
    };
  },
  computed: {
    filteredItem() {
      const allItem = this.$store.getters["items/items"];
      if (this.searchInput === "") {
        return;
      }
      const searchItem = allItem.filter((item) =>
        item.title.includes(this.searchInput)
      );
      return JSON.parse(JSON.stringify(searchItem));
    },
  },
  watch: {
    filteredItem() {
      this.$emit("filteredItem", this.filteredItem);
    },
  },
  methods: {
    // loseInput() {
    //   this.searchInput = "";
    //   console.log("lose");
    // },
  },
};
</script>

<style scoped>
/*検索窓のエリア*/
#search-wrap {
  position: absolute; /*絶対配置にして*/
  z-index: 2; /*最前面に設定。数字は変更可*/
  top: 0;
  right: 6em;
}

/*テキスト入力input設定*/
#search-text {
  -webkit-appearance: none; /*SafariやChromeのデフォルトの設定を無効*/
  width: 70px; /*テキスト入力エリアが伸びる前の横幅*/
  height: 70px;
  /* padding: 20px; */
  border: none;
  background: url("../../assets/images/search.svg") no-repeat 27px center; /*虫眼鏡アイコンを背景に表示*/
  background-size: 35px 35px;
  transition: all 0.5s; /*transitionを使ってスムースに伸ばす*/
  outline: none;
  cursor: pointer; /*カーソルを指マークに*/
}

/*テキスト入力inputにフォーカスした時の形状*/
#search-text:focus {
  width: 350px; /*テキスト入力エリアが伸びる後の横幅*/
  padding: 20px 0 20px 75px;
  box-shadow: 0 2px rgba(6, 0, 1, 0.26);
}
</style>
