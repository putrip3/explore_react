import { useState } from "react";

const Object = () => {
    let [mtr, setMtr] = useState(
        {
            //properti
            merek: "HONDA",
            jenis: "ADV 160",
            warna: "Merah",
            bensin: 20,
            harga: 30000000,
            plat: "DK7564UH",
            status: "OFF",

            //method
            nyalakan: () => {
                console.log('nyalakan mesin');
                setMtr(data => {
                    return {
                        ...data,
                        status: "ON",
                        bensin: data.bensin - 5,
                    }
                });
                console.log(mtr.status);
            },

            matikan: () => {
                console.log("matikan mesin");
                setMtr(data =>{
                    return{
                        ...data,
                        status:'OFF',
                    }
                })
            },

            isibensin: () => {
                console.log("isi mesin");
                setMtr(data =>{
                    return{
                        ...data,
                        bensin: data.bensin + 1,
                    }
                })
            }
        }
    );
    const Motor = {
        //properti
        merek: "HONDA",
        jenis: "ADV 160",
        warna: "Merah",
        bensin: 20,
        harga: 30000000,
        plat: "DK7564UH",
        status: "OFF",

        //method
        nyalakan: () => {
            console.log('nyalakan mesin');
            setMtr(data => {
                return {
                    ...data,
                    status: "ON",
                }
            });
            console.log(mtr.status);
            // Motor.status = "ON"
            //console.log(Motor.status);
        }

    }
    return (
        <div>
            <ul>
                <h1>Motor</h1>
                <li> Merek       : {mtr.merek}</li>
                <li> Tipe        : {mtr.jenis}</li>
                <li> Warna       : {mtr.warna}</li>
                <li> Bahan bakar : {mtr.bensin} L</li>
                <li> Harga       : {mtr.harga}</li>
                <li> Plat        : {mtr.plat}</li>
                <li> Status      : {mtr.status}</li>
            </ul>
            <button onClick={() => mtr.nyalakan()}>Nyalakan Mesin</button>
            <button onClick={() => mtr.matikan()}>Matikan Mesin</button>
            <button onClick={() => mtr.isibensin()}>Isi Mesin</button>
        </div>
    )
}

export default Object;