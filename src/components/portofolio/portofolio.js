import React from 'react';

const Portofolio = () => {
    return (
        <div className="container mx-auto bg-orange-500 dark:bg-orange-700 dark:text-white">
            <div className="md:my-32 py-24 md:px-24 px-16 text-center">
              <div className="font-bold md:text-4xl text-lg mx-auto">Portofolio</div>
              <div className="grid md:grid-cols-4 gap-4 mt-8">
                <div className="box-border h-56 w-56 mt-8 border-4 hover:scale-150 duration-500 mx-auto">Portofolio 1</div>
                <div className="box-border h-56 w-56 mt-8 border-4 hover:scale-150 duration-500 mx-auto">Portofolio 2</div>
                <div className="box-border h-56 w-56 mt-8 border-4 hover:scale-150 duration-500 mx-auto">Portofolio 3</div>
                <div className="box-border h-56 w-56 mt-8 border-4 hover:scale-150 duration-500 mx-auto">Portofolio 4</div>
              </div>
            </div>
        </div>
    )
}
export default Portofolio