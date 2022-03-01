import React, {useState} from 'react';
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from 'recoil'
import './App.css';

function App() {
  const fullNameAtom = atom({
    key: 'fullName',
    default: "Edun Omatseye"
  })
  const genderAtom = atom({
    key: 'gender',
    default: "Male"
  })
  //const [name, setName] = useRecoilState(omatseyeAtom)
  const fullName = useRecoilValue(fullNameAtom)
  const gender = useRecoilValue(genderAtom)
  return (
    <div className="App">
      <div>{fullName}</div>
      <div>{gender}</div>
    </div>
  );
}

export default App;
