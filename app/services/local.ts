import Service from "@ember/service";
import type { TrackedArray } from "tracked-built-ins";

export default class LocalService extends Service {
  getStorage() {
    return JSON.parse(localStorage.getItem("listOfThing"));
  }

  setStorage(arrThing: TrackedArray<any>) {
    localStorage.setItem("listOfThing", JSON.stringify(arrThing));
  }
  setStorageTrack(arrThing: TrackedArray<any>) {
    localStorage.setItem("listOfThing", JSON.stringify(arrThing));
  }
}
