<template>
  <div class="methodContent">
    <el-col :xs="24" :sm="12" :md="12" :lg="8">
      <div class="method card-bg">
        <el-row>
          <el-col :span="22">
            <router-link :to="{ name: 'DetailView', params: {methodeID: methodData.id, methodeNaam: methodData.title }}">
              <div class="categoryTitle">
                <div class="categorie" v-bind:style="{ backgroundColor: categorieKleur }"></div>
                <div>
                  <h2>{{methodData.title}}</h2>
                  <ul class="categorisation subTitle">
                    <li>{{methodData.category}}</li>
                    <li v-for="(subCategory, index) in methodData.subCategory" :key="`subCategory-${index}`">{{subCategory}}</li>
                  </ul>
                </div>
              </div>
            </router-link>
          </el-col>
          <el-col :span="2" class="alignItemsRight">{{methodData.timesUsed}}x</el-col>
        </el-row>
        <el-row>
          <div class="section">
            <p>{{methodData.intro}}</p>
          </div>
        </el-row>
        <el-row class="section margin-bottom">
          <label>Doelgroep:</label>
          <div class="tags">
              <doelgroepTag v-for="(doelgroeptag, index) in methodData.targetAudience" :key="index">{{doelgroeptag}}</doelgroepTag>
          </div>
        </el-row>
        <el-row  class="section">
          <label>Gemiddelde resultaten:</label>
          <el-row :gutter="48" >
          <el-col :xs="24" :sm="12" :md="12" :lg="12">
              <Result>
                <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/ROI.svg" alt="">
                <div slot="Key" class="subTitle">ROI</div>
                <div slot="Value" class="subTitle">{{getAverage('ROI')}}%</div>
              </Result>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12">
              <Result>
                <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Doorlooptijd.svg" alt="">
                <div slot="Key" class="subTitle">Doorloop tijd</div>
                <div slot="Value" class="subTitle">{{getAverage('totalTime')}}d</div>
              </Result>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12">
              <Result >
                <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Implementatietijd.svg" alt="">
                <div slot="Key" class="subTitle">Impl. tijd</div>
                <div slot="Value" class="subTitle">{{getAverage('implementationTime')}}u</div>
              </Result>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12">
              <Result>
                <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Kosten.svg" alt="">
                <div slot="Key" class="subTitle">Kosten</div>
                <div slot="Value" class="subTitle">€ {{getAverage('costs')}}</div>
              </Result>
          </el-col>
          </el-row>
          </el-row>
          <el-row class="section">
            <router-link :to="{ name: 'DetailView', params: {methodeID: methodData.id, methodeNaam: methodData.title, methode: methodData }}"><thirdCTA>Bekijk details</thirdCTA></router-link>

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

  methods: {
      getAverage (name) {
        return this.methodData.average[name]
      }
  },
  computed: {
    categorieKleur: function () {
      var kleur = ''
      if (this.methodData.category === 'Focus') {
        kleur = '#DA00FF' // dit moeten nog "categorie logo's" worden.
      } else if (this.methodData.category === 'Visibility') {
        kleur = '#FFD500' // dit moeten nog "categorie logo's" worden.
      } else if (this.methodData.category === 'Transfer') {
        kleur = '#00B0FF' // dit moeten nog "categorie logo's" worden.
      } else if (this.methodData.category === 'Fullfil') {
        kleur = '#FF005B' // dit moeten nog "categorie logo's" worden.
      } else {
        kleur = 'rgba(228,232,235,1)'
      }
      return kleur
    }

  },
  components: {thirdCTA, doelgroepTag, Result}

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.method {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
}

.margin-bottom {
  margin-bottom: auto;
}

.categorie {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin:0 16px 0 0;
  flex: 0 0 40px;
}



.specificaties {
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

.averages{
    margin-top: 8px;

    }
.el-row:last-child {
    margin-bottom: 0;
}
a {
  text-decoration: none;
}
</style>
