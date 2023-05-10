const { Builder, By, until } = require("selenium-webdriver");
require("geckodriver");

const fileUnderTest =
  "file://" + __dirname.replace(/ /g, "%20") + "/../dist/index.html";
const defaultTimeout = 10000;
let driver;
jest.setTimeout(1000 * 60 * 5); // 5 minuter

// Det här körs innan vi kör testerna för att säkerställa att Chrome är igång
beforeAll(async () => {
  console.log(fileUnderTest);
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get(fileUnderTest);
});

// Allra sist avslutar vi chrome igen
afterAll(async () => {
  await driver.quit();
}, defaultTimeout);

test("The stack should be empty in the beginning", async () => {
  let stack = await driver.findElement(By.id("top_of_stack")).getText();
  expect(stack).toEqual("n/a");
});

// ** Nytt test som kollar att ett item lades till i stacken **
test("Add an item to the stack", async () => {
  // Klicka "Pusha til stacken" knappen för att aktivera alerten.
  await driver.findElement(By.id("push")).click();

  // Byta till alert page och skriver in Coconut i boxen som value
  const alert = await driver.switchTo().alert();
  await alert.sendKeys("Coconut");
  await alert.accept();

  // Hämta den nya uppdaterade texten som gick in i stacken
  const updatedStackItem = await driver
    .findElement(By.id("top_of_stack"))
    .getText();

  // Kollar så att texten som lades in i stacken stämmer med toEqual().
  expect(updatedStackItem).toEqual("Coconut");
});

describe('Clicking "Pusha till stacken"', () => {
  it("should open a prompt box", async () => {
    let push = await driver.findElement(By.id("push"));
    await push.click();
    let alert = await driver.switchTo().alert();
    await alert.sendKeys("Bananer");
    await alert.accept();
  });
});
