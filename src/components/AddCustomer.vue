<template>
  <div class="addcustomer container">
    <h1 class="page-header">添加用户</h1>
    <form >
        <div class="well">
          
          <div class="form-group">
            <label for="name">姓名</label>
            <input type="text" class="form-control" id="name" placeholder="请输入姓名" v-model="customer.name">
          </div>
          <div class="form-group">
            <label for="phone">电话</label>
            <input type="text" class="form-control" id="phone" placeholder="请输入电话" v-model="customer.phone">
            
            
          </div>
          <div class="form-group">
            <label for="email">邮箱</label>
            <input type="text" class="form-control" id="email" placeholder="请输入邮箱" v-model="customer.email">
            
            
          </div>
          <div class="form-group">
            <label for="edu_background">学历</label>
            <input type="text" class="form-control" id="edu_background" placeholder="请输入学历" v-model="customer.edu_background">
            
            
          </div>
          <div class="form-group">
            <label for="graduate_school">毕业学校</label>
            <input type="text" class="form-control" id="graduate_school" placeholder="请输入毕业学校" v-model="customer.graduate_school">
            
            
          </div>
          <div class="form-group">
            <label for="job">职业</label>
            <input type="text" class="form-control" id="job" placeholder="请输入职业" v-model="customer.job"/>
            
            
          </div>

          <div class="form-group">
            <label for="personal_resume">个人简介</label>
            <textarea type="text" class="form-control" rows="10" id="personal_resume" placeholder="请输入个人简历" v-model="customer.personal_resume"/>
          </div>
          

          <button type="submit" @click="addCustomer" class="btn btn-primary">添加 </button> 
        </div>
        
    </form>
  </div>
</template>

<script>
// import func from '../../vue-temp/vue-editor-bridge';
export default {
  name: 'addcustomer',
  data () {
    return{
      customer:{name:'',phone:'',email:'',education:'',age:0,graduationSchool:'',job:'',profile:''}
    }
  },
  methods:{
      addCustomer(e) {
        if (!this.customer.name || !this.customer.phone || !this.customer.email) {
          alert('必填信息未填');
          e.preventDetault();
        }else {
          
          var newCustomer = {
            name:this.customer.name,
            phone:this.customer.phone,
            email:this.customer.email,
            education:this.customer.edu_background,
            age:0,
            graduationSchool:this.customer.job,
            job:this.customer.job,
            profile:this.customer.personal_resume
          }

          console.log(newCustomer);
          this.$http.post("http://localhost:3000/users",newCustomer).
            then(function(res){
              console.log(res);
            }).
            catch(function(err){})
          // alert(JSON.stringify(newCustomer));
          e.preventDetault();


        //   this.$http({
        //     'url':'http://localhost:3000/users',
        //     'method':'POST',
        //     'data':newCustomer,
        //     'headers': {
        //     'Content-Type': 'x-www-from-urlencoded'
        //     }
        //   }).
        //   then(function(res) {
        //     console.log(res);
        //   }).
        //   catch(function(err) {})
          
        }
        
        e.preventDetault();
      }
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
