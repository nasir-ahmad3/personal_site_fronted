import './ServicesList.css'
import Skills from './SkillsList'
import {useFetch} from '../../hooks/UseFetch' 

export default function Services(params){
    const {data: services, err, isLoading} = useFetch('services/')
    return(
        <section className={`services container ${params.url == 'service' ? 'mt-100' : ''}`} id="services">
		<h1 className="title gradient-text" data-aos="fade-up">services</h1>
		<ul className="services_container"> 
			{services && services.map((service,index) => (
                <li key={index}>
                    <div data-aos-delay={`${index * 350}`}  data-aos="fade-down" className="img" style={{backgroundImage: `url(${service.thumbnail})`}}></div>
                    <div data-aos-delay={`${index * 350}`}  data-aos="zoom-out"  className="title">{service.title}</div>
                    <div data-aos-delay={`${index * 350}`}  data-aos="fade-up"   className="des">{service.description}</div>
                </li>
            ))}
		</ul>
        <Skills />
	</section>
    )
}