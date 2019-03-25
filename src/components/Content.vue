<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: "张扬"
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  padding: 5px 0 0 15px;
}
.logo>img {
  float: left;
  margin-right: 10px;
}
.logo>h2 {
  color: #083ca5;
}
.header-text {
  float: right;
  padding: 15px 60px 0 0;
  font: bold;
}

.row-bg {
  background: #447ed9;
}
.grid-content {
  text-align: center;
  border-radius: 4px;
  min-height: 36px;
  line-height: 36px;
  color: white;
}
</style>
