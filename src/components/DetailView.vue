/* eslint-disable */

<template>
    <div class="wrapper">
        <Menu>
            <SecondCTA slot="SecondCTA" class="alignedRight"><font-awesome-icon icon="plus" class="icon iconMarginRight"/>Methode toevoegen</SecondCTA>
        </Menu>
        <el-row  class="knoppen">
            <el-col :sm="4" :md="4">
            <router-link to="/Home"><thirdCTA>Terug naar overzicht</thirdCTA></router-link>
            </el-col>
            <el-col :sm="20" :md="20" class="alignItemsRight">
            <router-link to="#"><thirdCTA class="alignedRight"><img class="iconMarginRight" slot="Icon" src="../assets/Icons/edit.svg" alt="">Bewerk</thirdCTA></router-link>
            <router-link to="#"><thirdCTA class="alignedRight"><img class="iconMarginRight" src="../assets/Icons/archive.svg" alt="">Archiveer</thirdCTA></router-link>
            <router-link to="#"><MainCTA class="alignedRight"><img class="iconMarginRight" src="../assets/Icons/plusWhite.svg" alt="">Voeg resultaat toe</MainCTA></router-link>
            <router-link to="#"><SecondCTA class="alignedRight"><img class="iconMarginRight" src="../assets/Icons/present.svg" alt="">Presentatie modus</SecondCTA></router-link>
            </el-col>
           
               
        </el-row>
        <div class="main">
            <el-row :gutter="24">
                <el-col :sm="16" :md="16">
                    <el-row>
                    <div class="method card-bg">
                        <el-row>
                        <el-col :span="20">
                            <div class="categoryTitle">
                                <div class="categorie" v-bind:style="{ backgroundColor: categorieKleur }"></div>
                                <div>
                                <h2>{{methode.title}}</h2>
                                <div class="subTitle">{{methode.category}} - {{methode.subCategory}}</div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="4" class="alignItemsRight">{{methode.timesUsed}}x</el-col>
                    </el-row>
                    <el-row>
                    <div class="section">
                        <p>{{methode.beschrijving}}</p>
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
                    <el-row v-for="klantResultaat in OrderedResults" :key="klantResultaat.naam">
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
                                <div slot="Value" class="subTitle">€ {{getAverage('Opbrengsten', 2)}}</div>
                            </Result>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <Result class="grey">
                                <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Doorlooptijd.svg" alt="">
                                <div slot="Key" class="subTitle">Doorloop tijd</div>
                                <div slot="Value" class="subTitle">{{getAverage('doorlooptijd')}}d</div>
                            </Result>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <Result>
                                <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/implementatietijd.svg" alt="">
                                <div slot="Key" class="subTitle">Impl. tijd</div>
                                <div slot="Value" class="subTitle">{{getAverage('implementatietijd')}}u</div>
                            </Result>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <Result class="grey">
                                <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Kosten.svg" alt="">
                                <div slot="Key" class="subTitle">Kosten</div>
                                <div slot="Value" class="subTitle">€ {{getAverage('kosten', 2)}}</div>
                            </Result>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <Result>
                                <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Marge.svg" alt="">
                                <div slot="Key" class="subTitle">Marge</div>
                                <div slot="Value" class="subTitle">{{getAverage('marge')}}%</div>
                            </Result>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <Result class="grey">
                                <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Conversie.svg" alt="">
                                <div slot="Key" class="subTitle">Conversie ratio</div>
                                <div slot="Value" class="subTitle">{{getAverage('conversieRatio')}}%</div>
                            </Result>
                        </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
        </div>
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

    export default {
        name: 'DetailView',
        props: ['methode'],
        data () {
            return {
                msg: 'bla',
                selected: 'naam_asc',
                sortingOptions: {
                    naam_asc:    { order: { name: 'naam',   direction: 'asc'  }, text: 'Sorteer op naam'},
                    kosten_asc:  { order: { name: 'kosten', direction: 'asc'  }, text: 'kosten - laag naar hoog'},
                    kosten_desc: { order: { name: 'kosten', direction: 'desc' }, text: 'kosten - hoog naar laag'},
                    ROI_asc:     { order: { name: 'ROI',    direction: 'asc'  }, text: 'ROI - laag naar hoog'},
                    ROI_desc:    { order: { name: 'ROI',    direction: 'desc' }, text: 'ROI - hoog naar laag'}
                }
            }
        },
        methods: {
            getAverage: function  (name, decimalPlaces) {
                let sum = 0
                let results = this.methode.klantresultaten
                let divider = results.length
                for (let i = 0; i < divider; i++) sum += results[i][name]

                decimalPlaces = Math.floor(decimalPlaces || 0)
                if (decimalPlaces) {
                    let avg = '0'.repeat(decimalPlaces) + Math.round(sum / divider * Math.pow(10, decimalPlaces))
                    return parseFloat(avg.slice(0, decimalPlaces * -1) + '.' + avg.slice(decimalPlaces * -1))
                } else {
                    return Math.round(sum / divider)
                }
            }
        },
        computed: {
            OrderedResults: function () {
                var selected = this.sortingOptions[this.selected]
                return _.orderBy(this.methode.klantresultaten, selected.order.name, selected.order.direction)
            },
            categorieKleur: function () {
            var kleur = ''
            if (this.methode.category === 'focus') {
                kleur = 'rgba(218,0,255,1)'
            } else if (this.methode.category === 'visibility') {
                kleur = 'rgba(255,0,91,1)'
            } else if (this.methode.category === 'transfer') {
                kleur = 'rgba(0,176,255,1)'
            } else if (this.methode.category === 'fullfil') {
                kleur = 'rgba(255,213,0,1)'
            } else {
                kleur = 'deze'
            }
            return kleur
            }
        },
        components: {MainCTA, SecondCTA, thirdCTA, Menu, doelgroepTag, Result, KlantResultaat}
    }
</script>

<style scoped>
    .section{
        margin: 0 0 40px;
    }

   .resultaten{
       border-radius: 4px;
       padding: 24px 0;
       background-color: #ffffff;
       box-shadow: 0 0 1.5px 0 rgba(31,41,51,0.12), 0 1px 1px 0 rgba(31,41,51,0.24);
   }
   .padding{
       padding: 0 24px 16px;
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

</style>