// Author: Hugovidafe <Hugo.vidal.ferre@gmail.com>
// Useful Api (c) 2020
// Created: 1/7/2020 12:48:14
// Modified: 9/7/2020 19:44:22

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
        private _validateOptions(options?: ApiOptions): void;

        public database: Database;
        public langs: Langs;
        public roles: Roles;
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
        constructor(file: PathLike);
        public get(key: string): any | undefined;
        public set(key: string, value: string | object): string | object;
        public has(key: string): boolean;
        public unset(key: string): boolean;
        public add(key: string, value: string | object): string | object;
        public get clone(): object;
        public encrypt(algorithm: Algorithm, pass: string): string | any;
        public decrypt(algorithm: Algorithm, pass: string, encrypted: string): object | any;
    }

    export class Langs extends i18nAPI {
        constructor(path: PathLike);
    }

    export class Roles {
        public addApplication(name: string, roles: object): void;
        public addProfile(name: string, roles: object): void;
        public getApplication(name: string): object;
        public getProfile(name: string): object;
        public import(data: object): void;
        public get export(): object;
        public get getMonitor(): any;
        public setSeparator(sep: string): Roles;
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
        roles?: object;
    }

    //#endregion
}