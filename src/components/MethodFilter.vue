<template>
  <div class="hello">
    <h2>Optimalisatie</h2>
    <el-checkbox-group v-model="optimalisatie">
      <el-checkbox label="Focus"></el-checkbox>
      <el-checkbox label="Zichtbaarheid"></el-checkbox>
      <el-checkbox label="Overtuigen"></el-checkbox>
      <el-checkbox label="Geliefd"></el-checkbox>
    </el-checkbox-group>
    <h2>Tijd</h2>
    <el-checkbox-group v-model="tijd">
      <el-checkbox label="kort"></el-checkbox>
      <el-checkbox label="middel"></el-checkbox>
      <el-checkbox label="lang"></el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  name: 'MethodFilter',
  data () {
    return {
      optimalisatie: [],
      tijd: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-checkbox-group{
 margin: 20px 0;
 text-align: left;
}
.el-checkbox{
  margin:0 0 0 12px;
  border: 1px;
}

.el-checkbox .is-bordered:last-child{
 margin: 0px;
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
