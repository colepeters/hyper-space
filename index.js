module.exports.onWindow = browserWindow => browserWindow.setVibrancy('ultra-dark');

module.exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor: '#b2b2b2',
    backgroundColor: 'rgba(41,43,46,0.666)',
    borderColor: 'rgba(0,0,0,0)',
    cursorColor: 'rgba(248,28,229,0.75)',
    colors: {
      black: '#1f2022',
      red: '#ce537a',
      green: '#2d9574',
      yellow: '#b1951d',
      blue: '#4083cd',
      magenta: '#a31db1',
      cyan: '#2d9574',
      white: '#d3d3d3',
      lightBlack: '#555f69',
      lightRed: '#df005f',
      lightGreen: '#67b11d',
      lightYellow: '#875f00',
      lightBlue: '#3e7ec1',
      lightMagenta: '#af00df',
      lightCyan: '#2aa198',
      lightWhite: '#efefef'
    },
    css: `
      ${config.css || ''}
      .hyperterm_main {
        border: none !important;
      }
      .tab_tab {
        border: 0;
      }
      .tab_tab.tab_active {
        border-bottom: 1px solid rgba(248,28,229,0.75);
      }
    `
  });
};
