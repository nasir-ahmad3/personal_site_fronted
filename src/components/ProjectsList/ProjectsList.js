import Typewriter from 'typewriter-effect';
import { useFetch } from '../../hooks/UseFetch'
import './ProjectsList.css'

export default function Projects (params){
    // const {data: projects, err, isLoading} = useFirebase('projects')
    const {data: projects, err, isLoading} = useFetch('projects/')
    const {data: title} = useFetch('projects/title/')
    
    
    return(
        <>
            <section className={`projects container ${params.url == 'project' ? 'mt-100' : ''}`} id="projects">
                    {err && (<div>{err}</div>)}
                <h1 className="title gradient-text" data-aos="fade-up">Projects</h1>
                <div className="des" data-aos="zoom-in" data-aos-delay="100">
                    <span className="text">
                        {/* <Typewriter 
                            options={{
                                autoStart:true,
                                loop: true,
                                delay: 50,
                                strings: [title ? title[0].title: '']
                            }}
                        /> */}
                        {title ? title[0].title: ''}
                    </span>
                </div>
                <div className="box-wrapper">
                    {projects && projects.map((project, index) => (
                        <div className="box" data-aos="flip-left"  data-aos-delay={`${index * 350}`} key={index}>
                            <div className="owl-carousel owl-theme">
                                {project.images.map((img, index) => {
                                    <div className="item" loading="lazy" style={{backgroundImage: `url(${img})`}}></div>
                                })}
                            </div>
                            <div className='img' style={{backgroundImage: `url(${project.thumbnail})`}} ></div>
                            <p className="title gradient-text">{project.title}</p>
                            <div className="des">
                                {project.description}
                                <a href={project.link} target="_blank">read more</a>
                            </div>
                        </div>
                    ))}              
                    <div className="cover"></div>
                </div>
            </section>
        </>
    )
}