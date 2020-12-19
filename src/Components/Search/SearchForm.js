import { atom, useAtom } from 'jotai';
import { searchAtom } from '../../Atoms/Atoms'
import SearchList from './SearchList'

const SearchForm = () => {

    const [search, setSearch] = useAtom(searchAtom);

    const submitSearch = (e) => {
        e.preventDefault();
        console.log(search);
    }

    return (
        <div>
            <h1>SearchForm.js</h1>
            <form>
                <input onChange={ e => setSearch(e.target.value) }></input>
                <button onClick={submitSearch}>SUBMIT</button>
                {/* <button onClick={this.searchMovie}>Search</button> */}
            </form>
            <h2>{search}</h2>
            <SearchList />
        </div>
    )
}

export default SearchForm;