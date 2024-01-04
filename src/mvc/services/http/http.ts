import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
class Http {
 public post = async <T>(
  url: string,
  body: FormData | URLSearchParams,
  token?: string,
 ): Promise<AxiosResponse<T>> => {
  return await axios.post<T>(url, body, this.header(token));
 };

 public put = async <T>(
  url: string,
  body: FormData | URLSearchParams,
  token?: string,
 ): Promise<AxiosResponse<T>> => {
  return await axios.put<T>(url, body, this.header(token));
 };

 public get = async <T>(url: string): Promise<AxiosResponse> => {
  return await axios.get<T>(url, this.header());
 };
 public header(token?: string): AxiosRequestConfig {
  return {
   headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Origin': process.env.API_RED_CAR_ORIGIN as string,
    'Authorization': `Bearer ${token}`,
   },
  };
 }
}
export { Http };
