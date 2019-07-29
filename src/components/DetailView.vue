/* eslint-disable */
<template>
    <div class="wrapper">
        <Menu>
            <router-link slot="SecondCTA" to="/addMethodForm"><SecondCTA class="alignedRight"><font-awesome-icon icon="plus" class="icon iconMarginRight"/>Methode toevoegen</SecondCTA></router-link>
            
        </Menu>
        <el-row  class="knoppen">
            <el-col :sm="4" :md="4">
            <router-link to="/Home"><thirdCTA>Terug naar overzicht</thirdCTA></router-link>
            </el-col>
            <el-col :sm="20" :md="20" class="alignItemsRight">

            <router-link :to="{ name: 'editMethodForm', params: {methodeID: methode.id, methodeNaam: methode.title }}"><thirdCTA class="alignedRight"><img class="iconMarginRight" slot="Icon" src="../assets/Icons/edit.svg" alt="">Bewerk</thirdCTA></router-link>
            <router-link to="#"><thirdCTA class="alignedRight"><img class="iconMarginRight"  slot="Icon" src="../assets/Icons/archive.svg" alt="">Archiveer</thirdCTA></router-link>
            <router-link :to="{ name: 'AddResult', params: {methodeID: methode.id, methodeNaam: methode.title }}"><MainCTA class="alignedRight"><img class="iconMarginRight" src="../assets/Icons/plusWhite.svg" alt="">Voeg resultaat toe</MainCTA></router-link>
            <router-link to="#"><SecondCTA class="alignedRight"><img class="iconMarginRight"  slot="Icon" src="../assets/Icons/present.svg" alt="">Presentatie modus</SecondCTA></router-link>
            </el-col>
           
               
        </el-row>
        <div class="main">
            <el-row :gutter="24">
                <el-col :sm="16" :md="16">
                    <el-row>
                    <div class="averages card-bg">
                        <el-row>
                        <el-col :span="20">
                            <div class="categoryTitle">
                                <div class="categorie" v-bind:style="{ backgroundColor: categorieKleur }"></div>
                                <div>
                                    <h2>{{methode.title}}</h2>
                                    <ul class="categorisation subTitle">
                                        <li>{{methode.category}}</li>
                                        <li v-for="(subCategory, index) in methode.subCategory" :key="`subCategory-${index}`">{{subCategory}}</li>
                                    </ul> 
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="4" class="alignItemsRight">{{methode.timesUsed}}x</el-col>
                    </el-row>
                    <el-row>
                    <div class="section">
                        <p>{{methode.description}}</p>
                    </div>
                    </el-row>
                    </div>
                    </el-row>
                    <el-row>
                        <div class="klantresultaten">
                        <el-col :span="12"><label> Klant resultaten ({{methode.timesUsed}}):</label></el-col>
                        
                        <el-col :span="12" class="alignItemsRight">
                            <select v-model="selected" class="alignedRight sorteer">
                                <option v-for="(option, key) in sortingOptions" :key="key" v-bind:value="option.order.name + '_' + option.order.direction">{{ option.text }}</option>
                            </select>
                        </el-col>
                        </div>
                     </el-row>         

                    <el-row v-for="klantResultaat in OrderedResults" :key="klantResultaat.id">
                        <klantResultaat :klantResultaatData="klantResultaat"></klantResultaat>
                    </el-row>

                    <!-- <p v-for="klantResultaat in orderedUsers" :key="klantResultaat.naam">test</p> -->

                </el-col>
                <el-col :sm="8" :md="8">
                    <div class="resultaten method">
                        <label class="padding">Gemiddelde van {{methode.timesUsed}} klant resultaten:</label>
                        <el-row>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <Result class="grey">
                                <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/ROI.svg" alt="">
                                <div slot="Key" class="subTitle">ROI</div>
                                <div slot="Value" class="subTitle">{{getAverage('ROI')}}%</div>
                            </Result>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <Result>
                                <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Opbrengsten.svg" alt="">
                                <div slot="Key" class="subTitle">Opbrengsten</div>
                                <div slot="Value" class="subTitle">€ {{getAverage('proceeds')}}</div>
                            </Result>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <Result class="grey">
                                <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Doorlooptijd.svg" alt="">
                                <div slot="Key" class="subTitle">Doorloop tijd</div>
                                <div slot="Value" class="subTitle">{{getAverage('totalTime')}}d</div>
                            </Result>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <Result>
                                <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/implementatietijd.svg" alt="">
                                <div slot="Key" class="subTitle">Impl. tijd</div>
                                <div slot="Value" class="subTitle">{{getAverage('implementationTime')}}u</div>
                            </Result>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <Result class="grey">
                                <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Kosten.svg" alt="">
                                <div slot="Key" class="subTitle">Kosten</div>
                                <div slot="Value" class="subTitle">€ {{getAverage('costs')}}</div>
                            </Result>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <Result>
                                <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Marge.svg" alt="">
                                <div slot="Key" class="subTitle">Marge</div>
                                <div slot="Value" class="subTitle">{{getAverage('margin')}}%</div>
                            </Result>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <Result class="grey">
                                <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Conversie.svg" alt="">
                                <div slot="Key" class="subTitle">Conversie ratio</div>
                                <div slot="Value" class="subTitle">{{getAverage('conversionRate')}}%</div>
                            </Result>
                        </el-col>
                        </el-row>
                    </div>
                    <div class="resultaten method">
                        <label class="padding">Geschikt bij de doelgroep(en):</label>
                        
                            <div class="tags">
                                <doelgroepTag v-for="(doelgroeptag, index) in methode.targetAudience" :key="index">{{doelgroeptag}}</doelgroepTag>
                            </div>
                        
                    </div>
                    <div class="resultaten method">
                        <label class="padding">Benodigde expertise(s):</label>
                       
                            <div class="tags">
                                <doelgroepTag v-for="(expertisetag, index) in methode.expertise" :key="index">{{expertisetag}}</doelgroepTag>
                            </div>
                        
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="footer alignItemsRight">
            <thirdCTA @click.native="dialogVisible = true" class="alignedRight"><img class="iconMarginRight" slot="Icon" src="../assets/Icons/delete.svg" alt="">Verwijder</thirdCTA>
        </div>
        <el-dialog
            :visible.sync="dialogVisible"
            width="30%">
            <span class="dialog-flexer">
            <img class="iconMarginRight" src="../assets/Icons/warning.svg" alt=""><h2>Waarschuwing</h2>
             </span>
            <p>Ingevulde gegevens zullen niet worden opgeslagen.</p>
            <p>Weet je zeker dat je geen methode wil toevoegen?</p>
            <span slot="footer" class="dialog-flexer">
                <MainCTA slot="MainCTA" v-on:click.native="dialogVisible = false" >Niet verwijderen</MainCTA>
                <thirdCTA class="alignedRight" @click.native="deleteMethod" >Verwijder methode</thirdCTA>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import Menu from './menu.vue'
import MainCTA from './MainCTA.vue'
import SecondCTA from './SecondCTA.vue'
import thirdCTA from './thirdCTA.vue'
import doelgroepTag from './doelgroepTag.vue'
import Result from './Result.vue'
import KlantResultaat from './KlantResultaat.vue'
import _ from 'lodash'
import Axios from 'axios'

    export default {
        name: 'DetailView',
        data () {
            return {
                dialogVisible: false,
                selected: 'name_asc',

                sortingOptions: {
                    name_asc:   { order: { name: 'name',  direction: 'asc',  object: 'name'       }, text: 'Sorteer op naam' },
                    costs_asc:  { order: { name: 'costs', direction: 'asc',  object: 'data.costs' }, text: 'kosten - laag naar hoog' },
                    costs_desc: { order: { name: 'costs', direction: 'desc', object: 'data.costs' }, text: 'kosten - hoog naar laag' },
                    ROI_asc:    { order: { name: 'ROI',   direction: 'asc',  object: 'data.ROI'   }, text: 'ROI - laag naar hoog' },
                    ROI_desc:   { order: { name: 'ROI',   direction: 'desc', object: 'data.ROI'   }, text: 'ROI - hoog naar laag' }
                }
                
            }
        },
        methods: {
            getAverage (name) {
                return this.methode.average[name]
            },
            deleteMethod (event) {
                Axios.get('https://cors-anywhere.herokuapp.com/methodbox.nl/api/deleteMethod/' + this.methodID).then(response => {
                    // console.log(response)
                    // data.id = response.data.data
                    // this.$store.state.methods.push(data)
                     this.$store.dispatch('loadData')
                     this.$router.push('/Home/')   
                })
            }
        },
        computed: {
            methode () {
                let methods = this.$store.state.methods
                for (var no in methods){
                    if(methods[no].id == this.methodID){
                        return methods[no]
                    }
                }
                return 'none'
            },
            categorieKleur: function () {
                var kleur = ''
                if (this.methode.category === 'Focus') {
                    kleur = 'rgba(218,0,255,1)'
                } else if (this.methode.category === 'Visibility') {
                    kleur = 'rgba(255,0,91,1)'
                } else if (this.methode.category === 'Transfer') {
                    kleur = 'rgba(0,176,255,1)'
                } else if (this.methode.category === 'Fullfil') {
                    kleur = 'rgba(255,213,0,1)'
                } else {
                    kleur = 'rgba(228,232,235,1)'
                }
                return kleur
            },
            OrderedResults () {
                var selected = this.sortingOptions[this.selected]
                return _.orderBy(this.methode.clientResults, selected.order.object, selected.order.direction)
            },
            methodID () {
                return this.$route.params.methodeID;
            }
        },
        components: {MainCTA, SecondCTA, thirdCTA, Menu, doelgroepTag, Result, KlantResultaat}
    }
</script>

<style scoped>
    .section {
        margin: 0 0 40px;
    }
    .wrapper {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
    .main {
        flex-grow: 1;
    }
    .resultaten {
        border-radius: 4px;
        padding: 24px 0;
        background-color: #ffffff;
        box-shadow: 0 0 1.5px 0 rgba(31,41,51,0.12), 0 1px 1px 0 rgba(31,41,51,0.24);
    }
    .padding{
        padding: 0 24px 16px;
    }
    .tags{
        margin: 0 24px;
    }
    .averages{
        margin-bottom: 24px; 
    }

    .Result{
        padding: 8px 24px;
    }
   
    .klantresultaten{
        display: flex;
        align-items: center;
        margin: 16px 0 40px;
    }

    .KlantResultaat{
        display: flex;
    }
    .footer{
        margin: 0 24px ;
    }

</style>