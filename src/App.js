import Switch from "./component/Switch";
import { AiOutlineHeart } from "react-icons/ai";
import {AiOutlineTwitter} from "react-icons/ai";

function App() {
  return (<div>
      <Switch />
    <div className="px-4 py-20 sm:px-20 md:px-36 lg:px-36 sm:py-96 md:py-96 lg:py-96 ">
      <div className="max-w-2xl min-w-sm mx-auto rounded-2xl bg-white dark:bg-card-dark py-10 px-10 shadow-xl dark:shadow-md shadow-blue-200/50 dark:shadow-blue-500/5 border-2 border-blue-100/60 dark:border-none transition 300 ease-in-out">
        <div className="flex justify-between gap-5">
          <img className="float-left rounded-full w-12" src="https://pbs.twimg.com/media/ESQYr1nXkAA-V_K.jpg" alt="profile-pict"></img>
            <div className="mr-auto">
              <h6 className="font-bold dark:text-white">John Doe</h6>
              <h6 className="text-gray-400 ">@realjohndoe</h6>
            </div>
          <AiOutlineTwitter size={48} color="dodgerblue"/>
          </div>
          <div className="mt-5 dark:text-white">
            <h6>Why do they call it 'debugging' when it feels more like 'wildly guessing and hoping for the best'? <hashtag>#programming #coding #debugging</hashtag></h6>
          </div>
          <div className="mt-5 flex gap-4">
            <AiOutlineHeart size={20} color="gray"/>
            <h6 className="text-gray-400 text-sm font-semibold mr-1">650</h6>
            <h6 className="text-gray-400 text-sm font-semibold">3:40 PM - Feb 24, 2022</h6>
          </div>
      </div>
      </div>
    </div>
  );
}

export default App;
