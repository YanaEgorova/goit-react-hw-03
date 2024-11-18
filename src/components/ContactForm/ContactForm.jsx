import { useId } from 'react';
import { nanoid } from 'nanoid';

import css from './ContactForm.module.css';

export default function ContactForm({ onAdd }) {
    const id = useId();
    const idx = nanoid();

    const onSubmit = (e) => {
        const form = e.target;

        e.preventDefault();
        onAdd({
            id: idx,
            name: form.elements.name.value,
            number: form.elements.number.value,
        });
        form.reset();
    }
    return (
        <form className={css.form} onSubmit={onSubmit}>
            <div className={css.block}>
                <label htmlFor={`name-${id}`}>Name</label>
                <input className={css.input} type="text" id={`name-${id}`} name="name" />
            </div>
            <div className={css.block}>
                <label htmlFor={`number-${id}`} >Number</label>
                <input className={css.input} type="number" name="number" id={`number-${id}`} />
            </div>
            <button className={css.button} type="submit">Add contact</button>
        </form>
    );
};