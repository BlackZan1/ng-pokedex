export interface APIResponse<T> {
    count?: number
    results: Array<T>
}

export interface PokemonDetailsResponse {}