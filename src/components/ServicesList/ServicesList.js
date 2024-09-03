import './ServicesList.css'
import Skills from './SkillsList'
import {useFetch} from '../../hooks/UseFetch' 

export default function Services(params){
    const {data: services} = useFetch('services/')
    const items = []
   
    
    for (let i = 1; i <= 3; i++) {
        items.push(
            <li key={i} className='service'>
                <div className="img">
                    <span className="skeleton skeleton-text skeleton-image skeleton-service-img"></span>
                </div>
                <div className='description'>
                    <div data-aos="zoom-out"  className="title">
                        <span className="skeleton skeleton-text skeleton-title"></span>
                    </div>
                    <div data-aos="fade-up"  className="des">
                        <span className="skeleton skeleton-text skeleton-text-project-des"></span>
                        <span className="skeleton skeleton-text skeleton-text-project-des"></span>
                    </div>
                </div>
            </li>
        ) 
    }
    return(
        <section className={`services container ${params.url == 'service' ? 'mt-100' : ''}`} id="services">
		<h1 className="title gradient-text" data-aos="fade-up">services</h1>
		<ul className="services_container"> 
            {!services && items}
			{services && services.map((service,index) => (
                <li key={index} className='service'>
                    <div data-aos="fade-down" className="img" style={{backgroundImage: `url(${service.thumbnail})`}}></div>
                    <div className='description'>
                        <div data-aos="zoom-out"  className="title">{service.title}</div>
                        <div data-aos="fade-up"  className="des">{service.description}</div>
                    </div>
                </li>
            ))}
		</ul>
        <Skills />
	</section>
    )
}