<template>
  <button class="SecondCTA">
  <slot>Second CTA</slot>
  </button>
</template>

<script>
export default {
  name: 'SecondCTA',
  data () {
    return {

    }
  }
}
</script>

<style>
  .SecondCTA {
    height: 48px;
    color: #1F2933;
    border: 1px solid #1F2933;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0);
    display: flex;
    align-items: center;
    text-align: center;
    padding: 12px 16px;
    font: inherit;
    font-weight: bold;
    align-self: middle;
  }
  .SecondCTA:hover {
    background-color:  #E4E7EB;
    color:             #212B36;
  }

    .SecondCTA:active {
    background-color:  #7B8794;
    color:             #FFF;
  }
</style>
