export interface rates {
    currency: string;
    value:    number;
}

export interface ResponseRequest {
    base: string;
    date: string;
    success: boolean;
    timestamp: number;
    ratesList: rates[];
}
