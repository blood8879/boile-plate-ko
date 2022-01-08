import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';

function RegisterPage(props) {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const [LoginId, setLoginId] = useState('')
    const [Name, setName] = useState('')
    const [Password, setPassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')

    const onLoginIdHandler = (event) => {
        setLoginId(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (Password !== ConfirmPassword) {
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
        }

        let body = {
            loginId: LoginId,
            name: Name,
            password: Password
        }

        dispatch(registerUser(body))
            .then(response => {
                if (response.payload.success) {
                    navigate('/login')
                } else {
                    alert('회원가입에 실패하였습니다.')
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
               <label>Name</label>
               <input type="text" value={Name} onChange={onNameHandler} />
               <label>Password</label>
               <input type="password" value={Password} onChange={onPasswordHandler} />
               <label>ConfirmPassword</label>
               <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
               <br />
               <button>
                   Register
               </button>
           </form>
        </div>
    )
}

export default RegisterPage