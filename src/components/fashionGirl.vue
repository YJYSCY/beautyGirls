<template>
  <div>
    <h1>
      LOOK⬇
      <button style="position: absolute; margin-left: 1200px" @click="back">
        返回
      </button>
      <button
        style="position: absolute; margin-left: 1300px"
        @click="fetchImages"
      >
        刷新
      </button>
    </h1>

    <div v-if="images.length" class="image-gallery">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="image-container"
      >
        <img :src="image" :alt="'图片 ' + (index + 1)" />
      </div>
    </div>
    <div v-else>加载中...</div>
  </div>
</template>

<script>
export default {
  name: 'randomGirl',
  created() {
    this.fetchImages();
  },
  data() {
    return {
      images: [],
    };
  },
  methods: {
    back() {
      this.$router.push('/');
    },
    async fetchImages() {
      this.images = []; // 清空图片数组https://api.yujn.cn/api/qlyx.php?type=json&count=10
      try {
        const response = await this.$axios.get(
          'https://api.yujn.cn/api/qlyx.php?type=json&count=10'
        );
        // console.log(response);

        const data = response.data;
        this.images = data.img;
      } catch (error) {
        console.error('请求出错:', error);
      }
    },
  },
};
</script>

<style>
.image-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* 图片之间的间距 */
}

.image-container {
  flex: 1 1 200px; /* 每个图片容器的最小宽度为200px */
  margin: 10px 0;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
button {
  padding: 10px 20px;
  margin-bottom: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
