import React, { useState } from 'react'
import Start_Img from "../assets/start_img.png"
import Eye from "../assets/eye.png"
import Info from "../assets/info.png"
import ArrowDown from "../assets/arrow-down.png"
import Avatar from "../assets/Avatar.png"
import Edit from "../assets/edit.png"
import Select from '../assets/select.png'
import Contact from '../assets/contact.png'
import Feedback from "../assets/feedback.png"
import Report from "../assets/report.png"
import Suggest from "../assets/suggest.png"
import Like from "../assets/like.png"
import Comment from "../assets/comment.png"
import Close from "../assets/close.png"

// CARDS
import ReportCard from './reportCard'
import ContactCard from './contactCard'
import FeedbackCard from './feedbackCard'
import SuggestCard from './suggestCard'

const Faq = () => {
    const [selectToggle, setSelectToggle] = useState(false);
    const [selectDirection, setSelectDirection] = useState(false);
    const [selectReport, setSelectReport] = useState(false);
    const [selectSuggest, setSelectSuggest] = useState(false);
    const [selectFeedback, setSelectFeedback] = useState(false);
    const [selectContact, setSelectContact] = useState(false);
    return (
        <>
            <div className='flex flex-col items-center mt-10'>
                <div className='bg-white w-1/2 py-6 px-10 rounded-md'>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-4'>
                            <h4 className='bg-blue-300 py-1 px-4 rounded-md tracking-wider font-medium text-lg'>Design</h4>
                            <h4 className='bg-blue-300 py-1 px-4 rounded-md tracking-wider font-medium text-lg'>Technology</h4>
                        </div>
                        <div>
                            <img src={Start_Img} alt='start_img' />
                        </div>
                    </div>
                    <div className='mt-3'>
                        <h3 className='font-bold text-xl tracking-wider'>A travel startup wants Amazon to pre-install their personal travel agent bot on existing Amazon Echos. What is the value of the partnership to the travel startup? </h3>
                        <p className='text-lg tracking-wider mt-4'>Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec viverra tincidunt ? Amet ullamcorper velit tristique scelerisque donec sed viverra arcu. Amet arcu vitae sit scelerisque ultrices magna cursus se? </p>
                    </div>
                    <div className='flex justify-between mt-4'>
                        <div className='flex gap-2 items-center'>
                            <img src={Eye} alt='eye' />
                            <span className='text-gray-500 font-medium'>  100 views</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img src={Info} alt='info' />
                            <span className='text-gray-500 font-medium'>How should you word your answer?</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-evenly gap-20 mt-4'>
                <h3 className='font-bold text-xl text-white'>Answers (23)</h3>
                <div className='flex gap-2'>
                    <p className='text-white text-lg'>Sort by:</p>
                    <div className='bg-white py-1 px-4 rounded-md flex items-center gap-2 cursor-pointer'>
                        <p>Popular</p>
                        <img width={15} src={ArrowDown} alt='arrow-down' />
                    </div>
                </div>
            </div>
            <div className='flex justify-center my-6'>
                <div className='bg-blue-100 w-1/2 py-6 px-10 rounded-md'>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-3'>
                            <img src={Avatar} alt='avatar' />
                            <div>
                                <h4 className='font-bold text-xl'>Neha Bhat</h4>
                                <p className='font-medium'>Jun 27, 2023</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <img src={Edit} alt='edit_img' />
                            <h3 className='font-bold'>Edit</h3>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec viverra tincidunt ? Amet ullamcorper velit tristique scelerisque donec sed viverra arcu. Amet arcu vitae sit scelerisque ultrices magna cursus se?</p>
                    </div>
                    <div className='flex gap-6 items-center mt-5'>
                        <div className='flex items-center gap-2'>
                            <img src={Like} alt="like" />
                            <p className='font-bold text-lg'>Like</p>
                        </div>
                        <div>
                            <img src={Comment} alt='comment' />
                        </div>
                        <div className='w-full'>
                            <input type='text' placeholder='Add a comment' className='w-full py-1 px-2 rounded-md outline-none bg-transparent border border-black' />
                        </div>
                        <div>
                            <button className='bg-gray-100 py-1 px-4 rounded-md text-gray-700 font-semibold'>Post</button>
                        </div>
                    </div>
                </div>
            </div>
                {selectReport ? (   // This will show the report card
                    <div className='fixed bottom-24 right-5'>      
                        <ReportCard />
                    </div>
                ) : null}
                {selectContact ? (   // This will show the contact card
                    <div className='fixed bottom-24 right-5'>
                        <ContactCard />
                    </div>
                ) : null}
                {selectFeedback ? (   // This will show the feedback card
                    <div className='fixed bottom-24 right-5'>
                        <FeedbackCard />
                    </div>
                ) : null}
                {selectSuggest ? (   // This will show the suggest card
                    <div className='fixed bottom-24 right-5'>
                        <SuggestCard />
                    </div>
                ) : null}
            <div className={`fixed ${selectDirection ? `bottom-0 right-24` : `bottom-20 right-5`}`}>
                <div>
                    {selectToggle ? (
                        <div className={`flex ${selectDirection ? `flex-row` : `flex-col`} items-end space-y-2 mb-2`}>
                            <div className={`flex items-center ${selectReport ? `order-last` : `order-none`} `}>
                                <p className={`${selectDirection ? `hidden` : `block`} bg-white px-3 py-1 rounded-lg font-semibold`}>Report an Issue</p>
                                <img onClick={() => {
                                    setSelectDirection(true); // This will change the direction of the icons 
                                    setSelectReport(true);  // This will show the report card
                                    setSelectContact(false); // This will hide the contact card
                                    setSelectFeedback(false); // This will hide the feedback card
                                    setSelectSuggest(false); // This will hide the suggest card
                                }} src={Report} alt='report' className='ml-2 cursor-pointer' />
                            </div>
                            <div className={`flex items-center ${selectSuggest ? `order-last` : `order-none`} `}>
                                <p className={`${selectDirection ? `hidden` : `block`} bg-white px-3 py-1 rounded-lg font-semibold`}>Give Suggestion</p>
                                <img onClick={() => {
                                    setSelectDirection(true); // This will change the direction of the icons
                                    setSelectSuggest(true); // This will show the suggest card
                                    setSelectReport(false); // This will hide the report card
                                    setSelectContact(false); // This will hide the contact card
                                    setSelectFeedback(false); // This will hide the feedback card
                                }} src={Suggest} alt='suggest' className='ml-2 cursor-pointer' />
                            </div>
                            <div className={`flex items-center ${selectFeedback ? `order-last` : `order-none`} `}>
                                <p className={`${selectDirection ? `hidden` : `block`} bg-white px-3 py-1 rounded-lg font-semibold`}>Share Feedback</p>
                                <img onClick={() => {
                                    setSelectDirection(true); // This will change the direction of the icons
                                    setSelectFeedback(true); // This will show the feedback card
                                    setSelectReport(false); // This will hide the report card
                                    setSelectContact(false); // This will hide the contact card
                                    setSelectSuggest(false); // This will hide the suggest card
                                }} src={Feedback} alt='feedback' className='ml-2 cursor-pointer' />
                            </div>
                            <div className={`flex items-center ${selectContact ? `order-last` : `order-none`} `}>
                                <p className={`${selectDirection ? `hidden` : `block`} bg-white px-3 py-1 rounded-lg font-semibold`}>Contact Us</p>
                                <img onClick={() => {
                                    setSelectDirection(true); // This will change the direction of the icons
                                    setSelectContact(true); // This will show the contact card
                                    setSelectReport(false); // This will hide the report card
                                    setSelectFeedback(false); // This will hide the feedback card
                                    setSelectSuggest(false);  // This will hide the suggest card
                                }} src={Contact} alt='contact' className='ml-2 cursor-pointer' />
                            </div>
                        </div>
                    ) : null}
                    <div onClick={() => {
                        setSelectToggle(!selectToggle); // This will toggle the icons
                        setSelectDirection(false); // This will change the direction of the icons
                        setSelectReport(false); // This will hide the report card
                        setSelectContact(false); // This will hide the contact card
                        setSelectFeedback(false); // This will hide the feedback card
                        setSelectSuggest(false); // This will hide the suggest card
                    }} className='cursor-pointer'>
                        <img src={selectToggle ? Close : Select} alt={selectToggle ? 'close' : 'select'} className='fixed bottom-1 right-5' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq
