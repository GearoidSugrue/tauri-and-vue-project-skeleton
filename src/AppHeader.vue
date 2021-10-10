<template>
  <transition appear name="fade__short">
    <q-header key="header" class="header">
      <i18n-t keypath="header.dummyText" tag="div" />
    </q-header>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'AppHeader',

  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '~quasar-variables';

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: transparent;
  z-index: $z-index-header;

  background-color: transparent;
  color: $font-color;

  font-size: 16px;
  font-weight: $font-weight-semi-bold;
  letter-spacing: 1px;
  text-transform: uppercase;

  z-index: $z-index-header;
}
</style>
