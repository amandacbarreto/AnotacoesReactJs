import {useState} from 'react'

function Form (){

    function cadastrarUsuario(e){ //e ou event
        e.preventDefault() //mantem a requisição na tela
        console.log(name)
        console.log("Cadastrou o usuário")
    }

    const [name, setName] = useState('indefinido') //setar o valor 'Indefinido' como default

    return (
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" id="name" name="name" placeholder="Digite o seu nome" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="text" id="password" name="password" placeholder="Digite a sua senha"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}
export default Form