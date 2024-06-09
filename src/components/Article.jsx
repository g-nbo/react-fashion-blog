
function Article(props) {
    return (
        <article>
            <h5>{props.date}</h5>
            <h2>{props.title}</h2>
            <img src={props.image} alt="picture 1" />
            <p>{props.content}</p>
            <a href="#">Continue...</a>
            

        </article>
    )
}

export default Article