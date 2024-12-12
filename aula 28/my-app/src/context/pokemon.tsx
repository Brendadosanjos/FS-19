import { createContext, ReactNode, useContext } from "react";


const PokemonContext = createContext({})

export function PokemonProvider({ children }: { children: ReactNode }){
    return(
        <PokemonContext.Provider value={{}}>
            {children}
        </PokemonContext.Provider>
    )
}

export function usePokemon(){
    const context = useContext(PokemonContext)

    if (!context) {
        throw new Error("userPokemon deve ser utilizado com PokemonProvider")
    }

    return context
}