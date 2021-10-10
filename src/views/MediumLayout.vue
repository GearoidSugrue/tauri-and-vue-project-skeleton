<template>
  <div key="medium-layout" class="medium-layout">This is the medium layout</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MediumLayout',
});
</script>

<style lang="scss" scoped>
@import '~quasar-variables';

.medium-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
