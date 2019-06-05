<template>
    <div class="wrapper">
        <Menu>
            <SecondCTA slot="SecondCTA" class="alignedRight"><font-awesome-icon icon="plus" class="icon iconMarginRight"/>Methode toevoegen</SecondCTA>
        </Menu>
        <h1>{{methode.title}}yeeeesy</h1>
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
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>