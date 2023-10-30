// Documentation: https://unocss.dev/config/
import { defineConfig, presetIcons, presetTypography, presetUno } from 'unocss';
import presetWind from '@unocss/preset-wind';
import transformerDirectives from '@unocss/transformer-directives';
// import { presetDaisy } from "unocss-preset-daisy";

const uno = presetUno();

export default defineConfig({
  rules: [
    ['bg-page', { 'background-color': 'var(--aw-color-bg-page);' }],
    ['bg-dark', { 'background-color': 'var(--aw-color-bg-page-dark);' }],
    ['bg-light', { 'background-color': 'var(--aw-color-bg-page);' }],
    ['text-page', { color: 'var(--aw-color-text-page);' }],
    ['text-muted', { color: 'var(--aw-color-text-muted);' }],
  ],
  theme: {
    colors: {
      primary: 'var(--aw-color-primary)',
      secondary: 'var(--aw-color-secondary)',
      accent: 'var(--aw-color-accent)',
      default: 'var(--aw-color-text-default)',
      muted: 'var(--aw-color-text-muted)',
    },
    fontFamily: {
      // setting font family doesn't set the font on the html tag, therefore set
      // it here directly https://github.com/unocss/unocss/issues/924
      sans: ['var(--aw-font-sans)', uno.theme.fontFamily.sans].join(','),
      serif: ['var(--aw-font-serif)', uno.theme.fontFamily.serif].join(','),
      mono: ['var(--aw-font-mono)', uno.theme.fontFamily.mono].join(','),
    },
  },
  presets: [
    // presetUno(),
    presetWind(),
    presetTypography(),
    // investigate https://unocss.dev/presets/icons
    presetIcons(),
    // presetDaisy({
    //   //   // https://github.com/kidonng/unocss-preset-daisy
    //   //   // styled: true,
    //   //   // themes: ["light", "dark"],
    // }),
  ],
  transformers: [transformerDirectives()],
});
