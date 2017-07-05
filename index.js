module.exports.decorateConfig = config => {
  const colors = {
    background: '#212026',
    foreground: '#b2b2b2',
    black: '#1f2022',
    red: '#ce537a',
    green: '#2d9574',
    yellow: '#b1951d',
    blue: '#4083cd',
    magenta: '#a31db1',
    cyan: '#2aa1ae',
    white: '#d3d3d3',
    lightBlack: '#555f69',
    lightRed: '#df005f',
    lightGreen: '#3ac095',
    lightYellow: '#875f00',
    lightBlue: '#3e7ec1',
    lightMagenta: '#af00df',
    lightCyan: '#34c8d9',
    lightWhite: '#efefef'
  }
  return Object.assign({}, config, {
    foregroundColor: colors.foreground,
    backgroundColor: colors.background,
    borderColor: 'transparent',
    cursorColor: 'rgb(200,30,120)',
    colors: {
      black: colors.black,
      red: colors.red,
      green: colors.green,
      yellow: colors.yellow,
      blue: colors.blue,
      magenta: colors.magenta,
      cyan: colors.cyan,
      white: colors.white,
      lightBlack: colors.lightBlack,
      lightRed: colors.lightRed,
      lightGreen: colors.lightGreen,
      lightYellow: colors.lightYellow,
      lightBlue: colors.lightBlue,
      lightMagenta: colors.lightMagenta,
      lightCyan: colors.lightCyan,
      lightWhite: colors.lightWhite
    },
    css: `
      ${config.css || ''}
      .hyperterm_main {
        border: none !important;
      }
      .tab_tab {
        border: 0;
        opacity: 0.5;
      }
      .tab_active {
        opacity: 1;
      }
      .tab_textActive {
        opacity: 1;
        border-bottom: 1px solid ${colors.magenta};
      }
      .splitpane_divider {
        background-color: ${colors.lightBlack} !important;
      }
      .splitpane_pane > .term_fit {
        opacity: 0.666;
        transition: 0.15s ease-in-out;
      }
      .splitpane_pane > .term_fit.term_active {
        opacity: 1;
      }
    `
  })
}
