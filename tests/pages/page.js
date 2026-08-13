export default class Page {
  async open(path) {
    await browser.url(path);

    await browser.waitUntil(
      async () =>
        (await browser.execute(() => document.readyState)) === "complete",
      {
        timeout: 10000,
        timeoutMsg: "Page did not finish loading",
      },
    );

    await this.dismissShippingDialog();
  }

  async dismissShippingDialog() {
    const dialog = $(".address-dialog__lightbox[aria-hidden='false']");

    const isDisplayed = await dialog
      .waitForDisplayed({ timeout: 7000 })
      .then(() => true)
      .catch(() => false);

    if (!isDisplayed) {
      return;
    }

    const closeButton = dialog.$(".lightbox-dialog__close");

    await closeButton.waitForClickable({ timeout: 5000 });
    await closeButton.click();

    await dialog.waitForDisplayed({
      reverse: true,
      timeout: 5000,
    });
  }
}
