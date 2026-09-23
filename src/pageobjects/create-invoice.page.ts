import { Page } from '@playwright/test';

export class CreateInvoicePage {
  constructor(
    page: Page,
    readonly partnerName = page.getByRole('textbox', { name: 'Cégnév/név' }),
    readonly partnerZip = page.getByRole('textbox', { name: 'Irányítószám' }),
    readonly partnerCity = page.getByRole('textbox', { name: 'Település' }),
    readonly partnerAddress = page.getByRole('textbox', { name: 'Utca, házszám' }),
    readonly itemsForm = page.locator('#inv-items'),
    readonly toolbar = page.locator('#szamla-ment-toolbar'),
    readonly saveButton = toolbar.getByRole('link', {name:'Elkészítem a számlát'}),
    readonly subjectTaxExemptionButton = page.getByRole('button', {name: 'Ez most nem alanyi adómentes számla lesz'}),
    readonly confirmSaveButton = page.getByRole('button', {name: 'OK', exact:true}),
    readonly successfulSaveIcon = page.locator('#szamlaNezetSuccIcon'),
  ) {}

  private getItemContainer = (nth:number) => {
    return this.itemsForm.locator(`#itemrow${nth}`);
  }

  fillItemWithData = async (nth:number, data: {name:string, quantity:number, price:number}) => {
    const item = this.getItemContainer(nth);
    await item.locator(`#item_${nth}`).fill(data.name);
    await item.locator(`#menny_${nth}`).fill(data.quantity.toString());
    await item.locator(`#nettegysar_${nth}`).fill(data.price.toString());
  }

  fillPartnerData = async (data: {name: string, zip:number, city:string, address:string}) => {
    await this.partnerName.fill(data.name);
    await this.partnerZip.fill(data.zip.toString());
    await this.partnerCity.fill(data.city);
    await this.partnerAddress.fill(data.address);
  }
}