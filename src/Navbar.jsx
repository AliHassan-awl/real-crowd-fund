import { Databutton1 } from "./Button-1";
import { Databutton2 } from "./Button-2";

export const Navbar = () => {
  return (
    <>
      <div className="navv">
        <div className="nav">
          <div>
            <img className="navimg" src="logo.png" />
          </div>
          <div>
            <ul className="navlist">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Properties</a>
              </li>
              <li>
                <a href="#">How It Works</a>
              </li>
              <li>
                <a href="#">Pages</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact US</a>
              </li>
            </ul>
          </div>
          <div className="navbtn">
            <Databutton1 btntext={"LogIn"} />
            <Databutton2 btnntext={"Sign Up"} />
          </div>
        </div>
        <div className="pnav">
          <p className="fp">A Property-Backend Investments</p>
          <h1 className="fh">Don't wait to buy properties buy</h1>
          <h1 className="fh1 "> properties and wait.</h1>
          <p className="fp1">
            Grade A commercial properties with fractional ownership earn upto
            8-10% annual yield.
            <br /> Stramlined real estate investing, starting with just $5k.
          </p>
          <Databutton2 btnntext={"Explore All Properties"} />
        </div>
      </div>
    </>
  );
};
