<template>
  <div :class="setClasses" @click="toggleClass">
    <span></span><span></span><span></span>
  </div>
  <nav id="g-nav" :class="setClass">
    <div id="g-nav-list">
      <ul>
        <li><router-link to="/" @click="toggleClass">Home</router-link></li>
        <li><router-link to="/items">Items</router-link></li>
        <li><router-link to="/cart">Cart</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isClicked: false,
    };
  },
  computed: {
    setClass() {
      return this.isClicked ? "panelactive" : "";
    },
    setClasses() {
      return this.isClicked ? "openbtn1 active" : "openbtn1";
    },
  },
  methods: {
    toggleClass() {
      this.isClicked = !this.isClicked;
    },
  },
};
</script>

<style scoped>
#g-nav {
  /*position:fixed;にし、z-indexの数値を大きくして前面へ*/
  position: fixed;
  z-index: 999;
  /*ナビのスタート位置と形状*/
  top: 0;
  right: -120%;
  width: 100%;
  height: 100vh; /*ナビの高さ*/
  background: #999;
  /*動き*/
  transition: all 0.6s;
}

/*アクティブクラスがついたら位置を0に*/
#g-nav.panelactive {
  right: 0;
}

/*ナビゲーションの縦スクロール*/
#g-nav.panelactive #g-nav-list {
  /*ナビの数が増えた場合縦スクロール*/
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100vh; /*表示する高さ*/
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

/*ナビゲーション*/
#g-nav ul {
  /*ナビゲーション天地中央揃え*/
  position: absolute;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/*リストのレイアウト設定*/

#g-nav li {
  list-style: none;
  text-align: center;
}

#g-nav li a {
  color: #333;
  text-decoration: none;
  padding: 10px;
  display: block;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: bold;
  font-size: 4em;
}

/*========= ボタンのためのCSS ===============*/
.openbtn1 {
  position: fixed;
  z-index: 9999; /*ボタンを最前面に*/
  top: 4em;
  right: 2.5em;
  cursor: pointer;
  width: 5em;
  height: 5em;
}

/*×に変化*/
.openbtn1 span {
  display: inline-block;
  transition: all 0.4s;
  position: absolute;
  left: 14px;
  height: 3px;
  border-radius: 2px;
  background-color: black;
  width: 50%;
}

.openbtn1 span:nth-of-type(1) {
  top: 15px;
}

.openbtn1 span:nth-of-type(2) {
  top: 24px;
}

.openbtn1 span:nth-of-type(3) {
  top: 33px;
}

.openbtn1.active span:nth-of-type(1) {
  top: 18px;
  left: 18px;
  transform: translateY(6px) rotate(-45deg);
  width: 30%;
}

.openbtn1.active span:nth-of-type(2) {
  opacity: 0;
}

.openbtn1.active span:nth-of-type(3) {
  top: 30px;
  left: 18px;
  transform: translateY(-6px) rotate(45deg);
  width: 30%;
}
</style>
