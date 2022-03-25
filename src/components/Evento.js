import Button from "./evento/Button"

function Evento() {

    function meuEvento(){
        console.log(`Ativando o primeiro evento`)
    }

    function segundoEvento(){
        console.log(`Ativando o segundo evento`)
    }

    return (
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text ="Primeiro Evento"/> 
            <Button event={segundoEvento} text ="Segundo Evento"/> 
            
        </div>
    )

    ////se colocar meuEvento(), o componente entende que já é pra executar a função e ja da o console log
    //para q o componente entenda que a funcao so deve ser realizada depois, a gente passa dessa forma 'meuEvento' sem os parenteses
}

export default Evento