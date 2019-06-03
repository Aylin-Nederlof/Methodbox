<template>
  <div class="wrapper"> 

 
      <el-row :gutter="24">
       
        <el-col :sm="24" :md="24"><div class="grid-content">
            <el-row :gutter="24" ><div class="grid-content">  
              <div v-for="method in methods" :key="method.id">
                <MethodCards :methodData="method"></MethodCards> 
              </div>
            </div></el-row>
        </div></el-col>
      </el-row>
      
  
  
  </div> 
</template>

<script>
import MethodFilter from "./MethodFilter.vue"
import MethodCards from "./MethodCards.vue"

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      checked: true,
      methods: [
      { id:1, 
        title:'test methode',
        discription:' Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum.',
        timesUsed:6,
        ROI: 123,
        implementTime: '14d', // in work days
        implementCosts: 219,
      },
      { id:2, 
        title:'Methodetje',
        discription:' Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum.',
        timesUsed:6,
        ROI: 123,
        implementTime: '14d', // in work days
        implementCosts: 219,
      },
      { id:3, 
        title:'Nummertje 3',
        discription:' Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum.',
        timesUsed:6,
        ROI: 123,
        implementTime: '14d', // in work days
        implementCosts: 219.26, //in euro's
      },
      ]
    }
  },
  components: {MethodCards, MethodFilter}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media only screen and (min-width: 1200px) {
 .wrapper{
  width: 90%;
  margin: 0 auto;
}
}
@media only screen and (min-width: 1920px) {
 .wrapper{
  width: 80%;
  margin: 0 auto;
}
}

.el-row {
    margin-bottom: 20px;
    
    }
.el-row:last-child {
      margin-bottom: 0;
}
  .el-col {
    margin-bottom: 20px;
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)

  }

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
