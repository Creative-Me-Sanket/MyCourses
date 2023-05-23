import React, { useState } from 'react'
import './TabBar.css'
import Avtar from '../Assets/avtar.png'
import TextArea from './TextArea';
const TabBar = () => {
    const [activeClass, setActiveClass] = useState({
        About: 'ptItem active',
        Discussion: 'ptItem',
        Bookmarks: 'ptItem',
    });
    const [activeClassTab, setActiveClassTab] = useState({
        About: 'prodMain active',
        Discussion: 'prodMain',
        Bookmarks: 'prodMain',
    });
    const aboutActive = () => {
        setActiveClass({
            About: 'ptItem active',
            Discussion: 'ptItem',
            Bookmarks: 'ptItem',
        })
        setActiveClassTab({
            About: 'prodMain active',
            Discussion: 'prodMain',
            Bookmarks: 'prodMain',
        })
    }
    const discussionActive = () => {
        setActiveClass({
            About: 'ptItem',
            Discussion: 'ptItem active',
            Bookmarks: 'ptItem',
        })
        setActiveClassTab({
            About: 'prodMain',
            Discussion: 'prodMain active',
            Bookmarks: 'prodMain',
        })
    }
    const bookmarkActive = () => {
        setActiveClass({
            About: 'ptItem',
            Discussion: 'ptItem',
            Bookmarks: 'ptItem active',
        })
        setActiveClassTab({
            About: 'prodMain',
            Discussion: 'prodMain',
            Bookmarks: 'prodMain active',
        })
    }
    return (
        <div>
            <ul class="prodNav tab-ul">
                <li id="pTab1" onClick={aboutActive} class={activeClass.About}>About</li>
                <li id="pTab2" onClick={discussionActive} class={activeClass.Discussion}>Discussion</li>
                <li id="pTab3" onClick={bookmarkActive} class={activeClass.Bookmarks}>Certificate</li>
            </ul>
            <div class="prodBody">
                <div class={activeClassTab.About} id="pTab1C">
                    <div class="row">
                        <div class="col">
                            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <div class="flex justify-end px-4 pt-4">
                                </div>
                                <div class="flex flex-col items-center pb-10">
                                    <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src={Avtar} alt="Bonnie image" />
                                    <h3 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bhargav Bade</h3>
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Author</span>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <h5 style={{textAlign:'center',color:'black',fontSize:'25px'}}>About Author</h5><br/>
                            <p style={{textAlign:'center',color:'black'}}>I will be your lead trainer in this course. Within no time, I will help you to understand the subject in an easy manner. I have a huge experience in online training and recording videos. Let's get started!</p>
                        </div>
                    </div>
                </div>
                <div class={activeClassTab.Discussion} id="pTab2C">
                    <h4 style={{color:'black',fontSize:'25px'}} className="p-1">Lession Discussion</h4>
                    <TextArea style={{border: '1px solid #2424d4'}} placeholder="Start Discussion" row={4}/>
                    <button className='btn btn-primary sm' style={{backgroundColor:'#000033',border:'none',fontSize:'13px'}}>POST DISCUSSION</button>
                </div>
                <div class={activeClassTab.Bookmarks} id="pTab3C">
                    <h4 style={{color:'black',fontSize:'25px',fontWeight:'bold'}} className="p-1">Earn Certificate</h4>
                    <h4 style={{color:'black'}} className="p-1">Pass all the quizes listed below to earn the certificate and share on social media among your friends.</h4>
                    <button className='btn btn-primary sm' style={{backgroundColor:'#000033',border:'none',fontSize:'13px'}}>Generate Certificate</button>
                </div>
            </div>
        </div>
    )
}

export default TabBar