export interface LocalForageConfiguration {
  driver: any; // options are localforage.INDEXEDDB or localforage.WEBSQL or localforage.LOCALSTORAGE
  name: string; // defaults to localforage
  version: number; // driver version (i.e. of INDEXEDDB)
  size: number; // Size of database, in bytes. WebSQL-only for now.
  storeName: string; // Should be alphanumeric, with underscores. ie. 'keyvaluepairs'
  description: string;
};
