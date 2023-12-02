export type ReqGetDirectionsDto = {
    valute_from: string,
    valute_to: string,
}
export type ResGetDirectionsDto = {
    id: number,
    name: string,
    partner_link: string,
    valute_from: string,
    icon_valute_from: string,
    valute_to: string,
    icon_valute_to: string,
    in_count: number,
    out_count: number,
    min_amount: string,
    max_amount: string
}

export type CurrencyType = {
    name: string;
    code_name: string;
    type_valute: string;
    icon_url: string;
};

// export type ResGetValuteNoCash = Record<string, CurrencyType[]>;
export type ResGetValuteNoCash = {
    [key: string]: CurrencyType[]
};

export type ReqGetAvailableDirections = {
    available_directions: string,
}
export type ResGetAvailableDirections = ResGetValuteNoCash