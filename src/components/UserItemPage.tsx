import React, {useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useNavigate, useParams,} from "react-router-dom";

interface UserItemPageParams {
    id: string
}

const UserItemPage = () => {
    const [user, setUser] = useState<IUser | null>(null)
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        fetchUser()
    },[])

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
            setUser(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className="user-page">
            <button className="back-button" onClick={() => navigate("/users")}>back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                {user?.name} проживает по адресу {user?.address?.city}, {user?.address?.street}, {user?.address?.zipcode}
            </div>
            <div>Email пользователя: {user?.email}</div>
        </div>
    );
};

export default UserItemPage;