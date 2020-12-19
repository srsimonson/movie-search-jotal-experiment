import { atom } from 'jotai';

const searchAtom = atom('search atom');
const movieSelectedAtom = atom(0);
export { searchAtom, movieSelectedAtom };

const countAtom = atom(1)
const countryAtom = atom('Japan')
const citiesAtom = atom(['Tokyo', 'Kyoto', 'Osaka'])
const mangaAtom = atom({ 'Dragon Ball': 1984, 'One Piece': 1997, Naruto: 1999 })
export {
    countAtom, 
    countryAtom, 
    citiesAtom, 
    mangaAtom
}