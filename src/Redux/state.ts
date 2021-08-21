import {v1} from "uuid";

export type UserType = {
    id: string,
    name:string,
    avatar:string,
    text:string,
    time:string
}
export type PostPropsType = {
    id:string
    avatar: string,
    message:string
    likesCount:number
}
export type DialogPagePropsType = {
    users: Array<UserType>
}
export type ProfilePagePropsType = {
    posts: Array<PostPropsType>
}
export type StatePropsType = {
    dialogsPage: DialogPagePropsType,
    profilePage: ProfilePagePropsType
}
export let state: StatePropsType = {
    dialogsPage: {
        users: [
            {
                id: v1(),
                name:'Виктория',
                avatar:'https://sun9-66.userapi.com/impf/c849416/v849416852/3a443/xsodDNV8TOI.jpg?size=1440x2160&quality=96&sign=b9a6c8635ac2a27611c2c43e9b649f41&type=album',
                text: 'Господа, высокое качество позиционных исследований не даёт нам иного выбора, кроме определения\n' +
                    '                        стандартных подходов. В своём стремлении улучшить пользовательский опыт мы упускаем, что\n' +
                    '                        сделанные на базе интернет-аналитики выводы объединены в целые кластеры себе подобных. Приятно,\n' +
                    '                        граждане, наблюдать, как стремящиеся вытеснить традиционное производство, нанотехнологии\n' +
                    '                        ограничены исключительно образом мышления. Идейные соображения высшего порядка, а также\n' +
                    '                        разбавленное изрядной долей эмпатии, рациональное мышление играет определяющее значение для\n' +
                    '                        анализа существующих паттернов поведения. ',
                time: new Date().toLocaleTimeString()
            },
            {
                id: v1(),
                name:'Надежда',
                avatar:'https://sun9-16.userapi.com/impg/r-6qElO8ajYvMAhmGgAvxFmcpEJ7PJboimUTaw/HKyCCEICJKk.jpg?size=1986x2160&quality=96&sign=c8f187aec9ed868da888ac86635ae5c4&type=album',
                text: 'Привет привет!',
                time: new Date().toLocaleTimeString()
            }
        ],
    },
    profilePage: {
        posts: [
            {
                id: v1(),
                avatar: 'https://cdnimg.rg.ru/i/gallery/87d52c68/1_9894c58c.jpg',
                message:'Hi bro!',
                likesCount: 10
            },
            {
                id: v1(),
                avatar: 'https://www.pravmir.ru/wp-content/uploads/2015/11/maxresdefault-1.jpg',
                message:'Good day!',
                likesCount: 125
            },
        ]
    }
}