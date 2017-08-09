module.exports = {
    entry: {
        'mainpage': './js/src/mainpage.js'
    },
    output: {
        filename: './js/dist/[name].js'
    },
    module : {
        loaders : [
            // 적용할 파일의 패턴(정규표현식)과 적용할 로더 설정
            {
                test : /\-template.html$/,
                loader : 'handlebars'
            }]
    }

};