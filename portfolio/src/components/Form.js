import "./FormStyle.css"

import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

const Form = () => {
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_v00y3wp', 'template_h4kcxbn', e.target, 'zrT35Zzdp0XvVHzoB').then(res=>{
      console.log(res);
    }).catch(err=> console.log(err));
  }
  
  
  return (
    <div className="Form" onSubmit={sendEmail} >
      <form>
        <label>Name</label>
        <input type="text" name="name" className='form-control'></input>

        <label>Email</label>
        <input type="email" name="email" className='form-control'></input>

        {/* <label>Subject</label>
        <input type="text" ></input> */}

        <label>Message</label>
        <textarea name='message' className='form-control'/>
        

        <button className="btn">Send</button>
      </form>
    </div>
  );
};

export default Form;
