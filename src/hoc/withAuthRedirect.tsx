import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {RootReducerType} from "../Redux/redux-store";
import {connect} from "react-redux";


type MapStateToPropsForRedirect = {
    isAuth: boolean
}
const mapStateToPropsForRedirect = ({auth}: RootReducerType): MapStateToPropsForRedirect => {
    return {
        isAuth: auth.isAuth
    }
}
export function withAuthRedirect <T>(Component: ComponentType<T>){

    const RedirectComponent = (props: MapStateToPropsForRedirect) => {

        //отделим isAuth,чтобы не передавать его в Component
        let {isAuth, ...restProps} = props;

        if (!isAuth) {
            return <Redirect to={'/login'}/>
        }

        return <Component {...restProps as T}/>

    }
    return  connect(mapStateToPropsForRedirect)(RedirectComponent)
}