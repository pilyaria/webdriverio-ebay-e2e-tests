export default class Page {
  async open(path) {
    await browser.url(path);
    await this.dismissShippingDialog();
  }

  async dismissShippingDialog() {
    const closeButton = $('button[aria-label="Dismiss"]');

    try {
      await closeButton.waitForDisplayed({ timeout: 10000 });
      await closeButton.waitForClickable({ timeout: 5000 });
      await closeButton.click();

      await closeButton.waitForDisplayed({
        reverse: true,
        timeout: 5000,
      });

      console.log("Shipping dialog closed");
    } catch {
      console.log("Shipping dialog was not displayed");
    }
  }
}
