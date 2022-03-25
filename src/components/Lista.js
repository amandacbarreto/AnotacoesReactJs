function Lista( {itens} ){
    return (
        <>
            <h3>Lista de coisas boas: </h3>
            { itens.length>0 ? ( //condicional ternário
                itens.map ((item, index) => ( //o ideal é usar um id fornecido pelo banco de dados do back-end, 
                                                //mas na falta dele, o proprio map tem essa propriedade index, q ja vai servir pro react nao se perder 
                    <p key={index}> {item} </p>
                ))): (
                    <p>Não há itens na lista</p>
                )
            }
        </>
    )
}

export default Lista