import React from 'react'

const KanjiExplanation = () => {
  return (
    <div className='px-[160px] py-[60px] flex flex-row items-center gap-8 border-b'>
        <h1 className='font-[700] text-[48px]'>駐</h1>
        <div>
            <p>チュウ</p>
            {/* <p>Yomi</p> */}
        </div>
        <div className='grid grid-flow-col-dense grid-rows-2 gap-4'>
            <div className='flex items-center gap-4 flex-[50%]'>
                <div>
                    <h1 className='font-[700] text-[40px]'>駐車</h1>
                    <p className='font-[400] text-[14px]'>ちゅうしゃ</p>
                </div>
                <p>Parkir</p>
            </div>
            <div className='flex items-center gap-4 flex-[50%]'>
                <div>
                    <h1 className='font-[700] text-[40px]'>駐車</h1>
                    <p className='font-[400] text-[14px]'>ちゅうしゃ</p>
                </div>
                <p>Parkir</p>
            </div>
            <div className='flex items-center gap-4 flex-[50%]'>
                <div>
                    <h1 className='font-[700] text-[40px]'>駐車</h1>
                    <p className='font-[400] text-[14px]'>ちゅうしゃ</p>
                </div>
                <p>Parkir</p>
            </div>
        </div>
    </div>
  )
}

export default KanjiExplanation