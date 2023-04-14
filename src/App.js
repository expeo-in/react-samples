import logo from "./logo.svg";
import ListGroup from "./ListGroup";
import { HelloComponent } from "./Hello";
import Card from "./Card";
import "./App.css";
import BootstrapCard from "./components/BootstrapCard/BootstrapCard";
import BootstrapCardContent from "./components/BootstrapCard/BootstrapContent";
import BootstrapCardAction from "./components/BootstrapCard/BootstrapCardAction";
import { BsFillCalendarDateFill } from "react-icons/bs";
import Like from "./components/Like/Like";
import Counter from "./components/Counter";
import Message from "./components/Message";
import Person from "./components/Person";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { useState } from "react";
import RegisterForm from "./components/Form";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import Form4 from "./components/Form4";
import SideEffect from "./components/SideEffect";
import Users from "./components/Users";
import UsersUsingAxios from "./components/UsersUsingAxios";
import UsersUsingHook from "./components/UsersUsingHook";
import { Link, Route, Routes, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";
import Nav from "./Nav";
import Layout from "./Layout";
import NotFound from "./NotFound";
import Admin from "./components/Admin";
import Report from "./components/Report";
import Dashboard from "./components/Dashboard";
import UserDetail from "./components/UserDetail";
import TaskList from "./components/TaskList";

function App() {
  const [qty, setQty] = useState(0);
  const [name, setName] = useState("test");
  const [date, setDate] = useState(new Date().toString());

  const handleAddMore = () => {
    setQty(qty + 1);
  };

  const countries = [
    { id: 1, name: "India" },
    { id: 2, name: "Pak" },
    { id: 3, name: "SL" },
    { id: 4, name: "China" },
  ];

  const cities = [
    { id: 1, name: "chennai" },
    { id: 2, name: "bangalore" },
    { id: 3, name: "hyderabad" },
    { id: 4, name: "delhi" },
  ];

  const handleCountryClick = function (item) {
    alert(item.name);
  };

  const handleCityClick = function (item) {
    alert(item.id + "-" + item.name);
  };

  const handleChangeNameProp = () => {
    setName("new message");
  };

  const handleChangeDateProp = () => {
    setDate(new Date().toString());
  };

  return (
    <>
      <TaskList></TaskList>
      {/* <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul> */}
      {/* <div className="container-fluid">
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/tasks" element={<TaskList />}></Route>
            <Route path="/users" element={<Users />}>
              <Route path=":fullname/:id" element={<UserDetail />}></Route>
            </Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/admin" element={<Admin />}>
              <Route index element={<Dashboard />}></Route>
              <Route path="/admin/report" element={<Report />}></Route>
            </Route>
          </Route>
        </Routes>
      </div> */}
      {/* 
      <UsersUsingAxios></UsersUsingAxios>
      <UsersUsingHook></UsersUsingHook>
      <Users></Users>
      <SideEffect name={name} date={date}></SideEffect>

      <button onClick={handleChangeNameProp}>Change Name Prop</button>
      <button onClick={handleChangeDateProp}>Change Date Prop</button>
      <Form4></Form4>
      <Form3></Form3>
      <Form2></Form2>
      <RegisterForm></RegisterForm>
      <Navbar qty={qty}></Navbar>
      <Cart qty={qty} onAddMore={handleAddMore}></Cart>
      <Person></Person>
      <Message></Message>
      <Message></Message>
      <Message></Message>
      <Message></Message>
      <ListGroup
        items={countries}
        heading="Countries"
        onItemClick={handleCountryClick}
      />
      <Counter></Counter>
      <Counter></Counter>
      <Like></Like>
      <BsFillCalendarDateFill
        color="orange"
        size="100"
      ></BsFillCalendarDateFill>
      <BootstrapCard heading="My Card">
        <BootstrapCardContent>Content goes here</BootstrapCardContent>
        <BootstrapCardAction>
          <button>Action 1</button>
          <button>Action 2</button>
        </BootstrapCardAction>
      </BootstrapCard> */}
      {/* <BootstrapCard heading="Card Heading" actionText="more">
        Card Content
      </BootstrapCard>
      <br />
      <BootstrapCard heading="Card Heading 2" actionText="details">
        Card Content 2
      </BootstrapCard> */}
      {/* <Card
        heading="My Card 1 Heading"
        onDetailClick={() => alert("detail clicked")}
      >
        <p>card content para 1</p>
        <p>card content para 2</p>
      </Card>

      <hr></hr>
      
      <hr />
      <ListGroup
        items={cities}
        heading="Cities"
        onItemClick={handleCityClick}
      />
      <HelloComponent></HelloComponent> */}
    </>
  );
}

export default App;
