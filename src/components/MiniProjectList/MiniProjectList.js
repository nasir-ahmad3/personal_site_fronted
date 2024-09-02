import { Link } from 'react-router-dom'
import { useFetch } from '../../hooks/UseFetch'

export default function MiniProjectList (params){
    const {data: projects, err} = useFetch('frontnd-mini-projects/')
    const MiniProjectsitems = []
   
    
    for (let i = 1; i <= 3; i++) {
        MiniProjectsitems.push(
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
                <div className="box-wrapper">
                    {!projects &&MiniProjectsitems}
                    {projects && projects.map((project, index) => (
                        <div className="box" key={index}>
                            <div className='img' style={{backgroundImage: `url(${project.image})`}} ></div>
                            <p className="title gradient-text">{project.title}</p>
                            <div className="des">
                                {project.description}
                                <Link to={`/fronend-mini-projects/${project.slug}`} target="_blank">read more</Link>
                            </div>
                        </div>
                    ))}              
                    <div className="cover"></div>
                </div>
            </section> 
        </>
    )
}