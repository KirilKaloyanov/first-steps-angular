import { Pipe } from "@angular/core";

@Pipe({
    name: 'capitalize'
})
export class CapitalizePipe {
    transform(value: string, args?:any) {
        let str = value.split(' ');

        let prepositions = ['of', 'the', 'a'];

        let result = str.map(
            (word, i) => i > 0 && prepositions.includes(word) 
                ? word.toLocaleLowerCase() 
                : word[0].toUpperCase() + word.substr(1).toLowerCase()
            );
        return result.join(' ');
    }
}