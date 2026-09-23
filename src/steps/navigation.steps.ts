import test, { Page } from "@playwright/test"

export const navigateToOutgoingInvoices = async (page: Page) => {
  await test.step('Navigate to the outgoing invoices page from the landing page', async () => {
    const demoButton = page.getByRole('link', { name: 'Kipróbálom a demót' });
    await demoButton.click();

    const allOutgoingInvoiceButton = page.getByRole('link', { name: 'Minden kimenő számla' });
    await allOutgoingInvoiceButton.click();
  });
};
