import React, { useState, useEffect } from 'react'
import { Card, FormField, Loader } from '../components'

const Home = () => {
  const [ loading, setLoading ] = useState(false);
  const [ allPosts, setAllPosts ] = useState(null);
  const [ searchText, setSearchText ] = useState('');
  
  const RenderCards = ({ data, title }) => {
    if(data?.length > 0) {
      return data.map((post) => <Card key={post._id} {...post} />)
    }
  }

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>Community Showcase</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'>Browse through this collection of imaginative and incredible stunning images created by DALL-E AI</p>
      </div>

      <div className='mt-16'>
        <FormField />
      </div>
      <div className='mt-10'>
        {loading ? (
          <div className='flex justify-center items-center'>
            <Loader />
          </div>
        ) : (
         <>
           {searchText && (
            <h2 className='font-medium text-[#66e75] text-xl mb-3'>
              Showing results for <span className='text-[#222328]'> {searchText}</span>
            </h2>
           )}
           <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>

           </div>
         </>
        )}
      </div>
    </section>
  )
}

export default Home