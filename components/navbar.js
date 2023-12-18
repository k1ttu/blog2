'use client'

import Link from 'next/link';
import { use, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useRouter } from 'next/navigation';
export default function Navbar3() {
    const [show, setShow] = useState(false);
    const navlink2 = " text-2xl text-gray-600 my-3 animate__animated";
    const navlink = "text-sm no-underline text-gray-600 font-mono relative text-gray-700 py-3 pb-1 px-2 after:bg-gray-400 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
    const navHover="relative after:bg-gray-600 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
    const handleClose = () => {
        setShow(false)
        router.refresh();
    };
    const handleShow = () => setShow(true);

    const navbarDB = [
        {
            title: "About",
            id: "about",
            link: "/about"
        },
        {
            title: "Blog",
            id: "Blog",
            link: "/journal"
        }
    ]
    const router = useRouter();

    return (
        <nav className='flex justify-between h-px md:mx-16 md:py-10 mx-8 py-4 animate__animated animate__fadeInDown'>
            <Link href="/" className={ navlink + navHover }>
                Chirag
            </Link>
            <ul className='md:flex hidden list-none'>
                {
                    navbarDB.map((item, index) => {
                            return (
                                <li key={index} className={'mr-5'} >
                                    <Link href={item.link} className={ navlink }>

                                        {item.title}

                                    </Link>
                                </li>)

                    }
                    )
                }
                <li key={"3"}className={'mr-0'} >
                    <Link href="mailto:chirag.kun@icloud.com" className={ navlink + navHover }>
                        Contact
                    </Link>

                </li>
            </ul>

            <button className='block md:hidden cursor-pointer w-9 h-9 bg-none appearance-none relative' variant="primary" onClick={handleShow}>
                <div className={"bar block h-[3px] w-full rounded-md my-1 bg-black "} ></div>
                <div className={"bar block h-[3px] w-full rounded-md my-1 bg-black "}></div>
                <div className={"bar block h-[3px] w-full rounded-md bg-black my-1 "}></div>
            </button>

            <Offcanvas className="md:hidden" show={show} onHide={handleClose} placement='start' responsive='md'>
                <Offcanvas.Header closeButton >
                </Offcanvas.Header>
                <Offcanvas.Body className='md:hidden'>
                    <ul className='my-48'>
                        {
                            navbarDB.map((item, index) => (
                                <li key={index} className={'items-center'} onClick={handleClose} >
                                    <Link href={item.link} className={navlink + "text-5xl"}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                            )
                        }
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </nav>
    );
}