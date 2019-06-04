<template>
  <div class="methodContent">
    <el-col :xs="24" :sm="12" :md="12" :lg="8">
      <div  class="card-bg" shadow="hover">
        <i class="el-icon-info"></i>
        <h2 class="cardTitle">{{methodData.title}}</h2>
        <div style="float: right; padding: 3px 0"><font-awesome-icon icon="recycle"/> <span> {{methodData.timesUsed}}</span></div>
        <div style="padding: 0;">
        <p class="beschrijving">{{methodData.discription}}</p>
          <div class="bottom clearfix">
            <el-row type="flex" justify="start" style="margin: 0px;">
              <el-button type="text" class="button">Bekijk details</el-button>
              </el-row>
              <el-row :gutter="24"  style="padding: 0px;">
                <el-col :span="8"><div class="specificaties" style="text-align: left"><font-awesome-icon icon="percentage"/><span> {{methodData.ROI}}</span></div></el-col>
                <el-col :span="8"><div class="specificaties" style="text-align: center"><font-awesome-icon icon="clock"/><span> {{methodData.implementTime}}</span></div></el-col>
                <el-col :span="8"><div class="specificaties" style="text-align: right"><font-awesome-icon icon="euro-sign"/><span> {{methodData.implementCosts}}</span></div></el-col>
              </el-row>
          </div>
        </div>
      </div>
    </el-col>
  </div>

</template>
<script>

export default {
  name: 'MethodCards',
  props: ['methodData'],
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

.cardTitle{
  /* padding: 0 0 0 12px; */
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
    /* margin-bottom: 20px; */
    }
.el-row:last-child {
    margin-bottom: 0;
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
