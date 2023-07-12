import React from 'react'

function Main() {

    const manatee = {
        name: 'The Lego Movie',
        img: 'https://img3.hulu.com/user/v3/artwork/e76108eb-3afb-481e-a976-6560ec38e41d?base_image_bucket_name=image_manager&base_image=29304b1d-37c1-48eb-99fc-2d42cadb3187&region=US&format=jpeg&size=952x536',
        desc: 'An ordinary LEGO construction worker, thought to be the prophesied as "special", is recruited to join a quest to stop an evil tyrant from gluing the LEGO universe into eternal stasis.',
    }

  return (
    <div className='mainTop'>
      <h4 className='synopsis'>{manatee.desc}</h4>
    </div>
)
}

export default Main
