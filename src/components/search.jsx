import React from 'react'
import List from './list'
import omdb from '../omdb/omdb'
import toast from '../toast'

class Search extends React.Component {
    state = {
        key: '',
        list: [],
        timeout: null
    }
    handleChange = e => {
        let { value } = e.target
        value = value.trim()
        if (this.state.timeout) clearTimeout(this.state.timeout)
        if (value.length < 2) return
        this.setState({
            key: value,
            timeout: setTimeout(() => {
                this.fetch(value)
            }, 1000)
        })
    }

    fetch = async value => {
        const result = await omdb.search(value)
        if (result) {
            if (result.Response === 'True') {
                this.setState({
                    list: result.Search
                })
            } else {
                toast(result.Error)
            }
        } else {
            toast()
        }
    }

    render() {
        return (
            <div className='search-container'>
                <h1 className='center'>Search Movie</h1>
                <input
                    autoComplete='false'
                    id='search'
                    placeholder='Type here'
                    type='text'
                    onChange={this.handleChange}
                />
                <List list={this.state.list} />
            </div>
        )
    }
}

export default Search