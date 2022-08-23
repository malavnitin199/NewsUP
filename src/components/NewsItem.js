import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date,source } = this.props;
        return (
            <div className="my-3">
                <div className="card" >
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
                            {source}
                        </span></h5>
                        <p className="card-text">{description}</p>
                        <p className='card-text'><small style={{ color: '#1e69b3' }}>By {author ? author : "unknown"} on <b>{new Date(date).toGMTString()} </b></small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary" style={{ color: '##000000', background: "#004e88" }}>Read More</a>

                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
