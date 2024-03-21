import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames:string []=['Spiderman','Ironman','Hulk','Thor'];

  public deleteHero?: string;

  removeLastHero (): void{
    this.deleteHero = this.heroNames.pop(); //tiene que ser public para que la pueda verlo en el html
   //const deleteHero = this.heroNames.pop(); // borra el utlimo elemento de la lista y lo regresa
    //console.log({deleteHero});
  }

}
