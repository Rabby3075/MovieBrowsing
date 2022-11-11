import Hero from "./Hero";
const Home = () =>{
    return(
    <>
    <Hero text="Welcome to Netlify"/>
    <div className="container">
        <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
                <h1>Your Movie describer</h1>
            </div>
        </div>
    </div>
    </>
    )
}
export default Home;