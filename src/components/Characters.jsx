import React from 'react'

function Characters(props) {
  return (
    <div>
      <div className="listing">
        {/* top */}
        <div className="carousel">
            <img src={props.list.img} alt="posters" className='smallPosters'/>
        </div>
        <div className="titleBox">
            <p className='movieTitle'>{props.list.name}</p>
        </div>

      </div>
    </div>
  )
}

export default Characters
