import css from './First.module.css';
import clsx from "clsx";
import { AiFillAccountBook } from "react-icons/ai";

console.log(clsx);

export default function First() {
    return (
        <div className={css.block}>
            <AiFillAccountBook />
        </div>
    );
};