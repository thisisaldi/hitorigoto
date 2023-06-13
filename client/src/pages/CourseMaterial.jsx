import React from 'react'
import CourseNavBar from '../components/CourseNavBar'
import KanjiTitle from '../components/KanjiTitle'
import KanjiExplanation from '../components/KanjiExplanation'

const CourseMaterial = () => {
  return (
    <div>
        <CourseNavBar />
        <div className='flex flex-row'>
            <div>
                <KanjiTitle />
                <KanjiExplanation />
                <KanjiExplanation />
                <KanjiExplanation />
            </div>
            <div className='border-2 border-black px-16 py-4 rounded-lg fixed right-[50px] top-60 w-50 h-50 flex flex-col gap-4'>
                <a href="/1" className='font-[700] text-[32px]'>1</a>
                <a href="/1" className='font-[700] text-[32px]'>2</a>
                <a href="/1" className='font-[700] text-[32px]'>3</a>
                <a href="/1" className='font-[700] text-[32px]'>4</a>
                <a href="/1" className='font-[700] text-[32px]'>5</a>
            </div>
        </div>
    </div>
  )
}

export default CourseMaterial