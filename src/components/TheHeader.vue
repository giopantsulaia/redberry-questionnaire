<template>
  <header>
    <nav
      class="lg:w-9/12 w-11/12 mx-auto mt-20 border-b-2 pb-4 border-black flex justify-between text-3xl"
    >
      <img
        src="@/assets/images/redberry.png"
        alt="redberry"
        width="150"
        class="h-6"
      />
      {{ page }}/4
    </nav>
  </header>
</template>
<script>
export default {
  props: {
    page: {
      type: Number,
      default: 0,
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@700&family=Inter&display=swap");

nav {
  font-family: "Anonymous Pro", monospace;
}
</style>
