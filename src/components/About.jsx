import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <header>
        <h1>About</h1>
      </header>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam placeat sit quibusdam nesciunt perferendis cumque quas dolore ipsum impedit iure hic autem quaerat tenetur eius, debitis magnam optio et? Magni earum reprehenderit illo possimus nesciunt perferendis doloribus quis praesentium deserunt laudantium laborum veritatis voluptatem ea natus quasi optio quod fugit facere molestiae sequi repudiandae, mollitia autem incidunt. Dolorem deserunt doloribus quia est quidem tempore, quis officiis labore ad autem eaque cumque aperiam explicabo culpa facilis facere iure.</p>

      <Link to='/contact'> Conctact us</Link>

    </div>
  )
}

export default About