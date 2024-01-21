import React, { useState } from "react";

export default function Form ({ AddUser }) {

    const [nameState, setNameState] = useState("");
    const [ageState, setAgeState] = useState("");
    const [phoneState, setPhoneState] = useState("");
    const [emailState, setEmailState] = useState("");
    const [cityState, setCityState] = useState("");
    const [professionState, setProfessionState] = useState("");

    // const handleSubmit = (e) => {
    //     e.preventDefault(e.target.value);
    //     setNameState("");
    //     setAgeState("");
    //     setPhoneState("");
    //     setEmailState("");
    //     setCityState("");
    //     setProfessionState("");
    //     AddUser(nameState);
    // }

    const handelSubmit = (e) => {
        e.preventDefault();
        AddUser(nameState, ageState, phoneState, emailState, cityState, professionState);
        console.log(nameState);
        }

    return (
        <>
        <h3>Додати користувача</h3>
        <form onSubmit={handelSubmit}>
            <input type="text" placeholder="ПІБ" value={nameState} required onChange={(e) => setNameState(e.target.value)}/>
            <input type="text" placeholder="Вік" value={ageState} required onChange={(e) => setAgeState(e.target.value)}/>
            <input type="text" placeholder="Номер телефону" value={phoneState} required onChange={(e) => setPhoneState(e.target.value)}/>
            <input type="text" placeholder="Електронна пошта" value={emailState} required onChange={(e) => setEmailState(e.target.value)}/>
            <input type="text" placeholder="Місто" value={cityState} required onChange={(e) => setCityState(e.target.value)}/>
            <input type="text" placeholder="Професія" value={professionState} required onChange={(e) => setProfessionState(e.target.value)}/>
            <button type="submit" value="add user">Додати</button>
        </form>
        </>
    )
}