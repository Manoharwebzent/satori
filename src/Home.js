import React from 'react'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Slider from './Slider'

function Home() {
  return (
    <>
    <Navbar/>
    <Slider/>
    <div className="container-fluid">
        <div className="container py-5">
    <div className="row align-items-center">
       <div className="col-md-5">
           <div className="enroll-img">
               <img src="assets/img/about.jpg" className='img-fluid' alt="" />
           </div>
       </div>
       <div className="col-md-7">
           <div className="enroll-text">
               <h1>Reinvent how you think of remote work..</h1>
               <h6 className='clr'>Some topics this program covers.</h6>
               <div className="enroll-list">
                   <div className="enroll-ic">
                        <span><i class="bi bi-check2-all"></i></span>
                   </div>
                   <div className="enroll-lists">
<h4>Maximizing Remote Work Efficiency</h4>
<p className='mb-0'>Learn how to create the most productive remote workspace that you can have. Understand what contributes to your productivity and what takes away from it.</p>
                   </div>
               </div>
               <div className="enroll-list">
                   <div className="enroll-ic">
                        <span><i class="bi bi-check2-all"></i></span>
                   </div>
                   <div className="enroll-lists">
<h4>Minimizing Distractions</h4>
<p className='mb-0'>Understand what the main sources of your work distractions are, and work to remove them from your environment.</p>
                   </div>
               </div>
               <div className="enroll-list">
                   <div className="enroll-ic">
                        <span><i class="bi bi-check2-all"></i></span>
                   </div>
                   <div className="enroll-lists">
<h4>Techniques to Balance Work & Home Life</h4>
<p className='mb-0'>Kids, pets, household chores, none of them magically go away when you go remote. However, with proper time management, you can overcome these obstacles with ease.</p>
                   </div>
               </div>
           </div>
       </div>
    </div>
        </div>
    </div>
    <div className="container-fluid">
        <div className="enroll-big">
        <div className="container">
<div className="row">
    <div className="col-md-12 col-lg-8 offset-lg-2">
        <div className="enroll-now-head text-center">
            <h1>Struggling to handle the demands of remote work? Take this course, it will change the way you work from home.</h1>
            <div className="black-btn text-center mt-4">
                <button>Enroll Now</button>
            </div>
        </div>
    </div>
</div>
</div>
        </div>
       
    </div>
    <Footer/>
    </>
  )
}

export default Home