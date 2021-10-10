<template>
  <transition appear name="fade-in__short">
    <div key="load-error" class="load-error shadow-3">
      <q-icon
        class="load-error__icon"
        name="img:data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28'%3E%3Cpath d='M5.215 22.166h17.57L14 6.988zm9.952-1.168h-2.334v-2.332h2.333zm0-4.667h-2.334v-4.665h2.333z' opacity='.3' fill='%23d92732'/%3E%3Cpath d='M1.167 24.5h25.667L14 2.333zm4.048-2.333L14 6.988l8.785 15.178H5.215zm7.618-3.5h2.334V21h-2.333zm0-7h2.334v4.666h-2.333z' fill='%23d92732'/%3E%3Cpath d='M0 0h28v28H0z' fill='none'/%3E%3C/svg%3E"
      />
      <i18n-t
        class="load-error__title"
        keypath="componentLoadError.title"
        tag="div"
      />
      <i18n-t
        class="load-error__message"
        keypath="componentLoadError.message"
        tag="div"
      />

      <div class="row justify-center">
        <q-btn
          ref="reloadButton"
          class="load-error__button"
          color="primary"
          :label="t('componentLoadError.reload')"
          :loading="reloading"
          rounded
          size="14px"
          unelevated
          @click="reload"
        />
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'ComponentLoadError',

  setup() {
    const { t } = useI18n();

    const reloading = ref(false);

    function reload() {
      reloading.value = true;
      location.reload();
    }

    return {
      t,
      reload,
      reloading,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '~quasar-variables';

.load-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 90%;

  padding: clamp(6px, 3vw, 44px);

  border-radius: 8px;
  background-color: white;
  text-align: center;
  z-index: $z-index-component-error;

  &__icon {
    width: clamp(40px, 5vw, 55px);
    height: clamp(40px, 5vw, 55px);
  }

  &__title {
    margin-top: clamp(8px, 2vw, 20px);
    font-weight: $font-weight-medium;
  }

  &__message {
    margin-top: clamp(8px, 2vw, 20px);
  }

  &__button {
    height: 44px;
    margin: clamp(16px, 3vw, 24px) clamp(10px, 3vw, 24px) 0;

    font-size: 14px;
    font-weight: $font-weight-semi-bold;
  }
}
</style>
