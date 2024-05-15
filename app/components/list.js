import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import Thing from "../objects/thing";
import { inject as service } from "@ember/service";

export default class ListComponent extends Component {
  debugger;

  //cosas para el Lunes, creo que deberia refactorizar el código, pese a que los objretos se crean bien y se guardan y demás después no puedo indentificarlo
  // array con lo que se me hace dificil el cambiar el estado y guardarlo en el localstorage para que sea persistente
  //  no tengo forma de que se actualice el elemento que quiero del local. actualizo el status pero de una thing nueva.

  constructor(owner, args) {
    super(owner, args);
    this.conditional();
    this.print();
    this.calculate();
  }

  @service
  local;

  hola = "hola";

  @tracked
  arrThing = [];

  @tracked
  query; //Quuiero vaciar después la query, como?? otra vez seleccionando el id del input y vaciandolo?

  @tracked
  numberOfThings2;

  @action
  create() {
    this.conditional();
    this.print();
    this.calculate();
  }

  @action
  doThing(idThing) {
    this.changeStatus(idThing);
    this.conditional();
    this.calculate();
  }

  @action
  conditional() {
    let local = JSON.parse(localStorage.getItem("listOfThing")); //servcio para el localStorage
    if (local != null) {
      this.arrThing = [...local];
    }
  }

  @action //para que se ejecute desde el template la funcion
  print() {
    var thing = new Thing(this.query, false);
    if (this.query != null) {
      thing.name = this.query;
      //uso var por que let solo me lo reconoce dentro del bloque if
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
    console.log("a print llega");
    localStorage.setItem("listOfThing", JSON.stringify(this.arrThing));
  }

  @action
  changeStatus(idThing) {
    //localizamos el elemento con event.target
    const index = this.arrThing.findIndex((x) => x.id === idThing);
    this.arrThing[index].status = !this.arrThing[index].status;
    //cunando coge los estados del boton y demas es por que coge las propiedades del último thing creado
    //este thing no es el thing que al pulsar en el boton quiero, tengo que aberiguar como obtenerlo
    localStorage.setItem("listOfThing", JSON.stringify(this.arrThing));
  }

  @action
  removeAll() {
    this.arrThing = [];
    localStorage.setItem("listOfThing", JSON.stringify(this.arrThing));
    this.conditional();
    this.print();
    this.calculate();
    console.log("remove");
  }

  @action
  calculate() {
    this.numberOfThings = this.arrThing.length;
    let i = 0;
    this.arrThing.forEach((x) => {
      if (x.status == true) {
        i++;
      }
    });
    console.log(i);
    this.numberOfThings2 = this.numberOfThings - i;
    return this.numberOfThings2;
  }
}
