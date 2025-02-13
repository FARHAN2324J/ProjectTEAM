import { Link } from 'react-router-dom';
import '../App.css'
export default function Main() {
    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
      }, false);
      
    return (
        <div className='flex my-50 flex-col'>
            <div className="progress"></div>
            <div className='flex-col flex gap-5 w-[100%] justify-center items-center sm:flex-row'>
                <Link to="/post" className='p-5 rounded-tl-xl w-[80%] sm:w-[25%] md:w-[40%] xl:w-[25%] lg-[50%] rounded-br-xl rounded-bl-xl Round border-1 border-[#9ca3af]'>
                    <section>
                        <div className='flex items-center gap-5'>
                            <img  src="/src/FooterIcons/magic.png" className='w-[11%]' alt="" />
                            <h1 className='text-[#fffc] font-bold text-lg'>Create Post</h1>
                        </div>
                        <div className='px-10 py-8 text-[#9ca3af]'>
                            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, rem?</span>
                        </div>
                    </section>
                </Link>
                <section className='p-5 rounded-tl-xl w-[80%] sm:w-[25%] md:w-[40%] xl:w-[25%] lg-[50%] rounded-br-xl rounded-bl-xl Round border-1 border-[#9ca3af]'>
                    <div className='flex items-center gap-5'>
                        <img  src="/src/FooterIcons/cooperation (1).png" className='w-[11%]' alt="" />
                        <h1 className='text-[#fffc] font-bold text-lg'>Business</h1>
                    </div>
                    <div className='px-10 py-8 text-[#9ca3af]'>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, rem?</span>
                    </div>
                </section>
            </div>
            <Link to="/posts"><h1 className='bg-amber-950 w-[10%] text-amber-100'>POSTS</h1></Link>
            
        </div>

    )
}

