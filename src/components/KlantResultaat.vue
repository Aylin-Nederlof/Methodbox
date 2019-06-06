<template>
  <div class="resultaten method">
      <el-row class="padding">
        <el-col :span="20"><label>{{klantResultaatData.naam}}</label></el-col>
        <el-col :span="4" class="alignItemsRight">
            <img src="../assets/Icons/edit.svg" alt="">
            <img class="iconMarginLeft" src="../assets/Icons/delete.svg" alt="">

        </el-col>
        </el-row>
    <div class="klantResultaten">
        <el-col :xs="24" :sm="12" :md="12" :lg="12">
        <Result >
            <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/ROI.svg" alt="">
            <div slot="Key" class="subTitle">ROI</div>
            <div slot="Value" class="subTitle">{{klantResultaatData.ROI}}%</div>
        </Result>
    </el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
        <Result >
            <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Kosten.svg" alt="">
            <div slot="Key" class="subTitle">Kosten</div>
            <div slot="Value" class="subTitle">€ {{klantResultaatData.kosten}}</div>
        </Result>
    </el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
        <Result class="grey">
            <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Opbrengsten.svg" alt="">
            <div slot="Key" class="subTitle">Opbrengsten</div>
            <div slot="Value" class="subTitle">€ {{klantResultaatData.Opbrengsten}}</div>
        </Result>
    </el-col>
     <el-col :xs="24" :sm="12" :md="12" :lg="12">
        <Result class="grey">
            <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Doorlooptijd.svg" alt="">
            <div slot="Key" class="subTitle">Doorlooptijd</div>
            <div slot="Value" class="subTitle">{{klantResultaatData.doorlooptijd}}d</div>
        </Result>
    </el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
        <Result>
            <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Marge.svg" alt="">
            <div slot="Key" class="subTitle">Marge</div>
            <div slot="Value" class="subTitle">{{klantResultaatData.marge}}%</div>
        </Result>
    </el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
        <Result>
            <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Implementatietijd.svg" alt="">
            <div slot="Key" class="subTitle">Implementatietijd</div>
            <div slot="Value" class="subTitle">{{klantResultaatData.implementatietijd}}u</div>
        </Result>
    </el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
        <Result class="grey">
            <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Conversie.svg" alt="">
            <div slot="Key" class="subTitle">Conversie Ratio</div>
            <div slot="Value" class="subTitle">{{klantResultaatData.conversieRatio}}%</div>
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
