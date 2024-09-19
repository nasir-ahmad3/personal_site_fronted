import './SiteHeader.css';
import { ReactComponent as Coder } from '../../assets/images/coder.svg';
export default function SiteHeader() {


  return (
    <>
      <div className="siteHeader container" id='particles-js' nasir={{overflow: 'hidden'}}>
        <div className='des-header'>
              <h1 className='title gradient-text' data-aos="fade-down">
                Hello.
              </h1>
            <p data-aos="fade-right">
              I'm Nasir Ahmad
            </p>
            <div data-aos="fade-up">
              a creative web developer. I design and build innovative, responsive websites. Let's work together to bring your digital ideas to life. Contact me today!
            </div>
        </div>
        <div className="vectorContainer">
            <Coder />
        </div>
      </div>
    </>
  )
}
