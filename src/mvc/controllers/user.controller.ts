import { UserModel } from '@/mvc/models';
import { AxiosResponse } from 'axios';
import { resposeApi } from '@/types';

interface UserController {
 create: (user: UserModel) => Promise<AxiosResponse<resposeApi>>;
}
export type { UserController };
