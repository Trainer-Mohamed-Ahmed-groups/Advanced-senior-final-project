import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faRightToBracket, faCartShopping, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../context/auth/Auth'

export default function SiteHeader() {
    // const setSearch = useContext(SearchContext)
    const [searchParams, setSearchParams] = useSearchParams()
    let navigate = useNavigate()

    let handleSearch = (ev) => {
        navigate('/products')
        ev.target.value !== "" ? setSearchParams({ str: ev.target.value }) : setSearchParams("")
    }
    const auth = useAuth()
    let handleLogout = () => {
        auth.logout()
    }
    return (
        <div className='tw-min-h-[50px] tw-flex tw-justify-around tw-items-center'>
            <div className="tw-flex tw-w-1/2 tw-items-center">
                {/* <input type="search" className='custom_input' onChange={(e) => setSearch.setSearch(e.target.value)} /> */}
                <input type="search" className='custom_input' onChange={handleSearch} />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div>
                <>
                    {
                        auth.user
                            ?
                            <>
                                <span>Hello {auth.user}</span>
                                <Link onClick={handleLogout} className='tw-text-gray-600 tw-text-lg'>
                                    <FontAwesomeIcon icon={faRightFromBracket} className='tw-ms-4' />
                                </Link>
                                <Link to="/cart" className='tw-text-gray-600 tw-text-lg tw-relative'>
                                    <FontAwesomeIcon icon={faCartShopping} className='tw-ms-4' />
                                    <span className='notification_icon'>5</span>
                                </Link>
                            </>
                            :
                            <Link to="/login" className='tw-text-gray-600 tw-text-lg'>
                                <FontAwesomeIcon icon={faRightToBracket} className='tw-ms-4' />
                            </Link>
                    }
                </>

            </div>
        </div>
    )
}
