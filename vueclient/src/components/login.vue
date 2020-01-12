<template>
<div>
<!--  登录-->
  <el-form class="form">
    <h2>系统登录</h2>
    <el-form-item >
      <el-input  placeholder="用户名" v-model="username"> </el-input>
    </el-form-item>

    <el-form-item >
      <el-input type="password"  placeholder="密码" v-model="password"> </el-input>
    </el-form-item>

    <el-form-item >

      <el-button :disabled="disableBtn" type="primary" @click=login>{{loginText}}</el-button>

      <el-button @click=refresh>重置</el-button>

    </el-form-item>


  </el-form>



</div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                loginText:"登录",
                disableBtn:false,
                username:'admin',
                password:'123456'


            }
        },
        methods:{
            login(){
                this.disableBtn=true
                this.loginText="登录中。。。"
                this.$axios.post('/users/login',{
                    username:this.username,
                    password:this.password

                }).then((res)=>{
                    console.log(1,res);
                    this.disableBtn=false
                    this.loginText="登录"
                }).catch((res)=>{
                    console.log(2,res);
                    this.disableBtn=false
                    this.loginText="登录"
                })

            },
            refresh(){

            }


        },
    }
</script>

<style lang="scss" scoped>
  .form{
    width: 600px;
  }

</style>
