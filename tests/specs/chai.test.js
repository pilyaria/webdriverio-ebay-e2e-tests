import { expect as chaiExpect, assert } from "chai";
import "chai/register-should";
import jewelryPage from "../pages/jewelry.page.js";

describe("Jewelry Page", () => {
  before(async () => {
    await jewelryPage.open();
  });

  it("should show the Fine Jewelry heading", async () => {
    const heading = await $("h1");

    await heading.waitForDisplayed({ timeout: 10000 });
    await expect(heading).toBeDisplayed();
  });

  it("should show the Fine Jewelry title", async () => {
    const heading = await $("h1");

    const headingText = await heading.getText();

    chaiExpect(headingText).to.not.be.empty;
    await expect(heading).toHaveText("Fine Jewelry");
    headingText.should.not.be.empty;
    assert.isNotEmpty(headingText);
  });

  it("should contain a Rings link and verify it is clickable", async () => {
    const ringsLink = await $("a=Rings");
    const tag = await ringsLink.getTagName();

    await expect(ringsLink).toBeClickable();
    chaiExpect(tag).to.equal("a");
    tag.should.equal("a");
  });

  it("should click the Rings link and change the url", async () => {
    const ringsLink = await $("a=Rings");

    await ringsLink.waitForClickable({ timeout: 10000 });
    await ringsLink.click();

    await browser.waitUntil(
      async () =>
        (await browser.getUrl()) !==
        "https://www.ebay.com/b/Fine-Jewelry/4196/bn_2408451",
      {
        timeout: 10000,
        timeoutMsg: "URL did not change after clicking the Rings link",
      },
    );

    const url = await browser.getUrl();

    chaiExpect(url).to.include("Rings");
  });
});
