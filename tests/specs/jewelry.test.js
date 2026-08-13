import { expect as chaiExpect } from "chai";
import jewelryPage from "../pages/jewelry.page.js";

describe("Jewelry Page", () => {
  before(async () => {
    await jewelryPage.open();
  });

  it("should display the Fine Jewelry page title", async () => {
    await expect(jewelryPage.pageTitle).toBeDisplayed();
    await expect(jewelryPage.pageTitle).toHaveText("Fine Jewelry");
  });

  it("should display the Shop by category section", async () => {
    await expect(jewelryPage.shopByCategoryTitle).toBeDisplayed();
  });

  it("should display jewelry categories", async () => {
    const categories = await jewelryPage.getVisibleCategoryTexts();

    chaiExpect(categories).to.be.an("array").that.is.not.empty;

    chaiExpect(categories).to.include.members([
      "Jewelry & Watches",
      "Fine Jewelry",
      "Anklets",
      "Bracelets & Charms",
      "Brooches & Pins",
      "Earrings",
      "Hair & Head Jewelry",
      "Jewelry Sets",
      "Necklaces & Pendants",
      "Rings",
      "Toe Rings",
    ]);
  });

  it("should contain a clickable Tiffany & Co. link", async () => {
    await expect(jewelryPage.tiffanyLink).toBeDisplayed();
    await expect(jewelryPage.tiffanyLink).toBeClickable();

    const href = await jewelryPage.tiffanyLink.getAttribute("href");

    chaiExpect(href).to.be.a("string").and.not.be.empty;
  });
});
