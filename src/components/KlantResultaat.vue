<template>
    <div class="resultaten">
        <el-row class="padding">
            
            <el-col :span="20">
                
                <label v-if="this.$store.state.presentationModus">klant nr: {{klantIndex+1}}</label>
                <label v-else>{{klantResultaatData.name}}</label>
            
            </el-col>
                <el-col :span="4" class="alignItemsRight">
                    <router-link :to="{ name: 'editResult', params: {methodeID: methode.id, resultID: klantResultaatData.id, klantResultaatData: klantResultaatData }}"><img src="../assets/Icons/edit.svg" alt=""></router-link>
                    <button v-on:click="dialogVisible = true" ><img slot="Icon" class="iconMarginLeft" src="../assets/Icons/delete.svg" alt=""></button>
                </el-col>
            </el-row>
        <div class="klantResultaten">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" class="grey">
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
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" >
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <Result>
                        <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Doorlooptijd.svg" alt="">
                        <div slot="Key" class="subTitle">Doorlooptijd</div>
                        <div slot="Value" class="subTitle">{{klantResultaatData.data.totalTime}}d</div>
                    </Result>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <Result>
                        <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Opbrengsten.svg" alt="">
                        <div slot="Key" class="subTitle">Opbrengsten</div>
                        <div slot="Value" class="subTitle">€ {{klantResultaatData.data.proceeds}}</div>
                    </Result>
                </el-col>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" class="grey">
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <Result>
                        <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Implementatietijd.svg" alt="">
                        <div slot="Key" class="subTitle">Implementatietijd</div>
                        <div slot="Value" class="subTitle">{{klantResultaatData.data.implementationTime}}u</div>
                    </Result>
                </el-col>
            </el-col>
            
        </div>
        <el-dialog
            :visible.sync="dialogVisible"
            width="30%">
            <span class="dialog-flexer">
            <img class="iconMarginRight" src="../assets/Icons/warningRed.svg" alt=""><h2 class="warningText">Waarschuwing</h2>
                </span>
            <p>Ingevulde gegevens zullen niet worden opgeslagen.</p>
            <p>Weet je zeker dat je geen methode wil toevoegen?</p>
            <span slot="footer" class="dialog-flexer">
                <MainCTA slot="MainCTA" @click.native="dialogVisible = false" >Annuleren</MainCTA>
                <thirdCTA class="alignedRight" @click.native="deleteResult">Verwijderen</thirdCTA>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import Result from './Result.vue'
import MainCTA from './MainCTA.vue'
import thirdCTA from './thirdCTA.vue'
import Axios from 'axios'

export default {

  name: 'KlantResultaat',
  props: ['klantResultaatData', 'klantIndex'],
  data () {
    return {
        dialogVisible: false
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
  methods:{
        deleteResult (event) {
            var KlantResultaatID = parseInt(this.klantResultaatData.id, 10)
            var methodID = parseInt(this.methodID, 10)
            Axios.delete('https://methodbox.nl/api/deleteClientResult/' + KlantResultaatID).then(response => {
                var clientResults = this.$store.state.methods.find(function (u) { return u.id === methodID }).clientResults
                var index = clientResults.findIndex(function (r) { return r.id === KlantResultaatID })
                clientResults = clientResults.splice(index, 1)
               
                 this.$store.dispatch('loadData') 
                this.dialogVisible = false
            })
        }
  },
  components: {Result,thirdCTA, MainCTA}
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

    .resultaten {
        margin-bottom: 24px;
    }

    .klantResultaten{
        display: flex;
        flex-wrap: wrap;
    }

    .padding {
        padding: 0 24px 16px;
    }
</style>
