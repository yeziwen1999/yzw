<template>

  <div>
    <el-button type="primary" icon="el-icon-plus">添加</el-button>
    <el-table style="width: 100%" border :data="records">
      <el-table-column type="index" label="序号" width="100px" align="center">
      </el-table-column>
      <el-table-column  label="品牌名称" width="width">
      </el-table-column>
      <el-table-column  label="品牌LOGO" width="width">
      </el-table-column>
      <el-table-column  label="操作" width="width">
      </el-table-column>
    </el-table>
    <!-- //   @size-change="handleSizeChange" -->
      <!-- @current-change="handleCurrentChange" -->
    <el-pagination
    style='text-align:center;margin-top:20px'
      :current-page="6"
      :total="99"
      :page-size="3"
      :page-sizes="[3, 5, 10]"
      layout="prev,pager,next,jumper,->,total,sizes"
      >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "tradmark",
  data(){
    return{
      limit:3,
      page:1,
      records:[],
      total:0
    }
  },
  mounted(){
    //页面加载时获取品牌列表
    this.getTradMarkList();
  },
  methods:{
    //定义品牌列表的获取
  async  getTradMarkList(){
  let result=  await  this.$API.tradmark.reqTradmarkList(this.page,this.limit)
  if(result.code==200){
    this.total = result.data.total,
    this.records = result.data.records
    console.log(this.total);
    console.log(this.records);
  }
    }
  }
};
</script>

<style>
</style>