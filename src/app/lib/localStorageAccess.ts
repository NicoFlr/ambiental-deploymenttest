
export class localStorageAccess {

    public static getObject(key: string) {
        if (!localStorage.getItem(key)) {
            return undefined;
        }
        var saved = localStorage.getItem(key);
        return JSON.parse(saved);
    }

    public static deleteObject(key:string){
        localStorage.removeItem(key)
    }

    public static setObject(key: string, objectVar: any) {
        localStorage.setItem(key, JSON.stringify(objectVar));
    }
}