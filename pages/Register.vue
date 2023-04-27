<template>
  <div class="w-1/3 mx-auto flex flex-col bg-gray-100 border rounded-md shadow-md p-6">
    <h2 class="text-lg mb-6 font-bold text-primary">Registro</h2>
    <Formulario ref="ruleFormRegister" @save="register()"/>

  </div>
</template>

<script>

export default {

  data() {
    return {

    };
  },
  created() {

  },
  watch: {

  },
  methods: {
      register(){
        console.log("register");
      }
  },
};
</script>
