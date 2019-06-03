<template>
  <div class="methodContent"> 

  <el-col   :xs="24" :sm="12" :md="12" :lg="8">
    <el-card :body-style="{ padding: '16px 16px 0' }" class="method" shadow="hover">
      
      <i class="el-icon-info"></i>
        <h2 class="cardTitle">{{methodData.title}}</h2>
        
        
      <div style="float: right; padding: 3px 0"><font-awesome-icon icon="recycle"/> <span> {{methodData.timesUsed}}</span></div>
      <div style="padding: 0;">
        <p class="beschrijving">{{methodData.discription}}</p>
        <div class="bottom clearfix">
          <el-row type="flex" class="row-bg" justify="start" style="margin: 0px;">
            <el-button type="text" class="button">Bekijk details</el-button>
            </el-row>
            <el-row :gutter="24"  style="padding: 0px;" >
              <el-col :span="8"><div class="specificaties" style="text-align: left"><font-awesome-icon icon="percentage"/><span> {{methodData.ROI}}</span></div></el-col>
             </el-row>
        </div>
      </div>
     
    </el-card>
  </el-col>

  
  
  
  </div> 
</template>

<script>


export default {
  name: 'MethodCards',
  props:['methodData'],
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.methodContent .el-button{
  padding:0;
}
.specificaties{
  padding: 3px 0;
  text-align: center;
}
.method{
  text-align: left;
}

.cardTitle{
  padding: 0 0 0 12px;
  display: inline;
}
 .text {
    font-size: 14px;
  }



  .clearfix:before,
  .clearfix:after {
    float: left;
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  

.el-row {
    margin-bottom: 20px;
    
    }
.el-row:last-child {
      margin-bottom: 0;
}
  .el-col {

    margin-bottom: 20px;
    border-radius: 4px;
  }
  /* .bg-purple-dark {
    background: #99a9bf;
  } */
  /* .bg-purple {
    background: #d3dce6;
  } */
 
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  .row-bg {
    padding: 10px 0;
  }

h1, h2 {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;

  
}
h2{
  font-size: 16px;
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
