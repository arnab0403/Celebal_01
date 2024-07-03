import './App.css';
import { useState,useEffect } from 'react';
function App() {
  
  const initialvalue = {
    username : "",
    email :"",
    password:"",
    firstName:"",
    lastName:"",
    phoneNo:"",
    adharNo:"",
    panNo:""
  };
  const [formvalues,setFormvalues]=useState(initialvalue);
  const [formErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);

  const handleChange = (e) =>
    {
      const {name,value} = e.target;
      setFormvalues({...formvalues,[name]:value});
    };

    const handleSubmit = (e) =>
      {
        e.preventDefault();
        setFormErrors(validate(formvalues));
        setIsSubmit(true);
      };

      useEffect(()=>{
      console.log(formErrors);
      if(Object.keys(formErrors).length ===0 && isSubmit)
        {
          console.log(formvalues);
        }
      },
        [formErrors]
      );

    const  validate =(values)=>{
      const errors ={};
      const syntx=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if(!values.username){
        errors.username="Username is required";
      }
      if(!values.phoneNo){
        errors.phoneNo="PhoneNo is required";
      }
      if(!values.panNo){
        errors.panNO="Pan NO is required";
      }
      if(!values.adharNo){
        errors.adharNo="Adhar NO is required";
      }
      if(!values.firstName){
        errors.firstName="First name is required";
      }
      if(!values.lastName){
        errors.lastName="Last name is required";
      }
      if(!values.email){
        errors.email="Email is required";
      }
      
      else if(!syntx.test(values.email))
      {
        errors.email="This is not a valid email format";
      }
      if(!values.password){
        errors.password="Password is required";
      }
      else if (values.password.length<4)
      {
        errors.password="Password must be more than 4 characters";
      }
      else if (values.password.length>10)
        {
          errors.password="Password must be in 10 characters";
        }

      return errors;
    }

  return (
    <div className="container">

    {Object.keys(formErrors).length===0 && isSubmit ? alert("Signed in sucsessfull"):null}
      <form  onSubmit={handleSubmit}>
        
      <h1>Login Form</h1>
        <div className="ui">
        
          <div className="form">
            <div className="field">
              <label>First Name</label>
              <input type="text" name="firstName" placeholder="Fisr name" value={formvalues.firstName} onChange={handleChange}/>
              </div>
            <p>{formErrors.firstName}</p>

            <div className="field">
            <label>Last Name</label>
            <input type="text" name="lastName" placeholder="Last Name" value={formvalues.lastName} onChange={handleChange}/>
            </div>
            <p>{formErrors.lastName}</p>

            <div className="field">
            <label>Username</label>
            <input type="text" name="username" placeholder="Name" value={formvalues.username} onChange={handleChange}/>
            </div>
            <p>{formErrors.username}</p>

            <div className="field">
            <label>Phone No:</label>
            <input type="number" name="phoneNo" placeholder="Phone No:" value={formvalues.phoneNo} onChange={handleChange}/>
            </div>
            <p>{formErrors.phoneNo}</p>

            <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="email"   value={formvalues.email} onChange={handleChange} />
            <p>{formErrors.email}</p>

            </div>
            <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" value={formvalues.password}
            onChange={handleChange}/>
            </div>
            <p>{formErrors.password}</p>

            <div className="field">
            <label>PAN no</label>
            <input type="Number" name="panNo" placeholder="Pan No" value={formvalues.panNo}
            onChange={handleChange}/>
            </div>
            <p>{formErrors.panNO}</p>

            <div className="field">
            <label>Adhar No</label>
            <input type="Number" name="adharNo" placeholder="Adhar No" value={formvalues.adharNo}
            onChange={handleChange}/>
            </div>
            <p>{formErrors.adharNo}</p>

            <div className="field">
            <label for="cars">Country:</label>

              <select name="cars" id="cars">
                <option value="India">India</option>
                <option value="Australia">Australia</option>
                <option value="South Africa">South Africa</option>
                <option value="audi">Bangladesh</option>
              </select>
            </div>

            <div className="field">
            <label for="cars">City:</label>

              <select name="cars" id="cars">
                <option value="Kolkata">Kolkata</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
              </select>
            </div>

            <div className="field">
            <button>Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
