import React, {ChangeEvent, useState} from "react";
import NavBar from "@/components/NavBar";
import {Grasp} from "@/components/Grasp";
import Show from "@/components/Show";
import {BigPic} from "@/components/BigPic";
import Famous from "@/components/Famous";
import {Hots} from "@/components/Hots";
import {Intacer} from "@/components/Intacer";

import ax from 'axios';
const apiClient = ax.create({
    baseURL: 'http://127.0.0.1:8787',
})

const Welcome = () => {
    const [but,setBut]=useState(false)
    const [rem,setRem] = useState(false)
    const [bp,setBp] = useState(false);
    const [dp,setDp] = useState(true);
    const [p1,setP1] = useState('');
    const [p2,setP2] = useState('');
    const [bigPic,setBigPic] = useState('');
    const [urls,setUrls]=useState(['https://picsum.photos/300/300','https://picsum.photos/300/300','https://picsum.photos/300/300']);
    const [desc,setDesc]=useState('');
    const [apps,setApps]=useState('');
    const [ques,setQues]=useState('');

    const handleToggle = async () =>{
        setBp(!bp)
    }
    const handleToggle2 = async () =>{
        setDp(!dp)
        setP2(p2)
    }
    const get1ImgDesc = async () =>{
        const res = await apiClient.post('/gen',{p1:p1,p2:p2,f:0})
        // @ts-ignore
        // setUrls(res.data[0])
        console.log(res.data[0][0])
        // @ts-ignore
        setDesc(res.data[1])
    }
    const get2BigPic = async () =>{
        const res = await apiClient.post('/gen',{p1:p1,p2:p2,f:1})
        const bp = res.data
        // @ts-ignore
        setBigPic(bp)
    }
    const get3FamousApp = async () =>{
        const res = await apiClient.post('/gen',{p1:p1,p2:p2,f:2})
        const fame = res.data
        // @ts-ignore
        setApps(fame)
    }
    const get4Hots = async () =>{
        const res = await apiClient.post('/gen',{p1:p1,p2:p2,f:3})
        const hots = res.data
        // @ts-ignore
        setQues(hots)
        setBut(false)
        setRem(true)

    }
    const handleSubmit = async (e:React.FormEvent) =>{
        e.preventDefault();
        setBut(true)
        get1ImgDesc()
        get2BigPic()
        get3FamousApp()
        get4Hots()
    }
    return (<>
        <NavBar/>
        <Grasp/>
        <div
            className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.3] relative flex items-center justify-center"
            style={{
                position: "absolute",
                zIndex: -1,
            }}>
            <div
                className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
            </div>
            <div className={'form-div'} style={{
                position: "absolute",
                top:165,
            }}>
                <form onSubmit={handleSubmit} className="flex items-center justify-center space-x-4">
                    <input required onChange={(e:ChangeEvent<HTMLInputElement>)=>setP1(e.target.value)} style={{
                        color:'darkolivegreen'
                    }}
                        type="text"
                        className="w-44 h-12 px-3 rounded-md bg-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                        placeholder="You know"
                    />
                    <input required onChange={(e:ChangeEvent<HTMLInputElement>)=>setP2(e.target.value)} style={{
                        color:'mediumvioletred'
                    }}
                        type="text"
                        className="w-44 h-12 px-3 rounded-md bg-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                        placeholder="Eager to know"
                    />
                    {/*<input*/}
                    {/*    type="file"*/}
                    {/*    className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"*/}
                    {/*/>*/}
                    <button disabled={but}
                        type="submit"
                        className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    >
            <span
                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
                        <span
                            className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                {but?'Mapping ...':'Go!'}
            </span>
                    </button>
                </form>
            </div>
            {rem && <div className={'remaining'}>
                <Show
                    urls={urls}
                    desc={desc}/>
                <br/>
                <details className={'BP'} style={{
                    position: 'relative',
                    top: 180
                }} onToggle={handleToggle}>
                    <summary style={{
                        fontSize: 35
                    }}>The Big picture
                    </summary>
                    {bp && <div style={{position: 'absolute', width: 1250}}><BigPic words={bigPic}/></div>}
                </details>
                <br/>
                <div className={'famous-div'} style={{
                    position: 'absolute',
                    top: 1100,
                    left: 490,
                }}>
                    <Famous apps={apps}/>
                </div>
                <br/>
                <div className={'HOTS'} style={{
                    position: 'absolute',
                    top:1700,
                    left: 50,
                    width: 1200
                }}>
                    <Hots ques={ques}/>
                </div>
                <div className={'pie'} style={{
                    position: 'absolute',
                    zIndex: -1,
                    top: 2270,
                    left: 290,
                }}>
                    <iframe
                        src={`https://search.carrot2.org/#/search/web/${p2}/pie-chart`}
                        width="800"
                        height="600"

                        title="Example Iframe"
                        style={{border: 'none'}}
                    ></iframe>
                </div>
                <div className={'final'} style={{
                    position: 'absolute',
                    zIndex: -1,
                    top: 2870,
                    left: 333,
                }}>
                    <Intacer/>
                    <div>
                        <img src="/Logo.png" alt="Intacer Logo - A bulb with lightning symbol" style={
                            {
                                position:'relative',
                                top:-170,
                                left:240,
                                width: 150,
                                height: 150
                            }
                        }/>
                    </div>
                    <div style={{
                        fontSize: 25,
                        position: 'relative',
                        top: -100,
                        left: 190
                    }}>
                        <a target="_blank"
                           href="https://icons8.com/icon/59810/idea"
                           style={{
                               textDecoration: 'underline',
                               cursor: 'pointer'
                           }}
                        >
                            Idea
                        </a><sup>&#x2197;</sup> icon by&nbsp;
                        <a target="_blank"
                           href="https://icons8.com"
                           style={{
                               textDecoration: 'underline',
                               cursor: 'pointer'
                           }}
                        >Icons8
                        </a><sup>&#x2197;</sup>
                    </div>
                </div>
            </div>
            }
        </div>
    </>)
}
export default Welcome

