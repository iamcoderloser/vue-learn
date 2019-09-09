<template>
  <div class="customerdetail container">
    <router-link to="/" class="btn btn-default">返回</router-link>
    <h1 class="page-header">
      {{customer.name}}
      <router-link class="btn btn-primary pull-right" :to="'/editcustomer/' + customer.id">编辑</router-link>
      <span class="pull-right" style="color:rgba(1,1,1,0);font-size:8px;">xxx</span>
      <button class="btn btn-danger pull-right" @click="deleteCustomer(customer.id)">删除</button>
    </h1>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-phone">&nbsp; &nbsp; {{customer.phone}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-print">&nbsp; &nbsp; {{customer.email}}</span>
      </li>
    </ul>

    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-print">&nbsp; &nbsp; {{customer.education}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-briefcase">&nbsp; &nbsp; {{customer.graduationSchool}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-print">&nbsp; &nbsp; {{customer.job}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-print">&nbsp; &nbsp; {{customer.profile}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
// import func from "../../vue-temp/vue-editor-bridge";
export default {
  name: "customerdetail",
  data() {
    return {
      customer: {}
    };
  },
  methods: {
    fetchCusetomer(id) {
      this.$http
        .get("http://localhost:3000/users/" + id)
        .then(function(res) {
          this.customer = res.body;
        })
        .catch(function(err) {});
    },
    deleteCustomer(id) {
      this.$http
        .delete("http://localhost:3000/users/" + id)
        .then(function(res) {
          this.$router.push({ path: "/", query: { alert: "用户删除成功！" } });
        })
        .catch(function(err) {});
    }
  },
  created() {
    this.fetchCusetomer(this.$route.params.id);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
