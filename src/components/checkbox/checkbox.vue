<template>
  <label id="checkboxTemplate">
      <input type="checkbox" class="aui-checkbox" v-bind:value="value" v-bind:name="name">
      {{text}}
  </label>
</template>

<style src="./radio.less" lang="less"></style>
<script>
    export default{
        name:'checkboxTemplate',
        props:['value','text','name']
    }
</script>
