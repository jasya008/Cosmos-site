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


export const Register = () => {
    const { user, setUser } = GetContext()
    const navigate = useNavigate()

    const USER_URL = "http://localhost:4000/users/register"
    const registerSchema = object({
        name: string()
            .nonempty("You must write something")
            .min(2, "Minimum 3 symbols")
            .max(32, "Maximum 32 symbols"),
        email: string()
            .nonempty("You must write email")
            .email("Write validate email"),
        password: string()
            .nonempty("You must write password")
            .min(2, "Minimum 3 symbols")
            .max(32, "Maximum 32 symbols"),
        passwordConfirm: string().nonempty("You must write something"),
    }).refine((data) => data.password === data.passwordConfirm, {
        path: ["passwordConfirm"],
        message: "Passwords distinguish",
    });
    const methods = useForm({
        resolver: zodResolver(registerSchema),
    })

    const { handleSubmit, reset } = methods

    const onRegisterSubmit = async (newUser) => {
        try {
            const { passwordConfirm, ...rest } = newUser;
            const { data } = await axios.post(USER_URL, rest);

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
        <div className={s.registr}>
            <Container fixed>
                <div className={s.auth_content}>
                    <h2 className={s.text}>Registration</h2>

                    <FormProvider {...methods}>
                        <form className={s.auth_form} >
                            <InputTextfield
                                className={s.input}
                                name="name"
                                label="Name"
                                size="small"
                                margin="dense"
                            />
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
                            <InputTextfield
                                className={s.input}
                                name="passwordConfirm"
                                label="Password"
                                size="small"
                                margin="dense"
                                type="password"
                                sx={{ marginBottom: 2 }}
                            />
                            <Button onClick={handleSubmit(onRegisterSubmit)}
                                className={s.btn}
                                variant="contained"
                                type="submit"
                                sx={{ marginBottom: 1 }}
                            >
                                Create account
                            </Button>
                            <p className={s.login_text}>Do you have account? <Link className={s.login} to="/login"> Login</Link></p>
                            
                        </form>
                    </FormProvider>
                </div>
            </Container>
        </div>

    )
}


