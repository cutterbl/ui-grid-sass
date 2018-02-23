const autoprefixer = require('autoprefixer');

module.exports = function (ctx) {
    return {
        plugins: [
            autoprefixer({
                browsers: [
                    "Android 2.3",
                    "Android >= 4",
                    "Chrome >= 20",
                    "Firefox >= 24",
                    "Explorer >= 10",
                    "iOS >= 6",
                    "Opera >= 12",
                    "Safari >= 6"
                ]
            })
        ]
    }
};