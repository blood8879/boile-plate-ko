import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';

function LoginPage(props) {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const [LoginId, setLoginId] = useState('')
    const [Password, setPassword] = useState('')

    const onLoginIdHandler = (event) => {
        setLoginId(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            loginId: LoginId,
            password: Password
        }

        dispatch(loginUser(body))
            .then(response => {
                if (response.payload.loginSuccess) {
                    navigate('/')
                } else {
                    alert('로그인에 실패하였습니다')
                }
            })

        
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
           <form style={{ display: 'flex', flexDirection: 'column' }}
            onSubmit={onSubmitHandler}
           >
               <label>ID</label>
               <input type="text" value={LoginId} onChange={onLoginIdHandler} />
               <label>Password</label>
               <input type="password" value={Password} onChange={onPasswordHandler} />
               <br />
               <button>
                   Login
               </button>
           </form>
        </div>
    )
}

export default LoginPage
