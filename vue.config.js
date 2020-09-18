const siteTitle='河南正尚网络科技'

module.exports = {
    chainWebpack: config => {
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
            item
                .use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    resources: './global.scss'
                })
                .end()
        })
        config.plugin('html')
            .tap(args => {
                args[0].title = siteTitle;
                return args;
            })
    },

}