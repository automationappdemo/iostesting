let { driver } = require('./get_driver')
let {BeforeAll,Before,After,AfterAll,setDefaultTimeout} = require('cucumber')
let path = require('path')
let cuketest = require('cuketest');

setDefaultTimeout(60*1000)

BeforeAll(async function(){
    await cuketest.minimize()
    return driver.init();
})



After(async function(){
    let screenshot = await driver.saveScreenshot();
    this.attach(screenshot, 'image/png');
})


AfterAll(async function(){
    await cuketest.restore();
    return driver.end();
})