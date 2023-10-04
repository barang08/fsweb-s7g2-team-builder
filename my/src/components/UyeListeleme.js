import React from "react";

function UyeListesiListele(props) {

    return (
        <>
            <h3>Üyelerimiz</h3>



            <ul>
                {props.UyeListelemePrp.map((e) => {
                    return (
                        <li >
                            <a href="#">{e.isim}</a>,({e.rol})
                        </li>
                    );
                })}


            </ul>










        </>
    )


}

export default UyeListesiListele