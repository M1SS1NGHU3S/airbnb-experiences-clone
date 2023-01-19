import heroImg from "../img/hero-img.png";

function Hero() {
    return (
        <div id="hero">
            <img id="hero--img" src={heroImg} alt="multiple experiences" />
            
            <div id="hero--content">
                <h1 id="hero--title">Online Experiences</h1>
                <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}

export default Hero;