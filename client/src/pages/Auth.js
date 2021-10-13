import React, { useState } from 'react'
import Heading from '../components/Heading'
import Login from '../components/Login';
import Register from '../components/Register';

const Auth = () => {
    const [type, setType] = useState(true)
    return (
        <>
            <Heading />
            {type ? <Login setType={setType} /> : <Register setType={setType} />}
        </>
    )
}

export default Auth
