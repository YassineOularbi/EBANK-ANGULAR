import { User } from "../models/user.model";

export interface AuthResponse {
    accessToken: string;
    user: User
}
