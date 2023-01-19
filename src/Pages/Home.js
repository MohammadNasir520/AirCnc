import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ExpCard from '../Components/Card/ExpCard';
import HomeCard from '../Components/Card/HomeCard';
import SearchForm from '../Components/Form/SearchForm';
import Spinner from '../Components/Spinner/Spinner'
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allExp, setAllExp] = useState([]);

  useEffect(() => {
    fetch('expdata.json')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setAllExp(data)
      })
  }, [])
  return (
    <div className='md:flex justify-center gap-10 px-6 md:px-10 lg:px-20'>
      <div><SearchForm></SearchForm></div>
      <div className='flex-1'>
        <div>
          <div className='flex justify-between'>
            <p className='text-xl font-bold'>Homes</p>
            <Link to={'/coming-soon'}><p className='text-xl font-bold'>See all</p></Link>

          </div>
          <div className='flex flex-wrap'>
            {
              [...Array(5)].map((exp, i) => <HomeCard
                key={i}
              ></HomeCard>)

            }
          </div>
        </div>
        <div>
          <div className='flex justify-between'>
            <p className='text-xl font-bold'>Experience</p>
            <Link to={'/coming-soon'}><p className='text-xl font-bold'>See all</p></Link>

          </div>


          <div className='flex flex-wrap'>
            {
              allExp.slice(0, 4).map((exp, i) => <ExpCard
                key={i}

              ></ExpCard>)

            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
