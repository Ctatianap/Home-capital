<template>
  <div class="min-h-screen pt-8">
      <div class="text-center text-primary mb-4">
          REnderiza algo
          <p class="h2 mb-4">Titulo </p>
         <!--  <p v-if="role === 'profile_organizations'" class="text-caption">{{ $store.getters.trans('texts.find_allies_of_the_talent_pitch_network') }} <i class="fal fa-question-circle text-secondary"></i></p>
          <p v-else class="text-caption"><span v-html="$store.getters.trans('texts.stay_up_to_date_with_events_and_content_from_your_favorite_organizations')"></span><i class="pl-2 fal fa-question-circle text-secondary"></i></p> -->
      </div>
      <div class="min-h-screen px-4 lg:px-0 pt-5" v-loading="loading">
          <div v-loading="loading" class="md:px-8">
              <div class="container mb-4">

                  {{ realEstates[1].id }}
                <card :realEstate="realEstates[1]"></card>
                  <div v-if="realEstates && realEstates.length" class="flex flex-col md:flex-row">
                      <slick ref="slick"
                              :options="slickOptions"
                              class="w-11/12 mx-auto lg:w-full">
                          <div v-for="(realEstate) in realEstates" :key="realEstate.id"
                                  class="md:px-2 pt-8">

                                  holaaaa
                              <card
                                  :realEstate="realEstate">
                              </card>
                          </div>
                      </slick>
                  </div>
                  <!-- <div v-else v-loading="loading_categories" class="flex pt-12 overflow-hidden">
                      <div v-for="n in 3" class="w-full lg:w-1/2 xl:w-1/3 px-4">
                          <trending-card-skeleton></trending-card-skeleton>
                      </div>
                  </div> -->
              </div>
                  <!-- <div class="flex justify-center my-10">
                      <int-button v-if="page < lastPage" @click="getCategories(page += 1)" type="tertiary" class="w-56 h-8" padding="py-2 px-3">
                          {{ $store.getters.trans('texts.view_more') }} <span class="lowercase pr-2">{{ $store.getters.trans('texts.organizations') }}</span><i class="fal fa-angle-down"></i>
                  </div> -->

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
          slickOptions: {
                dots: false,
                arrows: true,
                infinite: true,
                centerMode: false,
                autoplay: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1600,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: false,
                            dots: false,
                            arrows: true
                        }
                    },
                    {
                        breakpoint: 1050,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            dots: false,
                            arrows: true
                        }
                    },
                    {
                        breakpoint: 775,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: true
                        }
                    }
                ]
            },
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
