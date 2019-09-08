<template>
  <div class="customers container">
    <h1 class="page-header">用户管理系统</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer,index) in customers" :key="index">
          <td>{{index + 1}}</td>
          <td>{{customer.name}}</td>
          <td>{{customer.phone}}</td>
          <td>{{customer.email}}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default { 
  name: 'customers',
  data () {
    return {
      customers: []
    }
  },
  methods:{
    fetchCusetomers() {
      this.$http.get("http://localhost:3000/users").then(function(res){
        this.customers = res.body;
      }).catch(function(err){})
    }
  },
  mounted() {
    this.fetchCusetomers();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
