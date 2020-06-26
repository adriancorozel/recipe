import { DefaultUrlSerializer, UrlTree } from '@angular/router';

export class LowerCaseUrlSerializerService extends DefaultUrlSerializer {

  parse(url: string): UrlTree {
  
    if(!url.includes("id_token")){
     url = url.toLowerCase();
    }
    return super.parse(url);

  }
}
