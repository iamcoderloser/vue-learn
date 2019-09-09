<template>
  <div class="editcustomer container">
    <h1 class="page-header">添加用户</h1>
    <!-- <form method="post" >
        
        
    </form>-->
    <div class="well">
      <div class="form-group">
        <label for="name">姓名</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="请输入姓名"
          v-model="customer.name"
        />
      </div>
      <div class="form-group">
        <label for="phone">电话</label>
        <input
          type="text"
          class="form-control"
          id="phone"
          placeholder="请输入电话"
          v-model="customer.phone"
        />
      </div>
      <div class="form-group">
        <label for="email">邮箱</label>
        <input
          type="text"
          class="form-control"
          id="email"
          placeholder="请输入邮箱"
          v-model="customer.email"
        />
      </div>
      <div class="form-group">
        <label for="edu_background">学历</label>
        <input
          type="text"
          class="form-control"
          id="edu_background"
          placeholder="请输入学历"
          v-model="customer.education"
        />
      </div>
      <div class="form-group">
        <label for="graduate_school">毕业学校</label>
        <input
          type="text"
          class="form-control"
          id="graduate_school"
          placeholder="请输入毕业学校"
          v-model="customer.graduationSchool"
        />
      </div>
      <div class="form-group">
        <label for="job">职业</label>
        <input type="text" class="form-control" id="job" placeholder="请输入职业" v-model="customer.job" />
      </div>

      <div class="form-group">
        <label for="personal_resume">个人简介</label>
        <textarea
          type="text"
          class="form-control"
          rows="10"
          id="personal_resume"
          placeholder="请输入个人简历"
          v-model="customer.profile"
        />
      </div>

      <button type="submit" @click="updateCustomer()" class="btn btn-primary">修改</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "editcustomer",
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
    updateCustomer() {
      var newCustomer = {
        name: this.customer.name,
        phone: this.customer.phone,
        email: this.customer.email,
        education: this.customer.education,
        age: 0,
        graduationSchool: this.customer.graduationSchool,
        job: this.customer.job,
        profile: this.customer.profile
      };

      this.$http
        .put(
          "http://localhost:3000/users/" + this.$route.params.id,
          newCustomer
        )
        .then(function(res) {
          this.$route.push({
            path: "/",
            query: { alert: "用户数据给更新成功！" }
          });
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
