import React, { useState } from "react";


function UyeFormu(props) {

    const [formData, setFormData] = useState({
        isim: "",
        email: "",
        rol: "",
    })
    const changeHandler = (e) => {
        const newFormData = { ...formData, [e.target.name]: e.target.value }
        setFormData(newFormData)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        props.UyeEklemePrp(e)
    }



    return (
        <>
            <form onSubmit={submitHandler}>
                <label>
                    İsim
                    <input value={formData.isim} name="isim" onChange={(e) => changeHandler(e)} />
                </label>
                <label>
                    E-mail
                    <input value={formData.email} name="email" onChange={(e) => changeHandler(e)} />
                </label>
                <label>
                    Rol
                    <input value={formData.rol} name="rol" onChange={(e) => changeHandler(e)} />
                </label>
                <button type="submit">Ekle</button>
            </form>
        </>
    )
}

export default UyeFormu