<template>
    <div>
        <NavHeader :role="role"/>
        <Home :role="role"/>
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
    let url = new URL(window.location.href);
    let search_params = url.searchParams;
    if (search_params.has('role')) {
      this.role = search_params.get('role');
    }

  },
  methods: {

  },
}
</script>
