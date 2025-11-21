import { test, expect } from "../fixtures/base-fixture";
import { todoData } from "../helpers/todo-data";

test("should delete a todo item from the list", async ({ page }) => {
    const input = page.getByPlaceholder("What needs to be done?");

    // Add a new todo
    await input.fill(todoData.defaultTodo);
    await input.press("Enter");

    const item = page.locator("ul.todo-list li").first();

    // Hover to reveal the delete button
    await item.hover();

    // Click the delete ('destroy') button
    await item.locator("button.destroy").click();

    // Verify that the list is empty
    await expect(page.locator("ul.todo-list li")).toHaveCount(0);
});
