export interface LocalForageConfiguration {
    // options are localforage.INDEXEDDB or localforage.WEBSQL or
    // localforage.LOCALSTORAGE
    driver: any;
    // defaults to localforage
    name: string;
    // driver version (i.e. of INDEXEDDB)
    version: number;
    // Size of database, in bytes. WebSQL-only for now.
    size: number;
    // Should be alphanumeric, with underscores. ie. 'keyvaluepairs'
    storeName: string;
    description: string;
};
