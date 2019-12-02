import Factory from './Factory';
import IDCardFactory from './IDCardFactory';

export default function() {
  const factory = new Factory()
  const product = factory.create()
  const idCardFactory = new IDCardFactory()
  const idCardProduct = idCardFactory.create()
  console.log(product.use())
  console.log(idCardProduct.use())
}
