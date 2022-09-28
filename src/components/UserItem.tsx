import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser
    onClick: (user: IUser) => void
}

const UserItem:FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div className='user-item' onClick={() => onClick(user)} >
            {user.id}. {user.name} проживает в городе {user.address.city}
        </div>
    );
};

export default UserItem;