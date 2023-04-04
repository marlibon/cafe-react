import { useEffect, useState } from "react"
import config from "../utils/config";

function useSetTitle (title) {
    const newTitle = title ? `${title} - ${config.nameCompany}` : config.nameCompany;
    document.title = newTitle;
}
export default useSetTitle;
