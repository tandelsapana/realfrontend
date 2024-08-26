import { Link } from "react-router-dom";


const Header = () => {
    return (
       
        <div className="row bg-warning d-flex align-items-center">
            <div className="col-sm-3">
                <Link to="/" >   <img className=" w-25"  src="/imgs/logo.png" alt="logo here"/> </Link>
            </div>
            <div className="col-sm-5">
                <b>   <i> Destination For Happy Home Owners </i> </b>
            </div>
            <div className="col-sm-4">
                <Link to="/signup"> <button className="btn btn-success mr-3"> Sign Up</button> </Link>
                <Link to="/login">  <button className="btn btn-primary"> Login </button> </Link>
            </div>


        </div>
       
     );
}
 
export default Header;
