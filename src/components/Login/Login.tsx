import {ErrorMessage, Field, Form, Formik, FormikHelpers} from "formik";
import React, {useEffect} from "react";
import s from './Login.module.scss'
import * as yup from 'yup';
import {TextError} from "./TextError/TextError";
import {SuperButton} from "../../UniversalComponents/SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {logInUser} from "../../Redux/auth-reducer";
import {RootReducerType} from "../../Redux/redux-store";
import {Navigate} from "react-router-dom";

type InitialValuesType = {
    email: string,
    password: string,
    rememberMe: boolean
}
export const Login = () => {

    const initialValues: InitialValuesType = {
        email: '',
        password: '',
        rememberMe: false,
    }
    const dispatch = useDispatch();
    const isAuth = useSelector<RootReducerType, boolean>(state => state.auth.isAuth);
    const error = useSelector<RootReducerType, string | null>(state => state.auth.error);

    const validationSchema = yup.object({
        email: yup.string().required('Required'),
        password: yup.string().min(5, 'At least 5 characters').required('Required'),
    })

    const onSubmit = async (values: InitialValuesType, formikHelpers:FormikHelpers<InitialValuesType>) => {
        await dispatch(logInUser(values.email, values.password, values.rememberMe))
        formikHelpers.setSubmitting(false);
    }


    if (isAuth) {
        return <Navigate to={'/profile'} replace />
    }
    return (
        <div className={s.content}>
            <h1 className={s.title}>Please log in</h1>
            <div className={s.body}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    validateOnBlur={false}
                    validateOnMount
                >
                    {
                        formik => {

                            const setClassInput = (name:string) => {
                                // @ts-ignore
                                return formik.errors[name] &&  formik.touched[name] ? `${s.input} ${s.error}`: s.input
                            }

                            return (
                                <Form className={s.form}>
                                    <div className={s.form__item}>
                                        <label className={s.label}
                                               htmlFor="email">Email</label>
                                        <Field
                                            className={setClassInput('email')}
                                            id={'email'}
                                            name={'email'}
                                            type={'email'}
                                        />
                                        <ErrorMessage name={'email'}
                                                      component={TextError}/>
                                    </div>
                                    <div className={s.form__item}>
                                        <label className={s.label}
                                               htmlFor="password">Password</label>
                                        <Field
                                            className={setClassInput('password')}
                                            id={'password'}
                                            name={'password'}
                                            type={'password'}
                                        />
                                        <ErrorMessage name={'password'}
                                                      component={TextError}/>
                                    </div>
                                    <div
                                        className={`${s.form__item} ${s.form__item_remember}`}>
                                        <label className={s.label}
                                               htmlFor="rememberMe">Remember
                                            me</label>
                                        <Field
                                            className={s.checkbox}
                                            id={'rememberMe'}
                                            name={'rememberMe'}
                                            type={'checkbox'}
                                        />
                                        <ErrorMessage name={'rememberMe'}
                                                      component={TextError}/>
                                    </div>
                                    {error && <div className={s.errorText}>{error}</div>}
                                    <SuperButton
                                        addClass={s.btn}
                                        name={'Log in'}
                                        type={'submit'}
                                        disableParams={!formik.isValid || formik.isSubmitting}
                                    />
                                </Form>
                            )

                        }

                    }
                </Formik>
            </div>
        </div>
    )
}