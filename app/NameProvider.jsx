import { useState } from "react";
import  NameContext  from "./NameContext";

const NameProvider = ({ children }) => {
    const [name, setName] = useState('');

    return (
        <NameContext.Provider value={{ name, setName }}>
            {children}
        </NameContext.Provider>
    )
}

export default NameProvider;