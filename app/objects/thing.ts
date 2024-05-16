export default class Thing {

  id: string
  name: string
  status: boolean

  constructor(name, status) {
    this.id = self.crypto.randomUUID();
    this.name = name;
    this.status = status;
  }
}
