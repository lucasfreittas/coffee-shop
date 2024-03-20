import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface UserTypes {
    setZipCode: (ZipCode: string) => void,
    setStreet: (Street: string) => void,
    setAddressNumber: (AddressNumber: number) => void,
    setNeighborhood: (Neighborhood: string) => void,
    setCity: (City: string) => void,
    setDistrict: (streDistrictet: string) => void,
    setComplement: (streDistrictet: string) => void,

    userAddress:{
        zipCode: string,
        street: string,
        addressNumber: number,
        neighborhood: string,
        city: string,
        district: string,
        complement: string,
    };
};


export const UserContext = createContext({} as UserTypes) ;

export function UserProvider({children}:{children: ReactNode}){
    const [ zipCode, setZipCode ] = useState('');
    const [ street, setStreet ] = useState('');
    const [ addressNumber, setAddressNumber ] = useState(0)
    const [ neighborhood, setNeighborhood ] = useState('');
    const [ city, setCity ] = useState('');
    const [ district, setDistrict ] = useState('');
    const [ complement, setComplement ] = useState('');

    const userAddress = {
        zipCode,
        street,
        addressNumber,
        neighborhood,
        city,
        district,
        complement
    };
    
    useEffect(() => {
        const stateJSON = JSON.stringify(userAddress)
        localStorage.setItem('@ignite-caffe:user-address-1.0.0', stateJSON)

    }, [userAddress]);

    useEffect(() => {
        const storedUserAddress = localStorage.getItem('@ignite-caffe:user-address-1.0.0');
        
        if(storedUserAddress){
            const parsedUserAddress = JSON.parse(storedUserAddress)
            setStreet(parsedUserAddress.street)
            console.log(street)
        };

    }, [userAddress]);

    return(
        <UserContext.Provider value={{
            setZipCode,
            setStreet,
            setAddressNumber,
            setNeighborhood,
            setCity,
            setDistrict,
            setComplement,

            userAddress
        }}>
            {children}
        </UserContext.Provider>
    )
};

export function useUser(){
    const context = useContext(UserContext);
    return context
};