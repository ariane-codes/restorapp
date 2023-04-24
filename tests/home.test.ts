import { expect, test } from '@playwright/test';


test('Index renders everything', async ({ page }) => {
	await page.goto('/');

	await expect(page.locator('[data-test-id="searchRestaurants"]')).toBeVisible();
	await expect(page.getByRole('heading', { name: 'Explore restaurants near you...' })).toBeVisible();

	await expect(page.getByRole('link', { name: 'Mexican' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'American' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Desserts' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Japanese' })).toBeVisible();
	
	await expect(page.getByRole('link', { name: 'RestorApp' })).toBeVisible();
	await expect (page.getByRole('link', { name: 'Login' })).toBeVisible();

	await expect(page.getByText('Made with ❤️ by Ariane Ernandorena Developed with SvelteKit')).toBeVisible();
});
