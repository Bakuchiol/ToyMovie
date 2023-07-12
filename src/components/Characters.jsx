import React from 'react'

function Characters(props) {
  return (
    <div>
      <div className="listing">
        {/* top */}
        <div className="carousel">
            <img src={props.list.img} alt="posters" className='smallPosters'/>
        </div>
      </div>
    </div>
  )
}

export default Characters
