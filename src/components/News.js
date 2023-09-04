import React, { Component } from 'react'
import NewsItem from './NewsItem'
const APIkey = "c620b8d7b59f4a76983f2b393ee34212"
// c620b8d7b59f4a76983f2b393ee34212
// 2a2a419e576b48339714d0d9d0cba591
// extra Api keys...
export class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };
    }

    pageUp = async () => {
        // console.log(this.state.page)
        let url = `https://newsapi.org/v2/everything?&q=${this.props.query}&apiKey=${APIkey}&pagesize=21&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        // console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            page: this.state.page + 1
        })
    }
    pageDown = async () => {
        // console.log(this.state.page)
        let url = `https://newsapi.org/v2/everything?&q=${this.props.query}&apiKey=${APIkey}&pagesize=21&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        // console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1
        })
    }
    async componentDidUpdate() {
        let url = `https://newsapi.org/v2/everything?q=${this.props.query}&apiKey=${APIkey}&pagesize=21&page=${this.state.page}`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
        console.log(parsedData);
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/everything?q=${this.props.query}&apiKey=${APIkey}&pagesize=21&page=${this.state.page}`
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
    }
    render() {

        return (
            <div className='container my-4'>
                <h3 className='mb-4'>
                    NewsMonkey - Top Headlines for {this.props.query}
                </h3>
                <div className='row'>
                    {this.state.articles.map((element) => {
                        return (
                            <div className='col-md-4' key={element.url}>
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} />
                            </div>
                        )
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    < button type="button" disabled={this.state.page <= 1} onClick={this.pageDown} className="btn btn-dark " >&larr; Previous Page</ button>
                    <button type="button" disabled={this.state.page * 20 >= this.state.totalResults} onClick={this.pageUp} className="btn btn-dark">Next Page &rarr;</button>
                </div >

            </div >

        )
    }
}

export default News