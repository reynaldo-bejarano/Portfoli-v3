import React from 'react'
import image from "../../static/underconstruction.png"


const About = () => {
  return (
    <div className='lg:flex lg:justify-center gap-10 py-20 lg:py-10' id='about'>
      <div className='lg:w-[60%]'>
        <h2  className='text-center lg:text-start py-5 font-bold text-4xl 2xl:text-6xl '>Some things <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-400'>about me!</span></h2>
        <p className='text-center lg:text-start  font-bold text-md 2xl:text-xl text-slate-700 py-5'>
          Hi! My name is Reynaldo Bejarano and I enjoy creating things that live on the web.<span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-700'> My interest in web development started in 2020 while studying computer engineering </span>- spending many hours watching tutorials on YouTube and other platforms taught me a lot about HTML and CSS!
        </p>
        <p className='text-center lg:text-start  font-bold text-md 2xl:text-xl text-slate-700 py-1'>
          Currently pursuing a bachelor's degree in computer engineering (May 2023) with experience in Front-end development: <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-700'>HTML, CSS, JavaScript, React JS, Frameworks CSS, Firebase.</span>  Looking for an internship or a job in a technology company to expand Front-end development knowledge and gain professional experience.
        </p>
        <p className='text-center lg:text-start  font-bold text-md 2xl:text-xl text-slate-800 py-5'>Creative Solutions | English / Spanish | Responsive Design</p>
      </div>
      <div className='lg:w-[40%] flex justify-center py-5'>
        <img className='rounded-3xl' src={image} alt="img" width={500} />
      </div>
    </div>
  )
}

export default About