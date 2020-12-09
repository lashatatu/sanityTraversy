import React from "react";
import image from '../img/programming-background1.jpg'

export default function Home(){
    return (
        <main>
            <img
                src={image}
                alt="Monstera Leaves"
                 className={'absolute object-cover w-full h-full'}/>
            <section className={'relative flex justify-center min-hscreen pt-12 lg:pt-64 px-8'}>
                <h1 className={'text6-xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name'}>Hi. I'am Lasha</h1>
            </section>
        </main>
    )
}