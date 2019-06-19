<template>
  <div class="card-bg">
    <h2>Filter door methoden</h2>
    <el-row class="filtergroup"> 
      <div class="filter">
        <label>Categorie</label>
        <div class="categorieën">
          <label class="categorieFilter" for="focus" v-bind:class="[{ 'focusActive active': focusActive }]">
          <input hidden type="checkbox" id="focus" value="Focus" v-model="checkedCategorie" @click="focusToggle()">
          Focus
          </label>

          <label class="categorieFilter" for="visibility" v-bind:class="[{ 'visibilityActive active': visibilityActive }]">
          <input hidden type="checkbox" id="visibility" value="Visibility" v-model="checkedCategorie" @click="visibilityToggle()">
          Visibility
          </label>

          <label class="categorieFilter" for="transfer" v-bind:class="[{ 'transferActive active': transferActive }]">
          <input hidden type="checkbox" id="transfer" value="Transfer" v-model="checkedCategorie" @click="transferToggle()">
          Transfer
          </label>
          
          <label class="categorieFilter" for="fullfil" v-bind:class="[{ 'fullfilActive active': fullfilActive }]">
          <input hidden type="checkbox" id="fullfil" value="Fullfil" v-model="checkedCategorie" @click="fullfilToggle()">
          Fullfil
          </label>
        </div>
      </div>
      <div class="filter">
        <label>Doorlooptijd</label>
        <div class="info">
          
        SUPER SLIDER 1
        <div class="block">
          <el-slider
            v-model="Doorlooptijd"
            range>
          </el-slider>
        </div>

        </div>
      </div>
      <div class="filter">
        <label>Implementatietijd</label>
        <div class="info">
        SUPER SLIDER 2
        <div class="block">
          <el-slider
            v-model="implementatietijd"
            range>
          </el-slider>
        </div>
        </div>
      </div>
      <div class="filter">
        <label>Kosten</label>
        <div class="info">
        SUPER SLIDER 3
        <div class="block">
          <el-slider
            v-model="kosten"
            range>
          </el-slider>
        </div>
        </div>
      </div>
      <div class="filter">
        <label>Doelgroep</label>
        <div class="info">
        Doelgroep dingen
         <div class="block">
           <el-select v-model="doelgroep" multiple collapse-tags placeholder="Doelgroep">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
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
  data () {
    return {
      options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
      doelgroep: [],

      optimalisatie: [],
      tijd: [],
      checkedCategorie: [],
      focusActive: false,
      visibilityActive: false,
      transferActive: false,
      fullfilActive: false,
      Doorlooptijd: [5, 40],
      implementatietijd: [5, 79],
      kosten: [5, 25]
    }
  },
  methods: {
  	focusToggle() {
      this.focusActive = !this.focusActive
    },
    visibilityToggle() {
      this.visibilityActive = !this.visibilityActive
    },
    transferToggle() {
      this.transferActive = !this.transferActive
    },
    fullfilToggle() {
      this.fullfilActive = !this.fullfilActive
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
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)

}

.active{
  color:#fff;
}
.focusActive{      background-color: #DA00FF; }
.visibilityActive{ background-color: #FF005B; }
.transferActive{   background-color: #00B0FF; }
.fullfilActive{    background-color: #FFD500; }

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



</style>
