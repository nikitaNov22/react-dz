import React  from "react";
import './ThirdDz.css';
// import UserList from './Users'
import Form from "./UserForm";
import { useState } from 'react';


export default function ThirdDz () {

    const [users, setUsers] = useState ([
        {
            id: 1,
            name: "Віктор Павлік",
            age: 34,
            phone: "+380665487821",
            email: "vitya34@gmail.com",
            city: "Київ",
            profession: "Столяр"
        },
        {
            id: 2,
            name: "Петро Щур",
            age: 48,
            phone: "+380672563719",
            email: "petro789@gmail.com",
            city: "Тернопіль",
            profession: "Співак"
        }
    ])

    const AddUser = (name, id, age, phone, email, city, profession) => {
        setUsers([...users, { name, id, age, phone, email, city, profession}])
    }

    return (
        <main>
            <div className="container">
                <h2>Список користувачів</h2>
                <div className="contentContainer">
                    <div className="usersList">
                      {/* <UserList users={users}/> */}

                      <div>
            {users.map((el) => (
                <div className="userBlock" key={el.id}>
                    <h4>{el.name}</h4>
                    <div className="userData"> 
                        <div> 
                        <ul className="userList">
                            <li className="textLi"><span>Вік:</span> {el.age};</li>
                            <li className="textLi"><span>Номер телефону:</span> {el.phone};</li>
                            <li className="textLi"><span>Електронна пошта:</span> {el.email};</li>
                        </ul>
                        </div>
                        <div>
                        <ul className="userList">
                            <li className="textLi"><span>Місто:</span> {el.city};</li>
                            <li className="textLi"><span>Професія:</span> {el.profession};</li>
                        </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>

                    </div>
                    <div className="userForm">
                       <Form AddUser={AddUser} />
                    </div>
                </div>
            </div>
        </main>
    )
}