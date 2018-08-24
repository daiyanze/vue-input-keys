<template>
  <div id="app">
		<span>
    	{{ message }}
		</span>
    <input type="text" name="input" value=""
      v-keymap:up.alpha.num="{ disable: ['0', '1'] }" />
  </div>
</template>
<script lang="ts">
export default {
  name: 'App',
  data () {
    return {
      message: 'Vue Keymap is here!'
    }
  }
}
</script>

