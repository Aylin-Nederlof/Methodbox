<template>
  <div class="resultaten method">
      <el-row class="padding">
        <el-col :span="20"><label>{{klantResultaatData.name}}</label></el-col>
        <el-col :span="4" class="alignItemsRight">
        <router-link :to="{ name: 'editResult', params: {methodeID: methode.id, resultID: klantResultaatData.id, klantResultaatData: klantResultaatData }}"><img src="../assets/Icons/edit.svg" alt=""></router-link>
            <img class="iconMarginLeft" src="../assets/Icons/delete.svg" alt="">

        </el-col>
        </el-row>
    <div class="klantResultaten">
        <el-col :xs="24" :sm="12" :md="12" :lg="12">
        <Result >
            <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/ROI.svg" alt="">
            <div slot="Key" class="subTitle">ROI</div>
            <div slot="Value" class="subTitle">{{klantResultaatData.data.ROI}}%</div>
        </Result>
    </el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
        <Result >
            <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Kosten.svg" alt="">
            <div slot="Key" class="subTitle">Kosten</div>
            <div slot="Value" class="subTitle">€ {{klantResultaatData.data.costs}}</div>
        </Result>
    </el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
        <Result class="grey">
            <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Opbrengsten.svg" alt="">
            <div slot="Key" class="subTitle">Opbrengsten</div>
            <div slot="Value" class="subTitle">€ {{klantResultaatData.data.proceeds}}</div>
        </Result>
    </el-col>
     <el-col :xs="24" :sm="12" :md="12" :lg="12">

        <Result class="grey">
            <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Doorlooptijd.svg" alt="">
            <div slot="Key" class="subTitle">Doorlooptijd</div>
            <div slot="Value" class="subTitle">{{klantResultaatData.data.totalTime}}d</div>
        </Result>

    </el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
        <Result>
            <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Marge.svg" alt="">
            <div slot="Key" class="subTitle">Marge</div>
            <div slot="Value" class="subTitle">{{klantResultaatData.data.margin}}%</div>
        </Result>
    </el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
        <Result>
            <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Implementatietijd.svg" alt="">
            <div slot="Key" class="subTitle">Implementatietijd</div>
            <div slot="Value" class="subTitle">{{klantResultaatData.data.implementationTime}}u</div>
        </Result>
    </el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
        <Result class="grey">
            <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Conversie.svg" alt="">
            <div slot="Key" class="subTitle">Conversie Ratio</div>
            <div slot="Value" class="subTitle">{{klantResultaatData.data.conversionRate}}%</div>
        </Result>
    </el-col>
    </div>
</div>
</template>

<script>
import Result from './Result.vue'

export default {
  name: 'KlantResultaat',
  props: ['klantResultaatData'],
  data () {
    return {

    }

  },
  computed:{
    methode () {
            let methods = this.$store.state.methods

            for (var no in methods){
                if(methods[no].id == this.methodID){
                    return methods[no]
                }
            }

            return 'none'
    },
    methodID () {
            return this.$route.params.methodeID;
    }
  },
  components: {Result}
}
</script>

<style scoped>
.resultaten{
       border-radius: 4px;
       padding: 24px 0;
       background-color: #ffffff;
       box-shadow: 0 0 1.5px 0 rgba(31,41,51,0.12), 0 1px 1px 0 rgba(31,41,51,0.24);
   }
   .Result{
       padding: 8px 24px;
       display: flex;
   }

.klantResultaten{
       display: flex;
       flex-wrap: wrap;
   }

    .padding{
       padding: 0 24px 16px;
   }

</style>
