<template>
  <div class="container mx-auto min-h-screen pt-8">
      <div class="w-full lg:w-2/3 mx-auto flex mb-6">
        <el-input v-model="search" placeholder="Buscar Propiedad" />
        <div class="ml-4">
            <el-button type="primary" icon="search" class="btn-primary"></el-button>
        </div>
      </div>
      <div class="min-h-screen px-4 lg:px-0 pt-5" v-loading="loading">
          <div v-loading="loading">
              <div class="mb-4 flex flex-col lg:flex-row">
                <div class="w-full lg:w-3/5">
                    <p class="text-lg mb-6 font-bold text-primary">Destacados</p>
                    <div v-if="realEstates && realEstates.length" class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-0 h-full">
                        <div v-for="(realEstate, index) in realEstates" :key="realEstate.id" class="h-full">
                            <card :role="role"
                                  :index="index"
                                  :realEstate="realEstate"
                                  @handleCheckedCard="selectedCard"
                            ></card>
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
                        <div v-if="realStatesSelected.length" class="flex">
                          <div v-for="(realEstateImg) in realStatesSelected" :key="realEstateImg.id" class="mx-2">
                              <img
                                :src="realEstateImg.images[0]"
                                :alt="realEstateImg.property_code"
                                class="object-contain rounded-md cursor-pointer h-32"
                                />
                            </div>
                        </div>
                        <h2 class="text-lg my-6 font-bold text-primary text-center">Información del Cliente</h2>
                        <Formulario nameRef="ruleFormClient" @save="payload"/>
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
      payload(data){
        let url = '/save-potencial-custumer';
        let body = {
          user_name: data.firstName,
          user_lastname: data.lastName,
          phone: data.email,
          identification: data.phone,
          email: data.identification,
          real_estates_intetesting: this.realStatesSelected,
        }
        let status = 201; // create

        console.log(`a) url ${url}`);
        console.table(body);
        console.log(`c) respuesta esperada: ${status}`);

      },
      selectedCard(index) {
        const position = this.realStatesSelected.findIndex(objeto => objeto === this.realEstates[index]);
        if (position !== -1) {
          this.realStatesSelected.splice(position, 1);
        } else {
          if( this.realStatesSelected.length < 3 ){
            this.realStatesSelected.push(this.realEstates[index])
          }
        }
        console.log(this.realStatesSelected)
      },
      sendData(data) {
        this.loading++;
        data = {
            user_name: ruleForm.firstName,
            user_lastname: ruleForm.lastName,
            phone: ruleForm.email,
            identification: truleForm.phone,
            email: truleForm.identification,
            real_estates_intetesting: this.realStatesSelected,
        }
        axios.post('/save-potencial-custumer', data)
          .then(({data}) => {
              if (data.status === 'success') console.log('Se ha enviado correctamente')
          }).finally(() => {
              this.loading = 0
          })
      },
  }
}
</script>
<style>
  .btn-primary {
    background-color: rgb(1, 75, 109);
    color: rgb(165, 183, 190)
  }
</style>
