
<template>
  <div>  
    <div class="palannig">
    <div id="fh5co-schedule-section" class="fh5co-lightgray-section">
			<div class="container">
				<div class="blockk__text">
					<div class="">
						<div class="heading-section text-center animate-box fadeInUp animated">
							<h2>Planning</h2>
							<p>Le club est disponible 6/7 jours.</p>
						</div>
					</div>
				</div>

				<div class=" animate-box fadeInUp animated">
					<div class=" mune__de_palnning text-center webjour">
						<ul class="schedule">
							<li @click="getpalannig('Lundi')"><a href="#" class="active"  >Lundi</a></li>
							<li @click="getpalannig('mardi')"><a href="#" class="" >mardi</a></li>
							<li @click="getpalannig('mercredi')"><a href="#" class="" >mercredi</a></li>
							<li @click="getpalannig('Jeudi')"><a href="#" class="" >Jeudi</a></li>
							<li @click="getpalannig('vendredi')"><a href="#" class="" >vendredi</a></li>
							<li @click="getpalannig('Samedi')"><a href="#" class="" >Samedi</a></li>
							<li @click="getpalannig('dimanche')"><a href="#" class="" >dimanche</a></li>
						</ul>
					</div>
					<div class="sselect mobiljour">
					
<select   v-on:change="salaactjour( $event)">
  <option value="Lundi">Lundi</option>
  <option value="mardi">mardi</option>
  <option value="mercredi">mercredi</option>
  <option value="Jeudi">Jeudi</option>
  <option value="vendredi">vendredi</option>
  <option value="Samedi">Samedi</option>
  <option value="dimanche">dimanche</option>
	</select>				</div>
					<div class="contupalnning text-center">

						<div class=" schedule-container" >
<h3>{{itemlnng.jour}}</h3>
							<div class="row" >
								<div class="col-md-3 col-12" v-for="(item, index) in itemlnng.ItemPalannig" :key="index">
								  <div class="block_item_program">
									<div class="program program-schedule">
										
										<h3>{{item.tetel}}</h3>
										<span>{{item.hore}}</span>
										<small>{{item.coche}}</small>
									</div>
								  </div>
								</div>
							</div>
							<!-- END sched-content -->


						</div>

						
					</div>
				</div>
			</div>
		</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  data: function() {
    return {
      itemlnng: {
            "jour":"Lundi",
            "ItemPalannig":[
                {
                    "tetel":"pppllatveloe",
                    "hore":"19:30",
                    "coche":"zakariyr"
                }, {
                    "tetel":"pllatveloe",
                    "hore":"19:30",
                    "coche":"zakariyr"
                }, {
                    "tetel":"pllatveloe",
                    "hore":"19:30",
                    "coche":"zakariyr"
                }, {
                    "hore":"19:30",
                    "coche":"zakariyr"
                }
               ]
        }
      
    };
  },
  components: {
  },

  props: [],
  created: function () {},
  methods: {
	  salaactjour:function ( event) {
      var jour= event.target.value;
	   var item={};
		   var data = this.$store.getters.datapalannig();
		   data.map(function(e){
			   if(e.jour == jour){
				   item=e;
				console.log("ddd",item);
			   }
		   });
		   this.itemlnng=item;
				console.log("pp",this.itempalnng);
    },

	  getpalannig:function(juor){
		  var item={};
		   var data = this.$store.getters.datapalannig();
		   data.map(function(e){
			   if(e.jour == juor){
				   item=e;
				console.log("ddd",item);
			   }
		   });
		   this.itemlnng=item;
				console.log("pp",this.itempalnng);




	  }
  },
   
};
</script>
<style scoped>
</style>