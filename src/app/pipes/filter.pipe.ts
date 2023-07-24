import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allcontacts:any[],serachkey:string,propertyname:string): any[] {

     const result:any=[]
      if(!allcontacts||serachkey==""||propertyname==""){
        return allcontacts
      }
      allcontacts.forEach((item:any)=>{

        if(item[propertyname].trim().toLowerCase().includes(serachkey.trim().toLowerCase())){
          result.push(item)
        }

      })
    return result
  }

}
