import {useState} from 'react';
import styled from 'styled-components'
import SignIn from './SignIn/signIn';
import SignUp from './SignUp/signUp';

export const AuthPage = () =>{

    const [sign, setSign] = useState(true)

    return (
    
        <Container>
            <Auth>
            {sign?<SignIn setSign={setSign} />:<SignUp setSign={setSign}/>}
            </Auth>
        </Container>
        
    )


}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-image: url('https://i.imgur.com/zVZgaDH.png');
    background-size: cover;
    background-clip: border-box;
    justify-content: center;
    align-items: center;
    


`
const Auth = styled.div`
    padding: 10px;
    background-color: rgba(255,255,255,0.9);
    border-radius: 30px;
    box-shadow: 0px 8px 8px rgba(0,0,0,0.71);
`
