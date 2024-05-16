import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import Thing from "../objects/thing";
import { inject as service } from "@ember/service";
import type { EmptyObject } from "@glimmer/component/-private/component";
import { TrackedArray } from 'tracked-built-ins';

export default class ListComponent extends Component {

  //cosas para el Lunes, creo que deberia refactorizar el código, pese a que los objretos se crean bien y se guardan y demás después no puedo indentificarlo
  // array con lo que se me hace dificil el cambiar el estado y guardarlo en el localstorage para que sea persistente
  //  no tengo forma de que se actualice el elemento que quiero del local. actualizo el status pero de una thing nueva.

  constructor(owner: unknown, args: EmptyObject) {
    super(owner, args);
    this.arrThing = this.args.model;
    this.myTrackedArray=this.args.model;
    this.fillArray();
    this.calculateNumOfThings();
  }

  @tracked
  myTrackedArray = new TrackedArray()

  @service
  local: { setStorage: (arg0: never[]) => void; setStorageTrack:(arg0: never[]) => void} | undefined;

  hola = "hola";

  @tracked
  arrThing = [Thing];

  @tracked
  query: string | null | undefined; //Quuiero vaciar después la query, como?? otra vez seleccionando el id del input y vaciandolo?

  @tracked
  numberOfThings2: any;

  @action
  createThing() {
    this.fillArray();
    this.fillTrackedArray();
    this.calculateNumOfThings();
  }

  @action
  toggleThing(idThing: any) {
    //this.changeStatus(idThing);
    this.changeStatusTrack(idThing)
    this.calculateNumOfThings();
  }

  @action
  enter(event: { code: string; }) {
    if (event.code === "Enter") {
      this.createThing();
    }
  }

  @action //para que se ejecute desde el template la funcion
  fillArray() {
    var thing = new Thing(this.query, false);
    if (this.query != null) {
      thing.name = this.query;
      //uso var por que let solo me lo reconoce dentro del bloque if
      this.query = "";
    }
    if (this.arrThing.length != 0) {
      if (thing.name != null && thing.name != "") {
        this.arrThing = [...this.arrThing, thing];
      }
    } else {
      if (thing.name != null && thing.name != "") {
        this.arrThing = [thing];
      }
    }

    this.local.setStorage(this.arrThing);
  }

  @action //para que se ejecute desde el template la funcion
  fillTrackedArray() {
    var thing = new Thing(this.query, false);
    if (this.query != null) {
      thing.name = this.query;
      //uso var por que let solo me lo reconoce dentro del bloque if
      this.query = "";
    }
    if (this.myTrackedArray.length != 0) {
      if (thing.name != null && thing.name != "") {
        this.myTrackedArray = [...this.myTrackedArray, thing];
      }
    } else {
      if (thing.name != null && thing.name != "") {
        this.myTrackedArray = [thing];
      }
    }
    console.log('EL TRACKED', this.myTrackedArray)
    console.log('EL ARRAY', this.arrThing)
    this.local.setStorageTrack(this.myTrackedArray);
  }

  @action
  changeStatus(idThing) {
    //localizamos el elemento con event.target
    const index = this.arrThing.findIndex((x) => x.id === idThing);
    this.arrThing[index].status = !this.arrThing[index].status;

    this.arrThing = this.arrThing.map((x) => {
      return { ...x };
    });
    //cunando coge los estados del boton y demas es por que coge las propiedades del último thing creado
    //este thing no es el thing que al pulsar en el boton quiero, tengo que aberiguar como obtenerlo
    this.local.setStorage(this.arrThing);
  }

  @action
  changeStatusTrack(idThing) {
    //localizamos el elemento con event.target
    const index = this.myTrackedArray.findIndex((x) => x.id === idThing);
    
    this.myTrackedArray[index].status = !this.myTrackedArray[index].status;
    //console.log(this.myTrackedArray[index])

    // this.myTrackedArray = this.myTrackedArray.map((x) => {
    //   return { ...x };
    // });
    //cunando coge los estados del boton y demas es por que coge las propiedades del último thing creado
    //este thing no es el thing que al pulsar en el boton quiero, tengo que aberiguar como obtenerlo
    this.local.setStorageTrack(this.myTrackedArray);
  }

  @action
  removeAll() {
    this.query = "";
    this.arrThing = [];
    this.local.setStorage(this.arrThing);
    this.calculateNumOfThings();
    console.log("remove");
  }

  @action
  calculateNumOfThings() {
    var numberOfThings = this.arrThing.length;
    let i = 0;
    this.arrThing.forEach((x) => {
      if (x.status == true) {
        i++;
      }
    });
    console.log(i);
    this.numberOfThings2 = numberOfThings - i;
    return this.numberOfThings2;
  }
}
