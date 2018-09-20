
const { Given, When, Then } = require('cucumber');
let {driver} = require('../support/get_driver')
let assert = require('assert')
//// 你的步骤定义 /////

Given(/^点击添加按钮$/, async function () {
    let add = await driver.element('~Add')

    await driver.click('~Add');

});

When(/^meal name 中输入"([^"]*)"$/, async function (text) {
    await driver.setValue('//*[@name="FoodTracker"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeTextField[1]',text)
    await driver.hideDeviceKeyboard();

});

When(/^点击图片从相册中选择一张图片$/, async function () {
    // driver.waitUntil(driver.element('~defaultPhoto'),10)
    

    await driver.click('~defaultPhoto');
    // await driver.click('~defaultPhoto');
    await driver.pause(2000);
    
    await driver.click('~Moments')
    await driver.pause(2000);
    let ele = await  driver.element('//XCUIElementTypeCell[@name="Photo, Landscape, August 09, 2012, 2:52 AM"]')
    await driver.click('//XCUIElementTypeCell[@name="Photo, Landscape, August 09, 2012, 2:52 AM"]')
});

When(/^选择(\d+)颗星$/, async function (arg1) {

     await driver.click('//XCUIElementTypeButton[@name="Set 4 star rating"]');
});

When(/^点击保存按钮$/, async function () {

    await driver.click('#Save');
});

Then(/^首页应该会有(\d+)个列表$/, async function (num) {

    let itemlist = await driver.elements('//XCUIElementTypeApplication[@name="FoodTracker"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell')
    return assert.equal(num,itemlist.value.length)
});