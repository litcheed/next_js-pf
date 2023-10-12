import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return(
        <div>
            <article className='shadow my-4 flex flex-col'>
                <Link href="#" className='hover:opacity-75'>
                    <Image src='https://source.unsplash.com/collection/1346951/1000x500?sig=1'
                    alt=''
                    width={1280}
                    height={800}
                    />
                </Link>
                <div className='bg-white flex flex-col justify-start p-6'>
                    <Link href="#" className='text-blue-700 pd-4 font-bold'>Technology</Link>
                    <Link href="#" className='text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4'>Nextjsの勉強中</Link>
                    <p className='text-sm pb-3 text-slate-900'>Published on 2023/10/11</p>
                    <Link href="#" className='text-slate-900 pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aliquam quod mollitia cupiditate repudiandae quidem dolorem corrupti dolorum modi aspernatur in vero sequi saepe quae, magni unde ea reprehenderit repellendus?
                    </Link>
                    <Link href="#" className='text-green-400 hover:text-black'>続きを読む</Link>
                </div>
            </article>

            <article className='shadow my-4 flex flex-col'>
                <Link href="#" className='hover:opacity-75'>
                    <Image src='https://source.unsplash.com/collection/1346951/1000x500?sig=2'
                    alt=''
                    width={1280}
                    height={800}
                    />
                </Link>
                <div className='bg-white flex flex-col justify-start p-6'>
                    <Link href="#" className='text-blue-700 pd-4 font-bold'>Technology</Link>
                    <Link href="#" className='text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4'>Nextjsの勉強中</Link>
                    <p className='text-sm pb-3 text-slate-900'>Published on 2023/10/11</p>
                    <Link href="#" className='text-slate-900 pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aliquam quod mollitia cupiditate repudiandae quidem dolorem corrupti dolorum modi aspernatur in vero sequi saepe quae, magni unde ea reprehenderit repellendus?
                    </Link>
                    <Link href="#" className='text-green-400 hover:text-black'>続きを読む</Link>
                </div>
            </article>
        </div>
    )
}

export default page