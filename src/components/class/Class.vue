<template>
    <div>
        <!--面包屑导航-->
        <el-breadcrumb class="bread" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>我的课程</el-breadcrumb-item>
        </el-breadcrumb>

        <!--card-->
        <el-card class="box-card" style="height:100%">
            <div>
                <!--搜索栏-->
                <div style="margin-top: 15px;">
                    <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
                        <el-select v-model="select" slot="prepend" placeholder="请选择">
                            <el-option label="教练" value="1"></el-option>
                            <el-option label="类型" value="2"></el-option>
                            <el-option label="地点" value="3"></el-option>
                        </el-select>
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>

                <!--表单-->
                <template >
                    <el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                     <el-table-column
                        fixed
                        prop="date"
                        label="日期"
                     width="200">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="教练"
                        width="70">
                    </el-table-column>
                    <el-table-column
                        prop="province"
                        label="类型"
                        width="70">
                    </el-table-column>
                    <el-table-column
                        prop="city"
                        label="进度"
                        width="70">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="地址"
                        width="300">
                    </el-table-column>
                    <el-table-column
                        prop="zip"
                        label="内容"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        fixed="right"
                        label="作业"
                        width="100">
                    <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
                    <el-button type="text" size="small">评价</el-button>
                    </template>
                    </el-table-column>
                    </el-table>   
                </template>

                <div class="block" style="transform:translate(35%)">
                    <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
                </div>
            </div>
        </el-card>
    </div>
</template>


<script>
export default {
      data() {
    return {
      input: '',
      select: '教练',
      tableData: [{
          date: '2016-05-02 15:30',
          name: 'coach',
          province: '南京',
          city: '0%',
          address: '南京市XXXXXXXXXXXXXXX',
          zip: 200333
        }, {
          date: '2016-05-04 15:30',
          name: 'coach',
          province: '南京',
          city: '10%',
          address: '南京市XXXXXXXXXXXXXXX',
          zip: 200333
        }, {
          date: '2016-05-01 15:30',
          name: 'coach',
          province: '南京',
          city: '20%',
          address: '南京市XXXXXXXXXXXXXXX',
          zip: 200333
        }, {
          date: '2016-05-03 15:30',
          name: 'coach',
          province: '南京',
          city: '30%',
          address: '南京市XXXXXXXXXXXXXXX',
          zip: 200333
        }]
      }
    }
  }


</script>


<style lang="less" scoped>
.el-select  {
    width: 80px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

/*
.text {
    font-size: 14px;
  }

  .item {
    padding: 10px 0;
  }

  .box-card {
    margin:10px;
    left:10px;
    width: 480px;
  }
  */
</style>