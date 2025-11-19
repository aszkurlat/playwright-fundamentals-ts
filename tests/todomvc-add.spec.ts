import { test, expect } from "../fixtures/base-fixture";
import { randomText } from "../helpers/random-text";


test("Should add tasks and validate the list count", async ({ page }) => {
  const todoInput = page.getByPlaceholder("What needs to be done?");

  const todo1 = randomText();
  const todo2 = randomText();

  await todoInput.fill(todo1);
  await todoInput.press("Enter");

  await todoInput.fill(todo2);
  await todoInput.press("Enter");

  const items = page.locator("ul.todo-list li");
  await expect(items).toHaveCount(2);
});