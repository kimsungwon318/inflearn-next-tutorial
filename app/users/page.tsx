"use client";

import { useEffect, useState } from "react";
import { searchUsers } from "../actions/user-actions";
export default function UsersPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        searchUsers("").then((data) => setUsers(data));
    }, []);

    return (
        <div>
            <h1>Users</h1>
            {users.map((user) => (<p>{user.name}</p>))}
        </div>
    )
}