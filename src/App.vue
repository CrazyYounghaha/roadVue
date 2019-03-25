<template>
  <div>
    <Header />
    <Content />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Content from '@/components/Content'

export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    Header: Header,
    Content: Content
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
