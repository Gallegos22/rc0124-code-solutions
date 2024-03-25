import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import './Validator.css';

export function Validator() {
  const [password, setPassword] = useState('')
  let data;
  let icon;

  const wrong = <IoMdClose />
  const correct = <FaCheck/>

  function handleChange () {
    if (password.length === 0) {
      icon = wrong;
      data = 'A password is required';
    }
    else if (password.length < 8) {
      icon = wrong;
      data = 'Your password is too short';
    }
    else if (password.length >= 8){
      icon = correct ;
      data = '';
    }
  }

  const message = handleChange(); // this is running my function THIS IS TO PREVENT LINTER ERROR
  //
  return (
    <div>
      <div className="column-full">
        <label htmlFor="">Password</label>
      </div>
      <div className="column-full">
        <input type="text" value={password}
        onChange={e => setPassword(e.target.value)}/>
        <i>{icon}</i>
        <p>{data}</p>
      </div>
      {/* <div className="column-full"> */}
        {/* <p className="reqPass">A password is required.</p> */}
        {/* <p className="shortPass">Your password is too short.</p> */}
      {/* </div> */}
    </div>
  );
}
