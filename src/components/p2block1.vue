
<template>
  <div class="avtivite">  


  <div id="fh5co-programs-section">
			<div class="container">
				<div class="blcok_text">
					<div class="">
						<div class="heading-section text-center animate-box fadeInUp animated">
							<h2>Activités</h2>
							<p>
Rester en forme ou se tonifier : PLAY FITNESS vous aide à atteindre vos objectifs</p>
						</div>
					</div>
				</div>


				<div class="calsell text-center">


           <carousel  :navText="['<', '>']"

 :loop="true" :responsive="{0:{items:1,nav:false},600:{items:4,nav:false}}">
					<div class="item">
						<div class="program animate-box fadeInUp animated">
							<img src="../assets/img/img6.png" alt="Cycling">
							<h3>MUSCULATION</h3>
							<span><a href="#" class="btn btn-default">playfitness</a></span>
						</div>
					</div>	<div class="item">
						<div class="program animate-box fadeInUp animated">
							<img src="../assets/img/img7.png" alt="Cycling">
							<h3>CARDIO-TRAINING</h3>
							<span><a href="#" class="btn btn-default"> playfitness</a></span>
						</div>
					</div>	<div class="item">
						<div class="program animate-box fadeInUp animated">
							<img src="../assets/img/img8.png" alt="Cycling">
							<h3>COURS COLLECTIFS </h3>
							<span><a href="#" class="btn btn-default">playfitness</a></span>
						</div>
					</div>	<div class="item">
						<div class="program animate-box fadeInUp animated">
							<img src="../assets/img/img10.png" alt="Cycling">
							<h3> NATATION</h3>
							<span><a href="#" class="btn btn-default">playfitness </a></span>
						</div>
					</div>	<div class="item">
						<div class="program animate-box fadeInUp animated">
							<img src="../assets/img/img4.png" alt="Cycling">
							<h3> Boxing Fitness</h3>
							<span><a href="#" class="btn btn-default">playfitness </a></span>
						</div>
					</div>	<div class="item">
						<div class="program animate-box fadeInUp animated">
							<img src="../assets/img/img5.png" alt="Cycling">
							<h3>Taekwondo</h3>
							<span><a href="#" class="btn btn-default">playfitness </a></span>
						</div>
					</div>

    </carousel>
				</div>
			</div>
		</div>
  </div>
</template>

<script>

import carousel from 'vue-owl-carousel'

export default {
  name: "Home",
  components: {
    carousel
  },

  props: [],
  created: function () {},
  methods: {},
};
</script>
<style scoped>
</style>