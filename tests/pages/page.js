export default class Page {
  async open(path) {
    await browser.url(path);
    await this.dismissShippingDialog();
  }

  async dismissShippingDialog() {
    const dialog = $(".address-dialog__lightbox[aria-hidden='false']");

    const isDisplayed = await dialog
      .waitForDisplayed({ timeout: 5000 })
      .then(() => true)
      .catch(() => false);

    if (!isDisplayed) {
      return;
    }

    const closeButton = dialog.$(".lightbox-dialog__close");
    await closeButton.waitForClickable({ timeout: 5000 });
    await closeButton.click();
    await dialog.waitForDisplayed({ reverse: true, timeout: 5000 });
  }
}
