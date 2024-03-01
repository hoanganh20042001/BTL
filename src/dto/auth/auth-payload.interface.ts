//import { Role } from 'src/databases/entities/roles.entity';
//mở ra khi có phân quyền
export interface AuthPayload {
  id: number | string;
  email?: string;
  passWord?: string;
  role?: string;
}
