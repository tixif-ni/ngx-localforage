# ngx-localforage
ngx-localforage is a library that provides Angular4+ abstraction to the [localforage API](https://github.com/localForage/localForage), providing typescript definitions and returning [rxjs/Observable](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html) streams as a result to your queries.

## Installation

1. To install this library, run:
```bash
$ npm install ngx-localforage --save
```

2. In your application's [NgModule](https://angular.io/guide/ngmodule) add ```LocalForageModule``` to the imports section.
```app.module.ts
// ...
imports: [
  // ...
  LocalForageModule.forRoot()
]
```

3. Add the localforage to your application, so that it exists in the window global scope. You can do this by either 
- Adding it to your applications third party scripts file like so:
```polyfills.ts
import 'localforage';
```
- Or simply by placing a link to the cdn script in your application's index.html page like so.
```index.html
<script src="https://cdnjs.cloudflare.com/ajax/libs/localforage/1.5.0/localforage.min.js" defer></script>
```

## Usage
To use the library simply import the ```LocalForageService``` to your component, and use one of the provided methods.

```my.component.ts
import { Component } from '@angular/core';
import { LocalForageService } from 'ngx-localforage';
//...

export MyComponent implements OnInit {
  constructor ( private localforage: LocalForageService) { }

  ngOnInit() {
    this.localforage.keys().subscribe(keys => {
      console.log(keys);
    });
  }
}
```

## Methods
All of the localforage methods that are available in [the localforage API](https://localforage.github.io/localForage/#data-api) are available in this library. Methods include:
- ```getItem(key: string): Observable<any>```  -  [Localforage Docs](https://localforage.github.io/localForage/#data-api-getitem)
- ```setItem(key: string, item: any): Observable<any>``` -  [Localforage Docs](https://localforage.github.io/localForage/#data-api-setitem)
- ```removeItem(key: string): Observable<any>``` -  [Localforage Docs](https://localforage.github.io/localForage/#data-api-removeitem)
- ```clear(): Observable<any>``` -  [Localforage Docs](https://localforage.github.io/localForage/#data-api-clear)
- ```length(): Observable<number>``` -  [Localforage Docs](https://localforage.github.io/localForage/#data-api-clear)
- ```key(index: number): Observable<string>``` -  [Localforage Docs](https://localforage.github.io/localForage/#data-api-key)
- ```keys(key: string): Observable<string[]>``` -  [Localforage Docs](https://localforage.github.io/localForage/#data-api-keys)

## Localforage Config
A ```config(config: LocalForageConfiguration)``` method in the ```LocalForageService``` exists, as well as a  and ```LocalForageConfiguration``` type interface exists to configure localforage as is provided in [the localforage API](https://localforage.github.io/localForage/#data-api).

Example:


## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Tixif](http://tixif.com)
