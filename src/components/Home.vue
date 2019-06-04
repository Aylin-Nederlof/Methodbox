<template>
<div class="wrapper">
  <div class="menu">
  <el-row type="flex"  class="menu-bg" justify="space-between" align="middle">
      <el-col :sm="8" :md="10" :lg="7">
        <img class="logo" src="../assets/logo.png">
        <h4>Methodbox</h4>
      </el-col>
      <el-col :sm="8" :md="6" :lg="10">haha</el-col>
      <el-col :sm="8" :md="8" :lg="7" class="alignItemsRight">
        <MainCTA class="alignedRight"><font-awesome-icon icon="percentage" class="iconMarginRight"/> Voeg methode toe</MainCTA>
      </el-col>
    </el-row>
  </div>
  <div class="methods">
      <el-row :gutter="24">
        <el-col :sm="24" :md="24">
        <div class="grid-content card-bg">
        <MethodFilter></MethodFilter>
        </div></el-col>
          <el-col :sm="24" :md="24">
              <el-row :gutter="24" >
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
import MainCTA from './MainCTA.vue'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      checked: true,
      methods: [
        { id: 1,
          title: 'test methode',
          discription: 'Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum.',
          timesUsed: 6,
          ROI: 123,
          implementTime: '14d', // in work days
          implementCosts: 219
        },
        { id: 2,
          title: 'Methodetje',
          discription: 'Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum.',
          timesUsed: 6,
          ROI: 123,
          implementTime: '14d', // in work days
          implementCosts: 219
        },
        { id: 3,
          title: 'Nummertje 3',
          discription: 'Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum.',
          timesUsed: 6,
          ROI: 123,
          implementTime: '14d', // in work days
          implementCosts: 219.26 // in euro's
        }
      ]
    }
  },
  components: {MethodCards, MethodFilter, MainCTA}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media only screen and (min-width: 1200px) {
 .methods{
  width: 90%;
  margin: 0 auto;
}
}
@media only screen and (min-width: 1920px) {
 .methods{
  width: 80%;
  margin: 0 auto;
}
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
a {
  color: #42b983;
}
</style>
