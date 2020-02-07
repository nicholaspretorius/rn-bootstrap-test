const { reloadApp } = require("detox-expo-helpers");

describe("Create message", () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it("should add a message to the list", async () => {
    const messageText = by.id("messageText");
    await element(messageText).tap();
    await element(messageText).typeText("New message");
    await element(by.id("sendButton")).tap();
    await expect(element(messageText)).toHaveText("");
    await expect(element(by.label("New message"))).toBeVisible();
  });
});
