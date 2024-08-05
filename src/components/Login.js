import { useState } from "react";


const  Login= () => {


    let [frmEmail,setFrmEmail] = useState("");
    let [frmPswd,setFrmPswd] = useState("");
   
    let onEmailChangeHandler =  (e) => { //synthetic event
        setFrmEmail(e.target.value);
        // console.log(frmEmail);
    }


    let onPswdChangeHandler =  (e) => { //synthetic event
        setFrmPswd(e.target.value);
        // console.log(frmPswd);
    }


    let clickHandler = (e) =>{
        e.preventDefault();
        let frmObj = {frmEmail,frmPswd}
        console.log(frmObj);
        //send the details to middleware/express and check to see if user with this info..
        // .....exists
        //if user with this email&pswd exists - take user to home page.
        // the login button should dissappear and logout button should appear
    }


    return (
        <>
       <div className="row d-flex justify-content-center">
            <div className="col-sm-3">
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Email</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="form-control"
                        placeholder=""
                        aria-describedby="helpId"
                        onChange={onEmailChangeHandler}
                    />          
                </div>
            </div>
        </div>


        <div className="row d-flex justify-content-center">
            <div className="col-sm-3">
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Password</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            className="form-control"
                            placeholder=""
                            aria-describedby="helpId"
                            onChange={onPswdChangeHandler}
                        />
                </div>
            </div>
        </div>


        <div className="row d-flex justify-content-center">
            <div className="col-sm-3">
                    <div className="mb-3">
                        <button onClick={clickHandler} className="btn btn-success" type="submit"> Submit</button>
                    </div>
            </div>
        </div>
        </>
       
      );
}
 
export default Login;
