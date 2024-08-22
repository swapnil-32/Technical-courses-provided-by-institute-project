import { useAuth } from "../store/auth"
export const About=()=>{
    const {user}=useAuth();
    return <>
    <section className="uppersection">
        <div className="upper_container">
            <div className="content">
                <p>Welcome, <b style={{fontSize:30}}>{user.username}</b> to our website</p>
                {/* <p>Welcome, {{user}?`${user.username}`:`to our website` }</p> */}
                {/* <p>welcome to swapnil tech</p> */}
                <h1>why choose us</h1>
                <p>Learn from the best in the field. Our instructors are industry experts with years of experience and a passion for teaching.</p>
                <p> Our campus is equipped with the latest technology and tools to provide you with the best learning environment.</p>
                <p>Stay ahead of the curve with our industry-aligned courses designed to meet the demands of the modern tech world. From software development to cybersecurity, we cover it all.</p>
            </div>
            <div className="btncontainer">
                <a href=""><button className="btn">contact now</button></a>
                <a href="http://www.viit.ac.in" target="blank"><button className="btn secondbtn">learn more</button></a>
            </div>
        </div>
        <div className="imagecontainer">
            <img src="/images/viit.png" alt=""/>
        </div>
    </section>
    <section className="midsection">
        <div className="container grid grid-four-column">
                <div className="div1">
                    <h2>50+</h2>
                    <p>registered companies</p>
                </div>
                <div className="div1">
                    <h2>1000</h2>
                    <p>happy clients</p>
                </div>
                <div className="div1">
                    <h2>500+</h2>
                    <p>wel known developers</p>
                </div>
                <div className="div1">
                    <h2>24/7</h2>
                    <p>service</p>
                </div>
        </div>
    </section>
    </>
}
// export default About;