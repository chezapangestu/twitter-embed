// import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="max-w-2xl rounded-lg bg-white py-10 px-10 shadow-xl shadow-blue-200/50 border-2 border-blue-100/60">
      <div className="flex justify-between gap-5">
        <img className="float-left rounded-full w-12" src="https://pbs.twimg.com/media/ESQYr1nXkAA-V_K.jpg" alt="profile-pict"></img>
          <div className="mr-auto">
            <h6 className="font-bold">John Doe</h6>
            <h6 className="text-gray-400 ">@realjohndoe</h6>
          </div>
          <img className="w-12" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="twitter-icon"></img>
        </div>
        <div className="mt-5">
          <h6>Why do they call it 'debugging' when it feels more like 'wildly guessing and hoping for the best'? <hashtag>#programming #coding #debugging</hashtag></h6>
        </div>
        <div className="mt-5 flex gap-4">
          <img className="w-6 h-5" src="http://cdn.onlinewebfonts.com/svg/img_524760.png" alt="love-icon"></img>
          <h6 className="text-gray-500 text-sm font-semibold mr-1">650</h6>
          <h6 className="text-gray-500 text-sm font-semibold">3:40 PM - Feb 24, 2022</h6>
        </div>
    </div>
  );
}

export default App;
