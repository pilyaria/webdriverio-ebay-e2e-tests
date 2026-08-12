import searchPage from "../pages/search.page.js";
import { waitForTextChange } from "../utilities/helper.js";
import resources from "../resources";

describe("Ebay product search", () => {
  const searchTerm = "laptop";
  const searchCategory = "PC Laptops & Netbooks";
  const jewelrySearchTerm = "jewelry";
  const jewelryCategory = "Jewelry & Watches";

  before(async () => {
    await searchPage.open();
  });

  it("should open ebay.com and verify the title", async () => {
    await expect(browser).toHaveTitle(resources.headerTitle);
  });

  describe("Search results", () => {
    before(async () => {
      await searchPage.searchFor(searchTerm);
    });

    it("should search for a product and verify the results", async () => {
      await expect(searchPage.searchInput).toHaveValue(searchTerm);
    });

    it("should redirect to the search results page and verify the title", async () => {
      await browser.waitUntil(
        async () =>
          (await browser.getTitle()).toLowerCase().includes(searchTerm),
        { timeout: 10000 },
      );
    });

    it("should update the laptop category", async () => {
      await waitForTextChange(
        searchPage.selectedCategory,
        searchCategory,
        10000,
      );
      await expect(searchPage.selectedCategory).toHaveText(searchCategory);
    });

    it("should update the jewelry category", async () => {
      await searchPage.searchFor(jewelrySearchTerm);
      await waitForTextChange(
        searchPage.selectedCategory,
        jewelryCategory,
        10000,
      );
      await expect(searchPage.selectedCategory).toHaveText(jewelryCategory);
    });
  });
});
