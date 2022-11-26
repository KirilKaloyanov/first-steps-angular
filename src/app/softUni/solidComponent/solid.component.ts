import { Component, Input } from "@angular/core";

@Component({
    selector: 'solid',
    templateUrl: './solid.component.html'
})
export class SolidComponent {

@Input() users!: {name: string}[];

}

// class Wallet {
//     constructor(private amount: number){}
// }

// class Person {
//     wallet: Wallet;
//     constructor() {
//         this.wallet = new Wallet(200);
//     }
// }

// class Wallet {
//     constructor(private amount: number, private test: string){}
// }

// class Person {
//     constructor(private wallet: Wallet) {}
// }

// const w = new Wallet(200, 'message');
// const p = new Person(w);