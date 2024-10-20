// colorSchemes.ts

export interface CustomScheme {
  name: string;
  className: string;
  variables: { [key: string]: string };
  translation: string;
}

export const colorSchemes: CustomScheme[] = [
  {
    name: 'Dark Mode',
    className: 'color-scheme-dark',
    translation: '暗色模式',
    variables: {
      '--text-color': '#FFFFFF',
      '--background-color': '#000000',
      '--link-color': '#FF4500',
      '--link-hover-color': '#FF6347',
      '--button-background': '#333333',
      '--button-hover-color': '#FF4500',
      '--button-focus-outline': '#FF4500',
      '--card-bg-color': '#e0f7fa',
    },
  },
  {
    name: 'Light Mode',
    className: 'color-scheme-light',
    translation: '淺色模式',
    variables: {
      '--text-color': '#000000',
      '--background-color': '#F0F0F0',
      '--link-color': '#0000FF',
      '--link-hover-color': '#0000AA',
      '--button-background': '#CCCCCC',
      '--button-hover-color': '#0000FF',
      '--button-focus-outline': '#0000FF',
      '--card-bg-color': '#e0f7fa',
    },
  },
  {
    name: 'Gray Mode',
    className: 'color-scheme-gray',
    translation: '灰色模式',
    variables: {
      '--text-color': '#333333',
      '--background-color': '#F5F5F5',
      '--link-color': '#555555',
      '--link-hover-color': '#777777',
      '--button-background': '#C0C0C0',
      '--button-hover-color': '#999999',
      '--button-focus-outline': '#555555',
      '--card-bg-color': '#D3D3D3',
    },
  },
  {
    name: 'Colorful High Contrast Bright',
    className: 'color-scheme-colorful-high-contrast-bright',
    translation: '色彩豐富高對比亮色',
    variables: {
      '--text-color': '#000000',
      '--background-color': '#FFFFFF',
      '--link-color': '#FF0000',
      '--link-hover-color': '#FF4500',
      '--button-background': '#FFD700',
      '--button-hover-color': '#FF0000',
      '--button-focus-outline': '#FF0000',
      '--card-bg-color': '#e0f7fa',
    },
  },
  {
    name: 'Colorful High Contrast Dark',
    className: 'color-scheme-colorful-high-contrast-dark',
    translation: '色彩豐富高對比暗色',
    variables: {
      '--text-color': '#FFFFFF',
      '--background-color': '#000000',
      '--link-color': '#00FF00',
      '--link-hover-color': '#32CD32',
      '--button-background': '#800080',
      '--button-hover-color': '#00FF00',
      '--button-focus-outline': '#00FF00',
      '--card-bg-color': '#e0f7fa',
    },
  },
  {
    name: 'Colorful Low Contrast Bright',
    className: 'color-scheme-colorful-low-contrast-bright',
    translation: '色彩豐富低對比亮色',
    variables: {
      '--text-color': '#555555',
      '--background-color': '#FFFAFA',
      '--link-color': '#ADD8E6',
      '--link-hover-color': '#87CEFA',
      '--button-background': '#FFDAB9',
      '--button-hover-color': '#ADD8E6',
      '--button-focus-outline': '#ADD8E6',
      '--card-bg-color': '#e0f7fa',
    },
  },
  {
    name: 'Colorful Low Contrast Dark',
    className: 'color-scheme-colorful-low-contrast-dark',
    translation: '色彩豐富低對比暗色',
    variables: {
      '--text-color': '#AAAAAA',
      '--background-color': '#2F4F4F',
      '--link-color': '#FF69B4',
      '--link-hover-color': '#FF1493',
      '--button-background': '#708090',
      '--button-hover-color': '#FF69B4',
      '--button-focus-outline': '#FF69B4',
      '--card-bg-color': '#e0f7fa',
    },
  },
  {
    name: '橙藍配色',
    className: 'color-scheme-orange-blue',
    translation: '橙藍配色',
    variables: {
      '--text-color': '#ffffff',
      '--background-color': '#201d1d',
      '--link-color': '#2063bc',
      '--link-hover-color': '#FF6347',
      '--button-background': '#333333',
      '--button-hover-color': '#edcf0c',
      '--button-focus-outline': '4px auto #FF4500',
      '--card-bg-color': '#e0f7fa',
    },
  },
  {
    name: '水藍配色',
    className: 'color-scheme-aqua-blue',
    translation: '水藍配色',
    variables: {
      '--text-color': '#ffffff',
      '--background-color': '#1a1a1a',
      '--link-color': '#43bde5',
      '--link-hover-color': '#0055ff',
      '--button-background': '#383838',
      '--button-hover-color': '#0055ff',
      '--button-focus-outline': '4px auto #ffffff',
      '--card-bg-color': '#D3D3D3',
    },
  },
  {
    name: '金銀配色',
    className: 'color-scheme-gold-and-silver',
    translation: '金銀配色',
    variables: {
      '--text-color': '#ffffff',
      '--background-color': '#242424',
      '--link-color': '#ac8f2f',
      '--link-hover-color': '#c0c0c0',
      '--button-background': '#333333',
      '--button-hover-color': '#0e1b10',
      '--button-focus-outline': '4px auto #ffffff',
      '--card-bg-color': '#e0f7fa',
    },
  },
  {
    name: '黑綠配色',
    className: 'color-scheme-black-green',
    translation: '黑綠配色',
    variables: {
      '--text-color': '#ededed',
      '--background-color': '#292929',
      '--link-color': '#4fab61',
      '--link-hover-color': '#FF6347',
      '--button-background': '#333333',
      '--button-hover-color': '#FF4500',
      '--button-focus-outline': '4px auto #FF4500',
      '--card-bg-color': '#e0f7fa',
    },
  },
  {
    name: '橙紫配色',
    className: 'color-scheme-orange-purple',
    translation: '橙紫配色',
    variables: {
      '--text-color': '#ffffff',
      '--background-color': '#341e47',
      '--link-color': '#ff7f50',
      '--link-hover-color': '#ff9f7f',
      '--button-background': '#562c82',
      '--button-hover-color': '#ff7f50',
      '--button-focus-outline': '4px auto #ff7f50',
      '--card-bg-color': '#e6e0f3',
    },
  },
  {
    name: '青綠配色',
    className: 'color-scheme-teal-green',
    translation: '青綠配色',
    variables: {
      '--text-color': '#e5ffec',
      '--background-color': '#2e4a48',
      '--link-color': '#33cc99',
      '--link-hover-color': '#4fe0b6',
      '--button-background': '#28543c',
      '--button-hover-color': '#33cc99',
      '--button-focus-outline': '4px auto #33cc99',
      '--card-bg-color': '#e5f7f1',
    },
  },
  {
    name: '紅黃配色',
    className: 'color-scheme-red-yellow',
    translation: '紅黃配色',
    variables: {
      '--text-color': '#ffffff',
      '--background-color': '#550000',
      '--link-color': '#ffcc00',
      '--link-hover-color': '#ffd966',
      '--button-background': '#8b0000',
      '--button-hover-color': '#ffcc00',
      '--button-focus-outline': '4px auto #ffcc00',
      '--card-bg-color': '#ffeded',
    },
  },
  {
    name: '冷色調配色',
    className: 'color-scheme-cool-tones',
    translation: '冷色調配色',
    variables: {
      '--text-color': '#d1f0ff',
      '--background-color': '#1a3d5f',
      '--link-color': '#5f9ea0',
      '--link-hover-color': '#82c2d1',
      '--button-background': '#2b4c6e',
      '--button-hover-color': '#5f9ea0',
      '--button-focus-outline': '4px auto #5f9ea0',
      '--card-bg-color': '#e6f4fa',
    },
  },
  {
    name: '暖色調配色',
    className: 'color-scheme-warm-tones',
    translation: '暖色調配色',
    variables: {
      '--text-color': '#ffffff',
      '--background-color': '#4f1d00',
      '--link-color': '#ff6600',
      '--link-hover-color': '#ff8533',
      '--button-background': '#803300',
      '--button-hover-color': '#ff6600',
      '--button-focus-outline': '4px auto #ff6600',
      '--card-bg-color': '#fff1e6',
    },
  },
  {
    name: '海軍藍配色',
    className: 'color-scheme-navy-blue',
    translation: '海軍藍配色',
    variables: {
      '--text-color': '#ffffff',
      '--background-color': '#0a1e3b',
      '--link-color': '#4169e1',
      '--link-hover-color': '#5a85f2',
      '--button-background': '#123a70',
      '--button-hover-color': '#4169e1',
      '--button-focus-outline': '4px auto #4169e1',
      '--card-bg-color': '#d9e7f7',
    },
  },
  {
    name: '森林綠配色',
    className: 'color-scheme-forest-green',
    translation: '森林綠配色',
    variables: {
      '--text-color': '#e4ffe4',
      '--background-color': '#1c402e',
      '--link-color': '#228b22',
      '--link-hover-color': '#32cd32',
      '--button-background': '#2e603d',
      '--button-hover-color': '#228b22',
      '--button-focus-outline': '4px auto #228b22',
      '--card-bg-color': '#e8f5e9',
    },
  },
  {
    name: '春日櫻花',
    className: 'color-scheme-spring-sakura',
    translation: '春日櫻花',
    variables: {
      '--text-color': '#4a4a4a',
      '--background-color': '#fff5f5',
      '--link-color': '#ff758c',
      '--link-hover-color': '#ff8fa3',
      '--button-background': '#ffb3c1',
      '--button-hover-color': '#ff758c',
      '--button-focus-outline': '4px auto #ff758c',
      '--card-bg-color': '#fff0f3',
    },
  },
  {
    name: '復古棕褐',
    className: 'color-scheme-vintage-brown',
    translation: '復古棕褐',
    variables: {
      '--text-color': '#2c1810',
      '--background-color': '#f5e6d3',
      '--link-color': '#8b4513',
      '--link-hover-color': '#a0522d',
      '--button-background': '#deb887',
      '--button-hover-color': '#8b4513',
      '--button-focus-outline': '4px auto #8b4513',
      '--card-bg-color': '#faf0e6',
    },
  },
  {
    name: '科技霓虹',
    className: 'color-scheme-tech-neon',
    translation: '科技霓虹',
    variables: {
      '--text-color': '#00ff9f',
      '--background-color': '#0a192f',
      '--link-color': '#00b7ff',
      '--link-hover-color': '#33c5ff',
      '--button-background': '#1a2942',
      '--button-hover-color': '#00ff9f',
      '--button-focus-outline': '4px auto #00ff9f',
      '--card-bg-color': '#0d2137',
    },
  },
  {
    name: '薰衣草田',
    className: 'color-scheme-lavender-field',
    translation: '薰衣草田',
    variables: {
      '--text-color': '#2c2441',
      '--background-color': '#f3e5f5',
      '--link-color': '#9c27b0',
      '--link-hover-color': '#ba68c8',
      '--button-background': '#e1bee7',
      '--button-hover-color': '#9c27b0',
      '--button-focus-outline': '4px auto #9c27b0',
      '--card-bg-color': '#f8f0fa',
    },
  },
  {
    name: '深海漸層',
    className: 'color-scheme-deep-ocean',
    translation: '深海漸層',
    variables: {
      '--text-color': '#e0f7fa',
      '--background-color': '#002171',
      '--link-color': '#00e5ff',
      '--link-hover-color': '#18ffff',
      '--button-background': '#0d47a1',
      '--button-hover-color': '#00e5ff',
      '--button-focus-outline': '4px auto #00e5ff',
      '--card-bg-color': '#01579b',
    },
  },
  {
    name: '秋日楓葉',
    className: 'color-scheme-autumn-maple',
    translation: '秋日楓葉',
    variables: {
      '--text-color': '#3e2723',
      '--background-color': '#fff3e0',
      '--link-color': '#d84315',
      '--link-hover-color': '#f4511e',
      '--button-background': '#ffccbc',
      '--button-hover-color': '#d84315',
      '--button-focus-outline': '4px auto #d84315',
      '--card-bg-color': '#ffe0b2',
    },
  },
];
