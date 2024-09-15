import Lenis from 'lenis'
import { useEffect } from 'react'
import "./App.css"
import 'lenis/dist/lenis.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
export default function App() {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  useEffect(() => {
    document.querySelectorAll(".elem").forEach(elem => {
      let image = elem.querySelector("img")
      let tl = gsap.timeline()

      let xTransform = gsap.utils.random(-100, 100)

      tl
        .set(image, {
          transformOrigin: `${xTransform < 0 ? 0 : "100%"}`
        })
        .to(image, {
          scale: 0,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        }, "start")
        .to(elem, {
          xPercent: xTransform,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        })
    });
  })

  return (
    <div className="w-full bg-zinc-900">
      <div className='grid grid-cols-8 grid-rows-20 gap-2 overflow-hidden'>

        <div className="elem col-span-1 row-span-1" style={{ "--r": 1, "--c": 3 }}>
          <img src="./img/1.jpg" alt="Image 1" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 1, "--c": 5 }}>
          <img src="./img/2.jpg" alt="Image 2" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 2, "--c": 1 }}>
          <img src="./img/3.jpg" alt="Image 3" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 2, "--c": 8 }}>
          <img src="./img/4.jpg" alt="Image 4" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 3, "--c": 5 }}>
          <img src="./img/5.jpg" alt="Image 5" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 3, "--c": 7 }}>
          <img src="./img/6.jpg" alt="Image 6" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 4, "--c": 2 }}>
          <img src="./img/7.jpg" alt="Image 7" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 4, "--c": 6 }}>
          <img src="./img/8.jpg" alt="Image 8" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 5, "--c": 8 }}>
          <img src="./img/9.jpg" alt="Image 9" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 5, "--c": 3 }}>
          <img src="./img/10.jpg" alt="Image 10" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 6, "--c": 1 }}>
          <img src="./img/11.jpg" alt="Image 11" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 6, "--c": 4 }}>
          <img src="./img/12.jpg" alt="Image 12" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 7, "--c": 6 }}>
          <img src="./img/13.jpg" alt="Image 13" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 7, "--c": 2 }}>
          <img src="./img/14.jpg" alt="Image 14" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 8, "--c": 5 }}>
          <img src="./img/15.jpg" alt="Image 15" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 8, "--c": 3 }}>
          <img src="./img/16.jpg" alt="Image 16" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 9, "--c": 8 }}>
          <img src="./img/17.jpg" alt="Image 17" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 9, "--c": 4 }}>
          <img src="./img/18.jpg" alt="Image 18" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 10, "--c": 2 }}>
          <img src="./img/19.jpg" alt="Image 19" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 10, "--c": 6 }}>
          <img src="./img/20.jpg" alt="Image 20" />
        </div>

      </div>
      <div className='fixed top-0 font-display left-0 w-full h-full flex items-center justify-center flex-col text-white ' >
        <h1 className='text-8xl font-["Helvetica"] uppercase mb-4'>Thomas vance <sup>	&reg;</sup></h1>
        <h2 className='text-5xl'>我们很开心 机器</h2>
      </div>
      <div className='w-full h-screen flex justify-center items-center relative bg-[#D1D1D1] mx-auto py-96 z-[999] text-center'>
        <p className="text-black font-regular text-4xl w-3/4 leading-[3.2rem] text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quaerat eius est in quibusdam quas deleniti ab laborum voluptas ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sit soluta, error quisquam fuga earum sapiente obcaecati animi corporis dolorum harum exercitationem quaerat perferendis autem atque illo nostrum voluptatem asperiores &copy; </p>
      </div>
    </div >

  )
}