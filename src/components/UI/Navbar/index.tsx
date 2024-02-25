import ButtonGroup from "./ButtonGroup";

const Navbar = () => {
    return (
        <nav className='flex justify-between bg-neutral-950 rounded-2xl text-white py-2 px-2 w-full max-w-full mx-auto'>
            <div className='self-center'>
                ramos
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

            <button className='text-primary rounded-2xl px-8'>Sign Up</button>

        </nav>
    );
};

export default Navbar;
