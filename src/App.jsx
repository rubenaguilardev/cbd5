
import Coope from './assets/Untitled.png'

const handleClick = () => {

}

const App = () => {
  return (
    <main className='flex flex-col items-center p-3 text-center'>
      <section className='flex flex-col items-center mt-4  h-[100vh]'>
        <h1 className='text-[3.3rem] mb-3'>Today is 
          <span className="text-[#ffbcff]">
            Coope's</span> Birthday! 🎂
        </h1>
        <img 
          className='w-[400px] border-5 border-[rgb(132,47,165)] rounded-[50%] mb-8' 
          src={Coope} 
          alt="Picture of Cooper"
        />
        <button
          onClick={handleClick} 
          className='px-7 py-10 bg-[rgb(132,47,165)] rounded-xl cursor-pointer text-2xl'>
            PRESS ME FOR A SURPRISE 🎁
        </button>
      </section>
      
      <div>
          <h2>5 years old</h2>
          <span className="">July 25, 2025</span>
      </div>
      <h3>Here's how happy we are for you on your special day! 🥳</h3>
      <div className="">
          
          <div className=''></div>
      </div>
    </main>
  )
}

export default App