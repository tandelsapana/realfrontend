import { useState } from "react";


const SignUp = () => {


    let [frmObj,setFrmObj] = useState({"name":"","email":"","password":"","phone":""});


    let changeHandler = (e) => {
    //    setFrmName(e.target.value);
        setFrmObj({...frmObj,[e.target.name]:e.target.value});
        console.log(frmObj);
        //send the details to middleware/express and check to see if user with this info..
        // .....exists..if exists display..user already exists, if not,
        // congratulations...ask user to login by providing login page link
        }


    return (
        <>
       <div className="row d-flex justify-content-center">
       <div className="col-sm-3">
                <label htmlFor="" className="form-label">Name</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                    onChange={changeHandler}
                />              
               </div>
        </div>
        <div className="row d-flex justify-content-center">
        <div className="col-sm-3">
                <label htmlFor="" className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    id=""
                    aria-describedby="emailHelpId"
                    placeholder="abc@mail.com"
                    onChange={changeHandler}
                />
               
            </div>
        </div>
        <div className="row d-flex justify-content-center">
        <div className="col-sm-3">
                <label htmlFor="" className="form-label">Phone</label>
                <input
                    type="text"
                    name="phone"
                    id=""
                    className="form-control"
                    placeholder=""
                    aria-describedby="helpId"
                    onChange={changeHandler}
                />
               
            </div>
        </div>
        <div className="row d-flex justify-content-center">
        <div className="col-sm-3">
                <label htmlFor="" className="form-label">Password</label>
                <input
                    type="text"
                    name="password"
                    id=""
                    className="form-control"
                    placeholder=""
                    aria-describedby="helpId"
                    onChange={changeHandler}
                />
               
            </div>
        </div>
        <div className="row d-flex justify-content-center">
        <div className="col-sm-2">        
             
            <button
                type="submit"
                className="btn btn-primary"
            >
                Submit
            </button>          
            </div>
        </div>
        </>
     );
}
 
export default SignUp;
