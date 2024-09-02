"use client"
import React, { useEffect } from 'react'
import { useState } from 'react';

const Page = () => {
    const [selectedEvents, setSelectedEvents] = useState([]);

  const handleCheckboxChange = (value) => {
    if (selectedEvents.includes(value)) {
      setSelectedEvents(selectedEvents.filter((event) => event !== value));
    } else if (selectedEvents.length > 2) {
      return;   
    } else {
      setSelectedEvents([...selectedEvents, value]);
    }
  };
    
  return (
    <div className='bg-black'>
      

<form className="max-w-[60vw] mx-auto ">
    <h1 className='text-4xl font-bold text-white text-center  p-16'>Registration Form</h1>
  <div className="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer" placeholder=" " required />
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="number" name="uurollno" id="uurollno" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer" placeholder=" " required />
      <label for="uurollno" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">University Roll No</label>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer" placeholder=" " required />
        <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer" placeholder=" " required />
        <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer" placeholder=" " required />
        <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Branch</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer" placeholder=" " required />
        <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Department</label>
    </div>
  </div>
 
  <div className="grid md:grid-cols-2 md:gap-6">
  <div className="relative z-0 w-full mb-5 group">
  <select
    name="year"
    id="year"
    className="bg-black rounded p-3-full block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer"
    required
  >
    <option  value="" disabled selected>
      Select Year
    </option>
    <option className='text-black' value="1st">1st</option>
    <option className='text-black' value="2nd">2nd</option>
    <option className='text-black' value="3rd">3rd</option>
    <option className='text-black'value="4th">4th</option>
    <option className='text-black'value="5th">5th</option>
  </select>
  <label
    htmlFor="year"
    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-pink-600"
  >
  </label>
</div>

    <div className="relative z-0 w-full mb-5 group">
        <input type="number" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer" placeholder=" " required />
        <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
    </div>
  </div>
  <div className='w-full'>
          <label className="block mb-2  text-center font-semibold text-xl text-white">Select the Events:</label>
<div className=' justify-center flex gap-5'>
          <div className='flex flex-col' >
          <div className="flex items-center mb-4">
            <input
             onChange={() => handleCheckboxChange("Video Presentation")}
             disabled={selectedEvents.length >= 2 && !selectedEvents.includes("Video Presentation")}
              type="checkbox"
              className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500 dark:focus:ring-pink-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="Video Presentation" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Video Presentation
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="E-Sports"
              type="checkbox"
              onChange={() => handleCheckboxChange("Esports")}
              disabled={selectedEvents.length >= 2 && !selectedEvents.includes("Esports")}
              className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500 dark:focus:ring-pink-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="E-Sports" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              E-Sports
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="Web War"
              type="checkbox"
              onChange={() => handleCheckboxChange("Web War")}
              disabled={selectedEvents.length >= 2 && !selectedEvents.includes("Web War")}
              className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500 dark:focus:ring-pink-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="Web War" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Web War
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="Model Presentation"
              type="checkbox"
              onChange={() => handleCheckboxChange("ModelPresentation")}
              disabled={selectedEvents.length >= 2 && !selectedEvents.includes("ModelPresentation")}
              className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500 dark:focus:ring-pink-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="Model Presentation" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Model Presentation
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="Face Painting"
              type="checkbox"
              onChange={() => handleCheckboxChange("FacePainting")}
              disabled={selectedEvents.length >= 2 && !selectedEvents.includes("FacePainting")}
              className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500 dark:focus:ring-pink-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="Face Painting" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Face Painting
            </label>
          </div>

        </div>
        <div className='flex flex-col' >
          <div className="flex items-center mb-4">
            <input
              id="Boat Race"
              type="checkbox"
              onChange={() => handleCheckboxChange("BoatRace")}
              disabled={selectedEvents.length >= 2 && !selectedEvents.includes("BoatRace")}
              className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500 dark:focus:ring-pink-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="Boat Race" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Boat Race
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="Painting"
              type="checkbox"
              onChange={() => handleCheckboxChange("Painting")}
              disabled={selectedEvents.length >= 2 && !selectedEvents.includes("Painting")}
              className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500 dark:focus:ring-pink-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="Painting" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
             Painting
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="Anime Creation"
              type="checkbox"
              className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500 dark:focus:ring-pink-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={() => handleCheckboxChange("AnimeCreation")}
              disabled={selectedEvents.length >= 2 && !selectedEvents.includes("AnimeCreation")}
            />
            <label htmlFor="Anime Creation" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Anime Creation
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="Engineer's Fun Run"
              type="checkbox"
              onChange={() => handleCheckboxChange("EngineerFunRun")}
              disabled={selectedEvents.length >= 2 && !selectedEvents.includes("EngineerFunRun")}
              className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500 dark:focus:ring-pink-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="Engineer's Fun Run" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Engineer&apos;s Fun Run
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="Cosplay"
              type="checkbox"
              onChange={() => handleCheckboxChange("cosplay")}
              disabled={selectedEvents.length >= 2 && !selectedEvents.includes("cosplay")}
              className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500 dark:focus:ring-pink-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="Cosplay" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Cosplay
            </label>
          </div>
        </div>
        <div className='flex flex-col' >
          <div className="flex items-center mb-4">
            
            <input
              id="Coding War"
              type="checkbox"
              onChange={() => handleCheckboxChange("codingwar")}
              disabled={selectedEvents.length >= 2 && !selectedEvents.includes("codingwar")}
              className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500 dark:focus:ring-pink-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="Coding War" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Coding War
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="Robo Race"
              type="checkbox"
              onChange={() => handleCheckboxChange("roborace")}
              disabled={selectedEvents.length >= 2 && !selectedEvents.includes("roborace")}
              className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500 dark:focus:ring-pink-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="Robo Race" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Robo Race
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="Technical Quiz"
              type="checkbox"
              onChange={() => handleCheckboxChange("technicalquiz")}
              disabled={selectedEvents.length >= 2 && !selectedEvents.includes("technicalquiz")}
              className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500 dark:focus:ring-pink-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="Technical Quiz" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Technical Quiz
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="Cooking Competition"
              onChange={() => handleCheckboxChange("cookingcomp")}
              disabled={selectedEvents.length >= 2 && !selectedEvents.includes("cookingcomp")}
              type="checkbox"
              className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500 dark:focus:ring-pink-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="Cooking Competition" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Cooking Competition
            </label>
          </div>
        </div>
        </div>
</div>
<div className='flex items-center justify-center py-5'>
  <button type="submit" className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">Submit</button>
</div>
</form>
    </div>
  )
}

export default Page
