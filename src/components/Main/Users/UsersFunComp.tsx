import React from "react";
// import c from "./Users.module.scss";
// import {User} from "../Dialogs/Messages/User/User";
// import {SuperButton} from "../../../UniversalComponents/SuperButton/SuperButton";
// import {AddFunction} from "../Dialogs/Messages/AddFunction/AddFunction";
// import {UsersFindPropsType} from "./UsersContainer";
// import {v1} from "uuid";
// import axios from "axios";
// import userDefaultImage from '../../../assets/images/smile.png'
//
//
// type ResponseUserType = {
//     name: string,
//     id: number,
//     uniqueUrlName: string
//     photos: { small: string, large: string }
//     status: string
//     followed: boolean
// }
// type GetResponseType = {
//     error: null | string
//     items: Array<ResponseUserType>,
//     totalCount: number
// }
// const transformResponseUsers = (data: Array<ResponseUserType>) => {
//     return data.map(u => {
//         return {
//             id: String(u.id),
//             name: u.name,
//             avatar: u.photos.small ? u.photos.small : userDefaultImage,
//             country: 'Russia',
//             city: 'North Barvicha',
//             status: u.status ? u.status : 'Ой, напишу в другой раз)',
//             followed: u.followed,
//         }
//     })
// }
//
//
// export const UsersFunComp: React.FC<UsersFindPropsType> = (props) => {
//     const {
//         users,
//         toggleFollowAC,
//         setUsersAC,
//     } = props;
//     const showMoreUsers = () => {
//         if (users.length === 0) {
//             axios.get<GetResponseType>('https://social-network.samuraijs.com/api/1.0/users')
//                 .then(response => {
//                     return transformResponseUsers(response.data.items)
//                 })
//                 .then(data => {
//                     setUsersAC(data)
//                 })
//             //      setUsersAC([
//             //     {
//             //         id: v1(),
//             //         name: 'Владимир Яковлев',
//             //         avatar: 'https://img-s3.onedio.com/id-5c20af94b07a82b914743bde/rev-0/raw/s-ed9cc87caae43d01ce0bdea61c447485ac03a392.jpg',
//             //         country: 'Russia',
//             //         city: 'North Barvicha',
//             //         status: 'Измаьлов демон!',
//             //         followed: false,
//             //     },
//             //     {
//             //         id: v1(),
//             //         name: 'Сергей Бодров',
//             //         avatar: 'https://krestyanka.com/wp-content/uploads/2018/10/Sergej-Bodrov-biografiya-lichnaya-zhizn-semya-zhena-deti-foto-1.jpg',
//             //         country: 'Russia',
//             //         city: 'Москва',
//             //         status: ' В чем сила, брат? Сила в правде!',
//             //         followed: true,
//             //     },
//             //     {
//             //         id: v1(),
//             //         name: 'Иван Будько',
//             //         avatar: 'https://avatars.mds.yandex.net/get-zen_doc/1329105/pub_5cdd32b5c13e3f00b481aec7_5cdd3fecc4964500b2b0d138/scale_1200',
//             //         country: 'Russia',
//             //         city: 'Кучугуры',
//             //         status: 'все в Кучугры!',
//             //         followed: true,
//             //     },
//             // ])
//         }
//     }
//     return (
//         <div className={c.container}>
//             <div className={c.users}>
//                 <div>
//                     {users.map(u => {
//                         return (
//                             <User
//                                 key={u.id}
//                                 trigger={'users'}
//                                 id={u.id}
//                                 name={u.name}
//                                 avatar={u.avatar}
//                                 status={u.status}
//                                 followed={u.followed}
//                                 country={u.country}
//                                 toggleFollowACForFindUsers={toggleFollowAC}
//                             />
//                         )
//                     })}
//                 </div>
//                 <SuperButton
//                     name={'show more'}
//                     callback={showMoreUsers}
//                     addClass={c.center}
//                 />
//             </div>
//             <AddFunction/>
//         </div>
//     )
// }