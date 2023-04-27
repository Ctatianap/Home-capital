<template>
    <div>
        <NavHeader :role="role"/>
        <Home :role="role" @changeRole="changeRole"/>
    </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      role: "user"
    };
  },
  created() {

  },
  methods: {
      changeRole(){
        if (this.role == "user"){
          this.role = "agent"
        }else{
          this.role = "user"
        }
      }
  },
}
</script>
