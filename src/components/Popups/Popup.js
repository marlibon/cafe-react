import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CloseButton from './CloseButton';

const Popup = ({ name, classNameContainer, children, navigateOnClose }) => {
    const navigate = useNavigate();

    useEffect(() => {
        function handleKeyEsc (e) {
            e.key === 'Escape' && navigate(navigateOnClose);
        }
        document.addEventListener('keydown', handleKeyEsc);

        return () => document.removeEventListener('keydown', handleKeyEsc)
    }, [])

    function handleClickByOverlay (e) {
        e.currentTarget === e.target && navigate(navigateOnClose);
    }
    return (
        <section className={`popup ${name} popup_opened`} onClick={handleClickByOverlay}>
            <div className={classNameContainer}>
                <CloseButton navigateOnClose={navigateOnClose} />
                {children}
            </div>
        </section>
    )
}

export default Popup