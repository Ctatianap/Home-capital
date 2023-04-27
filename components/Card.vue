<template>
    <div class="h-full" v-loading="loading">
        <div v-if="realEstate" class="bg-white border rounded-md shadow-md border-primary-3 p-4">
            <!--Image-->
            <img
              @click="goToUrl('/companies/'+ realEstate.id)"
              :src="realEstate.images[0]"
              :alt="realEstate.property_code"
              class="w-full object-contain rounded-t-md cursor-pointer"
              decoding="async"
              loading="lazy"
              style="height: 82px"/>

              <!--price-->
              <div class="flex flex-row items-center mb-2">
                  <p class="text-caption text-gray-2 truncate">
                  <span class="text-overline text-primary-2">
                      ${{ realEstate.price_cop }}
                  </span>
                      COP
                  </p>
              </div>
              <div class="flex flex-row items-center mb-2">
                  <p class="text-caption text-gray-2 truncate">
                  <span class="text-overline text-primary-2">
                      {{ realEstate.location.ubication }} -
                  </span>
                      {{ realEstate.location.neighborhood }}
                  </p>
              </div>


            <!--realEstate name, description-->
            <!-- <div v-if="realEstate && realEstate.name" class="mb-2 md:mb-0">
                <div :class="$mq !== 'sm'? 'h-8 overflow-y-hidden': 'h-full'">
                    <a :href="`/companies/${realEstate.id}`" target="_blank">
                        <p class="text-body2 text-primary mb-4 truncate">
                            {{ realEstate.name.length > 43 ? realEstate.name.substr(0, 43) + '...' : realEstate.name }}
                        </p>
                    </a>
                </div>
                <div :class=" $mq !== 'sm'? 'h-16 overflow-y-hidden': 'h-full'">
                    <p v-if="realEstate.description" class="text-caption text-gray-2">
                        {{ realEstate.description.length > 135 ? realEstate.description.substr(0, 120) + '...' : realEstate.description }}
                    </p>
                </div>
            </div> -->
            <!--Accountants-->
            <!-- <div v-if="realEstate" class="flex flex-row justify-between border-b border-primary-3 pb-4 mb-4">
                <div class="text-center px-2">
                    <span class="bg-secondary-2 px-2 py-1 rounded-full text-caption text-secondary-3">
                        {{ realEstate.talentees_count }}
                    </span>
                    <p v-if="!isEnganchatic" class="text-button text-xs text-gray-2 mt-2">
                        {{ $store.getters.trans('texts.talents') }}
                    </p>
                    <p v-else class="text-button text-xs text-gray-2 mt-2">
                        {{ $store.getters.trans('texts.connections') }}
                    </p>
                </div>
                <div class="text-center px-2">
                    <span class="bg-secondary-2 px-2 py-1 rounded-full text-caption text-secondary-3">
                        {{ realEstate.challenges_count ? realEstate.challenges_count : 0 }}
                    </span>
                    <p @click="realEstate.challenges_count > 0 ? goToUrl(`/programs/5/match?option-realEstate=${realEstate.id}`) : null"
                       class="text-button text-xs text-gray-2 mt-2"
                       :class="realEstate.challenges_count > 0 ? 'cursor-pointer' : ''">
                        {{ $store.getters.trans('texts.vacancies') }}
                    </p>
                </div>
                <div class="text-center px-2">
                    <span v-if="!isEnganchatic" class="bg-secondary-2 px-2 py-1 rounded-full text-caption text-secondary-3">
                        {{ realEstate.pitches_count ? realEstate.pitches_count : 0 }}
                    </span>
                    <span v-else class="bg-secondary-2 px-2 py-1 rounded-full text-caption text-secondary-3">
                        {{ realEstate.views ? realEstate.views : 0 }}
                    </span>
                    <p v-if="!isEnganchatic" class="text-button text-xs text-gray-2 mt-2">
                        {{ $store.getters.trans('texts.applications') }}
                    </p>
                    <p v-else class="text-button text-xs text-gray-2 mt-2">
                        {{ $store.getters.trans('texts.views') }}
                    </p>
                </div>
            </div> -->
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
