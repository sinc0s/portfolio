import {Link} from "react-router-dom";

export default function Header() {

    return (
        <div class="bg-slate-900 drop-shadow-xl flex relative items-center">
            <div class="text-white font-extrabold py-5 mx-5">
                <Link to="/portfolio">Alexander Hawkins</Link>
            </div>
            <button class="ml-auto bg-slate-700 rounded-3xl px-4 mx-4 py-2 hover:bg-slate-600" type="button">
                <div class=" text-white">
                    <Link to="/uxdesign">UX Design</Link>
                </div>
            </button>
        </div>
    )
}