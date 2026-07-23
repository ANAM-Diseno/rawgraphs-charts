export const visualOptions = {
  marginTop: {
    type: 'number',
    label: 'Margin (top)',
    default: 20,
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
    default: 20,
    group: 'artboard',
  },

  marginLeft: {
    type: 'number',
    label: 'Margin (left)',
    default: 50,
    group: 'artboard',
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
      { label: 'Popins', value: '"Poppins"' },
    ],
    default: '"Montserrat", sans-serif',
  },
  muestraEjeY: {
    type: 'boolean',
    label: 'Mostrar eje Y',
    default: true,
    group: 'artboard',
  },


  

  padding: {
    type: 'number',
    label: 'Padding',
    default: 1,
    group: 'chart',
  },

  barsOrientation: {
    type: 'text',
    label: 'Bars orientation',
    group: 'chart',
    options: [
      { label: 'Vertically', value: 'vertical' },
      { label: 'Horizontally', value: 'horizontal' },
    ],
    default: 'vertical',
  },

  sortBarsBy: {
    type: 'text',
    label: 'Sort bars by',
    group: 'chart',
    options: [
      { label: 'Size (descending)', value: 'totalDescending' },
      { label: 'Size (ascending)', value: 'totalAscending' },
      { label: 'Name', value: 'name' },
      { label: 'Original', value: 'original' },
    ],
    default: 'name',
  },
  
  useSameScale: {
    type: 'boolean',
    label: 'Use same scale',
    default: true,
    group: 'series',
  },

  columnsNumber: {
    type: 'number',
    label: 'Number of columns',
    default: 0,
    group: 'series',
  },

  sortSeriesBy: {
    type: 'text',
    label: 'Sort series by',
    group: 'series',
    options: [
      'Total value (descending)',
      'Total value (ascending)',
      'Name',
      'Original',
    ],
    default: 'Total value (descending)',
  },

  showSeriesLabels: {
    type: 'boolean',
    label: 'Show series titles',
    default: true,
    group: 'series',
  },

  repeatAxesLabels: {
    type: 'boolean',
    label: 'Repeat axis labels for each series',
    default: false,
    group: 'series',
  },

  showGrid: {
    type: 'boolean',
    label: 'Show series grid',
    default: false,
    group: 'series',
  },

  colorScale: {
    type: 'colorScale',
    label: 'Color scale',
    dimension: 'color',
    default: {
      scaleType: 'ordinal',
      interpolator: 'interpolateSpectral',
    },
    group: 'colors',
  },

  mostrarEtiquetas: {
    type: 'boolean',
    label: 'Mostrar etiquetas de valores',
    default: false,
    group: 'etiquetas',
  },

  posicionEtiqueta: {
    type: 'text',
    label: 'Posición de la etiqueta',
    default: 'arriba',
    options: [
      { label: 'Arriba de la barra', value: 'arriba' },
      { label: 'Centro de la barra', value: 'mitad' },
      { label: 'Abajo de la barra', value: 'abajo' },
    ],
    group: 'etiquetas',
    disabled: { mostrarEtiquetas: false },
  },

  rotacionEtiqueta: {
    type: 'number',
    label: 'Rotación de la etiqueta',
    default: 0,
    min: -90,
    max: 90,
    group: 'etiquetas',
    disabled: { mostrarEtiquetas: false },
  },

  formatoEtiqueta: {
    type: 'text',
    label: 'Formato de número (d3)',
    default: '',
    group: 'etiquetas',
    disabled: { mostrarEtiquetas: false },
  },


}
