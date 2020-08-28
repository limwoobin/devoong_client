import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';


const renderAvatar = (imgPath: string) => {
    return imgPath === undefined
        ? <Avatar src="/broken-image.jpg" />
        : <Avatar src={imgPath} />
}; 

const UserAvatar = (props: any) => {
    const imgPath = props.imgPath;

    return (
        <>
            {renderAvatar(imgPath)}
        </>
    )
}

export default UserAvatar;