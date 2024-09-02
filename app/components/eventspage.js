import Link from 'next/link';
import React from 'react'

const Eventspage = ({ title,descriptions, eventguid , judCriteria, facultyCod,studentCod, date, time, venue}) => {
//     eventguid = [
//         ["Theme", "Open"],
//         ["Time Limit", "2 hours"],
//         ["Materials", " Participants must bring their own painting materials"],
//         ["Safety", "Only skin-safe paints should be used; participants must take care of their models"]
// ]
// judCriteria=["Criteria","Adherence to their theme","Neatness"]
// facultyCod=[" Miss Sakshi Koli","Miss Riya Kukreti","Mr. Abhishek Jain"]
// studentCod=["Divya Srivastava"]
// date=" September 12th, 2024"
// time="11:00 AM- 1:00 PM"
// venue=" UIT Ground Floor"
const backgroundImageStyle2 = {
    backgroundImage: `url("/bgimgtech.avif")`,
    backgroundSize: 'cover', // Ensures the image covers the container
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    opacity: 1,
  };
    return (
        <div>
            <div className='w-full' style={backgroundImageStyle2}>
            <h1 className='text-center font-bold text-xl md:text-4xl p-5'> {title}</h1>
            <div className='text-center p-3'>
               <Link href={"/register"}> <button className='p-4 bg-cyan-300 rounded-full font-bold md:text-2xl'>Register Now!</button></Link>
            </div>
            <div className='p-7 text-3xl font-semibold'>
                Event Description
            </div>
            <div className='p-7 pt-1 font-sans text-xl text-justify'>{descriptions.split("\n").map((item, i) => <p key={i}>{item}</p>)}</div>
            <div className='p-7 text-3xl font-semibold'>
                Event Guidelines
            </div>
            <div className='p-7 pt-1 font-sans text-xl text-justify'>{eventguid.map((item, i) => <ul key={i}>{`${item[0]}    :    ${item[1]}`}</ul>)}</div>
            </div>
            <div className='md:flex justify-center'>
            <div>
            <div className='p-7 text-3xl font-semibold'>
                Judging Criteria
            </div>
            <div className='p-7 pt-1 font-sans text-xl text-justify'>{judCriteria.map((item, i) => <p key={i}>{item}</p>)}</div>
            </div>
            <div>
            <div className='p-7 text-3xl font-semibold'>
                Faculty Coordinator
            </div>
            <div className='p-7 pt-1 font-sans text-xl'>{facultyCod.map((item, i) => <p key={i}>{item}</p>)}</div>
            </div>
            <div>
            <div className='p-7 text-3xl font-semibold'>
            Student coordinator
            </div>
            <div className='p-7 pt-1 font-sans text-xl'>
  {studentCod[0]}{' '}
  <a className='font-semibold' href={`tel:${studentCod[1]}`}>{studentCod[1]}</a>
</div>

            </div>
            </div>
            <div className='md:flex justify-center'>
                <div className='md:flex flex-col items-center'>
            <div className='p-7 text-3xl font-semibold'>
            Date
            </div>
            <div className='p-7 pt-1 font-sans text-xl'>{date}</div>
            </div>
            <div className='md:flex flex-col items-center'>
            <div className='p-7 text-3xl font-semibold'>
            Time
            </div>
            <div className='p-7 pt-1 font-sans text-xl'>{time}</div>
            </div>
            <div className='md:flex flex-col items-center'>
            <div className='p-7 text-3xl font-semibold'>
            Venue
            </div>
            <div className='p-7 pt-1 font-sans text-xl'>{venue}</div>
            </div>
            </div>
        </div>
    )
}

export default Eventspage


