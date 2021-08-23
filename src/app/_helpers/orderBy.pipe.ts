import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

let isAsc = true;
export function orderByProperty(property: string) {
  return pipe(
    map((data: any) => {
      if (isAsc) {
        data = data.sort((a: any, b: any) => {
          return a[property] > b[property]
            ? 1
            : b[property] > a[property]
            ? -1
            : 0;
        });
      } else {
        data = data.sort((a: any, b: any) => {
          return a[property] > b[property]
            ? -1
            : b[property] > a[property]
            ? 1
            : 0;
        });
      }
      isAsc = !isAsc;
      return data;
    })
  );
}
