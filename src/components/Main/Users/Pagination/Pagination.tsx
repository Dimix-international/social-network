import React from "react";
import c from "./Pagination.module.scss";

type PaginationType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (pageNumber: number) => void
}
export const Pagination: React.FC<PaginationType> = React.memo((props) => {

        const {totalUserCount, pageSize, currentPage, setCurrentPage} = props;

        // Math.ceil - округляем в больш сторону чтобы всех пользователей показать
        let pagesCount = Math.ceil(totalUserCount / pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className={c.select}>
                {pages.map((p, index) => {
                    return (
                        <span
                            key={p}
                            className={currentPage === p
                                ? `${c.select__item} ${c.active}`
                                : c.select__item}
                            onClick={() => setCurrentPage(p)}
                        >
                                    {p}
                                </span>
                    )
                })}
            </div>
        )
    }
)