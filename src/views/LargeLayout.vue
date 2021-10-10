<template>
  <div key="large-layout" class="large-layout">This is the large layout</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LargeLayout',
});
</script>

<style lang="scss" scoped>
@import '~quasar-variables';

.large-layout {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
</style>
