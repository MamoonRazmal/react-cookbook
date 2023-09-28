import "./Gallery.css";
export default function Gallery(){
    return (<>
     <nav className="navbar">
        <div aria-labelledby="navigation-menu">
            <ul className="navbar__navigation">
               
                <li>
                    <a href="#">Healthy Recipes</a>
                </li>
                <li>
                    <a href="#">Regional</a>
                </li>
                <li>
                    <a href="#" target="_blank">Festival</a>
                </li>
                <li>
                    <a href="#" target="_blank">For kids</a>
                </li>
            </ul>
        </div>
        {/* <div className="navbar__social-media">
            <ul className="navbar__links">
                <i className="fab fa-twitter "><a aria-label="twitter" href="#"></a></i>
                <i className="fab fa-linkedin"><a aria-label="linkedin" href="#"></a></i>
                <i className="fab fa-github"><a aria-label="github" href="#"></a></i>
            </ul>
        </div> */}
    </nav>
 
    {/* <header className="title">
        <h1>Good Stuff Foods</h1>
   </header> */}


    <section className="container">
       
        <div className="one">
            {/* <img src="" alt="First description" /> */}
            <span className="description">Sandwich</span>
        </div>
        <div className="two">
            {/* <img src="" alt="Second description"/> */}
            <span className="description">French Toast</span>
        </div>
        <div className="three">
            {/* <img src="" alt="Third description"/> */}
            <span className="description">Salad
            </span>
        </div>
        <div className="four">
            {/* <img src="" alt="Fourth description"/> */}
            <span className="description">Soup</span>
        </div>
        <div className="five">
            {/* <img src="x" alt="Fifth description"/> */}
            <span className="description">Pizza</span>
        </div>
        <div className="six">
            {/* <img src="" alt="Sixth description"/> */}
            <span className="description">Protien Bowl</span>
        </div>
        <div className="seven">
            {/* <img src="" alt="Seventh description"/> */}
            <span className="description"></span>
        </div>
        <div className="eight">
            {/* <img src="" alt="Eighth description"/> */}
            <span className="description">Meat balls</span>
        </div>
        <div className="nine">
            {/* <img src="" alt="Ninth description"/> */}
            <span className="description">Ninth description</span>
        </div>
        <div className="ten">
            {/* <img src="" alt="Tenth description"/> */}
            <span className="description">Salad</span>
        </div>
       
    </section>
    </>);
}