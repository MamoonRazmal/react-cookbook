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
        <div>
            {/* <img src="https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Eleventh description"/> */}
            <span className="description">Pasta</span>
        </div>
        <div>
            {/* <img src="https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Twelfth description"/> */}
            <span className="description">Pizza</span>
        </div>
    </section>
    </>);
}