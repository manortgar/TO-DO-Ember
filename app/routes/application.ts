import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class ApplicationRoute extends Route {
  @service
  local: any;

  model() {
    return this.local.getStorage(); //el model solo devuelve, no hace el set aqui, es para que si fuese una llamada a un endpoint, solo se hiciese una.
  }
}
