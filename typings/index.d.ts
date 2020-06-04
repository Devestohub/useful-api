/*
Author: Hugovidafe (Hugo.vidal.ferre@gmail.com)
(c) 2020 TheMorFun
Created:  2020-06-04T12:25:53.305Z
Modified: 2020-06-04T14:10:46.119Z
*/

declare module '@hugovidafe/hugovidafe-db' {

    import { PathLike } from "fs";

    export const version: string;

    //#region Classes
    export class BaseApi {
        constructor(options: ApiOptions);
        
        public options: ApiOptions;
    }
    
    export class Api extends BaseApi {
        constructor(options: ApiOptions);
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

    //#endregion

    //#region Typedefs

    interface ApiOptions {
        id: number | number[];
        path_db?: PathLike;
        path_backup_db?: PathLike;
    }

    //#endregion
}