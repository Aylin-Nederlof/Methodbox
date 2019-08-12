<template>
  <div class="card-bg">
    <h2>Filter door methoden</h2>
    <el-row class="filtergroup"> 
      <div class="filter">
        <label>Categorie</label>
        <div class="categorieën">
          <label class="categorieFilter focusHover" for="focus" v-bind:class="[{ 'focusActive active': this.$store.state.selected.category.includes('Focus') }]">
          <input hidden type="checkbox" id="focus" value="Focus" v-model="checkedCategorie" @change="getSelectedCategory()">
          Focus
       
          </label>
<!-- @click="categoryActive() -->

          <label class="categorieFilter visibilityHover" for="visibility" v-bind:class="[{ 'visibilityActive active': this.$store.state.selected.category.includes('Visibility') }]">
          <input hidden type="checkbox" id="visibility" value="Visibility" v-model="checkedCategorie"  @change="getSelectedCategory()">
          Visibility
          </label>

          <label class="categorieFilter transferHover" for="transfer" v-bind:class="[{ 'transferActive active': this.$store.state.selected.category.includes('Transfer') }]">
          <input hidden type="checkbox" id="transfer" value="Transfer" v-model="checkedCategorie"  @change="getSelectedCategory()">
          Transfer
          </label>
          
          <label class="categorieFilter fullfilHover" for="fullfil" v-bind:class="[{ 'fullfilActive active': this.$store.state.selected.category.includes('Fullfil') }]">
          <input hidden type="checkbox" id="fullfil" value="Fullfil" v-model="checkedCategorie"  @change="getSelectedCategory()">
          Fullfil
          </label>
        </div>
      </div>
      <div class="filter">
        <label>Doorlooptijd</label>
        
        <div class="info">
          Aantal dagen:
          <br> {{totalTime[0]}}d - {{totalTime[1]}}d
       
        <div class="block">
          <el-slider
            :min="range.totalTime[0]"
            :max="range.totalTime[1]"
            @change="getSelectedTotalTime()"
            v-model="totalTime"
            range>
          </el-slider>
        </div>

        </div>
      </div>
      <div class="filter">
        <label>Implementatietijd</label>
        <div class="info">
        Aantal uren:
          <br> {{implementationTime[0]}}u - {{implementationTime[1]}}u
        <div class="block">
          <el-slider
            :min="range.implementationTime[0]"
            :max="range.implementationTime[1]"
            @change="getSelectedImplementationTime()"
            v-model="implementationTime"
            range>
          </el-slider>
        </div>
        </div>
      </div>
      <div class="filter">
        <label>Kosten</label>
        <div class="info">
         Budget:
          <br> €{{costs[0]}} - €{{costs[1]}}
        <div class="block">
          <el-slider
            v-model="costs"
            :min="range.costs[0]"
            :max="range.costs[1]"
            @change="getSelectedCosts()"
            range>
          </el-slider>
        </div>
        </div>
      </div>
      <div class="filter">
        <label>Doelgroep</label>
        <div class="targetAudience">
       Geselecteerde doelgroep:
      
         <div class="targetAudienceDropdown">
           <el-select @change="getSelectedTargetAudience()" v-model="targetAudience" multiple collapse-tags placeholder="Doelgroep">
            <el-option  v-for="doelgroep in doelgroepen" :key="doelgroep"  :label="doelgroep" :value="doelgroep"></el-option>
          </el-select>
         </div>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'MethodFilter',
  data: function () {
    return {
      targetAudience: this.$store.state.selected.targetAudience,
      optimalisatie: [],
      tijd: [],
      checkedCategorie:  this.$store.state.selected.category,
      totalTime: this.selectedMinMax('totalTime'),
      implementationTime: this.selectedMinMax('implementationTime'),
      costs: this.selectedMinMax('costs'),
      range: {
        totalTime: this.MinMax('totalTime'),
        implementationTime: this.MinMax('implementationTime'),
        costs: this.MinMax('costs')
      }
    }
  },
  methods: {
    // categoryActive(value) {
    //   // console.log(this.$store.state[value + 'Active'])
    //   return this.$store.state[value + 'Active']
    //   console.log(this.$store.state[value + 'Active'])
    // },
  
    getSelectedCategory() {

      if(!this.$store.state.selected.category.length === -1){
        this.selectedCategory =  this.$store.state.selected.category
      }
      else{
        this.selectedCategory = this.checkedCategorie
      }
      
    },
    getSelectedTargetAudience(value) {
      if(!this.$store.state.selected.targetAudience.length === -1){
        this.selectedTargetAudience =  this.$store.state.selected.targetAudience 
      }
      else{
        this.selectedTargetAudience = this.targetAudience
      }
    },
    getSelectedTotalTime(value) {
      this.selectedTotalTime = this.totalTime
    },
    getSelectedImplementationTime(value) {
      this.selectedImplementationTime = this.implementationTime
    },
    getSelectedCosts(value) {
      this.selectedCosts = this.costs
    },
    MinMax(value) {
      // console.log(this.$store.state.minMax[value])
      return this.$store.state.minMax[value]
    },
    selectedMinMax(value) {
      // console.log(this.$store.state.minMax[value])
      return this.$store.state.selected[value]
    }
    

  },
  computed: {
    selectedCategory: {
      get () {
        return this.$store.state.selected.category
      },
      set (value) {
        this.$store.commit('filterArrayWithString', { name: 'category', value: value })
        // console.log(this.$store.state.selectedCategory)
      }
    },
    selectedTargetAudience: {
      get () {
        return this.$store.state.selected.targetAudience
      },
      set (value) {
        this.$store.commit('filterArrayWithArray', { name: 'targetAudience', value: value })
        // console.log(this.$store.state.selectedCategory)
      }     
    },
    selectedTotalTime: {
      get () {
        return this.$store.state.selected.totalTime
      },
      set (value) {
        this.$store.commit('filterMinMax', { name: 'totalTime', value: value })
        // console.log(this.$store.state.selectedCategory)
      }     
    },
    selectedImplementationTime: {
      get () {
        return this.$store.state.selected.implementationTime
      },
      set (value) {
        this.$store.commit('filterMinMax', { name: 'implementationTime', value: value })
        // console.log(this.$store.state.selectedCategory)
      }     
    },
    selectedCosts: {
      get () {
        return this.$store.state.selected.costs
      },
      set (value) {
        this.$store.commit('filterMinMax', { name: 'costs', value: value })
        // console.log(this.$store.state.selectedCategory)
      }     
    },
    doelgroepen () {
      var o = 0;
      var length = this.$store.state.allMethods.length;
      var array = []
      var allGroups = []
      for (; o < length; ) {
          array = this.$store.state.allMethods[o].targetAudience
          o++
          allGroups = allGroups.concat(array);
      }
      var uniq = [...new Set(allGroups)];
      return uniq
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("//unpkg.com/element-ui@2.9.1/lib/theme-chalk/index.css");
h3{
  width: 100%;
}
.targetAudience{
  display: flex;
  flex-wrap: wrap;
}
input.el-input__inner:hover {
      border-color: #00B0FF !important;
}
.targetAudienceDropdown, .targetAudienceDropdown .el-select{
  width: 100%;
  display: flex;
  align-self: flex-end;
}

.filtergroup{
  margin: -16px -12px -8px;
  display: flex;
  flex-wrap: wrap;
}

.filter{ 
  display: flex;
  flex-wrap: wrap;
  /* background-color: rgb(38, 175, 107); */
  margin: 24px 12px 8px;
  width:18.22%;
}

.filter .info{
  align-self: flex-end;
  justify-self:flex-start; 
  width: 90%;
}
.filter label:first-child{
  margin-bottom: 8px;
}
.categorieën{
  display: flex;
  flex-wrap: wrap;
  /* width: 100%; */
 margin: -8px;


 /* text-align: left; */
}
.categorieFilter{
  margin: 8px !important; 
  padding: 8px 16px;
  /* border: 1px solid black; */
  text-align: center;
  border-radius: 4px;
  background-color: #E4E8EB;
  color: #7B8794;
}

.categorieFilter:hover{
  border: 2px solid rgba(255, 255, 255, 0.0);
  margin: 6px !important;
  cursor: pointer;
}

.active{
  color:#fff;
}

.focusHover{      background-color: #F9CCFF; color: #870099} 
.visibilityHover{ background-color: #FFF7CC; color: #998100}
.transferHover{   background-color: #CCEFFF; color: #006999}
.fullfilHover{    background-color: #FFCCDE; color: #990036} 
/* .focusHover{      background-color: #F399FF; color: #FFF}
.visibilityHover{ background-color: #FFEF99; color: #FFF}
.transferHover{   background-color: #99DFFF; color: #FFF}
.fullfilHover{    background-color: #FF99BD; color: #FFF} */
.focusActive{           background-color: #DA00FF; color: #FFF}
.visibilityActive{      background-color: #FFD500; color: #FFF}
.transferActive{        background-color: #00B0FF; color: #FFF}
.fullfilActive{         background-color: #FF005B; color: #FFF}

.el-select-dropdown{
  width:10%;
}

li.el-select-dropdown__item{
  width: 100% !important;
  display: block;
  margin: 0;
}

.el-select .el-input__inner {
  border: 1px solid #CBD2D9;

}
.el-select .el-input .el-select__caret{
  color: #1F2933;
}
.el-tag.el-tag--info {
    background-color: #F5F8FA;;
    border-color: #e9e9eb;
    color: #1F2933;
}

.el-slider__button{
  width: 16px;
  height: 16px;
  border: none;
  background-color: #3E4B59;
}
.el-slider__button-wrapper {
    height: 16px;
    width: 16px;
    top:-11px
}

.el-slider__bar {
    height: 2px;
    background-color: #3E4B59;
}
.el-slider__runway {
    background-color: #CBD2D9;
    height: 2px;
    margin: 16px 0 8px
}
.el-tooltip.el-slider__button {
    margin-left: 8px;
}
   

</style>
