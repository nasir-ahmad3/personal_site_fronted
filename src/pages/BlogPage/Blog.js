import './Blog.css'
import BlogList from '../../components/BlogList/BlogList'
import { useFetch } from '../../hooks/UseFetch'
import { useState } from 'react'

export default function Blog(){
    const [pageNum, setPageNum] = useState(1)
    const {data: skills, isLoading, err } = useFetch(`bloglist/?page=${pageNum}`)
    
    return (
        <>
            <BlogList url='bloglist' skills={skills ? skills.results : ''} isLoading={isLoading} err={err} />
            {skills  && <div className="pagenation-container">
                {skills.previous ? <button className="button" onClick={() => setPageNum(prevValue => prevValue - 1)} id="startBtn" disabled="">
                    <i className="fa-solid fa-angle-left"></i>
                </button>: ''}

                {pageNum - 3 >= 1  ? <div className="links">
                    <a  onClick={() => setPageNum(1)} className="link">1</a>
                </div> : ''}

                {pageNum - 4 >= 1   && <div>
                    ......
                </div>}

                {pageNum - 2 >= 1  ? <div className="links">
                    <a  onClick={() => setPageNum(prevValue => prevValue - 2)} className="link">{pageNum-2}</a>
                </div> : ''}

                {skills.previous ? <div className="links">
                    <a  onClick={() => setPageNum(prevValue => prevValue - 1)} className="link">{pageNum-1}</a>
                </div> : ''}

                <div className="links">
                    <a className="link active">{pageNum}</a>
                </div>

                {pageNum < skills.count && pageNum+2 <= skills.count  && skills.next ? <div className="links">
                    <a  onClick={() => setPageNum(prevValue => prevValue + 1)} className="link">{pageNum+1}</a>
                </div> : ''}

                {pageNum < skills.count && pageNum+3 <= skills.count && skills.next ? <div className="links">
                    <a  onClick={() => setPageNum(prevValue => prevValue + 2)} className="link">{pageNum+2}</a>
                </div> : ''}
                {pageNum+4 <= skills.count  && skills.next && <div>
                    ......
                </div>}
                {pageNum+1 <= skills.count && pageNum < skills.count  && skills.next ? <div className="links">
                    <a  onClick={() => setPageNum(skills.count)} className="link">{skills.count}</a>
                </div> : ''}

                {skills.next ? <button onClick={() => setPageNum(prevValue => prevValue +1)} className="button prevNext" id="next">
                    <i className="fa-solid fa-angle-right"></i>
                </button> : ''}
            </div>}
        </>
    )
}