import React from 'react'
import PropTypes from 'prop-types'

Book.propTypes = {
    title : PropTypes.string.isRequired
}

function Book({title, url}){
    return (
      <div>
        <h4>{title}</h4>
        <img src={url}></img>
      </div>
    );
  }

export default Book;  