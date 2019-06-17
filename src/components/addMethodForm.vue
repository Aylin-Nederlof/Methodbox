/* eslint-disable */ 
<template>
    <div class="wrapper">
        <Menu>
            <MainCTA to="/Home" slot="MainCTA" class="alignedRight">Opslaan</MainCTA>
        </Menu>
        <div class="form card-bg">
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
                    v-model="beschrijving"
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
                    collapse-tags
                    placeholder="Choose tags for your article">
                    <el-option 
                    v-for="subCategory in subCategories"
                    :key="subCategory"
                    :label="subCategory"
                    :value="subCategory">
                    </el-option>
                </el-select>
           </div>
        </div>


        
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
            titel:'',
            intro:'',
            beschrijving:'',
            categorie:'',
            subCategorie:[],

        }
    },
    computed: {
        methods () {
            return this.$store.state.methods
        },
        subCategories () {
            

            var i = 0;
            var len = this.$store.state.methods.length;
            var arr = []
            for (; i < len; ) {
                arr.push(this.$store.state.methods[i].subCategory)
                console.log(this.$store.state.methods[i].subCategory)
                i++
            }
            return arr
        }
    },
    components: {MainCTA, SecondCTA, thirdCTA, Menu},

  
}
</script>


<style>
.form{
    width: 35%;
    margin: 0 auto;
}

.fields{
    width: 100%;
    margin: 24px 0 0;
}
.el-radio{
    display: block;
    margin:8px 0;
}
</style>
