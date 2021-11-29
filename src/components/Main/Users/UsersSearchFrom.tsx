import {Field, Form, Formik} from "formik";
import React from "react";
import {FilterSearchUsersType} from "../../../Redux/users-reducer";
import s from './UsersSearchFrom.module.scss'

type UsersSearchFormType = {
    filter: FilterSearchUsersType
    onFilterChanged: (filter: FilterSearchUsersType) => void
}

export const userSearchValidateForm = (values:any) => {
    const errors = {};
    return errors;
}
type FormType = {
    term:string,
    friend: 'true' | 'false' | 'null'
}
type OptionType = {
    key:string,
    value:string
}
export const UsersSearchForm: React.FC<UsersSearchFormType> = React.memo((props) => {
    const {onFilterChanged} = props;

    const dropdownOptions: Array<OptionType> = [
        {key: 'All', value: 'null'},
        {key: 'followed', value: 'true'},
        {key: 'unfollowed', value: 'false'},
    ]

    const submit =(values:FilterSearchUsersType | FormType, {setSubmitting}:{setSubmitting:(isSubmitting: boolean) => void}) => {

        //преобразуем типы, т.к. friend нам приходят string, а нужен boolean, а ts не ругается
        const filter: FilterSearchUsersType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true'
        }
        setSubmitting(false);
        onFilterChanged(filter);
    }
    return (
        <div>
            <Formik
                initialValues={{ term: '', friend: 'null'}}
                validate={userSearchValidateForm}
                onSubmit={submit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field className={s.input} type="text" name="term"  />
                        {/*// Renders an HTML <select>*/}
                        <Field className={s.select} name="friend" as="select">
                            {
                                dropdownOptions.map(option => (
                                    <option
                                        key={option.key}
                                        value={option.value}
                                    >
                                        {option.key}
                                    </option>
                                ))
                            }
                        </Field>
                        <button className={s.button} type="submit" disabled={isSubmitting}>
                            Search
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
})