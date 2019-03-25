<template>
  <div>
    <el-row>
      <el-col :span="10">
        <div class="logo">
          <img src="../assets/logo_road.png">
          <h2>公路舱单</h2>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="header-text">
          <el-breadcrumb separator="|">
            <el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-edit"></i>欢迎您,{{username}}</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">门户</a></el-breadcrumb-item>
            <el-breadcrumb-item>设置</el-breadcrumb-item>
            <el-breadcrumb-item>退出</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg">
      <el-col :span="2">
        <div class="grid-content bg-purple">
          <el-switch v-model="isCollapse" :change="changeFlag()" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </div>
      </el-col>
      <el-col :span="2" :offset="1">
        <div class="grid-content bg-purple">
          <router-link to="/left">进出口业务</router-link>
        </div>
      </el-col>
      <el-col :span="2" :offset="1">
        <div class="grid-content bg-purple-light">
          <router-link to="/right">公共查询</router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: "张扬",
      isCollapse: true
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    changeFlag () {
      // console.log(this.isCollapse)
      this.$store.commit('changeFlag', { isCollapse: this.isCollapse});
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
  text-decoration: none;
}
</style>
