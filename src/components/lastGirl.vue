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

    <div class="image-gallery">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="image-container"
      >
        <img :src="image" alt="图片" />
      </div>
    </div>
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
      images: [], // 初始化为空数组，用于存储多个图片的 URL
    };
  },
  methods: {
    back() {
      this.$router.push('/');
    },
    async fetchImages() {
      this.images = []; // 清空数组http://api.yujn.cn/api/xiezhen.php?type=json
      for (let i = 0; i < 4; i++) {
        try {
          const response = await this.$axios.get(
            'https://api.yujn.cn/api/xiezhen.php?type=json'
          );
          //   console.log(response);
          this.images.push(response.data.img); // 将每次请求到的图片 URL 添加到数组中
        } catch (error) {
          console.error('请求出错:', error);
        }
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
