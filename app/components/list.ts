import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import Thing from "../objects/thing";
import { inject as service } from "@ember/service";
import type { EmptyObject } from "@glimmer/component/-private/component";
import { TrackedArray } from "tracked-built-ins";
import type LocalService from "to-do-list/services/local";
interface ListComponentArgs {
  model: any[];
}
export default class ListComponent extends Component<ListComponentArgs> {
  //cosas para el Lunes, creo que deberia refactorizar el código, pese a que los objretos se crean bien y se guardan y demás después no puedo indentificarlo
  // array con lo que se me hace dificil el cambiar el estado y guardarlo en el localstorage para que sea persistente
  //  no tengo forma de que se actualice el elemento que quiero del local. actualizo el status pero de una thing nueva.

  constructor(owner: unknown, args: ListComponentArgs) {
    super(owner, args);
    if (this.args.model) {
      //args es un pbjeto plano, tengo que parsear cada Thing, forEach con un push en cada thing
      //mirar en MDN Truthy falsy JS
      this.myTrackedArray = new TrackedArray();
      this.finalArr = new TrackedArray();
      //this.mySerializeTArr = new TrackedArray();
      this.args.model.forEach((x) => {
        console.log("esto es el name", x.name, "esto es el status", x.status);
        let thingModel = new Thing(x.name, x.status);
        thingModel.id = x.id;
        this.finalArr.push(thingModel);
        this.myTrackedArray.push(thingModel.serialize());
      });
    } else {
      this.finalArr = new TrackedArray();
      this.myTrackedArray = new TrackedArray();
      this.local.setStorageTrack(this.myTrackedArray);
    }
    //this.fillTrackedArray();
    this.calculateNumOfThings();
  }

  @tracked
  myTrackedArray: TrackedArray<any>;

  @tracked
  finalArr: TrackedArray<Thing>;

  // @tracked
  // mySerializeTArr: TrackedArray<any>;

  @service
  declare local: LocalService; //servicios necesitan declare

  hola = "hola";

  @tracked
  query: string | undefined; //Quuiero vaciar después la query, como?? otra vez seleccionando el id del input y vaciandolo?

  @tracked
  numberOfThings2: number | undefined;

  @action
  createThing() {
    this.fillTrackedArray();
    this.calculateNumOfThings();
  }

  @action
  toggleThing(idThing: any) {
    this.changeStatusTrack(idThing);
    this.calculateNumOfThings();
  }

  @action
  enter(event: { code: string }) {
    if (event.code === "Enter") {
      this.createThing();
    }
  }

  @action //para que se ejecute desde el template la funcion
  fillTrackedArray() {
    //debugger
    var thing = new Thing(this.query, false);
    if (this.query != null && this.query != "") {
      thing.name = this.query;
      this.finalArr.push(thing);
      const serialize = thing.serialize();
      this.myTrackedArray.push(serialize);
      this.query = "";
    }

    console.log("array serializada", this.myTrackedArray);

    this.local.setStorageTrack(this.myTrackedArray);
  }

  @action
  changeStatusTrack(idThing: any) {
    //localizamos el elemento con event.target
    //debugger

    const index = this.finalArr.findIndex((x) => x.id === idThing);
    console.log("esto es index", index);

    let bb = this.finalArr[index];
    console.log("esto es objeto antes de cambiar estado", bb?.status);

    this.finalArr[index].status = !this.finalArr[index]?.status;

    let bb2 = this.finalArr[index];
    console.log("esto es objeto DESPUES de cambiar estado", bb2?.status);

    this.myTrackedArray[index] = this.finalArr[index]?.serialize();
    this.local.setStorageTrack(this.myTrackedArray);
  }

  @action
  removeAll() {
    this.query = "";
    this.myTrackedArray = new TrackedArray();
    this.finalArr = new TrackedArray();
    console.log(this.myTrackedArray);
    this.local.setStorage(this.myTrackedArray);
    this.calculateNumOfThings();
    console.log("remove");
  }

  @action
  calculateNumOfThings() {
    var numberOfThings = this.myTrackedArray.length;
    let i = 0;
    this.myTrackedArray.forEach((x) => {
      if (x.status == true) {
        i++;
      }
    });
    this.numberOfThings2 = numberOfThings - i;
    return this.numberOfThings2;
  }
}
