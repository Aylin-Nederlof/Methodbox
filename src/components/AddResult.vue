/* eslint-disable */ 
<template>
    <div class="wrapper">
        <Menu>
            <MainCTA slot="MainCTA" class="alignedRight" @click.native="save">Voeg resultaat toe</MainCTA>
        </Menu>
        <div class="body">
        <div class="form card-bg" @submit.native.prevent>
           <h2>Resultaat voor {{methode.title}} toevoegen</h2>
           <div class="subTitle">Vul alle gegevens in en druk op "Voeg resultaat toe".</div>
           <div class="fields">
                <Label>Klantnaam</Label>
                <el-input
                        placeholder="Please input"
                        v-model="name"
                        clearable
                        >
                    </el-input>
           </div>
           <div class="fields">
                <Label>Doorlooptijd</Label>
                <el-date-picker
                    v-model="dateRange"
                    type="daterange"
                    range-separator="-"
                    start-placeholder="Begin datum"
                    end-placeholder="Eind datum">
                </el-date-picker>
           </div>
           <div class="fields">
                <Label>Implementatie tijd</Label>
                <el-input
                    placeholder="Please input"
                    v-model.number="implementationTime"
                    clearable>
                </el-input>
           </div>
            <div class="fields">
                <Label>Kosten</Label>
                <el-input
                        placeholder="Please input"
                        v-model.number="costs"
                        clearable
                        type="number">
                </el-input>
           </div>

            <div class="fields">
                <Label>Opbrengsten</Label>
                <el-input
                    placeholder="Please input"
                    v-model.number="proceeds"
                    clearable
                    type="number">
                </el-input>
           </div>
           <div class="fields">
                <Label>ROI</Label>
                <el-input
                    placeholder="Please input"
                    v-model.number="ROI"
                    clearable
                   >
                </el-input>
           </div>
           <!-- <div class="fields">
                <Label>Marge</Label>
                <el-input
                    placeholder="Please input"
                    v-model.number="margin"
                    clearable>
                </el-input>
           </div>
           <div class="fields">
                <Label>Conversie Ratio</Label>
                <el-input
                    placeholder="Please input"
                    v-model.number="conversionRate"
                    clearable>
                </el-input>
           </div> -->
            <div class="buttons">
            <MainCTA slot="MainCTA" v-on:click.native="save" >Voeg toe</MainCTA>
            <SecondCTA class="alignedRight" @click.native="dialogVisible = true" >Annuleren</SecondCTA>
            </div>
            </div>
       
        <div class="annuleren alignItemsRight">
        <thirdCTA @click.native="dialogVisible = true"><img class="iconMarginRight" slot="Icon" src="../assets/Icons/X.svg" alt="">Annuleer</thirdCTA>
         
        
        </div> </div>
        <el-dialog
            :visible.sync="dialogVisible"
            width="30%">
            <span class="dialog-flexer">
            <img class="iconMarginRight" src="../assets/Icons/warningRed.svg" alt=""><h2 class="warningText">Waarschuwing</h2>
             </span>
            <p>Ingevulde gegevens zullen niet worden opgeslagen.</p>
            <p>Weet je zeker dat je geen resultaat wil toevoegen?</p>
            <span slot="footer" class="dialog-flexer">
                <MainCTA slot="MainCTA" v-on:click.native="dialogVisible = false" >Verder met toevoegen</MainCTA>
                <thirdCTA class="alignedRight" @click.native="cancel" >Stoppen</thirdCTA>
            </span>
        </el-dialog>

    </div>   
</template>
<script>
import Menu from './menu.vue'
import MainCTA from './MainCTA.vue'
import SecondCTA from './SecondCTA.vue'
import thirdCTA from './thirdCTA.vue'
import Axios from 'axios';

export default {
    name: 'addResult.vue',
        data () {
        return {
            dialogVisible: false,
            name: 'test',
            dateRange:'',
            ROI: '', // in percentage
            proceeds: '', // in euro's
            margin: '0', // in percentage // Deze mag in de toekomst weg, hier moet in de back end iets voor worden aangepast
            conversionRate: '0', // in percentage // Deze mag in de toekomst weg, hier moet in de back end iets voor worden aangepast
            implementationTime: '', // in work hours
            totalTime: '', // in work days
            costs: '' // in euro's

        }
    },
    methods:{
        save (event) {
            var result = {
                'name': this.name,
                'ROI': this.ROI.toString(),
                'proceeds': this.proceeds.toString(),
                'margin': this.margin.toString(), // Deze mag in de toekomst weg, hier moet in de back end iets voor worden aangepast
                'conversionRate': this.conversionRate.toString(), // Deze mag in de toekomst weg, hier moet in de back end iets voor worden aangepast
                'totalTime': Math.ceil(Math.abs(this.dateRange[1].getTime() - this.dateRange[0].getTime()) / (1000 * 60 * 60 * 24)).toString(),
                'implementationTime': this.implementationTime.toString(),
                'costs': this.costs.toString(),
                'dateRange': this.dateRange.join()
            }
            var methodID = parseInt(this.methodID, 10)
            Axios.post('https://methodbox.nl/api/method/' + methodID + '/addClientResult', result).then(response => {
                var name = result.name
                delete result.name
                result = {
                    name: name,
                    id: response.data.data,
                    data: result
                }
                this.$store.state.methods.find(function (u) { return u.id === methodID }).clientResults.push(result)
               // zorgen dat gemiddelde  en aantal keren gebruikt opnieuw worden berekent
               // terug naar detailview
               
               this.$store.dispatch('loadData') 
               var methodName = this.methode.title.replace('/', '%2F');
               this.$router.push('/DetailView/' + this.methodID + '/' + methodName)   
            
            //   this.$store.commit('calculateAverages')
            //     this.$store.commit('timesUsed')
            //      this.$store.commit('getMinMax')
            })
            // console.log(result.dateRange)
            // console.log(result.totalTime)
            // VueX: It is saved, reload my data.
        },
        cancel (event) {
            this.$router.go(-1)
        }

    },
    computed: {
        methods () {
            return this.$store.state.methods
        },
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
    components: {MainCTA, SecondCTA, thirdCTA, Menu},

  
}
</script>


<style>
.form{
    width: 35%;
    /* margin: 0 auto 40px; */
    display: flex;
    flex-wrap: wrap;
    margin-left: 32.5%;
}
form{
    margin: 0;
    padding: 0;
}
.body{
    display: flex;
    /* flex-wrap: nowrap; */
    /* justify-content: center; */
    margin: 40px 24px;
    /* width: 96%; */
}
.annuleren{
    display: flex;
    width:32.2%;
     /* margin-left: auto; */
     /* z-index: 22000; */
}
.annuleren button.thirdCTA{
    height: 24px;
}

.fields{
    width: 100%;
    margin: 24px 0 0;
}
label.el-radio{
    display: block;
    margin:8px 0;
}

.el-radio__input.is-checked+.el-radio__label, .el-radio__input.is-checked .el-radio__inner {
    color: #00B0FF !important;
}
.el-select .el-input.is-focus .el-input__inner {
    border-color: #00B0FF !important;
}
.el-select-dropdown__item.selected {
    color: #00B0FF !important;
}

.el-select{
    width: 100%;
}
.buttons{
    margin-top: 24px;
    display: flex;
}
.el-dialog__header {
    display: none;
}

.el-dialog__body {
    padding: 24px;
    color: black;
}
.el-dialog__footer {
    padding: 0 24px 24px;
}

.warningText{
    color:#CC2200 !important;
}


.dialog-flexer{
    padding: 0;
    display: flex;
}
.el-date-editor--daterange.el-input__inner{
    width: 100%;
}
@media only screen and (max-width: 1100px) {
    .el-dialog{
        width: 50% !important;
    }
}

@media only screen and (max-width: 500px) {
    .el-dialog{
        width: 90% !important;
    }
}

</style>
