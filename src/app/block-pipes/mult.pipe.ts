import { Pipe, PipeTransform } from '@angular/core';
import {Post} from "./block-pipes.component";

@Pipe({
  name: 'mult',
  pure: false
})
export class MultPipe implements PipeTransform {

  transform(posts: Post[], search: string, searchField: string = 'title'): Post[] {
    if(search) {
     return posts.filter((el: Post) => el[searchField as keyof Post].toUpperCase().includes(search.toUpperCase()))
    }else {
      return posts;
    }
  }

}
