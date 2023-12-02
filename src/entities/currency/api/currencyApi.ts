import { baseApi } from "@/shared/api";
import { ReqGetAvailableDirections, ReqGetDirectionsDto, ResGetAvailableDirections, ResGetDirectionsDto, ResGetValuteNoCash } from "../types/types";
import { useQuery } from "react-query";

export const useGetDirections = ({ valute_from, valute_to }: ReqGetDirectionsDto) => {

    const fetcher = async () => (await baseApi.get<ResGetDirectionsDto>(`/directions?valute_from=${valute_from}&valute_to=${valute_to}`)).data
    const queryResult = useQuery({
        queryFn: fetcher,
        queryKey: ['Directions'],
        enabled: false

    })
    return queryResult
}
export const useGetNoCash = () => {
    const fetcher = async () => (await baseApi.get<ResGetValuteNoCash>(`valute/no_cash`)).data
    const queryResult = useQuery({
        queryFn: fetcher,
        queryKey: ['NoCash'],

        enabled: true,

        select: (data) => ({ directionsExchange: Object.keys(data), dataExchage: Object.values(data).flat(), data })
    })
    return queryResult

}
export const useGetAvailableDirections = ({ available_directions }: ReqGetAvailableDirections) => {
    const fetcher = async () => (await baseApi.get<ResGetAvailableDirections>(`available_directions?base=${available_directions}`)).data
    const queryResult = useQuery({
        queryFn: fetcher,
        queryKey: ['AvailableDirections'],
        select: (data) => ({ directionsExchange: Object.keys(data), dataExchage: Object.values(data).flat() }),
        enabled: false
    })
    return queryResult

}


