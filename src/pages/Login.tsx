// src/pages/Login.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type FormData = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const navigate = useNavigate();

  // Datos estáticos para simulación de autenticación
  const mockEmail = "usuario@kodigo.com";
  const mockPassword = "123456";

  const onSubmit = (data: FormData) => {
    // Simulación de autenticación
    if (data.email === mockEmail && data.password === mockPassword) {
      alert("Login exitoso");

      // Redirige a la ruta de exploración (o a la ruta deseada) después del login
      navigate("/explore");
    } else {
      alert("Correo o contraseña incorrectos");
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Correo Electrónico:</label>
          <input
            {...register('email', {
              required: 'El correo es obligatorio',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Correo no válido'
              }
            })}
            type="email"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        
        <div>
          <label>Contraseña:</label>
          <input
            {...register('password', {
              required: 'La contraseña es obligatoria',
              minLength: {
                value: 6,
                message: 'La contraseña debe tener al menos 6 caracteres'
              }
            })}
            type="password"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
