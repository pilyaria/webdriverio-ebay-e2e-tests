import { expect as chaiExpect } from "chai";
import jewelryPage from "../pages/jewelry.page.js";
import resources from "../resources/index.js";

describe("Jewelry Page", () => {
  before(async () => {
    await jewelryPage.open();
  });

  /*
  it("should show the jewelry categories in the console", async () => {
    const categories = await jewelryPage.showAllJewelryCategory();

    chaiExpect(categories).to.be.an("array").that.is.not.empty;
  });
*/
  it("should veryfy jewelry category list", async () => {
    const jewelryCategoryList = await jewelryPage.showAllJewelryCategory();
    const expectedCategories = resources.jewelryCategoryList;
    chaiExpect(jewelryCategoryList).to.be.an("array").that.is.not.empty;
    chaiExpect(jewelryCategoryList).to.deep.equal(expectedCategories);
  });

  it("should show the banner container", async () => {
    await expect(jewelryPage.promoBanner).toBeDisplayed();
  });

  it("should show the banner title", async () => {
    await expect(jewelryPage.bannerTitle).toHaveText(/Pieces as unique as you/);
  });

  it("should contain a link on the banner and be clickable", async () => {
    const href = await jewelryPage.shopButton.getAttribute("href");

    chaiExpect(href).to.include("luxury-jewelry-row");
    await expect(jewelryPage.shopButton).toBeClickable();
  });

  it("should open the luxury jewelry page after clicking the button", async () => {
    await jewelryPage.shopButton.click();

    const url = await browser.getUrl();
    chaiExpect(url).to.include("luxury-jewelry-row");
  });
});
