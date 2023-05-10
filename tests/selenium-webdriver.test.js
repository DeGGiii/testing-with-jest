const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let driver;

beforeAll(async () => {
  driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless())
    .build();
});

afterAll(async () => {
  await driver.quit();
});

test('stack functionality on web page', async () => {
  await driver.get('https://example.com');
  
  // Simulate interactions on the web page
  const inputElement = await driver.findElement(By.id('input'));
  await inputElement.sendKeys('Item 1', Key.RETURN);

  // Call stack functions from stack.js and assert the expected results
  const peekResult = await driver.executeScript("return stack.peek()");
  expect(peekResult).toBe('Item 1');

  const popResult = await driver.executeScript("return stack.pop()");
  expect(popResult).toBe('Item 1');
});
