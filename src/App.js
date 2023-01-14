import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div class="container mx-auto mt-12">
        <h1 class="text-2xl text-blue-700 font-bold mb-3 ">Are you ready?</h1>
        <button class="btn-blue">
          Yes
        </button>
        <button class="btn-red">
          No
        </button>
      </div>
      <div class="container mx-auto mt-12">
      <h1 class="text-2xl text-blue-700 font-bold mb-3 ">Kartu Misterius</h1>
        <div class="grid grid-cols-4 grid-rows-2 gap-4">
          <div class="sm:col-span-4 md:col-span-2">
            <div class="text-center bg-blue-100 rounded p-4 border-2 border-blue-500">
            Column 1
            <img src="https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" class="w-full"></img>
            </div>
          </div>
          <div class="sm:col-span-4 md:col-span-2">
          <div class="text-center bg-blue-100 rounded p-4 border-2 border-blue-500">
            Column 2
            <img src="https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" class="w-full"></img>
            </div>
          </div>
          <div class="sm:col-span-4 md:col-span-2 ">
          <div class="text-center bg-blue-100 rounded p-4 border-2 border-blue-500">
            Column 3
            <img src="https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" class="w-full"></img>
            </div>
          </div>
          <div class="sm:col-span-4 md:col-span-2">
          <div class="text-center bg-blue-100 rounded p-4 border-2 border-blue-500">
            Column 4
            <img src="https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" class="w-full"></img>
            </div>
          </div>
          <div class="sm:col-span-4 md:col-span-2 ">
          <div class="text-center bg-blue-100 rounded p-4 border-2 border-blue-500">
            Column 5
            <img src="https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" class="w-full"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
