<template>
  <button class="mainCTA">
  <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MainCTA',
  data () {
    return {

    }
  }
}
</script>

<style>
.mainCTA {
  height: 48px;
  color: white;
  border-radius: 4px;
  background-color: #1F2933;
  font: inherit;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 12px 16px;
  font-size: inherit;
  align-self: middle;
}

.mainCTA:hover {
    background-color:  #3E4C59;
    color:             #FFF;
  }

  .mainCTA:active {
    background-color:  #7B8794;
    color:             #FFF;
  }
</style>
