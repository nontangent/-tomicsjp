import * as Twit from 'twit';

export enum CrawlerTaskStatus {
    WIP = 'WIP',
    DONE = 'DONE',
    ERROR = 'ERROR'
}

export interface CrawlerTask {
    id: string;
    status: CrawlerTaskStatus;
    params: Twit.Params;

    createdAt: any;
    updatedAt: any;
}

export const nullCrawlerTask: CrawlerTask = {
    id: null,
    status: null,
    params: null,

    createdAt: null,
    updatedAt: null
};