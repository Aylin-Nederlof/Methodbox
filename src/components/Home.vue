<template>
<div class="wrapper">
  <Menu>
    <MainCTA slot="MainCTA" class="alignedRight"><font-awesome-icon icon="plus" class="iconMarginRight"/>Methode toevoegen</MainCTA>
  </Menu>
  <div class="main">
      <el-row :gutter="24">
        <el-col :sm="24" :md="24">
        <MethodFilter></MethodFilter>
        </el-col>
        <el-col :sm="24" :md="24">
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
                    <option value="gemKosten">Sorteer op kosten</option>
                    <option value="gemROI">Sorteer op ROI</option>
                </select>
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
      msg: 'Welcome to Your Vue.js App',
      checked: true,
      currentOrder:'gemROI',
      methods: [
        { id: 1,
          title: 'test methode',
          category: 'transfer',
          subCategory: 'Email',
          beschrijving:'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
          intro: 'Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum.',
          timesUsed: 6,
          doelgroep: ['Doelgroep 1', 'Doelgroep 2'],
          klantresultaten: [{
            naam: 'Klantje1',
            ROI: 123, // in percentage
            Opbrengsten: 400, // in euro's
            marge: 34, // in percentage
            conversieRatio: 23, // in percentage
            implementatietijd: 24, // in work hours
            doorlooptijd: 20, // in work days
            kosten: 419 // in euro's
          },
          {
            naam: 'Klantje2',
            ROI: 91, // in percentage
            Opbrengsten: 300, // in euro's
            marge: 5, // in percentage
            conversieRatio: 42, // in percentage
            implementatietijd: 32, // in work hours
            doorlooptijd: 25, // in work days
            kosten: 387 // in euro's
          },
          {
            naam: 'Klant naam 3',
            ROI: 110, // in percentage
            Opbrengsten: 200, // in euro's
            marge: 21, // in percentage
            conversieRatio: 21, // in percentage
            implementatietijd: 20, // in work hours
            doorlooptijd: 30, // in work days
            kosten: 374 // in euro's
          }]
        },
        { id: 2,
          title: 'Methodetje',
          category: 'visibility',
          subCategory: 'Instagram',
          beschrijving:'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
          intro: 'Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum.',
          timesUsed: 6,
          doelgroep: ['Doelgroep 1', 'Doelgroep 2'],
          klantresultaten: [{
            naam: 'Klantert',
            ROI: 123, // in percentage
            Opbrengsten: 400, // in euro's
            marge: 34, // in percentage
            conversieRatio: 23, // in percentage
            implementatietijd: 24, // in work hours
            doorlooptijd: 20, // in work days
            kosten: 419 // in euro's
          },
          {
            naam: 'Klant',
            ROI: 91, // in percentage
            Opbrengsten: 300, // in euro's
            marge: 5, // in percentage
            conversieRatio: 42, // in percentage
            implementatietijd: 32, // in work hours
            doorlooptijd: 25, // in work days
            kosten: 387 // in euro's
          },
          {
            naam: 'Klant',
            ROI: 110, // in percentage
            Opbrengsten: 200, // in euro's
            marge: 21, // in percentage
            conversieRatio: 21, // in percentage
            implementatietijd: 20, // in work hours
            doorlooptijd: 30, // in work days
            kosten: 374 // in euro's
          }]
        },
        { id: 3,
          title: 'Nummertje 3',
          category: 'focus',
          subCategory: 'Persona\'s',
          beschrijving:'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
          intro: 'Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum.',
          timesUsed: 6,
          doelgroep: ['Doelgroep 1', 'Doelgroep 2'],
          klantresultaten: [{
            naam: 'Klant',
            ROI: 123, // in percentage
            Opbrengsten: 400, // in euro's
            marge: 34, // in percentage
            conversieRatio: 23, // in percentage
            implementatietijd: 24, // in work hours
            doorlooptijd: 20, // in work days
            kosten: 419 // in euro's
          },
          {
            naam: 'Klant',
            ROI: 91, // in percentage
            Opbrengsten: 300, // in euro's
            marge: 5, // in percentage
            conversieRatio: 42, // in percentage
            implementatietijd: 32, // in work hours
            doorlooptijd: 25, // in work days
            kosten: 387 // in euro's
          },
          {
            naam: 'klant',
            ROI: 200, // in percentage
            Opbrengsten: 200, // in euro's
            marge: 21, // in percentage
            conversieRatio: 21, // in percentage
            implementatietijd: 20, // in work hours
            doorlooptijd: 30, // in work days
            kosten: 374 // in euro's
          }]
        }
      ]
    }
  },
        methods: {
        toggleOrder(currentOrder) {
            this.currentOrder = currentOrder;
        },
        getAverage: function  (name, decimalPlaces) {
                let sum = 0
                let results = this.methods.klantresultaten
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
