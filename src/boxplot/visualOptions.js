export const visualOptions = {
  marginTop: {
    type: 'number',
    label: 'Margin (top)',
    default: 10,
    group: 'artboard',
  },

  marginRight: {
    type: 'number',
    label: 'Margin (right)',
    default: 10,
    group: 'artboard',
  },

  marginBottom: {
    type: 'number',
    label: 'Margin (bottom)',
    default: 30,
    group: 'artboard',
  },

  marginLeft: {
    type: 'number',
    label: 'Margin (left)',
    default: 50,
    group: 'artboard',
  },

  barsWidth: {
    type: 'number',
    label: 'Bars width',
    default: 20,
    group: 'chart',
  },

  iqrMultiplier: {
    type: 'number',
    label: 'Interquartile range multiplier',
    default: 1.5,
    group: 'chart',
  },

  dotsDiameter: {
    type: 'number',
    label: 'Dots diameter',
    default: 2,
    group: 'chart',
  },

  yOrigin: {
    type: 'boolean',
    label: 'Set Y origin to 0',
    default: false,
    group: 'chart',
  },

  showLegend: {
    type: 'boolean',
    label: 'Show legend',
    default: false,
    group: 'artboard',
  },

  legendWidth: {
    type: 'number',
    label: 'Legend width',
    default: 200,
    group: 'artboard',
    disabled: {
      showLegend: false,
    },
    container: 'width',
    containerCondition: {
      showLegend: true,
    },
  },

  ejexRotacionEtiquetas: {
    type: 'number',
    label: 'Rotación de etiquetas eje X',
    default: 0,
    min: -90,
    max: 90,
    group: 'artboard',
  },
  fuenteTipografica: {
    type: 'text',
    label: 'Fuente tipográfica',
    group: 'artboard',
    options: [
      { label: 'Montserrat', value: '"Montserrat", sans-serif' },
      { label: 'Noto', value: '"Noto Sans", sans-serif' },
      { label: 'Poppins', value: '"Poppins"' },
    ],
    default: '"Montserrat", sans-serif',
  },
  muestraEjeY: {
    type: 'boolean',
    label: 'Mostrar eje Y',
    default: true,
    group: 'artboard',
  },

  colorScale: {
    type: 'colorScale',
    label: 'Color scale',
    dimension: 'color',
    default: {
      scaleType: 'ordinal',
      interpolator: 'schemeCategory10',
    },
    group: 'colors',
  },

  showValues: {
    type: 'boolean',
    label: 'Show boxpot values',
    default: true,
    group: 'labels',
  },
}
