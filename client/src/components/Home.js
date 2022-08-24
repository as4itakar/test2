import { useState} from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

const Home = () =>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const getAuth = async () =>{
        try {
            const response = await fetch(`http://localhost:5000/user/${username}.${password}`, {
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Origin':'*'
                }
            })
            const data = await response.json()
            if (data[0].length !== 0 ){
                setError(false)
                navigate('/profile', {state: data[0]})
            }else {
                setError(true)
            }
        }catch (e){
            console.log(e)
        }
    }

    return (
        <div className="App">
            <div className='form'>
                <div className="top">
                    <h1>Авторизация</h1>
                </div>
                <div className="bottom">
                    <div className="input-container">
                        <input className={error===true? 'inp-canceled' : 'inp'} value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Введите имя пользователя' type="text"/>
                    </div>
                </div>
                <div className="input-container">
                    <input className={error===true? 'inp-canceled' : 'inp'} value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Введите пароль' type="text"/>
                </div>
                {
                    error === true ?
                        <div className="error-container">
                            <h1>Имя или пароль были введены неверно!</h1>
                        </div>:
                        null
                }
                <div className='button-container'>
                    <button onClick={getAuth}>
                        Авторизироваться
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home
