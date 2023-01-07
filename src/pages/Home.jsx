import Logo from '../images/outfitr-logo.svg'
import { ReactComponent as Copyright } from "../images/copyright.svg";
import '../css/home.css'
import {Button, SearchBar} from '../components'




const Home = () =>{
    return(
        <div className="Home">
            <div className="HomeContents">
                <div className='Intro'>
                    <img src={Logo} alt='Outfitr Logo'/>
                    <h2>“What to wear” for men</h2>
                </div>

                <div className='Options'>
                    <SearchBar/>
                    <h2 >OR</h2>
                    <Button >Random Outfit Idea</Button>
                </div>

                <p>To improve your experience and personalization of outfit suggestions, Outfitr may store cookies on your device. By using Outfitr, you agree to this term of usage.</p>
            </div>
            <span><Copyright/>Softdrobe Inc. 2023</span>

        </div>
    )
}

export default Home