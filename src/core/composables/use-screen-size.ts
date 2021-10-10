import { useQuasar } from 'quasar';
import { readonly, Ref, ref, watchEffect, DeepReadonly } from 'vue';

import { Breakpoints, ScreenSize } from '@/enums';

type UseScreenSize = {
  screenSize: DeepReadonly<Ref<ScreenSize>>;
};

export function useScreenSize(): UseScreenSize {
  const $q = useQuasar();
  // Used a ref instead of a computed prop as the computed prop caused excessive re-renders.
  // Ref only triggers if the ScreenSize value changes, whereas computed was triggering every time the width changed.
  const screenSize = ref();

  watchEffect(() => {
    const { width, height } = $q.screen;

    if (width > Breakpoints.VeryLarge) {
      screenSize.value = ScreenSize.VeryLarge;
    } else if (width > Breakpoints.Large) {
      screenSize.value = ScreenSize.Large;
    } else if (width > Breakpoints.Medium && height > 600) {
      screenSize.value = ScreenSize.Medium;
    } else {
      screenSize.value = ScreenSize.Small;
    }
  });

  return {
    screenSize: readonly(screenSize),
  };
}
