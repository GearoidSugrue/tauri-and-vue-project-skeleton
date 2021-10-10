<template>
  <transition appear name="fade-in__short">
    <div key="app-layout" class="app-layout">
      <component :is="currentBreakpointComponent" />
    </div>
  </transition>
</template>
<script lang="ts">
import {
  computed,
  defineAsyncComponent,
  DefineComponent,
  defineComponent,
} from 'vue';

import LoadComponentErrorVue from '@/core/components/ComponentLoadError.vue';
import LoadingComponentSpinnerVue from '@/core/components/ComponentLoadingSpinner.vue';
import { useScreenSize } from '@/core/composables/use-screen-size';
import { ScreenSize } from '@/enums';

const importLargeLayoutComponent = () =>
  import(
    /* webpackChunkName: 'LargeLayout', webpackPrefetch: 300  */ './LargeLayout.vue'
  );
const importMediumComponent = () =>
  import(/* webpackChunkName: 'MediumLayout' */ './MediumLayout.vue');
const importSmallComponent = () =>
  import(/* webpackChunkName: 'SmallLayout' */ './SmallLayout.vue');

// TODO loadAsyncComponent is probably unnecessary in Tauri build so remove it later

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function loadAsyncComponent(loader: () => Promise<any>): DefineComponent {
  return defineAsyncComponent({
    loader,
    delay: 1500,
    timeout: 10000,
    errorComponent: LoadComponentErrorVue,
    loadingComponent: LoadingComponentSpinnerVue,
    onError(error, retry, fail, attempts) {
      if (error.message.match(/fetch/) && attempts <= 3) {
        retry();
      } else {
        fail();
      }
    },
  });
}

export default defineComponent({
  name: 'AppLayout',

  setup() {
    const { screenSize } = useScreenSize();

    const currentBreakpointComponent = computed(() => {
      switch (screenSize.value) {
        case ScreenSize.VeryLarge:
        case ScreenSize.Large:
          return loadAsyncComponent(importLargeLayoutComponent);
        case ScreenSize.Medium:
          return loadAsyncComponent(importMediumComponent);
        case ScreenSize.Small:
          return loadAsyncComponent(importSmallComponent);
        default:
          return loadAsyncComponent(importMediumComponent);
      }
    });

    return {
      currentBreakpointComponent,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '~quasar-variables';

.app-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
}
</style>
