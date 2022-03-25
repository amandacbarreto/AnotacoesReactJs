import Item from "./Item"

function List () {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamentpo={1985} />
                <Item marca="Mercedes" ano_lancamentpo={1979} />
                <Item ano_lancamentpo={1979} />
                <Item/>
            </ul>
        </>
    )
}

export default List