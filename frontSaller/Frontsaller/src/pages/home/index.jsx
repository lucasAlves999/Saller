import './style.css'

function Home() {

  {/*const users é usada para buscar os dados do servidor, cadastro*/ }

  const users = {
    id: '123',
    name: 'joao',
    age: 33,
    email: 'joao@email.com'

  }
  return (

    <div className='conteiner'>
      <form>
        <h1>Cadastro de usuario</h1>
        <input placeholder='name' name='nome' type='text'></input>
        <input placeholder='idade' name='idade' type='number'></input>
        <input placeholder='email' name='email' type='email'></input>
        <button type='button'>Cadastrar</button>
      </form>
    </div>

  )
}

export default Home
