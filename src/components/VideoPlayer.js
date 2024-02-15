


const VideoPlayer = ({current}) => {

    
  return (
    <div className='w-3/5 p-2 h-[500px]'>
        <video src={'./lucia/lucia'+current+'.mp4'} controls autoPlay 
        className='rounded w-full h-full bg-black'
        ></video>
    </div>
  )
}

export default VideoPlayer