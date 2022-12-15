import React from 'react'

const NewsItem =(props)=> {


    
        let { title, description, imgUrl, newsUrl, date, author, source } = props;

        return (
            <div className='my-4'>
                <div className="card" >
                    <img src={imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"> {title}</h5>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {source}
                        </span>
                        <p className="card-text">{description}</p>
                        <p className='card-text'><small className='text-muted'> By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel=' noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem