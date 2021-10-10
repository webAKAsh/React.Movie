import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import sample from './sample.jpg'
import { FaRegStar, FaChartLine } from 'react-icons/fa'
import { MdMovieCreation, MdOutlineSearch } from 'react-icons/md'

const PAGE_NUMBER = 1

const App = () => {

  const [display,setDisplay] = useState([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(PAGE_NUMBER)

  useEffect(() => {
    
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=55903b004b65252bf433fb4218601d2c&la nguage=en-US&sort_by=popularity.desc&page=${page}`)

    .then(res => 
      setDisplay([...display,...res.data.results])
    )
    .catch((err) => console.log(err))
  }, [page])

  const endingScrolll = () => {
    setPage(prevPage => prevPage + 1 )
  }

  window.onscroll = function(){
    if(
      window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
    ){
      endingScrolll()
    }
  }

  return (
      <div className='p-7'>
      <div className='flex justify-center'>

      <input type='text' placeholder='Search...' className='p-4 bg-starColor inline-block focus:outline-none font-titles'
        onChange={(e) => setSearch(e.target.value)}
      />

      <button className='bg-starColor text-black w-14 h-14'>
      <MdOutlineSearch className='inline'/>
      </button>
      </div>
      <ul className='grid grid-cols-3 p-7 gap-7'>

        {
          display.filter(clip => {
            if( search === ''){
              console.log(clip)
              return clip
            } 
            else if (clip.title.toLowerCase().includes(search.toLowerCase())){

              return clip
            }
            else if (clip.release_date.toLowerCase().includes(search.toLowerCase())){
              return clip
            }
          })
          .map(clip => {
            return(
            <div key={clip.id} 
            className='max-w-md mx-auto text-center text-white
            bg-black rounded-2xl break-words relative
            hover:bg-red-600 hover: transition-all duration-300 ease-in-out hover:-translate-y-3 transform'
            >

            {/*------------------------------------------Hope You Like It !!------------------------------------------------
              The below code is not displaying Movies poster as the key given in the pdf, so For layout I am displaying an Image(named SAMPLE) to review the cards.
              -------------------->>>>>> src={clip.backdrop_path} is not displaying Images <<<<<<-------------------
            */}

            <img src={sample}
            alt={clip.original_title} 
              className='rounded-t-md'
            />

            <li className='font-titles text-lg p-2'>
            {clip.title}</li>
            <li className='font-sharp p-1 bg-starColor text-black inline absolute top-0 left-0 rounded-tl-sm rounded-br-2xl'>
            <FaRegStar className='inline m-1'/>
            {clip.vote_average}</li>
            <li className='font-digital p-1 absolute top-0 right-0 bg-green-800 rounded-tr-md rounded-bl-2xl'>
            <FaChartLine className='inline m-1'/>
            {clip.vote_count}</li>
            <li className='font-sharp text-base p-2'>
            <MdMovieCreation className='inline m-1'/>
            {clip.release_date}</li>
            </div>
          );
          })}
      </ul>       
      </div>
  )
}

export default App

