'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Register = () => {

  const router = useRouter()

  const [newUser, setNewUser] = useState(
    {
      name: '',
      email: '',
      password: ''
    }
  )

  const handleNewUser = (e) => {
    const {name, value} = e.target

    setNewUser({
      ...newUser,
      [name] : value
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
      const res = await axios.post('api/auth/register', newUser)

      if(res.data.error){
        alert(errorData.error)
      }else{
        setNewUser({
          name: '',
          email: '',
          password: '',
        })
        router.push('/')
      }
    }catch(e){
      console.log(e)
    }
  
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="name"
        placeholder="Ingresa tu nombre"
        name='name'
        value={newUser.name}
        onChange={handleNewUser}
        required
      />
      <input
        type="email"
        name='email'
        placeholder="Ingrese tu correo electrónico"
        value={newUser.email}
        onChange={handleNewUser}
        required
      />
      <input
        type="password"
        name='password'
        placeholder="Crea una contraseña"
        value={newUser.password}
        onChange={handleNewUser}
        required
      />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default Register;
