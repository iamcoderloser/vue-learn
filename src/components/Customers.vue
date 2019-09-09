<template>
  <div class="customers container">
    <Alert v-if="alert" :message="alert" />
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
          <td>
            <router-link class="btn btn-default" :to="'/customerdetail/' + customer.id">详情</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from "./Alert";

export default {
  name: "customers",
  data() {
    return {
      customers: [],
      alert: ""
    };
  },
  methods: {
    fetchCusetomers() {
      this.$http
        .get("http://localhost:3000/users")
        .then(function(res) {
          this.customers = res.body;
        })
        .catch(function(err) {});
    }
  },
  created: function() {
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert;
      this.$route.query.alert = "";
    }
  },
  mounted() {
    this.fetchCusetomers();
  },
  updated: function() {},
  components: {
    Alert
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
