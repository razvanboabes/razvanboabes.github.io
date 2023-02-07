import React, {useState} from "react";
import "./Form.css";
import { send } from 'emailjs-com';
function Form() {
    const [registrationComplete, setRegistrationComplete] = useState(false);
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
      });
    const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_hawn6ke',
          'template_82lr4ge',
          toSend,
          'WRxFGh3t0vznFOWt2'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setRegistrationComplete(true);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
  return (
    <div className="Form1">
      <div class="wpcf7" id="wpcf7-f156-p143-o1 formwrap">
          <form onSubmit={onSubmit} class="wpcf7-form" >
            {registrationComplete ? (
                    <h2 className="registration">Registration complete!</h2>
                ) : (
            <><h2>Join Beta</h2><div>
                              <input type="hidden" name="_wpcf7" value="156" />
                              <input type="hidden" name="_wpcf7_version" value="3.7.2" />
                              <input type="hidden" name="_wpcf7_locale" value="en_US" />
                              <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f156-p143-o1" />
                              <input type="hidden" name="_wpnonce" value="d1da331d93" />
                          </div><p>
                                  <span class="wpcf7-form-control-wrap Name">
                                      <input type="text" name="from_name" value={toSend.from_name} size="40" class="nameinput wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Name" onChange={handleChange} />
                                  </span>
                                  <span class="wpcf7-form-control-wrap Email">
                                      <input type="email" name="to_name" size="40" class="emailinput wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Email" />
                                  </span>
                                  <span class="wpcf7-form-control-wrap Message">
                                      <textarea name="message" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Message" value={toSend.message} onChange={handleChange}></textarea>
                                  </span>
                                  <input type="submit" class="wpcf7-form-control wpcf7-submit btn" />
                              </p></>
               )}
            <div class="wpcf7-response-output wpcf7-display-none">
            </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
