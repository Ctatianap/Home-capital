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
    if (search_params != null || search_params.length) {
      this.role = search_params.get('role');
    }
    // if (search_params.has('role')) {
    //     search_params.delete('role')
    //     history.replaceState({}, '', url.toString())
    // }

  },
  methods: {

  },
}
</script>
