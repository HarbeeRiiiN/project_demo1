<template>
    <el-container class="home_container">
        <!--头部区域-->
        <el-header>
            <div clss="lazymanlogo">
            <img src="../assets/lazyman_logo.png" alt="">
            <span style="margin-left:15px" class="header_text">Lazyman智慧健身平台</span>
            </div>


        <el-button class="exit_button" type="info" @click="logout">退出登录</el-button></el-header>
        
        <!--body区域-->
    <el-container>
        <el-aside :width="isCollapse ? '65px' : '200px'"> 
            <!--折叠条-->
            <div class="toggle-button" @click="toggleCollapse()">|||</div>
            <el-row class="tac">
                <el-col :span="12">
                    <el-menu
                    :collapse="isCollapse"
                    default-active="/myClass"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#6e6e6e"
                    text-color="#fff"
                    active-text-color="#8ee7a3"
                    :collapse-transition="false"
                    router
                    >
                    
                    <!--这个地方路由有问题！-->
                    <el-submenu index="/User">
                        <template slot="title">
                            <i class="el-icon-user-solid"></i>
                            <span>username</span>
                        </template>

                        <el-menu-item-group router title="用户信息"> 
                             <el-menu-item index="/userinfo">基本信息</el-menu-item>
                             <el-menu-item index="/order">历史订单</el-menu-item>
                        </el-menu-item-group>

                        <el-menu-item-group router title="我的消息">
                            <el-menu-item index="/message">系统消息</el-menu-item>
                        
                        </el-menu-item-group>

                        
                        <!--
                        <el-submenu index="/alert">
                            <template slot="title">课程提醒</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item> 
                        </el-submenu>-->
                    </el-submenu>

                    <!--权限管理-->
                    <el-submenu index="/roles">
                        <template slot="title">
                            <i class="el-icon-user-solid"></i>
                            <span>权限管理</span>
                        </template>

                        <el-menu-item-group router> 
                             <el-menu-item index="/cha">角色列表</el-menu-item>
                             <el-menu-item index="/role">权限列表</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>


                    <el-menu-item index="/myClass">
                        <i class="el-icon-menu"></i>
                        <span slot="title">我的课程</span>
                    </el-menu-item>
                    <el-menu-item index="/myVenues">
                        <i class="el-icon-place"></i>
                        <span slot="title">我的场馆</span>
                     </el-menu-item>
                    <el-menu-item index="/Data">
                        <i class="el-icon-s-data"></i>
                        <span slot="title">运动数据</span>
                    </el-menu-item>

                    <el-menu-item index="/Settings">
                        <i class="el-icon-setting"></i>
                        <span slot="title">设置</span>
                    </el-menu-item>



                    </el-menu>
                </el-col>
            </el-row>
        </el-aside>
        
        
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>

    </el-container>
</template>

<script>
export default {
    data(){
        return{
        isCollapse: false
        }
    },
    methods:{
        logout(){
            window.sessionStorage.clear()
            this.$router.push('/login')
        },
        
        //折叠导航栏                                                    ??????????????????????
        toggleCollapse(){
            this.isCollapse = !this.isCollapse
        }
    }
}
</script>

<style lang="less" scoped>
.exit_button{
    right: 0;
}

.lazymanlogo{
    padding:5px;
    left:s0px;
}


.home_container{
    height: 100%;
}
.el-header{
    background-color: #d0d0d0;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
    font-size: 20px;
    > div{
        display: flex;
        align-items:center
    }
}

.el-aside{
    background-color: #6e6e6e;
    height: 100%;
    .el-menu{
        border-right: none;
    }
}

.el-main{
    background-color: #e5e5e5;
}

.toggle-button{
    background-color:#cacaca;
    font-size: 14px;
    line-height: 24px;
    color:#5b5b5b;
    text-align:center;
    letter-spacing: 1.5px;
    cursor:pointer;
}

</style>