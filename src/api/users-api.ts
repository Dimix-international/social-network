import axios, {AxiosResponse} from "axios";


const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '64d44fa4-b3e5-49bf-91e2-eff700cb2dbc',
    }
}
export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    ...settings
})


export type ResponseUserType = {
    name: string,
    id: number,
    uniqueUrlName: string
    photos: { small: string, large: string }
    status: string
    followed: boolean
}
type GetResponseUsersType = {
    error: null | string
    items: Array<ResponseUserType>,
    totalCount: number
}
export const usersApi = {
    getUsers(currentPage: number, pageSize: number, term: string = '', friend: null | boolean = null) {

        return instance.get<GetResponseUsersType>(
            `users?page=${currentPage}&count=${pageSize}&term=${term}${friend === null ? '' : `&friend=${friend}`}`
        )
            .then(response => response.data)
    }
}

export type AuthDataType = {
    email: string,
    id: string,
    login: string,
}
type GetAuthMeAnd_PostAndDeleteFollowMe<T = {}> = {
    data: T
    messages: string [] ,
    fieldsErrors: string [],
    resultCode: 0,
}

export const authApi = {
    getAuth() {
        return instance.get<GetAuthMeAnd_PostAndDeleteFollowMe<AuthDataType>>(
            '/auth/me'
        )
            .then(response => response.data)
    },
    signIn(email:string, password:string, rememberMe:boolean) {
        return instance.post<{email:string, password:string, rememberMe:boolean},
            AxiosResponse<GetAuthMeAnd_PostAndDeleteFollowMe<{id:number}>>>
        ('/auth/login', {
            email,
            password,
            rememberMe,
        })
    },
    signOut() {
        return instance.delete<GetAuthMeAnd_PostAndDeleteFollowMe>('/auth/login')
    }
}

export const followApi = {
    postFollow(id: string) {
        return instance.post<{ id: string }, AxiosResponse<GetAuthMeAnd_PostAndDeleteFollowMe>>(
            `/follow/${id}`, {
                id
            }
        )
    },
    deleteFollow(id: string) {
        return instance.delete<GetAuthMeAnd_PostAndDeleteFollowMe>(
            `/follow/${id}`
        )
    }
}


export type GetProfileResponseType = {
    aboutMe: string,
    contacts: {
        facebook: null | string,
        website: null | string,
        vk: null | string,
        twitter: null | string,
        instagram: null | string,
        youtube: null | string,
        github: null | string,
        mainLink: null | string,
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: null | string,
    fullName: string,
    userId: number | string,
    photos: {
        small: null | string,
        large: null | string,
    }
}
export const profileApi = {
    getProfile(id: string) {
        return instance.get<GetProfileResponseType>(
            `/profile/${id}`
        )
    },
    getStatus(userId: string) {
        return instance.get(`/profile/status/${userId}`)
    },
    setStatus(status: string) {
        return instance.put<{ status: string }, AxiosResponse<GetAuthMeAnd_PostAndDeleteFollowMe>>(`/profile/status`, {status})
    }
}

