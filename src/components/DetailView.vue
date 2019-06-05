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
                    <div class="method card-bg">
                        <el-row>
                        <el-col :span="20">
                            <div class="categoryTitle">
                                <div class="categorie" ></div>
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
                </el-col>
                <el-col :sm="8" :md="8">
                    <div class="resultaten">
                        <label class="padding">Gemiddelde van {{methode.timesUsed}} klant resultaten:</label>
                        <el-row>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <Result class="grey">
                                <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/ROI.svg" alt="">
                                <div slot="Key" class="subTitle">ROI</div>
                                <div slot="Value" class="subTitle">{{gemROI}}%</div>
                            </Result>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <Result>
                                <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Opbrengsten.svg" alt="">
                                <div slot="Key" class="subTitle">Opbrengsten</div>
                                <div slot="Value" class="subTitle">€ {{gemOpbrengsten}}</div>
                            </Result>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <Result class="grey">
                                <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Doorlooptijd.svg" alt="">
                                <div slot="Key" class="subTitle">Doorloop tijd</div>
                                <div slot="Value" class="subTitle">{{gemDoorlooptijd}}d</div>
                            </Result>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <Result>
                                <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/implementatietijd.svg" alt="">
                                <div slot="Key" class="subTitle">Impl. tijd</div>
                                <div slot="Value" class="subTitle">{{gemImplementatietijd}}u</div>
                            </Result>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <Result class="grey">
                                <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Kosten.svg" alt="">
                                <div slot="Key" class="subTitle">Kosten</div>
                                <div slot="Value" class="subTitle">€ {{gemKosten}}</div>
                            </Result>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <Result>
                                <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Marge.svg" alt="">
                                <div slot="Key" class="subTitle">Marge</div>
                                <div slot="Value" class="subTitle">{{gemMarge}}%</div>
                            </Result>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <Result class="grey">
                                <img class="iconMarginRight" slot="Icon2" src="../assets/Icons/Conversie.svg" alt="">
                                <div slot="Key" class="subTitle">Conversie ratio</div>
                                <div slot="Value" class="subTitle">{{gemConversieRatio}}%</div>
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


    export default {
        name: 'DetailView',
        props: ['methode'],
        data () {
            return {
                msg: 'bla'
            }
        },
        components: {MainCTA, SecondCTA, thirdCTA, Menu, doelgroepTag, Result}
    }
</script>

<style scoped>
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
   

</style>