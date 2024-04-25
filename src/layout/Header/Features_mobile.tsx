import { Link, useLocation} from "react-router-dom";
import { features } from "./Features";


export const Features_mobile = () => {
    const pathname = useLocation().pathname

    return (
        <div className="mx-auto">
            {features.map((e) =>
            (
                <a href={e.path} key={e.name} className="px-[20px] py-[10px] mx-auto flex text-gray-400 hover:text-white">
                    <img src={e.icons}></img>
                    <div className={`${e.path === pathname ? 'text-[#1ED760]' : ''}`}>&nbsp;{e.name}</div>
                </a>
            ))

            }
        </div>
    );
};
