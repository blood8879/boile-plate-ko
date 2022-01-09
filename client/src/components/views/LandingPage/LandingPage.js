import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';


function LandingPage() {
    let navigate = useNavigate();

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => { console.log(response)})
    })

    const onClickHandler = () => {
        axios.get(`/api/users/logout`)
            .then(response => {
                if(response.data.success) {
                    navigate('/login')
                } else {
                    alert('로그아웃에 실패하였습니다.')
                }
            })
    }
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <h2>시작 페이지</h2>

            <Button onClick={onClickHandler}>
                로그아웃
            </Button>
        </div>
    )
}

export default LandingPage