import './App.css'
import { Header } from './Header';

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().nonempty("O campo nome é obrigatório."),
  email: z.string().email("Digite um email valido.").nonempty("O Campo email é obrigatório"),
  username: z.string().min(3, "O username deve ter pelo menos 3 caracteres")
  .max(10, "O username deve ter pelo menos 10 caracteres")
  .nonempty("O campo username é obrigatório"),
  telefone: z.string().refine((value) => /^\d{2} ?\d{9}$/.test(value), {
    message: "Digite um telefone valido no formato DD + 9 numeros."
  })
})

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  })


  function handleSave(data){
    console.log(data);
  }


  return (
    <div className="container">
      <h1>React</h1>
      <Header/>

      <form className="form" onSubmit={handleSubmit(handleSave)}>

        <input
          type="text"
          placeholder="Digite seu nome..."
          className="input"
          {...register("name", { required: true } )}
          id="name"
        />
        {errors.name && <p className="error">{errors.name.message}</p>}

        <input
          type="text"
          placeholder="Digite seu email..."
          className="input"
          {...register("email", { required: true } )}
          id="email"
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <input
          type="text"
          placeholder="Digite seu username..."
          className="input"
          {...register("username", { required: true, maxLength: 5 } )}
          id="username"
        />
        {errors.username && <p className="error">{errors.username.message}</p>}

        <input
          type="text"
          placeholder="Digite seu telefone..."
          className="input"
          {...register("telefone")}
          id="telefone"
        />
        {errors.telefone && <p className="error">{errors.telefone.message}</p>}

        <button className="button" type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default App
