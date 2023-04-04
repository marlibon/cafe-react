import buttonCloseImg from '../../images/button-close.svg'
import { useNavigate } from 'react-router-dom'

const CloseButton = ({ navigateOnClose }) => {
    const navigate = useNavigate();
    function handleClick () {
        navigate(navigateOnClose)
    }
    return (
        <button className="popup__close" onClick={handleClick} ></button>
    )
}

export default CloseButton