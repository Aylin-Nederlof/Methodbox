/* eslint-disable */ 
<template>
    <div class="wrapper">
        <Menu>
            <MainCTA slot="MainCTA" class="alignedRight" @click="save">Voeg toe</MainCTA>
        </Menu>
        <div class="body">
        <div class="form card-bg" @submit.native.prevent>
           <h2>Methode toevoegen</h2>
           <div class="subTitle">Vul alle gegevens in en druk op "Voeg toe".</div>
           <div class="fields">
           <Label>Titel</Label>
           <el-input
                placeholder="Please input"
                v-model="titel"
                clearable>
            </el-input>
           </div>
           <div class="fields">
           <Label>Korte introductie (maximaal 140 karakters)</Label>
                <el-input
                    type="textarea"
                    placeholder="Please input"
                    v-model="intro"
                    maxlength="140"
                    show-word-limit
                    >
                </el-input>
           </div>
           <div class="fields">
           <Label>Beschrijving</Label>
                <el-input
                    type="textarea"
                    placeholder="Please input"
                    v-model="discription"
                    show-word-limit
                    >
                    </el-input>
           </div>
            <div class="fields">
           <Label>Categorie</Label>
                <el-radio v-model="categorie" label="Focus">Focus</el-radio>
                <el-radio v-model="categorie" label="Visibility">Visibility</el-radio>
                <el-radio v-model="categorie" label="Transfer">Transfer</el-radio>
                <el-radio v-model="categorie" label="Fullfil">Fullfil</el-radio>
           </div>

            <div class="fields">
                <Label>Sub categorie</Label>
                <el-select
                    v-model="subCategorie"
                    multiple
                    filterable
                    allow-create
                    default-first-option
                    placeholder="Bij welke subcategorie hoort het?">
                    <el-option 
                    v-for="subCategory in subCategories"
                    :key="subCategory"
                    :label="subCategory"
                    :value="subCategory">
                    </el-option>
                </el-select>
           </div>
           <div class="fields">
                <Label>Doelgroepen</Label>
                <el-select
                    v-model="targetAudience"
                    multiple
                    filterable
                    allow-create
                    placeholder="Voor welke doelgroepen is de methode geschikt?">
                    <el-option 
                    v-for="doelgroep in doelgroepen"
                    :key="doelgroep"
                    :label="doelgroep"
                    :value="doelgroep">
                    </el-option>
                </el-select>
           </div>
           <div class="fields">
                <Label>Benodigde expertises</Label>
                <el-select
                    v-model="expertise"
                    multiple
                    filterable
                    allow-create
                    placeholder="Welke expertises zijn er nodig?">
                    <el-option 
                    v-for="expertise in expertises"
                    :key="expertise"
                    :label="expertise"
                    :value="expertise">
                    </el-option>
                </el-select>
           </div>
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
            <img class="iconMarginRight" src="../assets/Icons/warning.svg" alt=""><h2>Waarschuwing</h2>
             </span>
            <p>Ingevulde gegevens zullen niet worden opgeslagen.</p>
            <p>Weet je zeker dat je geen methode wil toevoegen?</p>
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

export default {
    name: 'addMethodForm',
        data () {
        return {
            dialogVisible: false,
            titel:'',
            intro:'',
            discription:'',
            categorie:'',
            subCategorie:[],
            targetAudience:[],
            expertise:[]

        }
    },
    methods:{
        save (event) {
            var data = {
                'title': this.titel,
                'intro': this.intro,
                'discription': this.discription,
                'category': this.categorie,
                'subCategory': this.subCategorie,
                'target_audience': this.targetAudience,
                'expertise': this.expertise
            }

            console.log(data)
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
        subCategories () {
            var o = 0;
            var length = this.$store.state.methods.length;
            var array = []
            var allGroups = []
            for (; o < length; ) {
                array = this.$store.state.methods[o].subCategory
            //    ÷ console.log(this.$store.state.methods[o].subCategory)
                o++
                allGroups = allGroups.concat(array);
            }
            var uniq = [...new Set(allGroups)];
            return uniq
        },
        doelgroepen () {
            var o = 0;
            var length = this.$store.state.methods.length;
            var array = []
            var allGroups = []
            for (; o < length; ) {
                array = this.$store.state.methods[o].targetAudience
                // console.log(this.$store.state.methods[o].doelgroep)
                o++
                allGroups = allGroups.concat(array);
            }
            var uniq = [...new Set(allGroups)];
            return uniq
        },
        expertises () {
            var o = 0;
            var length = this.$store.state.methods.length;
            var array = []
            var allGroups = []
            for (; o < length; ) {
                array = this.$store.state.methods[o].expertise
                o++
                allGroups = allGroups.concat(array);
            }
            var uniq = [...new Set(allGroups)];
            return uniq
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
     z-index: 22000;
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

.dialog-flexer{
    padding: 0;
    display: flex;
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
