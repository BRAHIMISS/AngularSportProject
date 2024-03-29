import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch:string) {
    //ch="abderrahmen";
    let voyels=['a','e','u','o','i','y'];
    let result='';
    for (let i =0 ;i < ch.length; i++)
    { 
      let inter=ch[i];
      for (let j =0 ;j < voyels.length; j++)
      {     
         if (ch[i].toLowerCase() == voyels[j])
          {
            inter="*";
            break;
          } 
      }
        result+=inter;
      }

    return result ;

  }

}
 /*********TEST Compilation à la main******* 
    ch="abderrahmen";
 let voyels=['a','e','u','o','i','y'];
 let result='';

 for (let i =0 ;i < ch.length; i++)
 { 
   for (let j =0 ;j < voyels.length; j++)
   {     
      if (ch[i].toLowerCase() == voyels[j])
       {
         result +='*'; 
        console.log("i:"+i+ " j:"+j+"  Result: "+result)

         break;
       } else {result +=ch[i];    console.log("i:"+i+ " j:"+j+"  Result: "+result);
       }
   }
 }
 console.log(ch);
 console.log(result);

 */