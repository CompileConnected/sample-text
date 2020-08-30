module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,

  transpileDependencies: [
    '@coreui/utils'
  ],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'id',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
