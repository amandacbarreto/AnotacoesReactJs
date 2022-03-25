import {useState} from 'react'
function Condicional (){
    
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail(e){
        e.preventDefault()
        setUserEmail('')
    }

    return (
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <input 
                    type="email" 
                    placeholder="Digite o seu e-mail..."
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <button type="submit" onClick={enviarEmail}>
                    Enviar e-mail
                </button>
            </form>
            {userEmail && ( //rendereizacao condicional, so vai aparecer o paragrafo abaixo se o userEmail for true
                <div>       
                    <p>O e-mail do usuário é {userEmail} </p>
                    <button onClick={limparEmail}>Limpar E-mail</button>
                </div>
            )}
        </div>
    )
}

export default Condicional