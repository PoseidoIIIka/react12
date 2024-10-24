import { AccardeonItem } from "./AccardeonItem/AccardeonItem";
import s from  './Accardeon.module.css';

export function Accardeon() {
    return(
        <div className={s.accardeon}>
            <AccardeonItem title='Преимущество' text='adsfdsagdfg dhdfgjgfhj dfhdfghdfghdfh' />
            <AccardeonItem title='О нас' text='adsfdsagdfg dhdfgjgfhj dfhdfghdfghdfh' />
            <AccardeonItem title='Вопрсы и ответы' text='adsfdsagdfg dhdfgjgfhj dfhdfghdfghdfh' />
        </div>
    )
}