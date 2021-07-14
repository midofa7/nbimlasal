
<template>
  <div class="mune_site">


<div class="mobill">
 <nav class="navbar navbar-expand-lg">
        <div class="">
          

            <button class="navbar-toggler"  id="muneshowMobil" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">
				<i class="fas fa-bars"></i>
				</span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
               		
								<li class="">
								<router-link 
                      :to="{ path: '/Home', name: 'Home' }"
                     >Home</router-link>
								</li>	<li class="">
								<router-link 
                      :to="{ path: '/Activites', name: 'Activites' }"
                     >	  Activites</router-link>
								</li><li class="">
								<router-link 
                      :to="{ path: '/Planning', name: 'Planning' }"
                     >	  Planning</router-link>
								</li><li class="">
								<router-link 
                      :to="{ path: '/lespack', name: 'lespack' }"
                     >	  les pack</router-link>
								</li>	
								<li class="">
								<router-link 
                      :to="{ path: '/contact', name: 'contact' }"
                     >	 contact </router-link>
								</li>	
								
							

							</ul>
	
            </div>
        </div>
    </nav>


</div>






  <div class="web" id="fh5co-header">
			<header id="fh5co-header-section">
				<div class="container">
					<div class="nav-header">
						<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>
						<h1 id="fh5co-logo"><a href=""><img src="../assets/img/logo.png"/></a></h1>
						<!-- START #fh5co-menu-wrap -->
						<nav id="fh5co-menu-wrap" role="navigation">
							<ul class="sf-menu sf-js-enabled sf-arrows" id="fh5co-primary-menu" style="touch-action: pan-y;">
								<li class="">
								<router-link 
                      :to="{ path: '/Home', name: 'Home' }"
                     >Home</router-link>
								</li>	<li class="">
								<router-link 
                      :to="{ path: '/Activites', name: 'Activites' }"
                     >	  Activites</router-link>
								</li><li class="">
								<router-link 
                      :to="{ path: '/Planning', name: 'Planning' }"
                     >	  Planning</router-link>
								</li><li class="">
								<router-link 
                      :to="{ path: '/lespack', name: 'lespack' }"
                     >	  les pack</router-link>
								</li>	
								<li class="">
								<router-link 
                      :to="{ path: '/contact', name: 'contact' }"
                     >	 contact </router-link>
								</li>	
								
							

							</ul>
						</nav>
					</div>
				</div>
			</header>		
		</div>
  </div>
</template>

<script>


export default {
  name: "Home",
  components: {
  },

  props: [],
  created: function () {},
  methods: {},
};
</script>
<style scoped>
</style>