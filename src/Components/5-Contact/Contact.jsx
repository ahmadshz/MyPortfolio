import { FaEnvelope } from 'react-icons/fa'
import './Contact.css'
import Lottie from 'lottie-react'
import animation from '../../assests/animation/MessageAnimation - 1722948875856'
import Done from '../../assests/animation/done.json'
import { useForm, ValidationError } from '@formspree/react'
const Contact = () => {
  const [state, handleSubmit] = useForm("xwpebkdg");
 
  return (
    <section className='container-contact'>
      <h1 className='title-contact'>Contact Me</h1>
      <div className='bg-container'>
        <p className='main-title'>
          <h1 className='sub-titleContact'>
            <FaEnvelope />
            Cantact us
          </h1>
          <p className='subTitle'> Contact me for more information and get notified when i publish something new</p>
        </p>

        <div>
          <form onSubmit={handleSubmit}>
            <div className='form-content'>
              <input autoComplete='off' className='email' type='email' name='email' placeholder='Enter Your Email' required />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <textarea className='message' name='message' placeholder='Message' required />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <div className='content-submit'>
                <button className='submit' type="submit" disabled={state.submitting}>{state.result ? 'done' :'send'}</button>
              </div>
              {
                state.succeeded && ( <div className='lottie-done'>
                  <Lottie className='done-animation' animationData={Done} loop={false} />   Your message has been sent succefully 
                   </div>)
              }
            </div>
            <div className='lottie-message' >
              <Lottie  style={{ height: '200px', width: '300px' }} animationData={animation} loop={true} />
            </div>
               
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
