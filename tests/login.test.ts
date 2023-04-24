import { expect, test } from '@playwright/test';

test("Login is successful", async ({ page }) => {

	await page.goto('/');
    const loginButton = page.getByRole('link', { name: 'Login' });

    await expect(loginButton).toBeVisible();
    await loginButton.click();

    const emailInput = page.getByLabel('Email');
    await expect(emailInput).toBeVisible();
    await emailInput.fill(process.env.VITE_USERNAME as string);

    const passwordInput = page.getByLabel('Password');
    await expect(passwordInput).toBeVisible();
    await passwordInput.fill(process.env.VITE_PASSWORD as string);

    const submitButton = page.getByRole('button', { name: 'Login' });
    await expect(submitButton).toBeVisible();
    await submitButton.click();

    const nameButton = page.getByRole('button', { name: 'Ariane' });
    await expect(nameButton).toBeVisible();

});