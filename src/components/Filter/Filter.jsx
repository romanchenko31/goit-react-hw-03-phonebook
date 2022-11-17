import s from '../Filter/Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <label className={s.search}>
        <input type="text" value={value} onChange={onChange} name="filter" />
      </label>
    </>
  );
};

export default Filter;
