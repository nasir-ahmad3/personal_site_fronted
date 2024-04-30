import './ServicesList.css'
import Skills from './SkillsList'
import {useFetch} from '../../hooks/UseFetch' 

export default function Services(params){
    const {data: services, err, isLoading} = useFetch('services/')
    return(
        <section className={`services container ${params.url == 'service' ? 'mt-100' : ''}`} id="services">
		<h1 className="title gradient-text">services</h1>
		<ul className="services_container">
			{services && services.map((service,index) => (
                <li key={index}>
                    <div className="img" style={{backgroundImage: `url(${service.thumbnail})`}}></div>
                    <div className="title">{service.title}</div>
                    <div className="des">{service.description}</div>
                </li>
            ))}
		</ul>
        <Skills />
	</section>
    )
}