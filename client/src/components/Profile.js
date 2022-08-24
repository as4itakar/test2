import './Profile.css'
import {useLocation} from "react-router-dom";

const Profile = () =>{
    const location = useLocation()
    console.log(location.state[0].username)

    return(
        <div className='Main'>
            <div className='form'>
                <div className="top">
                    <h1>Профиль</h1>
                </div>
                <div className="bottom">
                    <p className='info'>Имя: {location.state[0].username}</p>
                    <p className='info'>Пароль: {location.state[0].password}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile
