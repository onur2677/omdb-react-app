import React from 'react'
import omdb from '../omdb/omdb'
import toast from '../toast'

class Detail extends React.Component {
    state = {
        detail: null
    }
    componentWillMount() {
        const { id } = this.props.match.params
        this.fetch(id)
    }

    fetch = async id => {
        const result = await omdb.get(id)
        if (result) {
            if (result.Response === 'True') {
                this.setState({
                    detail: result
                })
            } else {
                toast(result.Error)
            }
        } else {
            toast()
        }
    }

    render() {
        const item = this.state.detail
        if (!item) return <h1> Loading... </h1>
        const img = item.Poster !== 'N/A' ? (<img className='responsive-img' alt={item.Title} src={item.Poster} />) : ('')
        return (
            <div className='row'>
                <div className='col s12 m12'>
                    <div className='card horizontal'>
                        <div className='card-image'> {img} </div>
                        <div className='card-stacked'>
                            <div className='card-content'>
                                <ul className='collection'>
                                    <li className='collection-item'>
                                        <b> IMDb Rating: </b> {item.imdbRating}
                                    </li>
                                    <li className='collection-item'>
                                        <b> Title: </b> {item.Title}
                                    </li>
                                    <li className='collection-item'>
                                        <b> Type: </b>
                                        {(item.Type && item.Type.toUpperCase()) || '-'}
                                    </li>
                                    <li className='collection-item'>
                                        <b> Year: </b>
                                        {item.Year}
                                    </li>
                                    <li className='collection-item'>
                                        <b> Genre: </b>
                                        {item.Genre}
                                    </li>
                                    <li className='collection-item'>
                                        <b> Country: </b>
                                        {item.Country}
                                    </li>
                                    <li className='collection-item'>
                                        <b> Language: </b>
                                        {item.Language}
                                    </li>
                                    <li className='collection-item'>
                                        <b> Plot: </b>
                                        {item.Plot}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Detail