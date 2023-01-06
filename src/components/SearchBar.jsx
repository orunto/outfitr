import Search from '../images/Search.svg'
import Line from '../images/Line 1.svg'

const SearchBar = () => {
    return(
        <form>
            <input type='text' placeholder='Search...'></input>
            <button>
                <img src={Line} alt='search icon'/>
                <img src={Search} alt='search icon'/>
            </button>
        </form>
    )
}

export default SearchBar