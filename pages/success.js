import {useRouter} from "next/router";
import {motion as m} from 'framer-motion'
import Confetti from "react-confetti";
import {useEffect, useState} from "react";

export default function success() {
    const router = useRouter()

    const [pieces, setPieces] = useState(200)

    const stopConfetti = () => {
        setTimeout(() => {
            setPieces(0)
        }, 3000)
    }
    useEffect(()=> {
        stopConfetti(0)
    }, [])

    return (
        <m.main initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className='h-screen flex items-center justify-center'>
            <div className='bg-white text-gray-700 p-16 rounded-lg w-1\2 font-latoReg'>
                <h1 className='text-3xl pb-4 font-latoBold'>Thanks for the email {router.query.name}</h1>
                <p className='text-lg text-gray-500'>We have sent you email over at {router.query.email}.
                    We will get back to you as soon as we can!
                </p>
            </div>
            <Confetti gravity={0.2} numberOfPieces={pieces}/>
        </m.main>
    )
}