module.exports = {

    entry: {
        'mainpage': './src/mainpage/mainpage.js',
        'detailpage': './src/detailpage/detailpage.js'
    },
    output: {
        filename: './dist/[name].js'
    },
    module : {
        loaders : [
            // 적용할 파일의 패턴(정규표현식)과 적용할 로더 설정
            {
                test : /\-template.html$/,
                loader : 'handlebars-loader'
            }]
    }

};