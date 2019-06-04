<template>
  <button class="mainCTA">
  <p><slot></slot></p>
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
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0;
}

.mainCTA p{
  text-align: center;
  margin: 12px 16px;
  line-height: 24px;
  align-self: middle;
}
</style>
