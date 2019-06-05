<template>
  <div class="Result">
    <slot name="Icon2"></slot>
    <div><slot name="Key"></slot></div>
    <div class="Value"><slot name="Value"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'Result',
  data () {
    return {

    }
  }
}
</script>

<style>
.Result{
    padding:8px 0px;
    display: flex;
}
.Value{
    margin-left: auto;
    font-weight: bold;
}

</style>
