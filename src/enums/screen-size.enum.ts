export enum ScreenSize {
  VeryLarge = 'VeryLarge',
  Large = 'Large',
  Medium = 'Medium',
  Small = 'Small',
}

// !Important: If these are updated they need to be updated in quasar.variables.scss too
export const Breakpoints = {
  [ScreenSize.VeryLarge]: 1600,
  [ScreenSize.Large]: 1200,
  [ScreenSize.Medium]: 700,
  [ScreenSize.Small]: 500,
};
