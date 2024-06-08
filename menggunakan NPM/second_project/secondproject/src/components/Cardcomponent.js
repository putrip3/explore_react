import '../css/style.css'
import styling from '../css/Cardprofile.module.css'
import profile from '../assets/profile.png'

const Cardprofile = () => {
    return (
        //1. inline CSS
        <div style={{
            backgroundColor: "#6BA5F2",
            width: "100vw",
            height: "100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>
        {/* 2. ccs file */}
            <div className="card">
                <img src={profile}/>
                <div className="profile">Frontend Developer</div>
                <div className='name'>Putu Putri Pratiwi</div>
                <div className='desc'>hi it's me</div>
                <button className='button'>Contact Me</button>
            </div>
        {/* 3. css module */}
            <div className="card">
                <img src={profile} style={{ border: '4px solid #efbe74' }}/>
                <div className= {styling.profile}>Frontend Developer</div>
                <div className='name'>Putu Putri Pratiwi</div>
                <div className='desc'>hi it's me</div>
                <button className={styling.button}>Contact Me</button>
            </div>
        </div>
    )
}

export default Cardprofile