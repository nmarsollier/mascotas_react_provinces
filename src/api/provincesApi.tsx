import axios from "axios";

axios.defaults.headers.common["Content-Type"] = "application/json";
import { environment } from "mascotas_react_common"

export interface Province {
    id: string;
    name: string;
}

export async function getProvinces(): Promise<Province[]> {
    try {
        const res = await axios.get(environment.backendUrl + "/v1/province");
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}
