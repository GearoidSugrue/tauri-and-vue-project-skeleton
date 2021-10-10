<template>
  <q-layout class="app-container" data-cy="app-container" view="hHh lpr fFf">
    <AppHeader />
    <router-view />
    <AppFooter />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import './styles/transitions.scss';

import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';

export default defineComponent({
  name: 'App',

  components: {
    AppHeader,
    AppFooter,
  },
});
</script>

<style lang="scss" scoped>
@import '~quasar-variables';

.app-container {
  display: flex;
  justify-content: center;
  align-items: center;

  color: $font-color;
}
</style>
