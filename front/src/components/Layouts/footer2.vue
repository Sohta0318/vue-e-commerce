<template>
  <footer class="footer">
    <div id="button"></div>
    <div id="container">
      <div id="cont">
        <div class="footer_center">
          <h3>Copyright &copy; Obentou.com</h3>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer #button {
  width: 35px;
  height: 35px;
  border: #727172 12px solid;
  border-radius: 35px;
  margin: 0 auto;
  position: relative;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
}
.footer #button:hover {
  width: 35px;
  height: 35px;
  border: #3a3a3a 12px solid;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
  position: relative;
}
.footer {
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 2em;
  overflow: hidden;
  margin: 0 auto;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
  z-index: 999;
}
.footer:hover {
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
  height: 10em;
}
.footer #container {
  margin-top: 5px;
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  background: #3a3a3a;
}
.footer #cont {
  position: relative;
  top: -45px;
  right: 190px;
  width: 150px;
  height: auto;
  margin: 0 auto;
}
.footer_center {
  width: 500px;
  float: left;
  text-align: center;
}
.footer h3 {
  font-family: "Helvetica";
  font-size: 30px;
  font-weight: 100;
  margin-top: 70px;
  margin-left: 40px;
  color: white;
}
</style>
