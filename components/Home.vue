<template>
  <div class="container mx-auto min-h-screen pt-8">
      <div class="w-full lg:w-2/3 mx-auto flex mb-6">
        <el-input v-model="search" placeholder="Buscar Propiedad" />
        <div class="ml-4">
            <el-button type="primary" icon="search"></el-button>
        </div>
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
                      <h2 class="text-lg mb-6 font-bold text-primary text-center">Información del Cliente</h2>
                      <Formulario ref="ruleFormClient" @save="payload"/>
                    </div>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import realEstatesData from "../assets/json/propierties.json";
import { Form, Input, Button } from "element-ui";

export default {
  components: {Form, Input, Button},
  props: {
    role:{
      default:"user"
    }
  },
  data() {
      return {
          loading: 0,
          search: "",
          realStatesSelected:[],
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
      payload(){
        console.log("entra");
      }
  }
}
</script>
