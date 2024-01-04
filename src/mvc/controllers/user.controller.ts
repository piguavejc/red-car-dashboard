import { LoginModel, RegisterModel } from '@/mvc/models';
import { LoginDto, ResponseDto } from '@/mvc/models/dto';
import { AxiosResponse } from 'axios';

interface UserController {
 create: (user: RegisterModel) => Promise<AxiosResponse<ResponseDto>>;
 login: (user: LoginModel) => Promise<AxiosResponse<LoginDto>>;
}
export type { UserController };
