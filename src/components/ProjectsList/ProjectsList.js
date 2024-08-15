import { useFetch } from '../../hooks/UseFetch'
import './ProjectsList.css'

export default function Projects (params){
    const {data: projects, err} = useFetch('projects/')
    const {data: title} = useFetch('projects/title/')
    const items = []
   
    
    for (let i = 1; i <= 3; i++) {
        items.push(
            <div className="box" data-aos="flip-left" key={i}>
                <div className='img skeleton skeleton-image'></div>
                <p className="title gradient-text">
                    <span className='skeleton skeleton-text skeleton-text-project-title'></span>
                </p>
                <div className="des">
                    <span className='skeleton skeleton-text skeleton-text-project-des'></span>
                    <span className='skeleton skeleton-text skeleton-text-project-des'></span>
                    <span className='skeleton skeleton-text skeleton-text-project-des'></span>
                    <span className='skeleton skeleton-text skeleton-text-project-des'></span>
                    <span className='skeleton skeleton-text skeleton-text-project-des'></span>
                    <span className='skeleton skeleton-text skeleton-text-project-des'></span>
                    <span className='skeleton skeleton-text skeleton-text-project-des'></span>
                    <span className='skeleton skeleton-text skeleton-text-project-des'></span>
                    <span className='skeleton skeleton-text skeleton-text-project-des'></span>
                    <span className='skeleton skeleton-text skeleton-text-project-des skeleton-text-last'></span>

                </div>
            </div>
        ) 
    }
    
    return( 
        <>
            <section className={`projects container ${params.url == 'project' ? 'mt-100' : ''}`} id="projects">
                    {err && (<div>{err}</div>)}
                <h1 className="title gradient-text" data-aos="fade-up">Projects</h1>
                <div className="des" data-aos="zoom-in" data-aos-delay="100">
                    <span className="text">
                        {title ? title[0].title: ''}
                    </span>
                    {!title && <span className='skeleton skeleton-text'></span>}
                </div>
                <div className="box-wrapper">
                    {!projects &&items}
                    {projects && projects.map((project, index) => (
                        <div className="box" key={index}>
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