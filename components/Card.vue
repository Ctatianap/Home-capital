<template>
    <div class="h-full" v-loading="loading">
        <div v-if="realEstate" class="bg-white border rounded-md shadow-md border-primary-3">
            <!--Image-->
            <img
              @click="goToUrl('/companies/'+ realEstate.id)"
              :src="realEstate.images[0]"
              :alt="realEstate.property_code"
              class="w-full object-contain rounded-t-md cursor-pointer"
              />
              <!-- style="height: 82px" -->

              <div class="p-4">
                  <div v-if="realEstate.price_cop" class="flex flex-row items-center mb-2">
                      <p>
                        <span class="text-overline text-primary">
                            ${{ realEstate.price_cop }}
                        </span>
                            COP
                      </p>
                  </div>
                  <div v-if="realEstate.location" class="flex flex-row items-center mb-2">
                      <p class="text-teal-600">
                          {{ realEstate.location.ubication + "-" + realEstate.location.neighborhood }}
                      </p>
                  </div>
                  <div v-if="realEstate.description" class="mb-2 md:mb-0">
                      <div class=" h-16 overflow-ellipsis">
                          <p v-if="realEstate.description" class=" text-teal-600">
                              {{ realEstate.description.length > 120 ? realEstate.description.substr(0, 120) + '...' : realEstate.description }}
                          </p>
                      </div>
                  </div>
                  <hr class="border-solid border-thin border-primary-3 w-full my-4">
                  <div v-if="realEstate.characteristics" class="flex flex-row justify-between mb-4">
                      <div class="text-center px-2">
                          <span class="w-4 bg-items px-2 py-1 rounded-full text-caption">
                              {{ realEstate.characteristics.size_m2 }}
                          </span>
                          <p  class="text-caption mt-2">
                              Mts
                          </p>
                      </div>
                      <div class="text-center px-2">
                          <span class="w-4 bg-items px-2 py-1 rounded-full text-caption">
                              {{ realEstate.characteristics.bedrooms }}
                          </span>
                          <p  class="text-caption mt-2">
                              Habitaciones
                          </p>
                      </div>
                      <div class="text-center px-2">
                          <span class="w-4 bg-items px-2 py-1 rounded-full text-caption">
                              {{ realEstate.characteristics.bathrooms }}
                          </span>
                          <p class="text-caption mt-2">
                              Baños
                          </p>
                      </div>
                  </div>
              </div>





            <!--Accountants-->

            <!--Actions-->
            <!-- <div class="flex" v-if="!isEnganchatic">
                <div class="w-full md:w-1/2">
                    <int-button
                        @click="createTalentPitchResume"
                        class="h-8 flex items-center justify-center">
                        {{ $store.getters.trans('texts.send_resume') }}
                    </int-button>
                </div>
                <div class="w-full md:w-1/2 md:pl-2">
                    <int-button
                        :href="`/realEstate-wall/${realEstate.id}`"
                        target="_blank"
                        type="secondary"
                        class="h-8 flex items-center justify-center"
                    >
                        {{ $store.getters.trans('texts.to_visit_community') }}
                    </int-button>
                </div>
            </div> -->
            <!-- <div class="flex" v-else>
                <div class="w-full md:w-1/2">
                    <int-button
                        @click="saveReaction"
                        class="h-8 flex items-center justify-center">
                        {{ $store.getters.trans('texts.connect_organization') }}
                    </int-button>
                </div>
                <div class="w-full md:w-1/2 md:pl-2">
                    <int-button
                        :href="`/apply-vacant/enganchatic?id_realEstate=${realEstate.id}`"
                        type="secondary"
                        class="h-8 flex items-center justify-center"
                    >
                        {{ $store.getters.trans('texts.see_vacancies') }}
                    </int-button>
                </div>
            </div> -->
        </div>
    </div>
</template>
<script>
export default {
    components: {},
    props: {
        realEstate: {
            default: null,
        },
        isEnganchatic: false,
    },
    data() {
        return {
            loading: 0,

        }
    },
    mounted() {

    },
    computed: {
    },
    methods: {
        goToUrl(url) {
            if (this.isEnganchatic){
                document.location.href =  `/companies/${this.realEstate.id}/landing-enganchatic`
            }else{
                window.open(url, '_blank')
            }
        },
        validateImage(ev) {
            ev.target.src = validateImage('realEstate')
        },

    },
}
</script>
