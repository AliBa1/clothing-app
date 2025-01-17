import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole('heading', { name: 'Installation' })
  ).toBeVisible();
});

test.describe('navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('site opens on home', async ({ page }) => {
    await expect(page).toHaveURL('/');
  });

  test('shop on header goes to shop', async ({ page }) => {
    await page.getByRole('link', { name: 'Shop', exact: true }).click();
    await expect(page).toHaveURL('/shop');
  });

  test('product click goes to product', async ({ page }) => {
    await page.getByRole('link', { name: 'Shop', exact: true }).click();
    await page.getByRole('link', { name: 'LIGHTWEIGHT BUCKLE PUFFER' }).click();
    await expect(page).toHaveURL(
      '/product/alyx-lightweight-buckle-puffer-jacket/1'
    );
  });

  test('brand click on shop goes to brand page', async ({ page }) => {
    await page.getByRole('link', { name: 'Shop', exact: true }).click();
    await page.getByText('ALYX 9SM').click();
    await expect(page).toHaveURL('/Alyx');
  });

  test('brand click on product page goes to brand page', async ({ page }) => {
    await page.getByRole('link', { name: 'Shop', exact: true }).click();
    await page.getByRole('link', { name: 'LIGHTWEIGHT BUCKLE PUFFER' }).click();
    await page.getByRole('img', { name: 'ALYX 9SM' }).click();
    await expect(page).toHaveURL('/Alyx');
  });

  test('has header', async ({ page }) => {
    // await expect(page).toHaveURL('/');
    await expect(page.getByRole('navigation')).toBeVisible();
    await expect(
      page.getByLabel('Search').or(page.getByTitle('Search')).first()
    ).toBeVisible();
    await expect(
      page.getByLabel('Saved').or(page.getByTitle('Saved')).first()
    ).toBeVisible();
    await expect(
      page.getByLabel('Account').or(page.getByTitle('Account')).first()
    ).toBeVisible();
    await expect(
      page.getByLabel('Cart').or(page.getByTitle('Cart')).first()
    ).toBeVisible();
  });
});

test.describe('size', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('size resets after changing color that does not have that size', async ({
    page
  }) => {
    await page.getByRole('link', { name: 'Shop', exact: true }).click();
    await page.getByRole('link', { name: 'STMT Hoodie $58 $' }).click();
    await page.getByRole('button', { name: 'XL', exact: true }).click();
    await page.getByRole('img', { name: 'Grey' }).click();

    const selectedSizeText = await page.locator('p:text("Size ·")');
    await expect(selectedSizeText).toBeVisible();
    await expect(selectedSizeText).toHaveText('Size ·');
  });

  test('select size changes size', async ({ page }) => {
    await page.getByRole('link', { name: 'Shop', exact: true }).click();
    await page.getByRole('link', { name: 'Runner Heavyweight Hunter' }).click();

    await page.getByRole('button', { name: 'S', exact: true }).click();
    const selectedSizeS = await page.locator('p:text("Size ·")');
    await expect(selectedSizeS).toBeVisible();
    await expect(selectedSizeS).toHaveText('Size · S');

    await page.getByRole('button', { name: 'M' }).click();
    const selectedSizeM = await page.locator('p:text("Size ·")');
    await expect(selectedSizeM).toBeVisible();
    await expect(selectedSizeM).toHaveText('Size · M');
  });
});

test.describe('color', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('select color changes color', async ({ page }) => {
    await page.getByRole('link', { name: 'Shop', exact: true }).click();
    await page.getByRole('link', { name: 'STMT Hoodie $58 $' }).click();

    await page.getByRole('img', { name: 'Grey' }).click();

    const selectedColorText = await page.locator('p:text("Color ·")');
    await expect(selectedColorText).toBeVisible();
    await expect(selectedColorText).toHaveText('Color · Grey');
  });
});

test.describe('filters', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('filters modal opens, sees all options, then applies them', async ({
    page
  }) => {
    await page.getByRole('link', { name: 'Shop', exact: true }).click();
    await expect(page.getByRole('button', { name: 'Filters' })).toBeVisible();
    await page.getByRole('button', { name: 'Filters' }).click();
    await expect(page.getByRole('dialog')).toMatchAriaSnapshot(`
      - button "Close Modal":
        - img
      - heading "Filters" [level=4]
      - 'button "Sort: Default"':
        - paragraph: "Sort: Default"
      - group: "Default New Popular Price: Low to High Price: High to Low"
      - 'button "Gender: Any"':
        - paragraph: "Gender: Any"
      - group: Any Men Women Unisex Kids
      - 'button "Inventory: Any"':
        - paragraph: "Inventory: Any"
      - group: Any Ready to Ship Pre-Order Low Stock Out of Stock
      - button "Fit":
        - paragraph: Fit
      - group:
        - checkbox "Boxy": boxy
        - text: Boxy
        - checkbox "Oversized": oversized
        - text: Oversized
        - checkbox "Regular": regular
        - text: Regular
        - checkbox "Relaxed": relaxed
        - text: Relaxed
        - checkbox "Skinny": skinny
        - text: Skinny
        - checkbox "Slim": slim
        - text: Slim
      - button "Clear All"
      - button "Apply"
      `);

    await expect(page.locator('form')).toContainText('Sort: Default');
    await page.getByRole('button', { name: 'Sort: Default' }).click();
    await expect(page.locator('label:text("Popular")')).toBeVisible();
    await page.locator('label').filter({ hasText: 'Popular' }).click();
    // await page.waitForTimeout(500);
    await expect(
      page.locator('button').filter({ hasText: 'Sort: Popular' })
    ).toBeVisible();
    // await expect(page.locator('label').filter({ hasText: 'Default' })).toBeHidden();
    await expect(page.getByRole('dialog')).toMatchAriaSnapshot(`
      - button "Close Modal":
        - img
      - heading "Filters" [level=4]
      - 'button "Sort: Popular"':
        - paragraph: "Sort: Popular"
      - group: "Default New Popular Price: Low to High Price: High to Low"
      - 'button "Gender: Any"':
        - paragraph: "Gender: Any"
      - group: Any Men Women Unisex Kids
      - 'button "Inventory: Any"':
        - paragraph: "Inventory: Any"
      - group: Any Ready to Ship Pre-Order Low Stock Out of Stock
      - button "Fit":
        - paragraph: Fit
      - group:
        - checkbox "Boxy": boxy
        - text: Boxy
        - checkbox "Oversized": oversized
        - text: Oversized
        - checkbox "Regular": regular
        - text: Regular
        - checkbox "Relaxed": relaxed
        - text: Relaxed
        - checkbox "Skinny": skinny
        - text: Skinny
        - checkbox "Slim": slim
        - text: Slim
      - button "Clear All"
      - button "Apply"
      `);

    await page.getByRole('button', { name: 'Gender: Any' }).click();
    // await expect(page.locator('label:text("Men")')).toBeVisible();
    await page.getByText('Men', { exact: true }).click();
    // await page.waitForTimeout(500);
    await expect(page.locator('form')).toContainText('Gender: Men');
    await expect(
      page.locator('button').filter({ hasText: 'Gender: Men' })
    ).toBeVisible();
    // await expect(page.locator('label:text("Men")')).toBeHidden();
    await expect(page.getByRole('dialog')).toMatchAriaSnapshot(`
      - button "Close Modal":
        - img
      - heading "Filters" [level=4]
      - 'button "Sort: Popular"':
        - paragraph: "Sort: Popular"
      - group: "Default New Popular Price: Low to High Price: High to Low"
      - 'button "Gender: Men"':
        - paragraph: "Gender: Men"
      - group: Any Men Women Unisex Kids
      - 'button "Inventory: Any"':
        - paragraph: "Inventory: Any"
      - group: Any Ready to Ship Pre-Order Low Stock Out of Stock
      - button "Fit":
        - paragraph: Fit
      - group:
        - checkbox "Boxy": boxy
        - text: Boxy
        - checkbox "Oversized": oversized
        - text: Oversized
        - checkbox "Regular": regular
        - text: Regular
        - checkbox "Relaxed": relaxed
        - text: Relaxed
        - checkbox "Skinny": skinny
        - text: Skinny
        - checkbox "Slim": slim
        - text: Slim
      - button "Clear All"
      - button "Apply"
      `);

    await page.getByRole('button', { name: 'Inventory: Any' }).click();
    // await expect(page.locator('label:text("Pre-Order")')).toBeVisible();
    await page.getByText('Pre-Order').click();
    // await page.waitForTimeout(500);
    await expect(
      page.locator('button').filter({ hasText: 'Inventory: Pre-Order' })
    ).toBeVisible();
    // await expect(page.locator('label:text("Pre-Order")')).toBeHidden();
    await expect(page.getByRole('dialog')).toMatchAriaSnapshot(`
      - button "Close Modal":
        - img
      - heading "Filters" [level=4]
      - 'button "Sort: Popular"':
        - paragraph: "Sort: Popular"
      - group: "Default New Popular Price: Low to High Price: High to Low"
      - 'button "Gender: Men"':
        - paragraph: "Gender: Men"
      - group: Any Men Women Unisex Kids
      - 'button "Inventory: Pre-Order"':
        - paragraph: "Inventory: Pre-Order"
      - group: Any Ready to Ship Pre-Order Low Stock Out of Stock
      - button "Fit":
        - paragraph: Fit
      - group:
        - checkbox "Boxy": boxy
        - text: Boxy
        - checkbox "Oversized": oversized
        - text: Oversized
        - checkbox "Regular": regular
        - text: Regular
        - checkbox "Relaxed": relaxed
        - text: Relaxed
        - checkbox "Skinny": skinny
        - text: Skinny
        - checkbox "Slim": slim
        - text: Slim
      - button "Clear All"
      - button "Apply"
      `);

    await page.getByRole('button', { name: 'Fit' }).click();
    // await expect(page.locator('label:text("Boxy")')).toBeVisible();
    // await page.locator('label').filter({ hasText: 'Boxy' }).click();
    await page.getByText('Boxy').click();
    // await page.waitForTimeout(500);
    await expect(page.getByLabel('Boxy')).toBeChecked();
    await expect(
      page.locator('div').filter({ hasText: /^Boxy$/ })
    ).toBeVisible();
    await expect(
      page.locator('button').filter({ hasText: 'Fit: Boxy' })
    ).toBeVisible();
    // await expect(page.locator('label:text("Boxy")')).toBeHidden();
    await expect(page.getByRole('dialog')).toMatchAriaSnapshot(`
      - button "Close Modal":
        - img
      - heading "Filters" [level=4]
      - 'button "Sort: Popular"':
        - paragraph: "Sort: Popular"
      - group: "Default New Popular Price: Low to High Price: High to Low"
      - 'button "Gender: Men"':
        - paragraph: "Gender: Men"
      - group: Any Men Women Unisex Kids
      - 'button "Inventory: Pre-Order"':
        - paragraph: "Inventory: Pre-Order"
      - group: Any Ready to Ship Pre-Order Low Stock Out of Stock
      - 'button "Fit: Boxy"':
        - paragraph: "Fit: Boxy"
      - group:
        - checkbox "Boxy" [checked]: boxy
        - text: Boxy
        - checkbox "Oversized": oversized
        - text: Oversized
        - checkbox "Regular": regular
        - text: Regular
        - checkbox "Relaxed": relaxed
        - text: Relaxed
        - checkbox "Skinny": skinny
        - text: Skinny
        - checkbox "Slim": slim
        - text: Slim
      - button "Clear All"
      - button "Apply"
      `);

    await page.getByRole('button', { name: 'Apply' }).click();
    await page.waitForTimeout(500);
    await expect(page).toHaveURL(
      '/shop?sort=popular&gender=men&inventory=preOrder&fit=boxy'
    );
  });

  test('clear all resets to default', async ({ page }) => {
    await page.goto('http://localhost:3000/shop');
    await page.getByRole('button', { name: 'Filters' }).click();
    await page.getByRole('button', { name: 'Sort: Default' }).click();
    await page.getByRole('dialog').getByText('Popular').click();
    await page.getByRole('button', { name: 'Gender: Any' }).click();
    await page.getByText('Unisex').click();
    await page.getByRole('button', { name: 'Inventory: Any' }).click();
    await page.getByText('Ready to Ship').click();
    await page.getByRole('button', { name: 'Fit' }).click();
    await page.getByLabel('Boxy').check();
    await page.getByLabel('Oversized').check();
    await page.getByLabel('Regular').check();
    await page
      .getByRole('button', { name: 'Fit: Boxy, Oversized, Regular' })
      .click();
    await page.getByRole('button', { name: 'Clear All' }).click();
    await expect(page.locator('form')).toContainText('Sort: Default');
    await expect(page.locator('form')).toContainText('Gender: Any');
    await expect(page.locator('form')).toContainText('Inventory: Any');
    await expect(page.locator('form')).toContainText('Fit');
    await expect(page.getByRole('dialog')).toMatchAriaSnapshot(`
    - button "Close Modal":
      - img
    - heading "Filters" [level=4]
    - 'button "Sort: Default"':
      - paragraph: "Sort: Default"
    - group: "Default New Popular Price: Low to High Price: High to Low"
    - 'button "Gender: Any"':
      - paragraph: "Gender: Any"
    - group: Any Men Women Unisex Kids
    - 'button "Inventory: Any"':
      - paragraph: "Inventory: Any"
    - group: Any Ready to Ship Pre-Order Low Stock Out of Stock
    - button "Fit":
      - paragraph: Fit
    - group:
      - checkbox "Boxy": boxy
      - text: Boxy
      - checkbox "Oversized": oversized
      - text: Oversized
      - checkbox "Regular": regular
      - text: Regular
      - checkbox "Relaxed": relaxed
      - text: Relaxed
      - checkbox "Skinny": skinny
      - text: Skinny
      - checkbox "Slim": slim
      - text: Slim
    - button "Clear All"
    - button "Apply"
    `);
  });
});
