<template>
<div class="menu">
  <el-row type="flex"  class="menu-bg" justify="space-between" align="middle">
      <el-col :sm="8" :md="8" :lg="7">
        <img class="logo" src="../assets/logo.png">
        <h4>Methodbox</h4>
      </el-col>
      <el-col :sm="6" :md="6" :lg="8"></el-col> <!-- For search bar -->
        <el-col :sm="10" :md="10" :lg="9" class="alignItemsRight">
            <slot name="MainCTA"></slot>
            <slot name="SecondCTA"></slot>
            <thirdCTA class="alignedRight"><font-awesome-icon slot="Icon" icon="user-circle" class="icon iconMarginRight"/>Account</thirdCTA>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import MainCTA from './MainCTA.vue'
import SecondCTA from './SecondCTA.vue'
import thirdCTA from './thirdCTA.vue'

export default {
  name: 'Menu',
  data () {
    return {

    }
  },
  components: {MainCTA, SecondCTA, thirdCTA}
}

</script>
<style >
.menu{
    margin-bottom: 24px
}
</style>
