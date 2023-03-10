import Copyright from '../images/copyright.svg'
import Logo from '../images/outfitr-logo.svg'
import Search from '../images/Search.svg'
import '../css/result.css'
import { SearchResultImage } from '../components'

const SearchResult = () =>{
    return(
        <div className="Result">
            <div className='ResultContent'>
                <div className="Header">
                    <img className='Logo' src={Logo} alt='Outfitr Logo'/>
                    <img className='Search' src={Search} alt='Search Icon'/>
                </div>

                <div className='SearchResultContentContainer'>
                    <div className='SearchResultContent'>
                        <SearchResultImage/>
                        <SearchResultImage/>
                        <SearchResultImage/>
                        <SearchResultImage/>
                        <SearchResultImage/>
                        <SearchResultImage/>
                        <SearchResultImage/>
                    </div>
                </div>

                <p>Scroll for more</p>
            </div>

            <span><img src={Copyright} alt='copyright icon'/>Softdrobe Inc. 2023</span>

        </div>
    )
}

export default SearchResult