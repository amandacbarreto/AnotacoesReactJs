function Saudacao ({nome}){
    function gerarSaudacao(algumNome){
        return `Olá, ${algumNome}, tudo bem?`
    }
    return( //se nome for diferente de undefined, imprime o p
        <>
            {nome && <p> {(gerarSaudacao(nome))}</p>} 
        </>
    )
}
export default Saudacao