/* eslint-disable */ 
<template>
    <div class="wrapper">
        <Menu>
            <MainCTA slot="MainCTA" class="alignedRight" @click.native="save">Wijzigingen opslaan</MainCTA>
        </Menu>
        <div class="body">
            <form class="form card-bg">
            <h2>Methode "{{methode.title}}"  bewerken</h2>
            <div class="subTitle">Wijzig alle gegevens naar wens druk op "Wijzigingen opslaan".</div>
            <div class="fields">
            <Label>Titel</Label>
            <el-input
                    placeholder="Please input"
                    v-model="methode.title"
                    clearable>
                </el-input>
            </div>
            <div class="fields">
            <Label>Korte introductie (maximaal 140 karakters)</Label>
                    <el-input
                        type="textarea"
                        placeholder="Please input"
                        v-model="methode.intro"
                        maxlength="140"
                        :rows="3"
                        show-word-limit: true
                        >
                    </el-input>
            </div>
            <div class="fields">
            <Label>Beschrijving</Label>
                    <el-input
                        type="textarea"
                        placeholder="Please input"
                        v-model="methode.beschrijving"
                        show-word-limit
                        :rows="4"
                        >
                        </el-input>
            </div>
                <div class="fields">
            <Label>Categorie</Label>
                    <el-radio v-model="methode.category" label="Focus">Focus</el-radio>
                    <el-radio v-model="methode.category" label="Visibility">Visibility</el-radio>
                    <el-radio v-model="methode.category" label="Transfer">Transfer</el-radio>
                    <el-radio v-model="methode.category" label="Fullfil">Fullfil</el-radio>
            </div>

                <div class="fields">
                    <Label>Sub categorie</Label>
                    <el-select
                        v-model="methode.subCategory"
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
                        v-model="methode.doelgroep"
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
                        v-model="methode.expertise"
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
                <MainCTA slot="MainCTA" v-on:click.native="save" >Wijzigingen opslaan</MainCTA>
                <SecondCTA class="alignedRight" @click.native="dialogVisible = true" >Annuleren</SecondCTA>
                </div>
            </form>
       
        <div class="annuleren alignItemsRight">
        <thirdCTA @click.native="dialogVisible = true"><img class="iconMarginRight" slot="Icon" src="../assets/Icons/X.svg" alt="">Annuleer</thirdCTA>
         
        
        </div> </div>
        <el-dialog
            :visible.sync="dialogVisible"
            width="30%">
            <span class="dialog-flexer">
            <img class="iconMarginRight" src="../assets/Icons/warning.svg" alt=""><h2>Waarschuwing</h2>
             </span>
            <p>De wijzigingen zullen niet worden opgeslagen.</p>
            <p>Weet je zeker dat wil stoppen met bewerken?</p>
            <span slot="footer" class="dialog-flexer">
                <MainCTA slot="MainCTA" v-on:click.native="dialogVisible = false" >Verder met bewerken</MainCTA>
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
    name: 'editMethodForm',
        data () {
        return {
            // https://jsfiddle.net/ks4bh276/ HIER STAAT HOE SUBMITTEN DENK IK
            editMethod: this.methode,
            dialogVisible: false,
            
        }
    },
    methods:{
        save (event) {
            var editedMethod = this.methode
            var data = {
                 
                'title': this.methode.title,
                'intro': this.methode.intro,
                'discription': this.methode.beschrijving,
                'category': this.methode.category,
                'subCategory': this.methode.subCategory,
                'target_audience': this.methode.doelgroep,
                'expertise': this.methode.expertise
            }
            
            console.log(data);
            // console.log(data)
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
                array = this.$store.state.methods[o].doelgroep
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
.body{
    display: flex;
    /* flex-wrap: nowrap; */
    /* justify-content: center; */
    margin: 24px;
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
</style>
