import { test, expect } from "../fixtures/base-fixture";
import { todoData } from "../helpers/todo-data";


test("should edit an existing todo item", async ({ page }) => {
    const input = page.getByPlaceholder("What needs to be done?");

    // Add a new todo
    await input.fill(todoData.defaultTodo);
    await input.press("Enter");

    const item = page.locator("ul.todo-list li").first();

    // Double-click to activate edit mode
    await item.dblclick();

    const editInput = item.locator(".edit");
    await editInput.fill(todoData.editedTodo);
    await editInput.press("Enter");

    // Verify the edited value
    await expect(item.locator("label")).toHaveText(todoData.editedTodo);
});