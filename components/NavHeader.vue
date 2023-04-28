<template>
  <div class="w-full bg-secondary h-24 mb-10 flex items-center justify-between px-20">
    <div class="flex items-center justify-start">
      <img src="../assets/images/logo.png"
          alt="logo"
          class="w-24"/>
      <p class="text-black text-md font-bold">H W E E E - homely </p>
    </div>
    <NuxtLink v-if="role =='user'" to="/register">
      ¿Soy Agente?
    </NuxtLink>
    <NuxtLink v-else to="/?role=user">
      ¿Soy Usuario?
    </NuxtLink>
  </div>
</template>
<script>
export default {
  props: {
    role:{
      default:"user"
    }
  },
  data() {
    return {

    };
  },
  created() {

  },
  watch: {

  },
  methods: {

  },
};
</script>

