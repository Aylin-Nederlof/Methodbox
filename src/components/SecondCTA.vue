<template>
  <button class="SecondCTA">
  <p><slot>Second CTA</slot></p>
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
  border:1px solid #1F2933;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0);
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0;
}

.SecondCTA p{
  text-align: center;
  margin: 12px 16px;
  line-height: 24px;
  align-self: middle;
}
</style>
