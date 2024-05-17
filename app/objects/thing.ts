import { tracked } from "@glimmer/tracking";
export default class Thing {
  id: string;
  name: any;

  @tracked
  status: boolean;

  constructor(name: any, status: boolean) {
    this.id = self.crypto.randomUUID();
    this.name = name;
    this.status = status;
  }

  serialize() {
    return {
      id: this.id,
      name: this.name,
      status: this.status,
    };
  }
}
