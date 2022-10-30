import style from '../Styling/style.css'
import {Navigate, Link} from 'react-router-dom'
function Footer(){
    return(
        <div className="footer">
            <ul>
            <span><Link to="/Contact">Contact</Link></span>
            <span><Link to="/About">About</Link></span>
            </ul>
            
        </div>
    )
}
export default Footer;