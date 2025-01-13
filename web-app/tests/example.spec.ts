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
    await expect(page).toHaveURL('/product/1');
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
    await page
      .getByRole('link', { name: 'STMT Hoodie $58 $' })
      .click();
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
