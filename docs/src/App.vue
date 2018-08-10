<template>
  <div id="app">
		<span
      v-keymap:up.alpha.num="{ disable: ['0', '1'] }"
    >
    	{{ message }}
		</span>
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

