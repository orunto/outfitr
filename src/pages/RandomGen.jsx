import Copyright from '../images/copyright.svg'
import Logo from '../images/outfitr-logo.svg'
import Search from '../images/Search.svg'
import goback from '../images/goback.svg'
import randomgen from '../images/randomgen.svg'
import '../css/result.css'
import {RandomGenImage, SearchBar} from '../components'

const RandomGen = () =>{
    return(
        <div className="Result">
            <div className='ResultContent'>
                <div className="Header">
                    <img className='Logo' src={Logo} />
                    <img className='Search' src={Search} />
                </div>

                <div className='RandomGenContent'>
                    <div className='RandomGenFunction'>
                        <RandomGenImage/>
                        <div className='RandomGenOptions'>
                            <button id='goback'><img src={goback} alt='go back button'/></button>
                            <button id='randomgen'><img src={randomgen} alt='random generate button'/></button>
                        </div>
                    </div>

                    <div className='RandomGenSearch'>
                        <p>Can’t find what you’re looking for?</p>
                        <SearchBar/>
                    </div>


                </div>

            </div>

            <span><img src={Copyright} alt='copyright icon'/>Softdrobe Inc. 2023</span>

        </div>
    )
}

export default RandomGen