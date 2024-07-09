import { NavLink, Outlet } from 'react-router-dom';
import { IoIosHome } from "react-icons/io";

const MainLayouts = () => {

    return (
        <div>
            <nav className='fixed shadow w-full min-h-14 flex items-center z-50'>
                <div className=' flex gap-3 items-center justify-between container mx-auto'>
                    <div className='flex items-center gap-2 justify-center flex-row-reverse hover:bg-yellow-100 px-2 rounded hover:cursor-pointer'>
                        <h2 className='text-xl font-bold z-30 leading-4'><span className='font-black  uppercase text-yellow-700'>Tiny</span><br />Tools</h2>
                        <img src="favicon.svg" className='w-12 left-0 bottom-0' alt="" />
                    </div>
                    <div className='flex gap-3 items-center justify-center text-sm'>
                        <NavLink className={'text-lg px-3 rounded-md border py-2 bg-yellow-400'}>

                            <IoIosHome />
                        </NavLink>
                        <NavLink to={'/calculator'} className={({ isActive }) => isActive ? 'text-sm border-b rounded border-yellow-600 px-4 py-1 bg-yellow-600 text-white' : 'text-sm border-b rounded border-yellow-600 px-4 py-1'}>Calculator</NavLink>

                        <NavLink to={'/randompicker'} className={({ isActive }) => isActive ? 'text-sm border-b rounded border-yellow-600 px-4 py-1 bg-slate-600 text-white' : 'text-sm border-b rounded border-yellow-600 px-4 py-1'}>Random Picker</NavLink>

                    </div>
                </div>
            </nav>

            <div className='container mx-auto pt-20'>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayouts;