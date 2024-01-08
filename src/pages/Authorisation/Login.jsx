import { Link, useNavigate } from 'react-router-dom'
import { GetContext } from '../../components/context'
import s from './index.module.scss'
import React from 'react'
import { object, string } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from 'react-hook-form'
import axios from 'axios'
import { Button, Container } from '@mui/material'
import { InputTextfield } from '../../components/Ui'
import { toast } from 'react-toastify'
import { useState } from 'react'


export const Login = () => {
  const { user, setUser } = GetContext()

  const LOGIN_URL = "http://localhost:4000/login";
  const navigate = useNavigate()
  const loginrSchema = object({
    email: string()
      .nonempty("You must write email")
      .email("Write validate email"),
    password: string()
      .nonempty("You must write password")
      .min(2, "Minimum 3 symbols")
      .max(32, "Maximum 32 symbols"),
  })
  const methods = useForm({
    resolver: zodResolver(loginrSchema),
  })

  const { handleSubmit, reset } = methods

  const onLoginSubmit = async (loginUser) => {
    try {
      const { data } = await axios.post(LOGIN_URL, loginUser);

      setUser({
        token: data.accessToken,
        ...data.user,
      });

      localStorage.setItem(
        "user",
        JSON.stringify({
          token: data.accessToken,
          ...data.user,
        })
      );

      toast.success('🦄 Successful!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      reset()
      navigate("/")

    } catch (error) {
      toast.error(error.response.data, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }
  return (
    <Container fixed>
      <div className={s.registr}>
        <div className={s.auth_content}>
          <h2 className={s.text}>Login</h2>
          <FormProvider {...methods}>
            <form className={s.auth_form} >

              <InputTextfield
                className={s.input}
                name="email"
                label="Email"
                size="small"
                margin="dense"
              />
              <InputTextfield
                className={s.input}
                name="password"
                label="Password"
                size="small"
                margin="dense"
                type="password"
              />

              <Button onClick={handleSubmit(onLoginSubmit)}
                className={s.btn}
                variant="contained"
                type="submit"
                sx={{ marginBottom: 1 }}
              >
                Login
              </Button>
              <p className={s.login_text}>Don't have account? <Link className={s.login} to="/registr"> Registration</Link></p>

            </form>
          </FormProvider>
        </div>

    </div >
    </Container>

  )
}


