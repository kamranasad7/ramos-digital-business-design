import ButtonGroup from "./ButtonGroup";

const Navbar = () => {
    return (
        <nav className='flex justify-between w-full max-w-full px-2 py-2 mx-auto text-white bg-neutral-950 rounded-3xl'>
            <div className='self-center'>
                <img src='ramos-logo.png' className='w-24 ml-4' alt='ramos' />
            </div>

            <ButtonGroup
                buttons={[
                    { text: 'Dashboard' },
                    { text: 'Reports' },
                    { text: 'Documents' },
                    { text: 'History' },
                    { text: 'Settings' },
                ]}
            />

            <button className='px-8 text-primary bg-primary-50 rounded-2xl'>Sign Up</button>

        </nav>
    );
};

export default Navbar;
