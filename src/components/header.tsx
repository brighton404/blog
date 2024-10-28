import Icons from "./icons";

const Header = () => {

    return (
        <div className="justify-between bg-black dark:bg-black flex w-full py-2 px-4 items-center h-[5vh] bg-background sm:fixed z-[2]">
            <><Icons variant="logo" /></>
        </div>
    );
};

export default Header;