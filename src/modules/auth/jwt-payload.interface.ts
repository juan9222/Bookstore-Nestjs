
import { RoleType } from '../role/roletype.enum';

export interface IJWTPayload {
    id: number;
    username: string;
    email: string;
    roles: RoleType[];
    iat?: Date;
}
