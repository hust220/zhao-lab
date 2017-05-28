<template>
  <div class="top-nav" :style="'height:'+height+'px'">
    <a href="http://zhao.phy.ccnu.edu.cn"><div class="link"><i class="el-icon-caret-left"></i>Zhao Lab</div></a>
    <router-link :to="link.href" v-for="link in links"><div class="link" v-text="link.title"></div></router-link>
  </div>
</template>

<script>
  export default {
    name: 'nav',
    data() {
      return {
        links: [
          {href: '/DCA', title: 'DCA'},
          {href: '/network', title: 'Network'},
          {href: '/network-python', title: 'Network Python'},
          {href: '/complex-distance', title: 'Complex Distance'},
          {href: '/dynamical-contact', title: 'Dynamical Contact'},
          {href: '/dynamical-correlation', title: 'Dynamical Correlation'},
          {href: '/structure-distance', title: 'Structure Distance'}
        ],
        height: 0
      }
    },
    methods: {
      set_height() {
        this.height = window.innerHeight
      }
    },
    mounted() {
      var v = this
      v.set_height()
      window.addEventListener('resize', () => { v.set_height() })
    }
  }
</script>

<style scoped>
a {
  color: rgb(191, 203, 217);
  text-decoration: none;
}
.top-nav {
  background-color: rgb(50, 65, 87);
  position: fixed;
  overflow-y: auto;
}
.top-nav .link {
  padding: 20px;
}
.top-nav .link:hover {
  background-color: rgb(72, 87, 106);
}
</style>
