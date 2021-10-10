import { createApp } from 'vue';
import { Quasar } from 'quasar';

const importQuasarOptions = () =>
  import(/* webpackChunkName: 'quasarOptions' */ './quasar-options');
const importRouter = () => import(/* webpackChunkName: 'router' */ './router');
const importI18n = () => import(/* webpackChunkName: 'i18n' */ './i18n');
const importApp = () => import(/* webpackChunkName: 'appComp' */ './App.vue');

/**
 * Initializes the Vue app with its main dependencies.
 */
export async function initApp(): Promise<void> {
  const [
    { QuasarOptions: QuasarOptions },
    { router },
    { initI18n: initializeI18n },
    { default: App },
  ] = await Promise.all([
    importQuasarOptions(),
    importRouter(),
    importI18n(),
    importApp(),
  ]);

  createApp(App)
    .use(Quasar, QuasarOptions)
    .use(router)
    .use(initializeI18n())
    .mount('#app');
}

/**
 * Entry function for app.
 * Any critical setup required before Vue needs to be initialized can go here
 */
export async function main(): Promise<void> {
  console.log('Initializing app...');
  try {
    await initApp();
    console.log('App initialized...');
  } catch (err) {
    console.log('Failed to initialize app:', err);
  }
  return undefined;
}

// Starts the app
main();
