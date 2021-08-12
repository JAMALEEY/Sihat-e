import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAboutInfos } from '../../actions';

class AboutList extends React.Component {
  componentDidMount() {
    this.props.fetchAboutInfos();
  }

 

  renderList() {
    if(true) {
      // return this.props.aboutInfos.map(aboutInfo => {
      //   console.log(this.props.aboutInfos)
      //   return (
      //     <div className="item" key={this.props.aboutInfos.id}>
      //       <div className="content">
      //         {aboutInfo.first_name}
      //         <div className="description">{aboutInfos[0].data.last_name}</div>
      //       </div>
      //     </div>
      //   );
      // });
    }
  
  }

  renderCreate() {
    if (true) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    aboutInfos: Object.values(state.aboutInfos),
    signInResponse: state.signInResponse
  };
};

export default connect(
  mapStateToProps,
  { fetchAboutInfos }
)(AboutList);
