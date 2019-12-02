import Factory from './Factory';
import IDCardProduct from './IDCardProduct';

export default class IDCardFactory extends Factory {
  public create(): IDCardProduct {
    const product: IDCardProduct = this.createProduct();
    this.registerProduct(product);
    return product;
  }
  protected createProduct() {
    return new IDCardProduct();
  }
  protected registerProduct(product: IDCardProduct) {
    this.owners.push(product);
  }
}
