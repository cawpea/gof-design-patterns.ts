interface DbProperties {
  name: string;
  email: string;
}
interface DbCollections {
  [key: string]: DbProperties;
  db1: DbProperties;
  db2: DbProperties;
  db3: DbProperties;
}

export default class Database {
  private constructor () {}
  public static getProperties (dbname: string): DbProperties {
    const data: DbCollections = {
      'db1': {
        name: 'test1',
        email: 'test1@gmail.com'
      },
      'db2': {
        name: 'test2',
        email: 'test2@gmail.com'
      },
      'db3': {
        name: 'test3',
        email: 'test3@gmail.com'
      }
    }
    return data[dbname]
  }
}
