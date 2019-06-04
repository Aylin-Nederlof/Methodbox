<template>
  <div class="methodContent">
    <el-col :xs="24" :sm="12" :md="12" :lg="8">
      <div class="card-bg">
        <el-row>
          <el-col :span="20">
            <div class="categoryTitle">
              <div class="categorie" v-bind:style="{ backgroundColor: categorieKleur }"></div>
              <div>
                <h2>{{methodData.title}}</h2>
                <div class="subTitle">{{methodData.category}} - {{methodData.subCategory}}</div>
              </div>
            </div>
          </el-col>
          <el-col :span="4" class="alignItemsRight">{{methodData.timesUsed}}x</el-col>
        </el-row>
        <el-row>
          <div class="beschrijving">
            <p>{{methodData.discription}}</p>
          </div>
        </el-row>
        <el-row>
          <label>Doelgroep:</label>
          <div class="doelgroep">
              <doelgroepTag v-for="(doelgroeptag, index) in methodData.doelgroep" :key="index">{{doelgroeptag}}</doelgroepTag>
          </div>
        </el-row>

      </div>
    </el-col>
    <!-- <el-col :xs="24" :sm="12" :md="12" :lg="8">
      <div  class="card-bg" shadow="hover">
        <div class="categorie"></div>
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
    </el-col> -->
  </div>
</template>
<script>
import thirdCTA from './thirdCTA.vue'
import doelgroepTag from './doelgroepTag.vue'

export default {
  name: 'MethodCards',
  props: ['methodData'],
  data () {
    return {

    }
  },
  computed: {
    categorieKleur: function () {
      var kleur = ''
      if (this.methodData.category === 'focus') {
        kleur = 'rgba(218,0,255,1)'
      } else if (this.methodData.category === 'visibility') {
        kleur = 'rgba(255,0,91,1)'
      } else if (this.methodData.category === 'transfer') {
        kleur = 'rgba(0,176,255,1)'
      } else if (this.methodData.category === 'fulfill') {
        kleur = 'rgba(255,213,0,1)'
      } else {
        kleur = 'deze'
      }
      return kleur
    }
  },
    components: {thirdCTA, doelgroepTag}

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.categorie{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin:0 16px 0 0;
}

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
