import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Contact() {
  return (
    <div data-aos="zoom-in" className='mx-1 text-5xl font-extrabold bg-slate-400 h-60'>
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-violet-500 inline-block align-middle">
     Contact Form
     </span>
    </div>
  )
}

export default Contact
