
import coope from './assets/Untitled.png'
import sound from './assets/coopesbday.mp3'
import excited from './assets/excited.gif'
import { useState, useEffect, useRef } from 'react'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'


const App = () => {

  const [value, setValue] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(new Audio(sound))
 
  const { width, height } = useWindowSize()

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
      {<Confetti/>}

    } else {
      audioRef.current.currentTime = 0
    }
  }, [isPlaying])

 
  const gifts = [
    {
      id: 1,
      text: "Here's how happy we are for you on your special day! 🥳",
    },
    {
      id: 2,
      text: "How Abuela reacts when you enter the room ❤️",
    },
    {
      id: 3,
      text: "If I had to describe you with ONE word 🤗"
    },
    {
      id: 4,
      text: "No one is as amazing as you except 🤩"
    },
    {
      id: 5,
      text: "HAPPY BIRTHDAY COOPER LUNA!"
    }
  ]

  const handlePress = () => {
    setImage(gifts[0].surprise)
  }

  

  const giftText = gifts.map(gift => {
    return (
    <section 
      className='flex flex-col items-center'
      key={gift.id}
    >
      
        <h3 className='text-4xl mb-5'>{gift.text}</h3>
        <div
          onClick={handlePress} 
          className={`gift${gift.id} h-[400px] w-[400px] mb-12 bg-cover rounded-xl shadow-2xl cursor-pointer`}
          
        ></div>
    </section>
    )
})

  const toggleAudio = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      
      <main className='container mx-auto flex flex-col items-center justify-center px-3 pb-3 text-center'>
        <section className='flex flex-col items-center justify-center h-[100vh]'>
          <h1 className='text-5xl mb-5'>Today is <span className="text-[#ffbcff]"> Coope's </span> Birthday! 🎂
          </h1>
          <img 
            className='w-[340px] border-5 border-[rgb(84,33,126)] rounded-[50%] mb-8 shadow-2xl' 
            src={coope} 
            alt="Picture of Cooper"
          />
          <div>
            <h2 className='text-4xl mb-3'>5 years old</h2>
            <span className="text-3xl">July 25, 2025</span>
          </div>
          <button
            onClick={
              () => { 
              setValue(value + 1)
              toggleAudio()
            }}
            className='w-full mt-8 py-5 bg-[rgb(84,33,126)] rounded-xl cursor-pointer text-3xl shadow-2x'>
              PRESS HERE FOR A SURPRISE 🎁
          </button>
        </section>
        
        {giftText}
        <div className="">
            
            <div className=''></div>
        </div>
      </main>
    </>
  )
}

export default App