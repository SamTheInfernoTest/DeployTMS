import React from 'react'
import {useEffect, useState} from 'react'

import InfoCard from './InfoCard'
import useUser from '../../context/UserContext'

function Mentors() {
  const { axiosSecure, standards } = useUser()
  const [mentors, setMentors] = useState([])
  

  useEffect(() => {
    const allMentors = standards.map(std => axiosSecure.get(`mentor/getMentors/${std}`).then((res) => res.data))

    Promise.all(allMentors).then(ms => setMentors(ms.flat())).
    catch(err => console.log(err))
  }, [])

  return (
    <div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
        {mentors.map(mentor => (
          <InfoCard key={mentor.id} mentor={mentor} />
        ))}
      </div>
    </div>
  )
}

export default Mentors