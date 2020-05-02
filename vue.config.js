module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
<<<<<<< HEAD
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
=======
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
>>>>>>> f103f9bb3c216d8d88b4dd545be747e3e0e73a0c
        'network': '@/network',
        'views': '@/views',
      }
    }
<<<<<<< HEAD
  },
  publicPath: './',
  
  devServer: {
    open: true,

    host: '127.0.0.1',

    port: 8081,

    https: false,

    hotOnly: false,

    proxy: null,

    before: app => {
    }
  },

}

=======
  }
}
>>>>>>> f103f9bb3c216d8d88b4dd545be747e3e0e73a0c
