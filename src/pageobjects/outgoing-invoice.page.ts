import { Page } from '@playwright/test';

export class OutgoingInvoicePage {
  constructor(
    page: Page,
    readonly invoiceListContainer = page.getByTestId('invoice-list-table-container'),
    readonly newInvoiceButton = page.getByTestId('szamla-lista-new-invoice'),
  ) {}
}