
export interface StorageInterface {
    getAll();
    get(key: string);
    set(key: string, value: any)
}
