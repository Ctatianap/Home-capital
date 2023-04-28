<template>
    <div class="h-full" v-loading="loading">
        <div v-if="realEstate" class="bg-white border rounded-md shadow-md">
            <!--Image-->
            <div class="relative">
                <img
                @click="goToUrl('/detail-property/'+ realEstate.id)"
                :src="realEstate.images[0]"
                :alt="realEstate.property_code"
                class="w-full object-contain rounded-t-md cursor-pointer"
                />
                <div v-if="role === 'agent'"
                      class="absolute top-4 right-2 bg-secondary-transparent rounded-md px-4 py-1">
                  <el-checkbox label="Seleccionar propiedad" name="type" @change="handleCheckedCard"></el-checkbox>
                </div>
            </div>
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
                    <p class="text-teal-600 font-light font-italy">
                        {{ realEstate.location.ubication + "-" + realEstate.location.neighborhood }}
                    </p>
                </div>
                <div v-if="realEstate.description" class="mb-2 md:mb-0">
                    <div class=" h-16 overflow-ellipsis">
                        <p v-if="realEstate.description" class=" text-teal-600">
                            {{ realEstate.description.length > 80 ? realEstate.description.substr(0, 80) + '...' : realEstate.description }}
                        </p>
                    </div>
                </div>
                <hr class="border-solid border-thin w-full my-4">
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
        role: {
            default: "user",
        },
        index: {
            default: null,
        },
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
            window.open(url, '_blank');
        },
        handleCheckedCard(value){
          this.$emit("handleCheckedCard", this.index);
          console.log(this.index)
        }
    },
}
</script>
