import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginThunk } from '../redux/authSlice'
import { useNavigate } from 'react-router-dom'

const Log = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const authState = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const nav = useNavigate()

    useEffect(() => {

    }, [authState])

    return (
        authState.error ? <p>{authState.error}</p> :
            authState.loading ? <p>Loading...</p> :
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                    gap: '8px'
                }}>
                    <input style={{width: '400px'}} className='edited_input' value={username} onChange={(e) => {
                        setUsername(e.target.value)
                    }} type="text" />
                    <input style={{width: '400px'}} className='edited_input' value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} type="text" />
                    <button className='reg_log_button' onClick={() => {
                        dispatch(loginThunk({
                            username: username,
                            password: password
                        }))
                    }}>Логин</button>
                    <a className='reg_log_nav' onClick={() => {
                        nav('/reg')
                    }}>Зарегистрироваться</a>
                </div>
    )
}

export default Log