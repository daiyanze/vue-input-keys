<template>
  <div id="app">
    <section>
      <h5>only alphanumeric keys (v-input-keys="alpha|num|arrows|ctlrs")</h5>
      <input type="text" name="input1" v-model="value1"
        v-input-keys="'alpha|num|arrows|ctlrs'" />
    </section>
    <section>
      <h5>select to listen to alphabetic or numeric or symbols keys</h5>
      <input type="text" name="input2" v-model="value2"
        v-input-keys="mappingsSelect"/>
      <select name="mappingsSelect" v-model="mappingsSelect" id="select">
        <option value="alpha" selected>alphabetic</option>
        <option value="num">numeric</option>
        <option value="symbols">symbols</option>
      </select>
    </section>
    <section>
      <h5>custom input restriction</h5>
      <input type="text" name="input3" v-model="value3"
        v-input-keys="limitedKeys"/>
    </section>
  </div>
</template>
<script lang="ts">
export default {
  name: 'App',
  data () {
    return {
      value1: '',
      value2: '',
      value3: '',
      mappingsSelect: 'alpha',
      keyMaps: ['alpha', 'num', 'symbols']
    }
  },
  methods: {
    limitedKeys (keyCode: number) {
      return keyCode > 100
    }
  }
}
</script>
