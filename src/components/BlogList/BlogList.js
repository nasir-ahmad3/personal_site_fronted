import './Blog.css';
import {NavLink} from 'react-router-dom'

export default function BlogList(params) {

  return (
    <section className={`blog container ${params.url  == 'bloglist' ? 'mt-100': ''}`} id="blog" >
      <h1 className="title gradient-text">blog</h1>
      <div className="blog-wrapper">
        {params.isLoading && <div>Loading ...</div>}
        {params.err && <div>{params.err}</div>}
        {params.skills && (
          params.skills.map((skill, index) => (
            <div className="blog" key={index}>
              <div className="img" style={{ backgroundImage: `url(${skill.thumbnail})` }}></div>
              <div className="title">{skill.title}</div>
              <p className="write_by">
                write by: <span>nasir ahamd ahmady</span>
              </p>
              <p className="des">{skill.description.length > 350 ? skill.description.slice(0, 350) : skill.description}</p>
              <NavLink to={`/blog/${skill.id}/`} className="more gradient-text">reade more</NavLink>
            </div>
          ))
        )}
      </div>
      {params.url == 'blog/' ? <NavLink to="blog/" className='moreArticle gradient-text'>More Articles </NavLink> : ''}
    </section>
  );
}
