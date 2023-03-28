import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Popup = ({ name, children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        function handleKeyEsc (e) {
            e.key === 'Escape' && navigate('/', { replace: false });
        }
        document.addEventListener('keydown', handleKeyEsc);

        return () => document.removeEventListener('keydown', handleKeyEsc)
    }, [])

    function handleClickByOverlay (e) {
        e.currentTarget === e.target && navigate('/', { replace: false });
    }
    return (
        <section className={`popup ${name} popup_opened`} onClick={handleClickByOverlay}>
            {children}
        </section>
    )
}

export default Popup