import {ResponseUserType} from "../api/users-api";
import userDefaultImage from "../assets/images/smile.png";

export type FormatUserType = {
    id: string,
    name: string,
    avatar: string
    country: string
    city: string
    status: string
    followed: boolean
}
export const transformResponseUsers = (data: Array<ResponseUserType>) => {
    return data.map(u => {
        return {
            id: String(u.id),
            name: u.name,
            avatar: u.photos.small ? u.photos.small : userDefaultImage,
            country: 'Russia',
            city: 'North Barvicha',
            status: u.status ? u.status : 'Ой, напишу в другой раз)',
            followed: u.followed,
        }
    })
}