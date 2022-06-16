// need the data to go here 
import React from 'react';
import { connect } from 'react-redux';

const AgifyList = props => {
    const { agifs } = props
    return (
        <div>{agifs}</div>
    )
}

const mapStateToProps = state => {
    return {
        agifs: state.agifs
    }
}

export default connect(mapStateToProps)(AgifyList);