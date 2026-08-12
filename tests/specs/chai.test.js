import { expect as chaiExpect, assert } from "chai";
import "chai/register-should";
import jewelryPage from "../pages/jewelry.page.js";

describe("Jewelry Page", () => {
  before(async () => {
    await jewelryPage.open();
  });

  it("should show the banner container", async () => {
    const promoBanner = await $(".brw-uep--promo-banner__container");

    await promoBanner.waitForDisplayed({ timeout: 10000 });
    await expect(promoBanner).toBeDisplayed();
  });

  it("should show the banner title", async () => {
    const bannerTitle = $(".brw-uep--promo-banner__content");

    const bannerTitleText = await bannerTitle.getText();
    await chaiExpect(bannerTitleText).to.not.be.empty;
    await expect(bannerTitle).toHaveText(/Pieces as unique as you/);
    bannerTitleText.should.not.be.empty;
    assert.isNotEmpty(bannerTitleText);
  });

  it("should contain link on the banner and verify it is clickable", async () => {
    const promoBanners = await $$(".brw-uep--promo-banner__container");
    const firstBanner = promoBanners[0];
    const shopButton = await firstBanner.$(".brw-banner-cta__button");
    const tag = await shopButton.getTagName();
    await expect(shopButton).toHaveAttribute(
      "href",
      expect.stringContaining("luxury-jewelry-row"),
    );
    await expect(shopButton).toBeClickable();
    await chaiExpect(tag).to.equal("a");
    tag.should.equal("a");
  });

  it("should click on the button and show a new url", async () => {
    const promoBanners = await $$(".brw-uep--promo-banner__container");
    const firstBanner = promoBanners[0];
    const shopButton = await firstBanner.$(".brw-banner-cta__button");
    await shopButton.click();

    const url = await browser.getUrl();
    await chaiExpect(url).to.include("luxury-jewelry-row");

    await expect(browser).toHaveUrl(
      "https://www.ebay.com/e/row/luxury-jewelry-row",
    );

  });
});
