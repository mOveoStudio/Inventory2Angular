import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'objectValues'})
export class ObjectValuesPipe implements PipeTransform {
    transform(value:any):any {
        let array = [];
        Object.keys(value).forEach((e)=>{
            array.push({
                name:e
            })
        });

        return array;
    }

}
