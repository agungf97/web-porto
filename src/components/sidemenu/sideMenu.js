import maf from '../../image/maf.png';

  const SideMenu = (props) => {
    const handleScrool = (id) => {
        const scroll = document.getElementById(id)
        scroll.scrollIntoView({ behavior: 'smooth' }, true)
        toggleShow (false)
    }

    const { isShow, toggleShow } = props
    
    return (
      <div className="block lg:hidden relative z-50 transition duration-300 ease-in-out">
        <div onClick={() => toggleShow(!isShow)} className={`${isShow ? 'opacity-40' : 'opacity-0 invisible'} fixed inset-0 bg-black transition-all duration-300 ease-in-out"`}/>
        <nav className={`${isShow ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 w-5/6 max-w-sm bg-white shadow-md overflow-y-auto transition duration-300 ease-in-out`}>
          <div className="py-8">
            <div>
                <img onClick={() => handleScrool('home')} className="w-24 mx-4 hover:scale-100 hover:opacity-90" src={maf} alt=""></img>
            </div>
            <div className="md:block mx-8 my-4 hover:font-semibold my-auto align-middle">
                <a onClick={() => handleScrool('about')}>About Me</a>
            </div>
            <div className="md:block mx-8 my-4 hover:font-semibold my-auto align-middle">
                <a onClick={() => handleScrool('experience')}>Experience</a>
            </div>
            <div className="md:block mx-8 my-4 hover:font-semibold my-auto align-middle">
                <a onClick={() => handleScrool('porto')}>Portofolio</a>
            </div>
            <div className="md:block mx-8 my-4 hover:font-semibold my-auto align-middle">
                <a onClick={() => handleScrool('contact')}>Contact</a>
            </div>
            <div className="fixed w-full inset-x-0 bottom-0 px-4 mb-4">
                <button className="text-center w-full font-bold md:block border-4 rounded-full px-6 align-middle border-orange-500 dark:border-orange-700 hover:border-orange-700 hover:text-white hover:bg-orange-700 duration-500">Resume</button>
            </div>
          </div>
        </nav>
      </div>
    )
  }
  
  export default SideMenu
  