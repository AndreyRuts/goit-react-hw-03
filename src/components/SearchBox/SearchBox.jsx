import s from './SearchBox.module.css'

const SearchBox = ({searchData, setSearchData}) => { 
    return (
        <div className={s.searchBoxWrapper}>
            <p>Find contacts by name</p>
            <input className={s.searchBoxInput} value={searchData} onChange={e => setSearchData(e.target.value)}/>
        </div>
    )
}
export default SearchBox;