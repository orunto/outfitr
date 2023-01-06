import Copyright from '../images/copyright.svg'
import Logo from '../images/outfitr-logo.svg'
import Search from '../images/Search.svg'
import goback from '../images/goback.svg'
import randomgen from '../images/randomgen.svg'

import '../css/result.css'
import {RandomGenImage, SearchBar} from '../components'
import {useNavigate} from 'react-router-dom';

const months = ["alex-perri-At_EKm5PGE-unsplash.webp", "alireza-esmaeeli-uTJtsKLeY3E-unsplash.webp", "austin-wade-d2s8NQ6WD24-unsplash.webp", "austin-wade-iQn82USu8gs-unsplash.webp", "behrouz-sasani-6OGml3UomZw-unsplash.webp", "brandon-atchison-eexdeq3NleQ-unsplash.webp", "caique-nascimento-RM6AsjKnG3w-unsplash.webp", "clarisse-meyer-ael63kjsqsU-unsplash.webp", "clem-onojeghuo-YhgXfs80RJo-unsplash.webp", "drake-s-takes-vKnRYW-mtek-unsplash.webp", "joey-nicotra-HiqgOQaksAQ-unsplash.webp", "jonathan-borba-e0TolJMDiBs-unsplash.webp", "kenzie-kraft-9QW52RyBLao-unsplash.webp", "mahdi-bafande-6f5KtX2GGv4-unsplash.webp", "majid-akbari-6ayBY0UeZqM-unsplash.webp", "majid-akbari-Egj4Dg107kc-unsplash.webp", "maksym-tymchyk-RTAfaIDbo5I-unsplash.webp", "mohamad-khosravi--eb0moHDPBI-unsplash.webp", "mohamad-khosravi-Uw3OfKz2J-0-unsplash.webp", "nonresident-D6JVv1YnKdQ-unsplash.webp", "pexels-ajaykumar-narwade-1337477.webp", "pexels-ali-madad-sakhirani-1254502.webp", "pexels-andrea-piacquadio-716411.webp", "pexels-chloe-1043473.webp", "pexels-chloe-1043474.webp", "pexels-clem-onojeghuo-175696.webp", "pexels-dio-alif-utomo-1897886.webp", "pexels-drew-williams-3568518.webp", "pexels-edgar-serrano-1964970.webp", "pexels-hamann-la-1192609.webp", "pexels-hasib-khorami-1496647.webp", "pexels-john-ray-ebora-3724358.webp", "pexels-marlene-leppänen-1183266.webp", "pexels-mister-mister-380782.webp", "pexels-mnz-1639729.webp", "pexels-r-fera-432059.webp", "pexels-pixabay-532220.webp", "pexels-pixabay-157675.webp", "pexels-philip-boakye-1813947.webp", "pexels-omar-lópez-1192601.webp", "pexels-ola-dapo-3345882.webp", "pexels-mostafa-sannad-878358.webp", "pexels-royal-anwar-450212.webp", "pexels-terje-sollie-298863.webp", "pexels-the-lazy-artist-gallery-1321943.webp", "pexels-the-lazy-artist-gallery-1342609.webp", "pexels-yasin-gündogdu-2709563.webp", "rayul-_M6gy9oHgII-unsplash.webp"];
// const image  = "https://cdn.jsdelivr.net/gh/orunto/mycdn/outfitr/alex-perri-At_EKm5PGE-unsplash.webp"




function RandomImageGeneratorEngine (min, max) {
    let step1  = max - min + 1
    let step2 = Math.random() * step1
    let result = Math.floor(step2) + min

    return result
}

function RandomImageGenerator () {
    let index = RandomImageGeneratorEngine(0, months.length-1)
    console.log(months[index])

    localStorage.setItem('value1', `${months[index]}`)
    let str = localStorage.getItem('value1')
    console.log('Local: ' + str)
    window.location.reload()
}

// console.log(RandomImageGenerator(str))
let storedimage = localStorage.getItem('value1')

const image = "https://cdn.jsdelivr.net/gh/orunto/mycdn/outfitr/" + storedimage




const RandomGen = () =>{
    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}

    return(
        <div className="Result">
            <div className='ResultContent'>
                <div className="Header">
                    <img className='Logo' src={Logo} alt="Outfitr logo" />
                    <img className='Search' src={Search} alt='Search icon' />
                </div>

                <div className='RandomGenContent'>
                    <div className='RandomGenFunction'>
                        <RandomGenImage style={{ backgroundImage:`url(${image})` }}/>
                        <div className='RandomGenOptions'>
                            <button id='goback' onClick={goBack}><img src={goback} alt='go back button'/></button>
                            <button id='randomgen' onClick={RandomImageGenerator}><img src={randomgen} alt='random generate button'/></button>
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