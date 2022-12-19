import Logo from '../images/outfitr-logo.svg'
import '../css/home.css'

const Home = () =>{
    return(
        <div className="Home">
            <div className="HomeContents">
                <img src={Logo} />
                <input type="text" placeholder="Search..."/>
            </div>
        </div>
    )
}

export default Home