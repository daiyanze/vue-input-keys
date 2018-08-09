<template>
  <div id="app">
		<span v-keymap>
    	{{ message }}
		</span>
  </div>
</template>
<script lang="ts">
export default {
  name: 'app',
  data () {
    return {
      message: 'Vue Keymap is here!'
    }
  }
}
</script>

