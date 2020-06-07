/*
Author: Hugovidafe (Hugo.vidal.ferre@gmail.com)
(c) 2020 TheMorFun
Created:  2020-06-04T12:25:53.305Z
Modified: 2020-06-07T07:33:11.984Z
*/

declare module '@hugovidafe/useful-api' {

    import { PathLike } from "fs";

    export const version: string;

    //#region Classes
    export class BaseApi {
        constructor(options?: ApiOptions);
        
        public options: ApiOptions;
    }
    
    export class Api extends BaseApi {
        constructor(options?: ApiOptions);

        public database: Database;
        public langs = i18n;
    }

    export const Constants: {
        Package: {
            version: string;
            description: string;
            author: string;
            license: string;
            main: PathLike;
            types: PathLike;
            homepage: string;
            keywords: string[];
            bugs: { url: string };
            repository: { type: string; url: string };
            browser: { [key: string]: boolean };
            scripts: { [key: string]: string };
            engines: { [key: string]: string };
            dependencies: { [key: string]: string };
            peerDependencies: { [key: string]: string };
            devDependencies: { [key: string]: string };
            [key: string]: any;
        }
        DefaultOptions: ApiOptions;
    }

    export class Database {
        constructor(api: Api);
        public static get(key: string | object): string | object | undefined;
        public static set(key: string | object, value: any): any;
        public static has(key: string | object): boolean;
        public static unset(key: string | object): boolean;
        public static clone(): any;
        public encrypt(algorithm: Algorithm, pass: string): string;
        public decrypt(algorithm: Algorithm, pass: string, encrypted: string): object | any;
    }

    export class Util {
        public static flatten(obj: object, ...props: { [key: string]: boolean | string }[]): object;
        public static mergeDefault(def: object, given: object): object;
    }

    //#endregion

    //#region Typedefs

    interface ApiOptions {
        file_db?: PathLike;
        path_langs?: PathLike;
    }

    //#endregion
}