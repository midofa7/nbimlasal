
<template>
  <div>  
    <div class="home">
     <div class="block2"><vidou/></div>
     <div class="block2"><block2/></div>
     <div class="block3p1"><block3p1/></div>
    </div>
  </div>
</template>


<script>

import block2 from "../components/block2"
import vidou from "../components/vidou"
import block3p1 from "../components/block3p1"

export default {
  name: "Home",
  components: {
	  block2,vidou,block3p1,
  },

  props: [],
  created: function () {},
  methods: {},
};
</script>
<style scoped>
</style>