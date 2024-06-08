import Hero from "./Hero";
import Cardjurusan from "./Cardjurusan";
import Cardkegiatan from "./Cardkegiatan";
import jurusan1 from "./../assets/jurusan1.jpg"
import jurusan2 from "./../assets/jurusan2.jpg"
import jurusan3 from "./../assets/jurusan3.jpg"
import kegiatan1 from "./../assets/kegiatan1.jpg"
import kegiatan2 from "./../assets/kegiatan2.jpg"
import kegiatan3 from "./../assets/kegiatan3.jpg"

const Maincontent = () => {
    return (
        <div>
            <Hero />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center my-5">
                        <h1>Jurusan sekolah</h1>
                    </div>
                    <div className="col-lg-4 col-12">
                        <Cardjurusan image={jurusan1} jurusan="TKJ" />
                    </div>
                    <div className="col-lg-4 col-12">
                        <Cardjurusan image={jurusan2} jurusan="Akuntansi" />
                    </div>
                    <div className="col-lg-4 col-12">
                        <Cardjurusan image={jurusan3} jurusan="Bahasa" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Kegiatan</h1>
                    </div>
                    <div className="col-12 my-3">
                        <Cardkegiatan image={kegiatan1} description="kegiatan belajar mengajar"/>
                    </div>
                    <div className="col-12 my-3">
                        <Cardkegiatan image={kegiatan2} description="kegiatan olahraga"/>
                    </div>
                    <div className="col-12 my-3">
                        <Cardkegiatan image={kegiatan3} description="kegiatan pramuka"/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Maincontent;