import axios, { AxiosResponse } from "axios"
import { IHttpClient } from "./IHttpClient"

export class AxiosHttpClient implements IHttpClient {
  async post<T>(url: string, data: any): Promise<T> {
    const response: AxiosResponse<T> = await axios.post(url, data)
    return response.data
  }
}
