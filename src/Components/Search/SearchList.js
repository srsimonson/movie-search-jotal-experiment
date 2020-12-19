import { atom, useAtom } from 'jotai';
import { searchAtom } from '../../Atoms/Atoms'

const SearchList = () => {
    
    return (
        <div>
            <h1>SearchList.js</h1>
            <h3>the real test: {useAtom(searchAtom)}</h3>
        </div>
    )
}

export default SearchList;