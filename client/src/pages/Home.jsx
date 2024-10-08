export const Home = () =>{
    return <>
    <section className="uppersection">
        <div className="upper_container">
            <div className="content">
                <p>we believe in the power of technology to shape the future</p>
                <h1>welcome to Viit</h1>
                <p>Our mission is to provide world-class technical education and services that equip our students with the skills and knowledge they need to excel in the ever-evolving tech industry.</p>
            </div>
            <div className="btncontainer">
                <a href="/contact"><button className="btn">contact now</button></a>
                <a href="http://www.viit.ac.in"  target="blank"><button className="btn secondbtn">learn more</button></a>
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


    <section className="uppersection">
    <div className="imagecontainer">
            <img src="/images/last_section.jpg" alt="" height="400" width="400"/>
        </div>
        <div className="upper_container">
            <div className="content">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, sint!</p>
                <h1>welcome to my portfolio</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta libero quos inventore, amet similique vel quod, assumenda voluptate sed, modi unde cum nisi laborum est quis placeat consequuntur velit veniam.</p>
            </div>
            <div className="btncontainer">
                <a href="/contact"><button className="btn">contact now</button></a>
                <a href=""><button className="btn secondbtn">learn more</button></a>
            </div>
        </div>
    </section>
    </>
    
};
// export default Home;