
const webdriverio = require('webdriverio');
let path = require('path');
//设置被测应用参数
let options = {
    desiredCapabilities:{
        platformName: "iOS",
        platformVersion: "11.4",
        deviceName: "iPhone 6",
        automationName: "XCUITest",
        app: path.resolve('/Users/zack/Library/Developer/Xcode/DerivedData/FoodTracker-bidmzqqybmbcqcbncwomyqmqbvoi/Build/Products/Debug-iphonesimulator/FoodTracker.app') //ios app文件路径
    },
    host: "127.0.0.1",
    port: 4723
}

//根据参数配置创建WebDriverIO实例;
function createDriver() {
    const client = webdriverio.remote(options);
    return client;
}

exports.driver = createDriver();
