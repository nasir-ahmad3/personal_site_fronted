import './BlogDetail.css'
import {useFetch} from '../../hooks/UseFetch'
import {useParams} from 'react-router-dom'

export default function BlogDetail (){
    const { id } = useParams()
    const {data} = useFetch(`blog/${id}`)


    return(
        <div className='container'>
            <h1 className="title gradient-text">{data ? data.title : 'Loading'}</h1>
            <img src={data ? data.thumbnail : ''} alt="Img" />
            <p className="des">
                {data && data.description}
            </p>
        </div>
    )
}