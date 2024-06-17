import MeetingTypeList from '@/components/MeetingTypeList';
import React from 'react';
import moment from 'moment-timezone';

const Home = () => {
  // Get the current time in a specific timezone, e.g., 'Asia/Kolkata' for Indian Standard Time
  const now = moment.tz('Asia/Kolkata');

  const time = now.format('hh:mm A'); // Format time as 02:35 AM
  const date = now.format('dddd, MMMM D, YYYY'); // Format date as Tuesday, June 18, 2024

  return (
    <section className='flex size-full flex-col gap-10 text-white ' >
      <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>

        <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
          <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal '> Video calls for everyone </h2>

          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-extrabold lg:text-7xl'>
             {time}
            </h1>

            <p className='text-lg font-medium text-sky-1 lg:text-2xl'> {date} </p>

          </div>
        </div>
      </div>

      <MeetingTypeList />

    </section>
  )
}

export default Home
