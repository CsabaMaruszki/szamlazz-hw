import { expect, test } from '@playwright/test';
import { OutgoingInvoicePage } from '@pages/outgoing-invoice.page';
import { CreateInvoicePage } from '@pages/create-invoice.page';

test.describe('Outgoing invoice tests', {tag: '@outgoing'}, () => {
  let outgoingInvoicePage: OutgoingInvoicePage;
  let createInvoicePage : CreateInvoicePage;

  test.beforeEach(async({page}) => {
    outgoingInvoicePage = new OutgoingInvoicePage(page);
    createInvoicePage = new CreateInvoicePage(page);
    await page.goto('https://www.szamlazz.hu/szamla/?action=login&usrloginname=demo&usrpassword=demo');
    await page.goto('https://www.szamlazz.hu/app/szamlalista/ki');
    await expect(outgoingInvoicePage.invoiceListContainer).toBeVisible();
  });

  test('Create new outgoing invoice', async () => {
    await test.step('Create new invoice', async ({}) => {
      await outgoingInvoicePage.newInvoiceButton.click();
      await createInvoicePage.fillPartnerData({name:'test', zip: 1111, address:'asd 11', city:'Budapest'});
      await createInvoicePage.fillItemWithData(1,{name:'asd',quantity:1,price: 1});
      await createInvoicePage.saveButton.click();
    });

    await test.step('Save new invoice and confirm creation', async () => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (await createInvoicePage.subjectTaxExemptionButton.isVisible()) {
        await createInvoicePage.subjectTaxExemptionButton.click()
      }

      await createInvoicePage.confirmSaveButton.click();

      await expect(createInvoicePage.successfulSaveIcon).toBeVisible();
    });
  });
});
