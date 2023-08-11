import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {
    static defaultProps={
      country:'in',
      category:'general'
    }

  constructor(props)
  {
    super(props);
    
    this.state = {
      articles: [],
      loading:false,
      page:1,
      
      

    }

  }

  async componentDidMount()
  {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4dc9f5a399ad406788d4351ae5c197b1&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults});
    
  }

  handlePrevClick=async ()=>{
   
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4dc9f5a399ad406788d4351ae5c197b1&page=${this.state.page-1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState(
      {
        page : this.state.page - 1,
        articles:parsedData.articles
      }
      );

  }

  handleNextClick=async ()=>{
    if(this.state.page+1>Math.ceil(this.state.totalResults/20)){}
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4dc9f5a399ad406788d4351ae5c197b1&page=${this.state.page+1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState(
      {
        page : this.state.page +1,
        articles:parsedData.articles
      }
      );
    }
  }


  render() {
 
   return (
      <>

      <div className='container my-3'>
        <h2>Top headlines</h2>
        <div className='row' >
          {this.state.articles.map((element)=>{
            return  <div className='col-md-4' key={element.url}>
                        <NewsItem title = {element.title} description ={element.description} imageUrl ={element.urlToImage} newsUrl = {element.url}/>
                    </div>
          })}

        </div>
        <div className="container my-3 d-flex justify-content-between ">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>Prev</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>
        </div>
      </div>
      </>
    )
  }
}

export default News