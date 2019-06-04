<template>
  <button class="thirdCTA">
  <slot name="Icon"></slot>
  <p><slot></slot></p>
  </button>
</template>

<script>
export default {
  name: 'thirdCTA',
  data () {
    return {

    }
  }
}
</script>

<style>
button{
  border:none;
}
.thirdCTA{
  height: 48px;
  color: #1F2933;
  background-color: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0;
  border-color: none;
}

.thirdCTA p{
  text-align: center;
  margin: 0px;
  line-height: 24px;
  align-self: middle;
  border-bottom: 1px solid #1F2933;
}
</style>
