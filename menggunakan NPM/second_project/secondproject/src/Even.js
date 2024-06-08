import React from "react";

class Eventreact extends React.Component{
    constructor (){
        super();
        super.state = {
            nama : 'ariana'
        }
    }

    kirimpesan(nama){
        alert('kirim pesan kepada'+nama);
    }

    ubahtulisan(e){
        e.target.innerHTML = 'Kirim Pesan';
    }

    ubahtulisanlagi(e){
        e.target.innerHTML = 'Ubah Tulisan';
    }

    sapa(e){
        this.setState({nama: e.target.value})
    }

    render(){
        return(
            <div>
                {/* <button onClick={()=> alert('hallo dunia')}>Click Me</button> */}
                {/* <button onClick={this.kirimpesan.bind(this,' agus')}>Kirim Pesan</button>
                <button onClick={(e)=> this.kirimpesan (' ariana',e)}>Kirim Pesan</button> */}
                <button onClick={(e)=> this.kirimpesan (' ariana',e)} onMouseEnter={(e)=> this.ubahtulisan (e)} onMouseOut={(e)=> this.ubahtulisanlagi (e)}>Ubah Tulisan</button>
                <h1>Hallo : {this.state.nama} </h1>
                <input type={'text'} onChange={this.sapa.bind(this)}></input>
            </div>
        )
    }
}

export default Eventreact;