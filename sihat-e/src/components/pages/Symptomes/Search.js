import React from 'react';
import List from './List';
import api from '../../../Apis/api';
import _ from 'lodash';
import Loader from '../../../helpers/Loader';

export default class Search extends React.Component {

  constructor(props) {
    super(props);
   const myRef = React.createRef(null);

    this.state =  {
      posts : [],
      search : '',
      count : 0,
      width: 0,
    };

    this.handleSearch = this.handleSearch.bind(this);
    
    // Attaching Lodash debounce to avoid frequent ajax requests
    this.getPosts = _.debounce(this.getPosts, 500);
  }

  componentDidMount() {
    // get width of search input for react search widget on initial load
    const width = document.getElementById("search").offsetWidth; 
    this.setState(() => ({ width : width }));

    // get width of search input for react search widget when page resize
    window.addEventListener('resize', (e) => {
      const newWidth = document.getElementById('search').offsetWidth; 
      this.setState(() => ({ width : newWidth }));
    });

    // To clear react search widget when click on body
    document.body.addEventListener('click', (e) => {
      this.clearData(e);
    });

    document.getElementById('search').addEventListener('keydown', (e) => {
      // check whether up or down arrow keys are pressed
      if (e.keyCode === 38 || e.keyCode === 40) {
        // To prevent cursor from moving left or right in text input
        // You can only prevent it in keydown event
        // If you only use keyup then event already fired
        e.preventDefault();
      }
    });
  }

  handleSearch(e) {
    // check whether arrow keys are pressed using Loadash
    if(_.includes([37, 38, 39, 40, 13], e.keyCode) ) {
      if (e.keyCode === 38 || e.keyCode === 40) {
        // To prevent cursor from moving left or right in text input
        e.preventDefault();
      }

      if (e.keyCode === 40 && this.state.posts == "") {
        // If post list is cleared and search input is not empty 
        // then call ajax again on down arrow key press 
        this.getPosts();
        return;
      }

      this.selectPost(e.keyCode);
    } else {
      this.getPosts();
    }
  }

  getPosts() {
    this.setState(() => ({ 
      posts: [],
      count: 0,
      search: this.refs.newSearch.value      
    }));

    if (this.state.search.trim() != '') {
      api.post("/search/create",{
          search : this.state.search
      })
      .then( (response) => {
        this.setState(() => ({ posts : response.data }));
      })
      .catch( (error) => {
          console.log(error);
      });  
    }
  }

  selectPost(keyCode) {
    // If down arrow key is pressed
    if (keyCode == 40 && this.state.count < this.state.posts.length) {
      this.setState((prevState) => ({ count : prevState.count + 1 }));
    }
    // If up arrow key is pressed
    if (keyCode == 38 && this.state.count > 1) {
      this.setState((prevState) => ({ count : prevState.count - 1 }));
    }
    // If enter key is pressed
    if (keyCode == 13) {
      // Go to selected post
      document.getElementById(this.state.count).childNodes[0].click();
    }
  }

  clearData(e) {
    if (e.target.id != 'search') {
      this.setState(() => ({ 
        posts: [],
        count: 0
      }));
    }
  }



    handleClick = (e) => {
    const monSymptom = document.getElementById("thesearch").innerHTML;

    api.post('symptom/store', {
        name: monSymptom
    }
      )
        
  };
  

  render() {
      let posts;
    const ulStyle = {
      width : this.state.width + 'px'
    }
    // console.log(ref)
    if (!this.state.posts) {
        <Loader />;
      } else if (this.state.posts) {
     posts = this.state.posts.map((post, index) => (


        
      <List
      state = {this.state} 
      Click = {this.handleClick}
        key = {index}
        post = {post.name}
        index = {index + 1}
        count = {this.state.count}
      />
    ));
      }

    return (
      <div className="well">
        <div className="row">


          <div className="col-sm-5">
            <input type="text" autoComplete="off" 
              onKeyUp={this.handleSearch}
              id="search" ref="newSearch"  
              className="form-control input-lg" 
              placeholder="Entrez vos symptômes" 
              
            />
            
            
            {  this.state.posts.length > 0 && 
              <ul style={ulStyle} className="widget" >
                { posts }
              </ul>
            }

          </div>
        </div>
      </div>
    );

  }
}
