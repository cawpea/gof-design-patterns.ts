import Product from './Product';

export default class Factory {
  protected owners: Array<Product> = []
  public create () {
    const product:Product = this.createProduct();
    this.registerProduct(product);
    return product;
  }
  protected createProduct() {
    return new Product();
  }
  protected registerProduct(product: Product) {
    this.owners.push(product);
  }
}
