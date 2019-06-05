<template>
  <div class="doelgroepTag">
  <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'doelgroepTag',
  data () {
    return {

    }
  }
}
</script>

<style>
.doelgroepTag {
  display: flex;
  height: 32px;
  border-radius: 4px;
  border: 1px solid rgba(228,232,235,1);
  align-items: center;
  text-align: center;
  padding: 0px 16px;
  margin: 8px 8px 0 0;
  font-size: 16px;
  line-height: 1.5;

}

</style>
