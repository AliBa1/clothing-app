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
    await page.getByText('Statment').click();
    await expect(page).toHaveURL('/Statment');
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

    // await page.getByRole('img', { name: 'Grey' }).click();
    await page.getByRole('button', { name: 'Grey' }).click();

    const selectedColorText = page.locator('p:text("Color ·")');
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
      - group: Any Ready to Ship Pre-Order Low Stock Out of Stock Upcoming
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

    await expect(page.locator('form')).toContainText('Sort: Default');
    await page.getByRole('button', { name: 'Sort: Default' }).click();
    await expect(page.locator('label:text("Popular")')).toBeVisible();
    await page.locator('label').filter({ hasText: 'Popular' }).click();
    await expect(
      page.locator('button').filter({ hasText: 'Sort: Popular' })
    ).toBeVisible();
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
      - group: Any Ready to Ship Pre-Order Low Stock Out of Stock Upcoming
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

    await page.getByRole('button', { name: 'Gender: Any' }).click();
    await page.getByText('Men', { exact: true }).click();
    await expect(page.locator('form')).toContainText('Gender: Men');
    await expect(
      page.locator('button').filter({ hasText: 'Gender: Men' })
    ).toBeVisible();
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
      - group: Any Ready to Ship Pre-Order Low Stock Out of Stock Upcoming
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

    await page.getByRole('button', { name: 'Inventory: Any' }).click();
    await page.getByText('Pre-Order').click();
    await expect(
      page.locator('button').filter({ hasText: 'Inventory: Pre-Order' })
    ).toBeVisible();

    await page.getByRole('button', { name: 'Fit' }).click();
    await page.getByText('Boxy').click();
    await expect(page.getByLabel('Boxy')).toBeChecked();
    await expect(page.locator('form')).toContainText('Fit: Boxy');

    await page.getByRole('button', { name: 'Color' }).click();
    await expect(page.getByText('Black')).toBeVisible();
    await expect(
      page.locator('label').filter({ hasText: 'Black' }).locator('span')
    ).toBeVisible();
    await expect(page.getByText('White')).toBeVisible();
    await expect(
      page.locator('label').filter({ hasText: 'White' }).locator('span')
    ).toBeVisible();
    await page.getByLabel('Black').check();
    await page.getByLabel('Green').check();
    await page.getByLabel('Purple').check();
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
      - group: Any Ready to Ship Pre-Order Low Stock Out of Stock Upcoming
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
      - 'button "Color: Black, Green, Purple"':
        - paragraph: "Color: Black, Green, Purple"
      - group:
        - checkbox "Black" [checked]: black
        - text: Black
        - checkbox "White": white
        - text: White
        - checkbox "Red": red
        - text: Red
        - checkbox "Blue": blue
        - text: Blue
        - checkbox "Green" [checked]: green
        - text: Green
        - checkbox "Yellow": yellow
        - text: Yellow
        - checkbox "Purple" [checked]: purple
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

    await page.getByRole('button', { name: 'Apply' }).click();
    await page.waitForTimeout(500);
    await expect(page).toHaveURL(
      '/shop?sort=popular&gender=men&inventory=preOrder&fit=boxy&color=black&color=green&color=purple'
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
      - group: Any Ready to Ship Pre-Order Low Stock Out of Stock Upcoming
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
  //   await expect(page.getByPlaceholder('Search...')).not.toBeVisible();
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
    await expect(page.locator('.flex > div > div').first()).not.toBeVisible();
    await expect(
      page.getByRole('button', { name: 'View Cart' })
    ).not.toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Keep Shopping' })
    ).not.toBeVisible();
  });

  test('cart modal closes on click of keep shopping', async ({ page }) => {
    await page.getByLabel('Cart').click();
    await page.getByRole('button', { name: 'Keep Shopping' }).click();
    await expect(page.locator('.flex > div > div').first()).not.toBeVisible();
    await expect(
      page.getByRole('button', { name: 'View Cart' })
    ).not.toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Keep Shopping' })
    ).not.toBeVisible();
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
    ).not.toBeVisible();
  });

  test('filter modal closes on click of apply', async ({ page }) => {
    await page.getByRole('link', { name: 'Shop', exact: true }).click();
    await page.getByRole('button', { name: 'Filters' }).click();
    await page.getByRole('button', { name: 'Apply' }).click();
    await expect(
      page.locator('div').filter({ hasText: 'FiltersSort:' }).first()
    ).not.toBeVisible();
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
      page.locator('div').filter({ hasText: 'Following' }).first()
    ).not.toBeVisible();
  });
});
