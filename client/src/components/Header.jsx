import './components.css'
import { useDispatch } from 'react-redux'
import { logOut } from '../redux/authSlice'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
    const dispatch = useDispatch()
    const nav = useNavigate()
    return (<>
        <div className='header_bg'>
            <div>
                logo
            </div>
            <ul className='header_ul' type="none">
                <li onClick={()=>{
                    nav('/')
                }}>Мои команды</li>
                <li onClick={()=>{
                    nav('/workspace')
                }}>Рабочее пространство</li>

            </ul>
            <div className='mini_profile'> 
                <img className='mini_avatar' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png' onClick={()=>{nav('/profile')}}/>
                <button className='exit_button' onClick={() => {
                dispatch(logOut())
            }}>Выйти</button>
            </div>
        </div>
    </>)
}
export default Header