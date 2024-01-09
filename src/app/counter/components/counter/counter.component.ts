import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}} </h3>

    <button (click)="increaseByID(+1)">+1</button>
    <button (click)="increaseByID(-1)">-1</button>
    <button (click)="reset()">reset</button>
  `
})

export class CounterComponent{
  constructor() { }

  public title: string = 'Hola Mundo';
  public counter: number = 10;


  increaseByID(value: number): void{
    this.counter+= value;
  }

  reset(): void{
    this.counter= 10;
  }
}
