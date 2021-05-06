import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderModel } from '../../../../../models';
import '../scss/header.scss';

const headerBtns = (headers: HeaderModel[]) => {
    return <p>
                {headers.map((c: HeaderModel) => {
                    return <Link to={c.path}>
                                {c.value}
                            </Link>
                })}
            </p>
}

type HeaderProps = {
    headers: HeaderModel[],
}

export default function HeaderPc({headers}: HeaderProps) {
    return (
        <>
            {headerBtns(headers)}
        </>
    )
}