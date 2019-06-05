<template>
  <div class="methodContent">
    <el-col :xs="24" :sm="12" :md="12" :lg="8">
      <div class="method card-bg">
        <el-row>
          <el-col :span="20">
            <router-link to="/DetailView">
              <div class="categoryTitle">
                <div class="categorie" v-bind:style="{ backgroundColor: categorieKleur }"></div>
                <div>
                  <h2>{{methodData.title}}</h2>
                  <div class="subTitle">{{methodData.category}} - {{methodData.subCategory}}</div>
                </div>
              </div>
            </router-link>
          </el-col>
          <el-col :span="4" class="alignItemsRight">{{methodData.timesUsed}}x</el-col>
        </el-row>
        <el-row>
          <div class="section">
            <p>{{methodData.discription}}</p>
          </div>
        </el-row>
        <el-row class="section">
          <label>Doelgroep:</label>
          <div class="tags">
              <doelgroepTag v-for="(doelgroeptag, index) in methodData.doelgroep" :key="index">{{doelgroeptag}}</doelgroepTag>
          </div>
        </el-row>
        <el-row  class="section">
          <label>Gemiddelde resultaten:</label>
          <el-row :gutter="48">
          <el-col :xs="24" :sm="12" :md="12" :lg="12">
              <Result>
                <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/ROI.svg" alt="">
                <div slot="Key" class="subTitle">ROI</div>
                <div slot="Value" class="subTitle">{{gemROI}}%</div>
              </Result>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12">
              <Result>
                <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Doorlooptijd.svg" alt="">
                <div slot="Key" class="subTitle">Doorloop tijd</div>
                <div slot="Value" class="subTitle">{{gemDoorlooptijd}}d</div>
              </Result>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12">
              <Result >
                <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Implementatietijd.svg" alt="">
                <div slot="Key" class="subTitle">Impl. tijd</div>
                <div slot="Value" class="subTitle">{{gemImplementatietijd}}u</div>
              </Result>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12">
              <Result>
                <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Kosten.svg" alt="">
                <div slot="Key" class="subTitle">Kosten</div>
                <div slot="Value" class="subTitle">€ {{gemKosten}}</div>
              </Result>
          </el-col>
          </el-row>
          </el-row>
          <el-row class="section">
            <router-link :to="{ name: 'DetailView', params: { methode: methodData }}"><thirdCTA>Bekijk details</thirdCTA></router-link>

            <!-- <router-link to="/DetailView"><thirdCTA>Bekijk details</thirdCTA></router-link>              -->

          </el-row>
      </div>
    </el-col>
  </div>
</template>
<script>
import thirdCTA from './thirdCTA.vue'
import doelgroepTag from './doelgroepTag.vue'
import Result from './Result.vue'

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
      } else if (this.methodData.category === 'fullfil') {
        kleur = 'rgba(255,213,0,1)'
      } else {
        kleur = 'deze'
      }
      return kleur
    },
    
    gemOpbrengsten: function () {
      let sum = 0
      let aantalKlanten = 0
      for (let i = 0; i < this.methodData.klantresultaten.length; i++) {
      sum += this.methodData.klantresultaten[i].Opbrengsten
      aantalKlanten++
      }
      var avg = sum / aantalKlanten
      return parseFloat(avg.toFixed(2))
    },
    gemROI: function () {
      let sum = 0
      let aantalKlanten = 0
      for (let i = 0; i < this.methodData.klantresultaten.length; i++) {
      sum += this.methodData.klantresultaten[i].ROI
      aantalKlanten++
      }
      var avg = sum / aantalKlanten
      return parseFloat(avg.toFixed(0))
    },
    gemImplementatietijd: function () {
      let sum = 0
      let aantalKlanten = 0
      for (let i = 0; i < this.methodData.klantresultaten.length; i++) {
      sum += this.methodData.klantresultaten[i].implementatietijd
      aantalKlanten++
      }
      var avg = sum / aantalKlanten
      return parseFloat(avg.toFixed(0))
    },
    gemDoorlooptijd: function () {
      let sum = 0
      let aantalKlanten = 0
      for (let i = 0; i < this.methodData.klantresultaten.length; i++) {
      sum += this.methodData.klantresultaten[i].doorlooptijd
      aantalKlanten++
      }
      var avg = sum / aantalKlanten
      return parseFloat(avg.toFixed(0))
    },
    gemKosten: function () {
      let sum = 0
      let aantalKlanten = 0
      for (let i = 0; i < this.methodData.klantresultaten.length; i++) {
      sum += this.methodData.klantresultaten[i].kosten
      aantalKlanten++
      }
      var avg = sum / aantalKlanten
      return parseFloat(avg.toFixed(2))
    },
    gemMarge: function () {
      let sum = 0
      let aantalKlanten = 0
      for (let i = 0; i < this.methodData.klantresultaten.length; i++) {
      sum += this.methodData.klantresultaten[i].marge
      aantalKlanten++
      }
      var avg = sum / aantalKlanten
      return parseFloat(avg.toFixed(2))
    },
    gemConversieRatio: function () {
      let sum = 0
      let aantalKlanten = 0
      for (let i = 0; i < this.methodData.klantresultaten.length; i++) {
      sum += this.methodData.klantresultaten[i].conversieRatio
      aantalKlanten++
      }
      var avg = sum / aantalKlanten
      return parseFloat(avg.toFixed(2))
    },
  },
  components: {thirdCTA, doelgroepTag, Result}

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.method{
  margin-bottom: 24px;
}

.categorie{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin:0 16px 0 0;
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
  text-decoration: none;
}
</style>
