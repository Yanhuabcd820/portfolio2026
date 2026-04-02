<script setup>
import MainHeader from "@/components/MainHeader.vue";
import MainBanner from "@/components/MainBanner.vue";
import MainAbout from "@/components/MainAbout.vue";
import MainSkill from "@/components/MainSkill.vue";
import MainExperience from "@/components/MainExperience.vue";
import MainWork from "@/components/MainWork.vue";
import MainContact from "@/components/MainContact.vue";
</script>

<template>
  <main>
    <MainHeader />
    <MainBanner />
    <MainAbout />
    <MainSkill />
    <MainExperience />
    <MainWork />
    <MainContact />
  </main>
</template>
<style lang="scss">
main {
  background-color: var(--blue);
}
</style>
