<template>
  <div class="container mx-auto min-h-screen pt-8">
      <div class="text-center text-primary mb-4">
          <p class="h2 mb-4">Titulo </p>
         <!--  <p v-if="role === 'profile_organizations'" class="text-caption">{{ $store.getters.trans('texts.find_allies_of_the_talent_pitch_network') }} <i class="fal fa-question-circle text-secondary"></i></p>
          <p v-else class="text-caption"><span v-html="$store.getters.trans('texts.stay_up_to_date_with_events_and_content_from_your_favorite_organizations')"></span><i class="pl-2 fal fa-question-circle text-secondary"></i></p> -->
      </div>
      <div class="min-h-screen px-4 lg:px-0 pt-5" v-loading="loading">
          <div v-loading="loading" class="md:px-8">
              <div class="container mb-4">
                <div v-if="realEstates && realEstates.length" class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 md:px-0 h-full">
                    <div v-for="(realEstate) in realEstates" :key="realEstate.id" class="h-full">
                      <card
                          :realEstate="realEstate">
                      </card>
                    </div>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Slick from "vue-slick";
import realEstatesData from "../assets/json/propierties.json";

export default {
  components: {Slick},
  props: {},
  data() {
      return {
          loading: 0,
          role: 'agent',
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
