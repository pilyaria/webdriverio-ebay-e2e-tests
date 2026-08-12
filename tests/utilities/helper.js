export const waitForTextChange = async (el, text, timeout = 10000) => {
  await browser.waitUntil(async () => (await el.getText()) === text, {
    timeout,
    timeoutMsg: `Element text did not change to "${text}"`,
  });
};
