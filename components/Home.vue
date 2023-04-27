<template>
  <div class="container mx-auto min-h-screen pt-8">
      <div class="text-center text-primary mb-4">
          <p class="h2 mb-4">Titulo </p>
         <!--  <p v-if="role === 'profile_organizations'" class="text-caption">{{ $store.getters.trans('texts.find_allies_of_the_talent_pitch_network') }} <i class="fal fa-question-circle text-secondary"></i></p>
          <p v-else class="text-caption"><span v-html="$store.getters.trans('texts.stay_up_to_date_with_events_and_content_from_your_favorite_organizations')"></span><i class="pl-2 fal fa-question-circle text-secondary"></i></p> -->
      </div>
      <div class="w-full lg:w-2/3">
        <input type="text" id="" v-model="search" />
      </div>
      <div class="min-h-screen px-4 lg:px-0 pt-5" v-loading="loading">
          <div v-loading="loading">
              <div class="mb-4 flex flex-col lg:flex-row">
                <div class="w-full lg:w-3/5">
                    <p class="text-lg mb-6 font-bold text-primary">Destacados</p>
                    <div v-if="realEstates && realEstates.length" class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-0 h-full">
                        <div v-for="(realEstate) in realEstates" :key="realEstate.id" class="h-full">
                            <card :role="role"
                                  :realEstate="realEstate">
                            </card>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-2/5 ml-6">
                    <div v-if="role != 'agent'">
                      <p class="text-lg mb-6 font-bold text-primary">Buscar en mapa</p>
                      <img
                        src="../assets/images/map.png"
                        alt="map"
                        class="w-full"
                        />
                    </div>
                    <div v-else class="mt-14">
                      <Formulario/>
                    </div>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import realEstatesData from "../assets/json/propierties.json";

export default {
  components: {},
  props: {},
  data() {
      return {
          loading: 0,
          role: "agent",
          search: "",
      }
  },
  created() {

  },
  computed: {
    realEstates(){
      return realEstatesData.map((realEstate) => { return realEstate})
    }
  },
  methods: {


  }
}
</script>
