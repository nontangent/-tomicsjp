import { User } from './user';

export interface Tomic {
    id: string;
    tweetId: string;

    authorId: string;
    author: User;
    
    text: string;
    imageUrls: string[];

    preId: string;
    nextId: string;

    createdAt: any;
    updatedAt: any;
}