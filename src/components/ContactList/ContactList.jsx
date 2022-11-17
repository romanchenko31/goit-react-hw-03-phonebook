import { nanoid } from 'nanoid';
import s from '../ContactList/ContactList.module.css';

const ContactList = ({ onRemove, filterTodo }) => {
  return (
    <ul className={s.contactList}>
      {filterTodo.map(value => {
        return (
          <li className={s.item} key={nanoid()}>
            {value.name}: {value.number}
            <button className={s.button} name={value.name} onClick={onRemove}>
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
