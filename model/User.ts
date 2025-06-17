import { IMOCK_NEWS } from "@/shared/Mock";

export interface User {
    name: string;
    email: string;
    password: string;
    likedPosts?: IMOCK_NEWS[];
    likedGreenPoints?: string[];
}