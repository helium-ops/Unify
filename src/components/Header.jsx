import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logos/png/Logo (1).png";

export default function Header() {
    return (
        <header className="flex justify-between items-center px-3 py-1  h-[11.72%]">
            <div className="flex items-center justify-center gap-2">
                <img
                    src={logo}
                    alt="Unity logo"
                    className="w-10 h-10 object-contain"
                />
                <h1 className="font-bold text-[2vw] mb-1">Univo</h1>
            </div>

            <button
                className="h-[49%] w-[2.5%] text-center bg-white-accent rounded-[50%] text-white"            >
                <FontAwesomeIcon icon={faMoon} />
            </button>
        </header>
    );
}