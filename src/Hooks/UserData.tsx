import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface UserTypes {
    setZipCode: (ZipCode: string) => void,
    setStreet: (Street: string) => void,
    setAddressNumber: (AddressNumber: any) => void,
    setNeighborhood: (Neighborhood: string) => void,
    setCity: (City: string) => void,
    setDistrict: (setDistrict: string) => void,
    setComplement: (setComplement: string) => void,
    setPayment: (setPayment: string) => void,

    userAddress:{
        zipCode: string,
        street: string,
        addressNumber: number | undefined,
        neighborhood: string,
        city: string,
        district: string,
        complement: string,
        payment: string,
    };
};


export const UserContext = createContext({} as UserTypes) ;

export function UserProvider({children}:{children: ReactNode}){

    const [ zipCode, setZipCode ] = useState('');
    const [ street, setStreet ] = useState('');
    const [ addressNumber, setAddressNumber ] = useState();
    const [ neighborhood, setNeighborhood ] = useState('');
    const [ city, setCity ] = useState('');
    const [ district, setDistrict ] = useState('');
    const [ complement, setComplement ] = useState('');
    const [ payment, setPayment ] = useState('');

    const userAddress = {
        zipCode,
        street,
        addressNumber,
        neighborhood,
        city,
        district,
        complement,
        payment,
    };

    useEffect(() => {
        const storedUserAddress = localStorage.getItem('@ignite-caffe:user-address-1.0.0');
        
        if(storedUserAddress){
            const parsedUserAddress = JSON.parse(storedUserAddress)
            setZipCode(parsedUserAddress.zipCode)
            setStreet(parsedUserAddress.street)
            setAddressNumber(parsedUserAddress.addressNumber)
            setNeighborhood(parsedUserAddress.neighborhood)
            setCity(parsedUserAddress.city)
            setDistrict(parsedUserAddress.district)
            setComplement(parsedUserAddress.complement)
        };

    }, [userAddress]);
    
    useEffect(() => {

        const isValidAddress = userAddress && Object.values(userAddress).every(value => value !== "");
    
        if (isValidAddress) {
            const stateJSON = JSON.stringify(userAddress);
            localStorage.setItem('@ignite-caffe:user-address-1.0.0', stateJSON);
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
            setPayment,

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