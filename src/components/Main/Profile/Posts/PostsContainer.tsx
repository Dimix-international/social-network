import React from "react";
import {
    addPostAC,
    changeTextForNewPostAC,
    InitialProfileStateType
} from "../../../../Redux/profile-reducer";
import {Posts} from "./Posts";
import {Dispatch, Store} from "redux";
import {RootReducerType} from "../../../../Redux/redux-store";
import {connect, ConnectedProps} from "react-redux";


/*
export const PostsContainer = () => {
    /!*let state = props.store.getState().profilePage;*!/
    /!*const addNewPost = () => {
        props.store.dispatch(addPostAC())
    }
    const changeTextForNewPost = (m:string) => {
        props.store.dispatch(changeTextForNewPostAC(m))
    }*!/
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().profilePage;
                    const addNewPost = () => {
                        store.dispatch(addPostAC())
                    }
                    const changeTextForNewPost = (m: string) => {
                        store.dispatch(changeTextForNewPostAC(m))
                    }
                    return (
                        <Posts
                            posts={state.posts}
                            newPost={state.textForNewPost}
                            addPost={addNewPost}
                            changeText={changeTextForNewPost}
                        />
                    )
                }
            }

        </StoreContext.Consumer>
    )
}*/

let mapStateToProps = ({
                           profilePage: {
                               posts,
                               textForNewPost
                           }
                       }: RootReducerType) => {
    return {
        posts,
        newPost: textForNewPost
    }
}
const PostsContainer = connect(mapStateToProps, {
    addPostAC,
    changeTextForNewPostAC,
});
export type ProfilePageType = ConnectedProps<typeof PostsContainer>;
export default PostsContainer(Posts);


/*
type MapDispatchPropsType = {
    addPost:()=> void
    changeText:(text:string) => void
}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        changeText:(text:string) => {
            dispatch(changeTextForNewPostAC(text))
        }
    }
}
export type PostsPropsType = MapStateToProps & MapDispatchPropsType;
export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)*/
