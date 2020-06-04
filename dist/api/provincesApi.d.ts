export interface Province {
    id: string;
    name: string;
}
export declare function getProvinces(): Promise<Province[]>;
