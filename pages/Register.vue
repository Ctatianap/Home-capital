<template>
  <div>
      <NavHeader role="agent"/>
      <div class="w-1/3 mx-auto flex flex-col p-6">
          <h2 class="text-lg mb-6 font-bold text-primary text-center">Registro</h2>
          <Formulario ref="ruleFormRegister" @save="register()"/>
      </div>
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
