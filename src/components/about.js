import Hero from "./hero";

const About = () => {
  return (
    <>
      <Hero text="About us!"></Hero>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              This website is currently under development. My plan is to make getting information about
              movies easy. This website is using TMDB's API to get information about movies. I am
              currently working on filters and I am looking for a good logo and name.
            </p>          
          </div>
          <div className="col-lg-8 offset-lg-2 my-5">
            <h1>MADE BY DEEPANSHU TIWARI</h1>
            <a href="https://github.com/deepanshutiwari27" rel="noreferrer" target="_blank"><h4>GIT HUB</h4></a>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
