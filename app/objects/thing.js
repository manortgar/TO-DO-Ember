export default class Thing {
  constructor(name, status) {
    this.id = self.crypto.randomUUID();
    this.name = name;
    this.status = status;
  }
}
