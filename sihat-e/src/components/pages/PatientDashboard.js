import React from 'react';
import { connect } from 'react-redux';
import { fetchAboutInfos } from '../../actions';

class PatientDashboard extends React.Component{
    componentDidMount(){
        this.props.fetchAboutInfos();
    }

    renderList() {
    return this.props.aboutInfos.map(aboutInfo => {
        return (
            <div className="item" key={aboutInfo.id}>
            <i className="large middle aligned icon camera" />
            <div className="content">
                {aboutInfo.last_name}
                <div className="description">{aboutInfo.first_name}</div>
            </div>
            </div>
        );
    });
    }


    render() {
        return(
            <>
                
            </>
        )
    }
}


















const mapStateToProps = state => {
    return {
        aboutInfos: Object.values(state.aboutInfos),
    };
};


export default connect(mapStateToProps, {fetchAboutInfos})(PatientDashboard)