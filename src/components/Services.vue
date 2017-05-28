<template>
  <div>
    <router-link :to="link.href" v-for="link in links" >
    <el-card class="card">
      <div slot="header" class="clearfix">
        <span v-text="link.title">Direct Coupling Analysis</span>
      </div>
      <p v-text="link.intro"></p>
    </el-card>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {href: '/DCA', title: 'DCA', intro: 'Direct coupling analysis'},
        {href: '/network', title: 'Network', intro: 'introduction'},
        {href: '/network-python', title: 'Network Python', intro: 'introduction'},
        {href: '/complex-distance', title: 'Complex Distance', intro: 'introduction'},
        {href: '/dynamical-contact', title: 'Dynamical Contact', intro: 'introduction'},
        {href: '/dynamical-correlation', title: 'Dynamical Correlation', intro: 'introduction'},
        {href: '/structure-distance', title: 'Structure Distance', intro: 'introduction'}
      ]
    }
  }
}
</script>

<style scoped>
  .card {
    color: #2D292E;
    float: left;
    width: 200px;
    margin: 50px;
    height: 200px;
  }
</style>
