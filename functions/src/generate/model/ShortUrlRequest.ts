export interface GetShortUrlRequest {
    url: string;
    postfix?: string;
}

export interface GetShortUrlResponseData {
    short_url: string;
}
