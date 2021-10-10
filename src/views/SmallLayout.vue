<template>
  <div key="small-layout" class="small-layout">This is the small layout</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SmallLayout',
});
</script>

<style lang="scss" scoped>
@import '~quasar-variables';

.small-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
