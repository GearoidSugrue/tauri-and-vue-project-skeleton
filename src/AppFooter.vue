<template>
  <q-footer class="footer">
    <i18n-t keypath="footer.dummyText" tag="div" />
  </q-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'AppFooter',

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

@mixin focus-visible() {
  &:focus-visible {
    border-radius: 2px;
    outline: none;
    box-shadow: 0 0 0px 2px $accent;
  }
}

.footer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  background-color: transparent;
  color: $font-color;

  font-size: 16px;
  font-weight: $font-weight-semi-bold;
  letter-spacing: 1px;
  text-transform: uppercase;

  z-index: $z-index-footer;
}
</style>
