
<template>
  <div>
      <div class="mune"><munetop/></div>
      
         <div class="le_siteweb"> <router-view/></div>
         <div class="foottr"> <foottr/></div>
  </div>
</template>

<script>

import munetop from "./components/munetop"
import foottr from "./components/foottr"

export default {
  name: "Home",
  components: {
	  munetop,foottr,
  },

  props: [],
  created: function () {},
  methods: {},
};
</script>
<style scoped>
</style>