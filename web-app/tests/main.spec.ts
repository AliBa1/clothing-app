import { test, expect } from '@playwright/test';

test.describe('navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('site opens on home', async ({ page }) => {
    await expect(page).toHaveURL('/');
  });

  test('clicking shop goes to shop page', async ({ page }) => {
    await page.getByRole('link', { name: 'Shop', exact: true }).click();
    await expect(page).toHaveURL('/shop');
  });

  test('clicking feed goes to feed page', async ({ page }) => {
    await page.getByRole('link', { name: 'Feed', exact: true }).click();
    await expect(page).toHaveURL('/feed');
  });

  test('clicking site title goes to home page', async ({ page }) => {
    await page.getByRole('link', { name: 'FLEA', exact: true }).click();
    await expect(page).toHaveURL('/');
  });

  test('clicking saved goes to saved page', async ({ page }) => {
    await page.getByLabel('Saved').click();
    await expect(page).toHaveURL('/saved');
  });

  test('view cart goes to cart page', async ({ page }) => {
    await page.getByLabel('Cart').click();
    await page.getByRole('button', { name: 'View Cart' }).click();
    await expect(page).toHaveURL('/cart');
  });

  test('home page view item goes to product page', async ({ page }) => {
    await page.getByRole('link', { name: 'View Item' }).first().click();
    await expect(page).toHaveURL(
      '/product/alyx-lightweight-buckle-puffer-jacket/1?color=Black'
    );
  });

  test('home page shop brand goes to brand page', async ({ page }) => {
    await page.getByRole('link', { name: 'Shop 1017 ALYX 9SM' }).click();
    await expect(page).toHaveURL('/Alyx');
  });

  test('product click goes to product', async ({ page }) => {
    await page.getByRole('link', { name: 'Shop', exact: true }).click();
    await page.getByRole('link', { name: 'LIGHTWEIGHT BUCKLE PUFFER' }).click();
    await expect(page).toHaveURL(
      '/product/alyx-lightweight-buckle-puffer-jacket/1?color=Black'
    );
  });

  test('brand click on shop goes to brand page', async ({ page }) => {
    await page.getByRole('link', { name: 'Shop', exact: true }).click();

    await page.getByText('Thirteen Studios').first().click();
    await expect(page).toHaveURL('/Thirteen_Studios');

    await page.getByRole('link', { name: 'Shop', exact: true }).click();
    await page.getByRole('img', { name: 'ALYX 9SM' }).click();
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

test.describe('product size', () => {
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

    await expect(page.getByRole('main')).toContainText('Size');
  });

  test('select size changes size', async ({ page }) => {
    await page.getByRole('link', { name: 'Shop', exact: true }).click();
    await page.getByRole('link', { name: 'Runner Heavyweight Hunter' }).click();

    await page.getByRole('button', { name: 'S', exact: true }).click();
    await expect(page.getByRole('main')).toContainText('Size · S');

    await page.getByRole('button', { name: 'M' }).click();
    await expect(page.getByRole('main')).toContainText('Size · M');
  });
});

test.describe('product color', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('select color changes color', async ({ page }) => {
    await page.getByRole('link', { name: 'Shop', exact: true }).click();
    await page.getByRole('link', { name: 'STMT Hoodie $58 $' }).click();

    await page.getByRole('button', { name: 'Grey' }).click();

    const selectedColorText = page.locator('p:text("Color ·")');
    await expect(selectedColorText).toBeVisible();
    await expect(selectedColorText).toHaveText('Color · Grey');
  });

  test('select color does not change size if in stock', async ({ page }) => {
    await page.getByRole('link', { name: 'Shop', exact: true }).click();
    await page.getByRole('link', { name: "'Black' STMT Hoodie STMT" }).click();
    await page.getByRole('button', { name: 'M' }).click();
    await page.getByRole('button', { name: 'Sky Blue' }).click();
    await expect(page.getByRole('main')).toContainText('Size · M');
    await page.getByRole('button', { name: 'Grey' }).click();
    await expect(page.getByRole('main')).toContainText('Size · M');
  });

  test('select color removes size if out of stock', async ({ page }) => {
    await page.getByRole('link', { name: 'Shop', exact: true }).click();
    await page.getByRole('link', { name: "'Black' Nike Tech Woven" }).click();
    await page.getByRole('button', { name: 'M' }).click();
    await page.getByRole('button', { name: 'Iron Ore' }).click();
    await expect(page.getByRole('main')).toContainText('Size');
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
    await page.getByRole('button', { name: 'Filters' }).click();
    await expect(page.getByRole('dialog')).toMatchAriaSnapshot(`
    - button "Close Modal":
      - img
    - heading "Filters" [level=4]
    - 'button "Sort: Default"':
      - paragraph: "Sort: Default"
    - group: "Default Popular New Price: Low to High Price: High to Low"
    - 'button "Gender: Any"':
      - paragraph: "Gender: Any"
    - group: Any Men Women
    - 'button "Availability: Any"':
      - paragraph: "Availability: Any"
    - group: Any Ready to Ship Pre-Order
    - button "Fit":
      - paragraph: Fit
    - group:
      - checkbox "Regular": regular
      - text: Regular
      - checkbox "Oversized": oversized
      - text: Oversized
      - checkbox "Skinny": skinny
      - text: Skinny
      - checkbox "Slim": slim
      - text: Slim
      - checkbox "Relaxed": relaxed
      - text: Relaxed
      - checkbox "Boxy": boxy
      - text: Boxy
    - button "Color":
      - paragraph: Color
    - group:
      - checkbox "Black": black
      - text: Black
      - checkbox "White": white
      - text: White
      - checkbox "Red": red
      - text: Red
      - checkbox "Blue": blue
      - text: Blue
      - checkbox "Green": green
      - text: Green
      - checkbox "Yellow": yellow
      - text: Yellow
      - checkbox "Purple": purple
      - text: Purple
      - checkbox "Brown": brown
      - text: Brown
      - checkbox "Grey": grey
      - text: Grey
      - checkbox "Orange": orange
      - text: Orange
      - checkbox "Pink": pink
      - text: Pink
      - checkbox "Burgandy": burgandy
      - text: Burgandy
      - checkbox "Tan": tan
      - text: Tan
      - checkbox "Multicolor"
      - text: Multicolor
    - button "Clear All"
    - button "Apply"
    `);
    await page.getByRole('button', { name: 'Sort: Default' }).click();
    await page.getByText('New').click();
    await expect(page.locator('form')).toContainText('Sort: New');
    await page.getByRole('button', { name: 'Gender: Any' }).click();
    await page.getByText('Women').click();
    await expect(page.locator('form')).toContainText('Gender: Women');
    await page.getByRole('button', { name: 'Availability: Any' }).click();
    await page.getByText('Ready to Ship').click();
    await expect(page.locator('form')).toContainText(
      'Availability: Ready to Ship'
    );
    await page.getByRole('button', { name: 'Fit' }).click();
    await page.getByLabel('Regular').check();
    await page.getByText('Skinny').click();
    await expect(page.locator('form')).toContainText('Fit: Regular, Skinny');
    await page.getByRole('button', { name: 'Fit: Regular, Skinny' }).click();
    await page.getByRole('button', { name: 'Color' }).click();
    await page.getByLabel('Black').check();
    await page.getByText('White').click();
    await page
      .locator('label')
      .filter({ hasText: 'Red' })
      .locator('span')
      .click();
    await expect(page.locator('form')).toContainText(
      'Color: Black, White, Red'
    );
    await page.getByRole('button', { name: 'Apply' }).click();
    await page.waitForTimeout(500);
    await expect(page).toHaveURL(
      '/shop?sort=new&gender=women&availability=readyToShip&fit=regular&fit=skinny&color=black&color=white&color=red'
    );
  });

  test('clear all resets to default', async ({ page }) => {
    await page.goto('http://localhost:3000/shop');
    await page.getByRole('button', { name: 'Filters' }).click();
    await page.getByRole('button', { name: 'Sort: Default' }).click();
    await page.getByRole('dialog').getByText('Popular').click();
    await page.getByRole('button', { name: 'Gender: Any' }).click();
    await page.getByText('Men', { exact: true }).click();
    await page.getByRole('button', { name: 'Availability: Any' }).click();
    await page.getByText('Pre-Order').click();
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
    await expect(page.locator('form')).toContainText('Availability: Any');
    await expect(page.locator('form')).toContainText('Fit');
    await expect(page.getByRole('dialog')).toMatchAriaSnapshot(`
      - button "Close Modal":
        - img
      - heading "Filters" [level=4]
      - 'button "Sort: Default"':
        - paragraph: "Sort: Default"
      - group: "Default Popular New Price: Low to High Price: High to Low"
      - 'button "Gender: Any"':
        - paragraph: "Gender: Any"
      - group: Any Men Women
      - 'button "Availability: Any"':
        - paragraph: "Availability: Any"
      - group: Any Ready to Ship Pre-Order
      - button "Fit":
        - paragraph: Fit
      - group:
        - checkbox "Regular": regular
        - text: Regular
        - checkbox "Oversized": oversized
        - text: Oversized
        - checkbox "Skinny": skinny
        - text: Skinny
        - checkbox "Slim": slim
        - text: Slim
        - checkbox "Relaxed": relaxed
        - text: Relaxed
        - checkbox "Boxy": boxy
        - text: Boxy
      - button "Color":
        - paragraph: Color
      - group:
        - checkbox "Black": black
        - text: Black
        - checkbox "White": white
        - text: White
        - checkbox "Red": red
        - text: Red
        - checkbox "Blue": blue
        - text: Blue
        - checkbox "Green": green
        - text: Green
        - checkbox "Yellow": yellow
        - text: Yellow
        - checkbox "Purple": purple
        - text: Purple
        - checkbox "Brown": brown
        - text: Brown
        - checkbox "Grey": grey
        - text: Grey
        - checkbox "Orange": orange
        - text: Orange
        - checkbox "Pink": pink
        - text: Pink
        - checkbox "Burgandy": burgandy
        - text: Burgandy
        - checkbox "Tan": tan
        - text: Tan
        - checkbox "Multicolor"
        - text: Multicolor
      - button "Clear All"
      - button "Apply"
      `);
  });
});

test.describe('modals', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('search modal opens', async ({ page }) => {
    await page.getByLabel('Search').click();
    await expect(page.getByPlaceholder('Search...')).toBeVisible();
  });

  // test('search modal close on click anywhere', async ({ page }) => {
  //   await page.getByLabel('Search').click();
  //   await page.getByRole('dialog').click();
  //   await expect(page.getByPlaceholder('Search...')).toBeHidden({ timeout: 2000 });
  // });

  test('cart modal opens', async ({ page }) => {
    await page.getByLabel('Cart').click();
    await expect(page.locator('.flex > div > div').first()).toBeVisible();
    await expect(page.getByRole('button', { name: 'View Cart' })).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Keep Shopping' })
    ).toBeVisible();
  });

  test('cart modal closes on click of x', async ({ page }) => {
    await page.getByLabel('Cart').click();
    await page.getByLabel('Close Modal').click();
    // await expect(page.locator('.flex > div > div').first()).toBeHidden({ timeout: 2000 });
    await expect(page.getByRole('button', { name: 'View Cart' })).toBeHidden({
      timeout: 2000
    });
    await expect(
      page.getByRole('button', { name: 'Keep Shopping' })
    ).toBeHidden({ timeout: 2000 });
  });

  test('cart modal closes on click of keep shopping', async ({ page }) => {
    await page.getByLabel('Cart').click();
    await page.getByRole('button', { name: 'Keep Shopping' }).click();
    // await expect(page.locator('.flex > div > div').first()).toBeHidden({ timeout: 2000 });
    await expect(page.getByRole('button', { name: 'View Cart' })).toBeHidden({
      timeout: 2000
    });
    await expect(
      page.getByRole('button', { name: 'Keep Shopping' })
    ).toBeHidden({ timeout: 2000 });
  });

  test('filter modal opens', async ({ page }) => {
    await page.getByRole('link', { name: 'Shop', exact: true }).click();
    await page.getByRole('button', { name: 'Filters' }).click();
    await expect(
      page.locator('div').filter({ hasText: 'FiltersSort:' }).first()
    ).toBeVisible();
  });

  test('filter modal closes on click x', async ({ page }) => {
    await page.getByRole('link', { name: 'Shop', exact: true }).click();
    await page.getByRole('button', { name: 'Filters' }).click();
    await page.getByLabel('Close Modal').click();
    await expect(
      page.locator('div').filter({ hasText: 'FiltersSort:' }).first()
    ).toBeHidden({ timeout: 2000 });
  });

  test('filter modal closes on click of apply', async ({ page }) => {
    await page.getByRole('link', { name: 'Shop', exact: true }).click();
    await page.getByRole('button', { name: 'Filters' }).click();
    await page.getByRole('button', { name: 'Apply' }).click();
    await expect(
      page.locator('div').filter({ hasText: 'FiltersSort:' }).first()
    ).toBeHidden({ timeout: 2000 });
  });

  test('following modal opens', async ({ page }) => {
    await page.getByRole('link', { name: 'Feed', exact: true }).click();
    await page.getByRole('button', { name: 'Following' }).click();
    await expect(
      page.locator('div').filter({ hasText: 'Following' }).first()
    ).toBeVisible();
  });

  test('following modal closes on x click', async ({ page }) => {
    await page.getByRole('link', { name: 'Feed', exact: true }).click();
    await page.getByRole('button', { name: 'Following' }).click();
    await page.getByLabel('Close Modal').click();
    await expect(
      page.locator('div').filter({ hasText: 'Following1017 ALYX' }).first()
    ).toBeHidden({ timeout: 2000 });
  });
});
