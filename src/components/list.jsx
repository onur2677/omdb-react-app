import React from 'react'
import { Link } from 'react-router-dom'

class List extends React.Component {
    list = () => {
        let result = ''
        if (this.props.list.length) {
            result = this.props.list.map(item => {
                const img = item.Poster !== 'N/A' ? (<img className='responsive-img' alt={item.Title} src={item.Poster} />) : ('')
                return (
                    <div key={item.imdbID} className='col m4 offset-m4 s12'>
                        <div className='card'>
                            <div className='card-image'>{img}</div>
                            <div className='card-action'>
                                <div className='collection'>
                                    <div className='collection-item'>
                                        <span className='badge'>{item.Title}</span>Title
                                    </div>
                                    <div className='collection-item'>
                                        <span className='badge'>
                                            {(item.Type && item.Type.toUpperCase()) || '-'}
                                        </span>
                                        Type
                                    </div>
                                    <div className='collection-item'>
                                        <span className='badge'>{item.Year}</span>Year
                                    </div>
                                    <div className='collection-item center'>
                                        <Link to={`/${item.imdbID}`}>
                                            <span className='collection-item btn-large  red-text'>
                                                Details
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }

        return result
    }
    render() {
        return <div className='row'>{this.list()}</div>
    }
}

export default List