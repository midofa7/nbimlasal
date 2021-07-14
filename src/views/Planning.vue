
<template>
  <div>  
    <div class="palnning">
     <div class="block1_p3"><block1p3/></div>

     <div class="block2_p3"><block2p3/></div>


    </div>
  </div>
</template>

<script>

import block1p3 from "../components/block1_p3"
import block2p3 from "../components/block2_p3"

export default {
  name: "Home",
  components: {
	  block1p3,block2p3,
  },

  props: [],
  created: function () {},
  methods: {},
};
</script>
<style scoped>
</style>