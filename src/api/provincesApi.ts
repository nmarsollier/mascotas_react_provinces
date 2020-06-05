
import { environment } from "mascotas_react_common"
import { securedAxios } from "mascotas_react_store";

export interface Province {
    id: string;
    name: string;
}

export async function getProvinces(): Promise<Province[]> {
    try {
        const res = await securedAxios().get(environment.backendUrl + "/v1/province");
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}
