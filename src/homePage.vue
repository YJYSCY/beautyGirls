<template>
  <div class="main">
    <head> </head>
    <body class="mainBody">
      <div>
        <h1 style="text-align: center; font-size: 60px">Start Select</h1>
        <img
          @click="randomGirl"
          class="imageShow"
          src="./image/image1.jpg"
          alt=""
        />
        <img
          @click="fashionGirl"
          class="imageShow"
          src="./image/image2.jpg"
          alt=""
        />
        <img
          @click="weiboGirl"
          class="imageShow"
          src="./image/image3.jpg"
          alt=""
        />
        <img
          @click="cosGirl"
          class="imageShow"
          src="./image/image4.jpg"
          alt=""
        />
        <img
          @click="beautyGirl"
          class="imageShow"
          src="./image/image5.jpg"
          alt=""
        />
        <img
          @click="mmGirl"
          class="imageShow"
          src="./image/image6.png"
          alt=""
        />
        <img
          @click="lastGirl"
          class="imageShow"
          src="./image/image7.png"
          alt=""
        />
      </div>
    </body>
  </div>
</template>

<script>
export default {
  name: 'homePage',
  data() {
    return {};
  },
  methods: {
    randomGirl() {
      this.$router.push('/randomGirl');
    },
    fashionGirl() {
      this.$router.push('/fashionGirl');
    },
    weiboGirl() {
      this.$router.push('/weiboGirl');
    },
    cosGirl() {
      this.$router.push('/cosGirl');
    },
    beautyGirl() {
      this.$router.push('/beautyGirl');
    },
    mmGirl() {
      this.$router.push('/mmGirl');
    },
    lastGirl() {
      this.$router.push('/lastGirl');
    },
  },
};
</script>

<style>
.mainBody {
  display: flex;
  flex: auto;
  justify-content: center;
}
.imageShow {
  width: 200px;
  height: 400px;
  margin: 10px 0 10px 10px;
}
.main {
  width: auto;
  height: 920px;
  background-color: rgb(241, 215, 220);
}
</style>
