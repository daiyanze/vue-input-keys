<template>
  <div id="app">
    <section>
      <h5>{{ message1 }}</h5>
      <input type="text" name="input1" v-model="message1"
        v-keymap:down.alpha.num="{ except: ['0', '1'], exec: event1  }" />
    </section>
    <section>
      <h5>{{ message2 }}</h5>
      <input type="text" name="input2" v-model="message2"
        v-keymap="{ maps, exec: event2 }"/>
      <select name="mappingsSelect" v-model="mappingsSelect" id="select">
        <option value="alpha" selected>alphabetic</option>
        <option value="num">numeric</option>
      </select>
    </section>
  </div>
</template>
<script lang="ts">
export default {
  name: 'App',
  data () {
    return {
      message1: 'This input tag will only listen to alphanumeric keys',
      message2: 'This input tag can listen to either alpha or numeric keys',
      mappingsSelect: 'alpha',
      keyMaps: ['alpha', 'num']
    }
  },
  computed: {
    maps () {
      return this.keyMaps[this.mappingsSelect]
    }
  },
  methods: {
    event1 (e) {
      alert(e.keyCode)
    },
    event2 (e){
      alert(e.keyCode)
    }
  }
}
</script>

