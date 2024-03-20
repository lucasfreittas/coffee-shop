import { ReactNode, createContext, useContext, useState } from "react";

interface UserTypes {
    setZipCode: (ZipCode: number) => void,
    zipCode: number,

    setStreet: (street: string) => void,
    street: string,

    setAddressNumber: (AddressNumber: number) => void,
    addressNumber: number,

    setNeighborhood: (Neighborhood: string) => void,
    neighborhood: string,

    setCity: (City: string) => void,
    city: string,

    setDistrict: (streDistrictet: string) => void,
    district: string,
};


export const UserContext = createContext({} as UserTypes) ;

export function UserProvider({children}:{children: ReactNode}){
    const [ zipCode, setZipCode ] = useState(0);
    const [ street, setStreet ] = useState('');
    const [ addressNumber, setAddressNumber ] = useState(0)
    const [ neighborhood, setNeighborhood ] = useState('');
    const [ city, setCity ] = useState('');
    const [ district, setDistrict ] = useState('');
    

    return(
        <UserContext.Provider value={{
            zipCode: zipCode,
            setZipCode: setZipCode,

            street: street,
            setStreet: setStreet,

            addressNumber: addressNumber,
            setAddressNumber: setAddressNumber,

            neighborhood: neighborhood,
            setNeighborhood: setNeighborhood,

            city: city,
            setCity: setCity,

            district: district,
            setDistrict: setDistrict,
        }}>
            {children}
        </UserContext.Provider>
    )
};

export function useUser(){
    const context = useContext(UserContext);
    return context
};