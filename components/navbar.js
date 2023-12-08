'use client'
import Link from 'next/link';
import { use, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useRouter } from 'next/navigation';
export default function Navbar3() {
    const [show, setShow] = useState(false);
    const navlink2 = "block text-2xl text-gray-600 my-3 hover:underline hover:underline-offset-4 animate__animated";
    const navlink = "text-sm font-mono text-gray-600 no-underline hover:underline hover:transition-all hover:duration-100 hover:ease-in-out";
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
        <nav className='flex justify-between md:mx-16 md:py-10 mx-8 py-4 animate__animated animate__fadeInDown'>
            <a href="/" className={navlink}>
                Chirag
            </a>
            <ul className='md:flex hidden list-none'>
                {
                    navbarDB.map((item, index) => {
                        
                            return (
                                <li key={index} className={'mr-5'} >
                                    <Link href={item.link} className={navlink}>

                                        {item.title}

                                    </Link>
                                </li>)
                        
                    }
                    )
                }
                <li key={"3"}className={'mr-0'} >
                    <Link href="mailto:chirag.kun@icloud.com" className={navlink}>
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