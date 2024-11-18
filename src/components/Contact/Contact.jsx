import css from './Contact.module.css';
import { MdAccountCircle } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact({ info: { id, name, number }, onDelete }) {

    return (
        <div className={css.card}>
            <div className={css.left}>
                <div className={css.block}>
                    <MdAccountCircle size="30px" />
                    <p>{name}</p>
                </div>
                <div className={css.block}>
                    <FaPhoneAlt size="20px" />
                    <p>{number}</p>
                </div>
            </div>
            <button className={css.button} onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}