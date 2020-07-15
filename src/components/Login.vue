<template>
    <div class="login_container">
        <div class="login_box">
        
            <!--头像-->
            <div class="avator_box">
                <img src="../assets/logo.png" alt="">
            </div>
        

            <!--表单-->
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="65px" class="log_form">
                <el-form-item label="用户名" prop="username">
                     <el-input v-model="loginForm.username" placeholder="username" prefix-icon="el-icon-user"></el-input>
                </el-form-item>
                 <el-form-item label="密码" prop="password">
                     <el-input v-model="loginForm.password" placeholder="password" prefix-icon="el-icon-key" type="password"></el-input>
                </el-form-item>
                <el-form-item class="bts">
                      <el-button type="primary" @click="login()">登录</el-button>
                      <el-button type="info" @click="resetloginForm()">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
        
        
    </div>

</template>

<script>
export default {
    data(){
        return{
            //登录表单的数据绑定对象
            loginForm:{
                username:'默认用户名',
                password:'123456'
            },
        //表单验证规则
        loginFormRules:{
            //验证用户名
            username:[
                { required: true, message: '请输入用户名', trigger: 'blur' },
                { min:3, max:10,message:"长度为3-10个字符", trigger:'blur'}
            ],
            //验证密码
            password:[
                { required: true, message: '请输入密码', trigger: 'blur' },
                { min:8, message:"长度至少为8个字符", trigger:'blur'}
                ]
        }
        };
    },
    
    methods:{
        resetloginForm(){
            this.$refs.loginFormRef.resetFields();
        },
        //预校验
        login(){
            this.$refs.loginFormRef.validate(async valid=> {
                if(!valid) return;
                const{data:res}=await this.$http.post('login',this.loginForm)
                if(res.meta.status !== 200) return this.$message.error("登录失败");
                this.$message.success("登录成功");

                window.sessionStorage.setItem("token",res.data.token);
                this.$router.push('/home')
            });
        }
    }
};
</script>

<style lang="less" scoped>
.login_container{
    background-color:#2b4b6b;
    height:100%;
}

.login_box{
    width:500px;
    height:400px;
    background-color:#fff;
    border-radius:7px;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%)
}

.avator_box{
    height:130px;
    width: 130px;
    padding:10px;
    border-radius:50%;
    box-shadow: 0 0 10px #fff;
    position: absolute;
    left:50%;
    transform: translate(-50%,-50%);
    background-color:#fff;
    img{
        width:100%;
        height:100%;
        border-radius:50%;
        border:2px;
    }
}

.log_form{
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    width: 100%;
    padding:20px;
    box-sizing: border-box;
}


.bts{
    display:flex;
    justify-content: flex-end;
}
</style>