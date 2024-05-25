import './About.css'
import aboutPhoto from '../../assets/images/about.png'
import {useFetch} from '../../hooks/UseFetch' 

export default function About (params){
    const {data: abouts} = useFetch('aboutme/')
    const {data: boxs} = useFetch('aboutme/boxs/')


    return (
        <section className={`aboutme container ${params.url == 'about' ? 'mt-100' : ''}`} id="about">
            <h1 className="title gradient-text" data-aos="fade-in">about me</h1>
            <div className="about-box-wrapper">
                {boxs && boxs.map((about, index) => (
                    <div className="about-box" data-aos="zoom-in" data-aos-delay={`${index * 250}`} key={index}>
                        <div className="img-container">
                            <div className="img" style={{backgroundImage: `url(${about.thumbnail})`}} ></div>
                        </div>
                        <div className="title">{about.title}</div>
                        <div className="des">{about.description}</div>
                    </div>
                ))}
            </div>
            <div className="description">
                <div className="vector">
                    <img src={aboutPhoto} alt="" />
                </div>
                <div className="des">
                    <div className="main" data-aos="fade">
                        {abouts ? abouts[0].first_description : ''}
                    </div>
                    <div className="more" data-aos="fade" data-aos-delay="150">
                        {abouts ? abouts[0].second_description : ''}    
                    </div>
                    <a href={abouts ? abouts[0].cv : ''} className="gradient-text my-cv">Downlaod my resume (PDF)</a>
                </div>
            </div>
        </section>
    )
}