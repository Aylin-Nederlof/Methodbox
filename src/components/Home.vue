/* eslint-disable */ 
<template>
<div class="wrapper">

  <Menu>
   <router-link slot="MainCTA" to="/addMethodForm"><MainCTA  class="alignedRight"><font-awesome-icon icon="plus" class="iconMarginRight"/>Methode toevoegen</MainCTA></router-link>
  
  </Menu>

  <div class="main">
      <el-row :gutter="24">
        <el-col :sm="24" :md="24">
        <MethodFilter></MethodFilter>
        </el-col>
        <el-col :sm="16" :md="24">
        <el-row>
            <el-col :span="12" class="section">
              <select class="sorteer">
                    <option value="Actief">Actieve methoden</option>
                    <option value="Gearchiveerde">Gearchiveerde methoden</option>
                    <option value="Alles">Alle methoden</option>
                </select>
            </el-col>
            <el-col :span="12" class="alignItemsRight section">
              <div class="subTitle"> <b>....</b> passende methoden gevonden</div>
                <select v-model="currentOrder" class="alignedRight sorteer">
                    <option value="gemcosts">Sorteer op kosten</option>
                    <option value="gemROI">Sorteer op ROI</option>
                </select>
            </el-col>
          </el-row>
          </el-col>
          <el-col :sm="24" :md="24">
              <el-row class="methods" :gutter="24" >
                <div v-for="method in methods" :key="method.id">
                  <MethodCards :methodData="method"></MethodCards>
                </div>
              </el-row>
          </el-col>
      </el-row>
      </div>
  </div>
</template>

<script>
import MethodFilter from './MethodFilter.vue'
import MethodCards from './MethodCards.vue'
import Menu from './menu.vue'
import MainCTA from './MainCTA.vue'
import SecondCTA from './SecondCTA.vue'
import thirdCTA from './thirdCTA.vue'
import doelgroepTag from './doelgroepTag.vue'
import Result from './Result.vue'



export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      checked: true,
      currentOrder: 'gemROI',
    }
  },
  methods: {
    toggleOrder (currentOrder) {
      this.currentOrder = currentOrder
    },
    getAverage: function (name, decimalPlaces) {
      let sum = 0
      let results = this.methods.clientResults
      let divider = results.length
      for (let i = 0; i < divider; i++) sum += results[i][name]

      decimalPlaces = Math.floor(decimalPlaces || 0)
      if (decimalPlaces) {
        let avg = '0'.repeat(decimalPlaces) + Math.round(sum / divider * Math.pow(10, decimalPlaces))
        console.log(avg)
        return parseFloat(avg.slice(0, decimalPlaces * -1) + '.' + avg.slice(decimalPlaces * -1))
      } else {
        return Math.round(sum / divider)
      }
    }
  },
  computed: {
    OrderedResults: function () {
      console.log(this.currentOrder)
      return _.orderBy(this.methods, [this.currentOrder])
    },
    totalTvCount () {
      return this.$store.state.totalTvCount
    },
    methods () {
      return this.$store.state.methods
    }
  },
  components: {MethodCards, MethodFilter, MainCTA, SecondCTA, thirdCTA, Menu, doelgroepTag, Result}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media only screen and (min-width: 1200px) {
 .main{
  margin: 0 24px;
}
}
@media only screen and (min-width: 1920px) {
 .main{
  width: 80%;
  margin: 0 auto;
}
}
.section{
  display: flex;
  align-items: center;
}

.methods{
  margin: 56px 0;
}

.el-row {
    margin-bottom: 20px;
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
/* a {
  color: #42b983;
} */
</style>
