import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    category: 'general',
    country: 'in'
  }
  static propTypes = {
    category: PropTypes.string,
    country: PropTypes.string

  }


  constructor() {
    console.log("const5555555555555555555555555");
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
      
    }
  }
  async upadteNews() {
    this.setState({ loading: true })
    const url =
      `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=a935cfd3f502482aa3caa6050f3cc392&pageSize=20&page=${this.state.page}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log("dataqaaaaa");
    this.setState({
      articles: parseData.articles,
      loading: false,
      totalResults: parseData.totalResults

    })
  }
  async componentDidMount() {
    console.log(`3333333333dataqaaaaa  ::: ${this.props.category}`);
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=a935cfd3f502482aa3caa6050f3cc392&pageSize=20&page=1`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log("dataqaaaaa");
    this.setState({ articles: parseData.articles, totalResults: 100 })

  }
  handlePrevClick = async () => {

    //   let url =
    //   `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=a935cfd3f502482aa3caa6050f3cc392&pageSize=20&page=${this.state.page - 1}`;
    //   let data = await fetch(url);
    //   let parseData = await data.json();
    //   console.log("dataqaaaaa");
    //    this.setState({  
    //     page : this.state.page -1,
    //     articles: parseData.articles,
    //     loading : false
    // })
    this.setState({ page: this.state.page - 1 });
    this.upadteNews();
  }
  handleNextClick = async () => {
    // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/20) )){
    // this.setState({loading : true});
    // let url =
    // `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=a935cfd3f502482aa3caa6050f3cc392&pageSize=20&page=${this.state.page + 1} `;
    // let data = await fetch(url);
    // let parseData = await data.json();
    // console.log("dataqaaaaa");
    // this.setState({
    //   page : this.state.page +1,
    //   articles: parseData.articles,
    //   loading:false
    // })}
    this.setState({ page: this.state.page + 1 });
    this.upadteNews();
  }
  fetchMoreData =async ()=>{
  this.setState({page: this.state.page +1})
  const url =
      `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=a935cfd3f502482aa3caa6050f3cc392&pageSize=20&page=${this.state.page}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log("dataqaaaaa");
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      loading: false,
      totalResults: parseData.totalResults

    })
  }
  render() {
    console.log("render22222222222222222");

    return (
      <>
        
          <h2 className='text-center ' style={{ color: "#830909" }}>NewsUP _Top HeadLines</h2>


          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner/>}
          ><div className="container my-2">
            <div className="row">
              {this.state.articles.map((element) => {
                return <div className="col-md-4" newsUrl={element.url}>
                  <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} author={element.author} date={element.publishedAt} newsUrl={element.url}
                    source={element.source.name} />
                </div>
              })}
            </div>
            </div>
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between">
              <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick} >&larr;prev..</button>
              <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next..&rarr;
            </button>
              </div> */}
        </>

      
        
    )
  }
}

export default News

