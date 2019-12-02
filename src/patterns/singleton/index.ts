import Singleton from './Singleton';

export default function() {
  const singleton1: Singleton = Singleton.getInstance();
  const singleton2: Singleton = Singleton.getInstance();
  if (singleton1 === singleton2) {
    console.log('singletonは同じオブジェクトです')
  } else {
    console.log('singletonは異なるオブジェクトです')
  }
  console.log(`singleton.num: ${singleton1.increment()}`)
  console.log(`singleton.num: ${singleton2.increment()}`)
}
