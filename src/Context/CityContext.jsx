import {  Children, createContext, useState } from "react";

export const CityContext = createContext()

export function CityContextProvider({children}){

    //ciudad que buscarĂ¡ por defecto creo
    const [city,setCity] = useState("Madrid")

    const valor = {city,setCity}

    return(
        <CityContext.Provider value={valor}>{children}</CityContext.Provider>
    )
}