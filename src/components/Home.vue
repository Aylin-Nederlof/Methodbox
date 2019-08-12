/* eslint-disable */ 
<template>
<div class="wrapper">

  <Menu>
   <router-link slot="MainCTA" to="/addMethodForm"><MainCTA  class="alignedRight"><font-awesome-icon icon="plus" class="iconMarginRight"/>Methode toevoegen</MainCTA></router-link>
  
  </Menu>

  <div class="main">
      <el-row :gutter="24">
        <el-col :sm="24" :md="24">
        <MethodFilter v-if="this.$store.state.loading === false"></MethodFilter>
        </el-col>
        <el-col :sm="16" :md="24">
        <el-row>
            <el-col :span="12" class="section">
              <el-select v-model="activeOrNoneActive" @change="getActiveOrNoneActive()" class="sort">
                    <el-option value="Actieve methoden">Actieve methoden</el-option>
                    <el-option value="Gearchiveerde methoden">Gearchiveerde methoden</el-option>
                    <el-option value="Alle methoden">Alle methoden</el-option>
                </el-select>
            </el-col>
            <el-col :span="12" class="alignItemsRight section">
              <div class="subTitle"> <b>{{this.$store.state.availableMethods}}</b> passende methoden gevonden</div>
                <el-select v-model="selected" @change="getSortingOption()" class="alignedRight sort">
                   <el-option v-for="option in sortingOptions" :key="option.optionId" :label="option.text" :value="option.order.name + '_' + option.order.direction">{{ option.text }}</el-option>
                </el-select>
            </el-col>
          </el-row>
          </el-col>
          <el-col :sm="24" :md="24">
              <el-row class="methods" :gutter="24" >

                <div v-for="method in OrderedResults" :key="method.id">
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
      activeOrNoneActive: this.$store.state.selected.activeOrNoneActive,
      selected: this.$store.state.selected.sortingOption,
      sortingOptions: {
        costs_asc:               { optionId: 1 ,order: { name: 'costs', direction: 'asc',  object: 'average.costs' }, text: 'kosten - laag naar hoog' },
        costs_desc:              { optionId: 2 ,order: { name: 'costs', direction: 'desc', object: 'average.costs' }, text: 'kosten - hoog naar laag' },
        ROI_asc:                 { optionId: 3 ,order: { name: 'ROI',   direction: 'asc',  object: 'average.ROI'   }, text: 'ROI - laag naar hoog' },
        ROI_desc:                { optionId: 4 ,order: { name: 'ROI',   direction: 'desc', object: 'average.ROI'   }, text: 'ROI - hoog naar laag' },
        totalTime_asc:           { optionId: 5 ,order: { name: 'totalTime', direction: 'asc',  object: 'average.totalTime' }, text: 'Doorlooptijd - laag naar hoog' },
        totalTime_desc:          { optionId: 6 ,order: { name: 'totalTime', direction: 'desc', object: 'average.totalTime' }, text: 'Doorlooptijd - hoog naar laag' },
        implementationTime_asc:  { optionId: 7 ,order: { name: 'implementationTime',   direction: 'asc',  object: 'average.implementationTime'   }, text: 'Implementatietijd - laag naar hoog' },
        implementationTime_desc: { optionId: 8 ,order: { name: 'implementationTime',   direction: 'desc', object: 'average.implementationTime'   }, text: 'Implementatietijd - hoog naar laag' },
        
      },
      // currentOrder: 'gemROI',
    }
  },
  methods: {
    toggleOrder (currentOrder) {
      this.currentOrder = currentOrder
    },
    getActiveOrNoneActive(value) {
      this.selectedstatus = this.activeOrNoneActive
    },
    getSortingOption(value) {
      this.selectedMethodSorting = this.selected
    },
  },
  computed: {
    selectedstatus: {
      get () {
        return this.$store.state.selected.activeOrNoneActive
      },
      set (value) {
        this.$store.commit('changeActiveState', value)
        console.log(this.$store.state.selected.activeOrNoneActive)
      }
    },
    selectedMethodSorting: {
      get () {
        return this.$store.state.selected.sortingOption
       
      },
      set (value) {
        this.$store.commit('changeMethodSortingState', value)
        console.log(this.selected)
      }
    },
    OrderedResults: function () {
      var selected = this.sortingOptions[this.selected]
      // console.log(selected.text)
      return _.orderBy(this.methods, selected.order.object, selected.order.direction)
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
  display: flex;
  flex-wrap: wrap;
  margin: 48px 0;
}

.methods > *,
.methods > * > * {
  display: contents;
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
