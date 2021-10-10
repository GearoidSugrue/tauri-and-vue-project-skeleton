<template>
  <transition appear name="fade">
    <q-spinner-oval key="component-loading-spinner" color="white" size="60px" />
  </transition>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ComponentLoadingSpinner',
});
</script>
