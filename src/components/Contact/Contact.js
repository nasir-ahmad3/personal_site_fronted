import './Contact.css'
import Typewriter from 'typewriter-effect';

export default function Contact(params){
    return (
        <section className={`contactme container ${params.url == 'contact' ? 'mt-100' : ''}`} id="contactme">
            <h1 className="title gradient-text">contact me</h1>
            <div className="form-wrapper">
                <div className="sub-title">
                        <Typewriter 
                            options={{
                                autoStart:true,
                                loop: true,
                                delay: 50,
                                strings: ['contact me']
                            }}
                        />
                </div>
                <p className="main-sub-title">Utilize the contact form to share your questions, feedback, or requests with us. We respond promptly and attentively to every message received. We look forward to hearing from you with pleasure.</p>
                <form action="" className="form-container">
                    <div className="input-container">
                        <div className="name">
                            <label htmlFor="name">name</label>
                            <input type="text" placeholder="Name .........." id="name" />
                        </div>
                        <div className="last_name">
                            <label htmlFor="last_name">last name</label>
                            <input type="text" placeholder="Last Name .........." id="last_name" />
                        </div>
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">email</label>
                        <input type="email" placeholder="Email ............ " id="email" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="subject">subject</label>
                        <input type="text" placeholder="Email subject ............ " id="subject" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="message">message</label>
                        <textarea type="text" placeholder="message ............ " id="message"></textarea>
                    </div>
                    <button type="submit">send</button>
                </form>
            </div>
            <ul className="info">
                <li>
                    <a target="_blank" href="whatsapp://send?phone=+12368330947">
                        <span className="mysvg">
                            <svg height="16" width="14" viewBox="0 0 448 512">
                                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg> 
                        </span>
                        <span>(+1) 236-833-0947</span>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="mailto:nasirahamdahmady0@gmail.com">
                        <span className="mysvg">
                            <svg height="16" width="16" viewBox="0 0 512 512">
                                <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                        </span>
                        <span>nasirahmadahmady0@gmail.com</span>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://linkedin.com/in/nasir-ahmad-ahmady-a63009295">
                        <span className="mysvg">
                        <svg  viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                        </span>
                        <span>Nasir Ahmad Ahmady</span>
                    </a>
                </li>
            </ul>
        </section>
    )
}
