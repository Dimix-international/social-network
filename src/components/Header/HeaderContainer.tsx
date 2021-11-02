import React from 'react';
import {Header} from "./Header";
import {setUserAuth} from "../../Redux/auth-reducer";
import {RootReducerType} from "../../Redux/redux-store";
import {connect, ConnectedProps} from "react-redux";


class HeaderAPIComponent extends React.Component<HeaderAuthPropsType> {

    componentDidMount() {
        this.props.setUserAuth();
    }

    render() {
        return (
            <Header
                {...this.props}
            />
        )
    }
}

const MapStateToProps = ({auth}: RootReducerType) => {
    return {
        login: auth.login,
        isAuth: auth.isAuth,
    }
}
const HeaderContainer = connect(MapStateToProps, {
    setUserAuth,
});
export type HeaderAuthPropsType = ConnectedProps<typeof HeaderContainer>
export default HeaderContainer(HeaderAPIComponent)


