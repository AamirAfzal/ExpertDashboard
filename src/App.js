import { Component } from 'react'

import Logo from './assets/altafino.svg'
import Loader from './assets/icons/loader.png'
import Up from './assets/icons/up.png'
import Down from './assets/icons/down.png'
import Android from './assets/icons/Android.png'
import Apple from './assets/icons/Apple.png'
import Web from './assets/icons/Web.png'
import './app.styles.scss'
import LineChart from './LineChart'
import LineChart2 from './Line2Chart'


class App extends Component {
  render() {
    return (
      // Full Screem Div -> Column
      <div className='flex flex-col w-full'>

        {/* NavBar */}
        <div className="flex justify-between bg-gradient-to-r from-c1 to-c2 h-14">
          <p className="flex items-center text-3xl text-white font-sans pl-32">Mine'd</p>
          <div className="flex items-center  pr-8">
            <select className="h-3/5 w-72 text-sans pl-6
           bg-transparent rounded-md text-white shadow-2xl border-2">
              <option className="ml-6">CHOOSE EXPERT</option></select>
          </div>
        </div>
        {/* Navbar Completed */}

        {/* Grid Starts */}
        <div className="grid grid-cols-2 gap-4">
          {/* 1st Grid Column */}
          <div>

            {/* Expert Name and Logo */}
            <div className="flex flex-row">
              <p className="text-2xl font-medium font-sans pl-32 pt-4">Expert Name</p>
              <img className="h-12 w-10 pt-6 pl-4" src={Loader} />
            </div>

            {/* Main Container for left Grid */}
            <div className="ml-32 mt-4 mr-6 rounded-xl border border-gray-300 shadow-2xl">
              <div className="pt-6 pl-6 text-2xl font-normal pb-8">
                <h1>Overview</h1>
              </div>
              <div className="grid grid-cols-3 gap-3 mx-5">
        
                <div className="rounded-xl  border border-gray-300 mybackground relative h-32">
                  <div className="absolute left-0 top-4 px-3 flex flex-row justify-between items-center w-full">
                    <p className="text-white  text-xs ">FOLLOWERS</p>
                    <div className="flex flex-row items-center"><img className="text-white mr-1  h-4 text-xs" src={Up} alt="b" />
                    <p className="text-c12 text-xs">6.2%</p></div>
                  </div>
                  <p className="text-white pl-4 text-2xl absolute pt-8 ">24</p>
                  <p className="text-white pl-11 text-xs absolute pt-24 grid justify-items-center ">LAST 7 DAYS</p>
                  <LineChart />
                </div>

                <div className="rounded-xl  border border-gray-300  mybackground2 relative h-32">
                  <div className="absolute left-0 top-4 px-3 flex flex-row justify-between items-center w-full">
                    <p className="text-white  text-xs ">PREMIUM SUBS.</p>
                    <div className="flex flex-row items-center"><img className="text-white mr-1  h-4 text-xs" src={Down} alt="b" />
                    <p className="text-c13 text-xs">3.8%</p></div>
                  </div>
                  <p className="text-white pl-4 text-2xl absolute pt-8 ">2</p>
                  <p className="text-white pl-11 text-xs absolute pt-24 grid justify-items-center ">LAST 7 DAYS</p>
                  <LineChart />
                </div>
                <div className="rounded-xl  border border-gray-300 mybackground3 relative h-32">
                  <p className="text-white pl-4 pt-4 text-xs absolute">MONTHLY PAYOUT</p>
                  <p className="text-white pl-4 text-2xl absolute pt-8">4772</p>
                  <p className="text-white pl-7 text-xs absolute pt-24 grid justify-items-center ">NEXT DATE 23-10-21</p>
                  <LineChart />
                </div>

              </div>
              <div className="pt-6 pl-6 text-2xl font-normal pb-8">
                <h1>ENGAGEMENT METRICS</h1>
              </div>
              <div className="grid grid-cols-2 gap-3 mx-5">
                <div className="rounded-xl  border border-gray-300 mybackground4 relative h-40">
                  <p className="text-black text-lg left-1/3 absolute pt-32 flex justify-center ">Live Viewers</p>
                  <LineChart2 />

                </div>
                <div className="rounded-xl  border border-gray-300  mybackground4 relative h-40">
                  <p className="text-black left-1/3 text-lg absolute pt-32 grid justify-items-center ">Video Viewers</p>
                  <LineChart2 />
                </div>
                <div className="rounded-xl  border border-gray-300  mybackground4 relative h-40">
                  <p className="text-black left-8 text-lg absolute pt-32 grid justify-items-center ">Mine’d Minutes Viewers</p>
                  <LineChart2 />
                </div>
                <div className="rounded-xl  border border-gray-300 mybackground4 relative h-40">
                  <p className="text-black left-1/3 text-lg absolute pt-32 grid justify-items-center ">Feels Received</p>
                  <LineChart2 />
                </div>
              </div>
              <div className="pt-6 pl-3 text-2xl font-normal pb-2 w-full">
                <h3>FOLLOWERS INSIGHT</h3>
                <p className="pt-2 text-sm">Areas of Interest of your Followers</p>
              </div>

              <div className="grid grid-cols-3 gap-2 mx-2 pb-4 text-white">
                <div className="pt-2">
                  <button className="pr-36 pl-4 text-sm font-medium  rounded-full w-full h-6  border buttonbackground  border-gray-300 shadow-2xl">LOVE</button>
                </div>
                <div className="pt-2">
                  <button className="pr-36 pl-4 text-sm font-medium  rounded-full w-full h-6 border  buttonbackground border-gray-300 shadow-2xl">PURPOSE</button>
                </div>
                <div className="pt-2">
                  <button className="pr-36 pl-4 text-sm font-medium  rounded-full w-full h-6 border  buttonbackground border-gray-300 shadow-2xl">MONEY</button>
                </div>

              </div>
            </div>


          </div>

          {/* 2nd Grid Column */}
          <div>
            <div>
              <div className="pt-4">
                <button className="items-center font-medium  rounded-lg  h-8 border w-11/12 border-gray-300 shadow-2xl">REFERAL LINK</button>
              </div>
            </div>
            <div className="pt-2 text-2xl font-medium pb-8">
              <h1>PAYOUT BREAKDOWN</h1>
            </div>

            {/* Main Container for Right Grid */}
            <div className=" mt-4 mr-6 rounded-xl border border-gray-300 shadow-2xl h-5/6">
              <div className="pt-6 pl-4 text-2xl font-normal pb-8">
                <h1>REFERRAL PAYOUT</h1>
              </div>
              <div className=" grid grid-cols-4  mx-5 text-center">
                <div>
                  <p className="text-black font-normal text-xl">TYPE</p>
                </div>
                <div >
                  <p className="text-black font-bold text-xl">Active Subscriptions</p>
                </div>
                <div >
                  <p className="text-black font-bold text-xl">Avg Subscription Cost</p>
                </div>
                <div >
                  <p className="text-black font-bold text-xl">Your Payout</p>
                </div>
                <div className='pt-4 pb-2 border-b flex flex-row'>
                  <img className="h-8 px-4 pb-2" src={Apple} />
                  <p className="text-black">iOS User</p>
                </div>
                <div className='pt-4 pb-2 border-b'>
                  <p className="text-black">1472</p>
                </div>
                <div className='pt-4 pb-2 border-b'>
                  <p className="text-black"></p>
                </div>
                <div className='pt-4 pb-2 border-b'>
                  <p className="text-black">$439</p>
                </div>
                <div className='pt-4 pb-2 flex flex-row border-b'>
                  <img className="h-8 px-4 pb-2" src={Android} />
                  <p className="text-black">Android User</p>
                </div>
                <div className='pt-4 pb-2 border-b'>
                  <p className="text-black">1240</p>
                </div>
                <div className='pt-4 pb-2 border-b'>
                  <p className="text-black"></p>
                </div>
                <div className='pt-4 pb-2 border-b'>
                  <p className="text-black">$249</p>
                </div>
                <div className='pt-4 flex flex-row'>
                  <img className="h-8 px-4 pb-2" src={Web} />
                  <p className="text-black">Web User</p>
                </div>
                <div className='pt-4'>
                  <p className="text-black">439</p>
                </div>
                <div className='pt-4'>
                  <p className="text-black"></p>
                </div>
                <div className='pt-4'>
                  <p className="text-black">$153</p>
                </div>

              </div>

              <div className="pt-16 pl-4 text-2xl font-normal pb-8">
                <h1>ENGAGEMENT PAYOUT</h1>
              </div>

              <div className=" grid grid-cols-4 gap-3 mx-5 text-center">
                <div>
                </div>
                <div >
                  <p className="text-black font-bold text-xl">Active Mine’d subcribers</p>
                </div>
                <div >
                  <p className="text-black font-bold text-xl">Engagement Tier</p>
                </div>
                <div >
                  <p className="text-black font-bold text-xl">Your Payout</p>
                </div>
                <div className='pt-2 flex flex-row'>
                </div>
                <div className='pt-2'>
                  <p className="text-black">1472</p>
                </div>
                <div className='pt-2'>
                  <p className="text-black">Tier 1</p>
                </div>
                <div className='pt-2'>
                  <p className="text-black">$439</p>
                </div>


              </div>

              <div className="pt-6 pl-4 text-2xl font-normal pb-2 w-full">
                <h3>TOTAL</h3>
              </div>

              <div className=" grid grid-cols-4 gap-3 mx-5 text-center pb-4">
                <div>
                </div>
                <div >
                  <p className="text-black font-bold text-xl">Monthly Recurring</p>
                </div>
                <div >
                  <p className="text-black font-bold text-xl">YTD</p>
                </div>
                <div >
                </div>
                <div className='pt-2 flex flex-row'>
                </div>
                <div className='pt-2'>
                  <p className="text-black">$11000</p>
                </div>
                <div className='pt-2'>
                  <p className="text-black">$220000</p>
                </div>
                <div className='pt-2'>
                </div>


              </div>
            </div>


          </div>
        </div>
        {/* Grid Ends */}


      </div>
    )
  }
}

export default App
