import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Thing from '../objects/thing';

export default class ListComponent extends Component {
  debugger;

  //cosas para el Lunes, creo que deberia refactorizar el código, pese a que los objretos se crean bien y se guardan y demás después no puedo indentificarlo
  // array con lo que se me hace dificil el cambiar el estado y guardarlo en el localstorage para que sea persistente
  //  no tengo forma de que se actualice el elemento que quiero del local. actualizo el status pero de una thing nueva.

  constructor(owner, args) {
    super(owner, args);
    this.conditional();
    this.print();
  }

  hola = 'hola';

  @tracked
  arrThing = [];

  @tracked
  query;

  @tracked
  thing = new Thing(this.query, false);

  @tracked
  status = this.thing.status;

  @tracked
  statusCkd = document.getElementById('input').checked;

  @action
  conditional() {
    let local = JSON.parse(localStorage.getItem('listOfThing'));
    console.log('esto es local', local);
    if (local != null) {
      this.arrThing = [...local];
      console.log('esto es conditional', this.arrThing);
    } else {
      this.arrThing = []; //este else no me vale para nada, ya que le doy el valor que ya traia al array
    }
    console.log('esto es arrThing', this.arrThing);
  }

  @action //para que se ejecute desde el template la funcion
  print() {
    if (this.query != null) {
      console.log('esto es query', this.query);
      this.thing.name = this.query;
      console.log('esto es thing', this.thing); //uso var por que let solo me lo reconoce dentro del bloque if
    }
    if (this.arrThing.length != 0) {
      if (this.thing.name != null && this.thing.name != '') {
        this.arrThing = [...this.arrThing, this.thing];
        console.log('esto es thingel array tiene ya un elemento');
      }
    } else {
      console.log('ha entrado', this.arrThing.length);
      if (this.thing.name != null && this.thing.name != '') {
        console.log('esto es thing nombre', this.thing.name);
        this.arrThing = [this.thing];
      }
    }

    localStorage.setItem('listOfThing', JSON.stringify(this.arrThing));
  }

  @action
  changeStatus() {
    this.statusCkd = !this.statusCkd;
    this.status = this.statusCkd;
    //cunando coge los estados del boton y demas es por que coge las propiedades del último thing creado
    let objIndex = this.arrThing.findIndex((x) => x.name == this.thing.name);
    console.log('este deberia ser el objeto', this.arrThing[objIndex]);
    console.log(
      'este es el status que deberia actualizar la variable this.status en el template',
      this.thing,
    ); //este thing no es el thing que al pulsar en el boton quiero, tengo que aberiguar como obtenerlo

    console.log('este es el input checked', this.statusCkd);

    return this.status;
  }
}
