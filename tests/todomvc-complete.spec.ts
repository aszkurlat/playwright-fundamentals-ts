import { test, expect } from "../fixtures/base-fixture";
import { todoData } from "../helpers/todo-data";


test("should mark a todo as completed and filter by 'Completed'", async ({ page }) => {
    const input = page.getByPlaceholder("What needs to be done?");

    // Add a new todo
    await input.fill(todoData.defaultTodo);
    await input.press("Enter");

    const checkbox = page.locator("input.toggle");

    // Mark the todo as completed
    await checkbox.check();

    // Open the 'Completed' filter
    await page.getByRole("link", { name: "Completed" }).click();

    const items = page.locator("ul.todo-list li");

    // Only completed items should be shown
    await expect(items).toHaveCount(1);
    await expect(items.first().locator("label")).toHaveText(todoData.defaultTodo);
});
