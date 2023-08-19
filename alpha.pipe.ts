import { Pipe, PipeTransform } from "@angular/core";
import { NameOfModel } from "src/app/models/NameOfModel.model";

@Pipe({
    name: "alphaPipe"
})

export class AlphaPipe implements PipeTransform {
    transform(value: NameOfModel[]): NameOfModel[] {
        // return whatever property you're trying to sort on the array of models
        return value?.sort((a, b) => a.Member.Title.toLowerCase() !== b.Member.Title.toLowerCase() ? a.Member.Title.toLowerCase() < b.Member.Title.toLowerCase() ? -1 : 1 : 0);
    }
}

