import buttonCloseImg from '../../images/button-close.svg'
import { useNavigate } from 'react-router-dom'

const CloseButton = () => {
    const navigate = useNavigate();
    function handleClick () {
        navigate(`/`, { replace: true })
    }
    return (
        <img
            src={buttonCloseImg}
            alt="кнопка закрытия"
            className="popup__close"
            onClick={handleClick}
        />
    )
}

export default CloseButton