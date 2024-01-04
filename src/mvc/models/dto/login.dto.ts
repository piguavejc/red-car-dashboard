interface LoginDto {
 data: {
  id_user: number;
  full_name: string;
  email: string;
  user_name: string;
  user_password: string;
 };
 token: string;
}
export type { LoginDto };
