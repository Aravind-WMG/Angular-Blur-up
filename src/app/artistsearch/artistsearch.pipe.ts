import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterPipe',
  })

  export class FilterPipe implements PipeTransform {
    searchword:string;
    transform(value: any[], input: string) {
        let ans = [];
        if (input) {
            input = input.toLowerCase();
            for(let var1 of value){
               this.searchword =var1.name;
               if(this.searchword.toLocaleLowerCase().indexOf(input) > -1){
                    ans.push(var1);
               }
            }
            // if(ans.length==0){
            //     ans.push({"name":"Oops!!!...No search result...Try some other Keyword"});
            // }
;        }
        return ans;
    }
}