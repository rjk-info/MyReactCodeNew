import { useState } from "react";
export default function Form() {
    let [formData , setFormData] = useState({
        fullName : "" , 
        userName : "",
        passWord : ""
    }) ;

    let handleInputChange = (event) => {
        let fieldName = event.target.name ;
        let newValue = event.target.value ;

        setFormData ((cuurData) => {
            return { ...cuurData,
                [fieldName] : newValue } ;
        });
    };

    let handleSubmit = (event) =>{
        event.preventDefault() ;
        console.log(formData) ;
        setFormData({
            fullName : "" ,
            userName : "",
            passWord : ""
        }) ;
    } ;

    return (
        <form onSubmit={handleSubmit}>
            {/*    fullname */}
            <label htmlFor="fullName">Full Name</label>
            <input 
            placeholder="Enter full name"
             type="text" 
              value={formData.fullName}
               onChange={handleInputChange}
                id="fullName"
                name="fullName"
               />
               <br /><br /><br />
            {/*    username */}

            <label htmlFor="userName">User Name</label>
            <input 
            placeholder="Enter user name"
             type="text" 
              value={formData.userName}
               onChange={handleInputChange}
                id="userName"
                name="userName"
               />
               <br /><br /><br />
            {/*    password  */}
        <label htmlFor="passWord">Password</label>
            <input 
            placeholder="Enter user name"
             type="text" 
              value={formData.passWord}
               onChange={handleInputChange}
                id="passWord"
                name="passWord"
               />
            <button>Submit</button>
        </form>
    )
}