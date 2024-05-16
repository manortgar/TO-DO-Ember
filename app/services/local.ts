import Service from "@ember/service";

export default class LocalService extends Service {
  getStorage() {
    return JSON.parse(localStorage.getItem("listOfThing"));
  }

  setStorage(arrThing) {
    localStorage.setItem("listOfThing", JSON.stringify(arrThing));
  }
}
