const RandomGenImage = (props) => {
    return(
        <div className="RandomGenImage" style={props.style} id={props.id}>
            {props.children}
            <button>See more like this</button>
        </div>
    )
}

export default RandomGenImage