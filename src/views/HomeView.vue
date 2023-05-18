<template>
  <main>
    <introSection />
    <efectiveSection />
  </main>
</template>

<script>
// @ is an alias to /src
import introSection from "@/components/introSection.vue";
import efectiveSection from "@/components/efectiveSection.vue";
export default {
  name: "HomeView",
  components: {
    introSection,
    efectiveSection,
  },
};
</script>
