import { lazy, Suspense, useState } from "react"
import useSetTitle from "../../../hooks/useSetTitle"
import config from "../../../utils/config"
import PopupPage from "../../Popups/PopupPage"
import Loading from "../../Loading"
import styles from "./Terms.module.css"
const TermTextMobApp = lazy(() => import('./TermTextMobApp'));
const TermTextSite = lazy(() => import('./TermTextSite'));

const Terms = () => {
    const { urlSite, address, nameCompany, vk, organization } = config;
    useSetTitle('Пользовательское соглашение');
    const [isMobApp, setIsMobApp] = useState(false);

    return (
        <PopupPage title={`Пользовательское соглашение - ${nameCompany}`} navigateOnClose="/">
            <button onClick={(() => setIsMobApp(!isMobApp))} className={styles.button}>показать соглашение для {isMobApp ? 'сайта' : 'мобильного приложения'}</button>
            <Suspense fallback={<Loading />}>
                <div style={{ textAlign: 'left' }}>
                    {isMobApp
                        ? (<TermTextMobApp address={address} nameCompany={nameCompany} vk={vk} organization={organization} />)
                        : (<TermTextSite urlSite={urlSite} address={address} nameCompany={nameCompany} vk={vk} organization={organization} />)
                    }
                </div>
            </Suspense>
        </PopupPage >
    )
}
export default Terms