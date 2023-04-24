import { expect, test } from '@playwright/test';

test('From index we can go to restaurants', async ({ page }) => {
	await page.goto('/');
    
    const mexicanLink = page.getByRole('link', { name: 'Mexican' });
    await expect(mexicanLink).toBeVisible();
    await mexicanLink.click();

    await expect(page.getByRole('button', { name: 'Add Restaurant' })).toBeVisible();
    
    // Mexican should be checked
    await expect(page.getByLabel('American')).toBeChecked();
    // Restaurants should be filtered - we currently have 2 mexican restaurants.
    await expect(page.getByText('2 restaurants found')).toBeVisible();
});
