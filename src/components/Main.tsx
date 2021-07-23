import React from 'react';

export const Main = () => {
    return(
        <main className="main">
            <aside className="sidebar">
                <nav className="sidebar__menu">
                    <ul className="sidebar__list">
                        <li>
                            <a href="#" className="sidebar__link">Profile</a>
                        </li>
                        <li>
                            <a href="#" className="sidebar__link">Messages</a>
                        </li>
                        <li>
                            <a href="#" className="sidebar__link">News</a>
                        </li>
                        <li>
                            <a href="#" className="sidebar__link">Music</a>
                        </li>
                    </ul>
                </nav>
                <a href={'#'} className="sidebar__settings">
                    Settings
                </a>
            </aside>
            <section className="profile">
                <div className="profile__image">
                    <img src="https://sun9-23.userapi.com/c604426/v604426369/4dbd3/UlcprL3wwZ0.jpg" alt=""/>
                </div>
                <div className="profile__info info">
                    <div className="info__row">
                        <div className="info__avatar">
                            <img src="https://cdnimg.rg.ru/i/gallery/87d52c68/1_9894c58c.jpg" alt=""/>
                        </div>
                        <div className="info__body">
                            <div className="info__name">
                                Dima Melnikov
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile__posts posts">
                    <div className="posts__title">
                        My posts
                    </div>
                    <div className="posts__new">
                        new posts
                    </div>
                    <div className="posts__list">
                        <div className="posts__item">
                            post 1
                        </div>
                        <div className="posts__item">
                            post 2
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}