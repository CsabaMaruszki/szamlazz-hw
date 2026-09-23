import { expect, test } from '@playwright/test';
import { navigateToOutgoingInvoices } from '@steps/navigation.steps';
import { OutgoingInvoicePage } from '@pages/outgoing-invoice.page';

test.describe('Navigation tests', {tag: '@nav'}, () => {
  let outgoingInvoicePage: OutgoingInvoicePage;

  test.beforeEach(({page}) => {
    outgoingInvoicePage = new OutgoingInvoicePage(page);
  });

  test('Navigate to outgoing invoices from landing page', async ({page}) => {
    await page.goto('https://www.szamlazz.hu/');
    await navigateToOutgoingInvoices(page);
    await expect(outgoingInvoicePage.invoiceListContainer).toBeVisible();
  });
})
