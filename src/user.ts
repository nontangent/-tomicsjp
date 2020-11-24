export interface User {
    id: string,
    name: string,
    screenName: string,
    description: string,
    iconUrl: string,
    bannerUrl: string;
    followersCount: number;
    followsCount: number;

    createdAt: any;
    updatedAt: any;
}