import React from "react";
import Header from "../componentes/Header";
import NavBar from "../componentes/NavBar";
import Products from "../componentes/Products";
/* import { useDispatch, useSelector } from "react-redux";
import { changeUser, selectUser } from "../redux/userSlice"; */

export default function Home() {
/*   const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeUser(userName))
  } */
  return (
    <div>
      <Header />
      <NavBar />
      <Products />
    </div>
  )
}