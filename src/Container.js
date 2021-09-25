import React, { useEffect, useState } from 'react'
import App from './App'
import Loading from './Loading';
export const Container = () => {
    const [loader, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false)
        }, 3000);
        
    }, [])
    return (
        <div>
            {
                loader ===true ? <Loading/> : <App/>
            }
            
        </div>
    )
}
