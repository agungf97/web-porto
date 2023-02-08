import React from 'react';

const Portofolio = () => {
    return (
        <div className="container mx-auto bg-orange-500 dark:bg-orange-700 dark:text-white">
            <div className="md:my-32 md:py-16 py-8 md:px-24 px-16 text-center">
              <div className="font-bold md:text-4xl text-2xl mx-auto">Portofolio</div>
              <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-2 mt-8 cursor-default">
                <div className="box-border md:h-56 md:w-56 h-24 w-24 mt-8 border-4 hover:scale-125 duration-500 mx-auto">Portofolio 1</div>
                <div className="box-border md:h-56 md:w-56 h-24 w-24 mt-8 border-4 hover:scale-125 duration-500 mx-auto">Portofolio 2</div>
                <div className="box-border md:h-56 md:w-56 h-24 w-24 mt-8 border-4 hover:scale-125 duration-500 mx-auto">Portofolio 3</div>
                <div className="box-border md:h-56 md:w-56 h-24 w-24 mt-8 border-4 hover:scale-125 duration-500 mx-auto">Portofolio 4</div>
              </div>
            </div>
        </div>
    )
}
export default Portofolio