import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"

export default function Categories() {
    let params = useParams()
    let {t} = useTranslation()
    console.log(params)

    return (
        <div>
            <h2>{t('categories')}</h2>
            <div>{params.cat}</div>
        </div>
    )
}
