import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ChatMain = () => {
  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
      <div className={"border"} style={{ width: "40vw" }}>
        <div  style={{width : '100%' , border : '2px solid red', display : 'flex', justifyContent : 'center'}}>
          <nav className="flex space-x-4" style={{width : '100%',justifyContent : 'space-evenly', margin: '10px 0'}}>
            <NavLink
              to="/Chat"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Chats
            </NavLink>
            <NavLink
              to="/Chat/Groups"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Groups
            </NavLink>
            <NavLink
              to="/Chat/University"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Universy
            </NavLink>
          </nav>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
      <div className={"border"} style={{ width: "60vw" }}>
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
        debitis molestias quis. Cupiditate, fuga tenetur. Quisquam eveniet quam
        cupiditate nostrum sed illo quaerat, soluta dolores esse sit, et,
        maiores minima! Voluptates obcaecati aperiam ex recusandae nobis labore
        at nihil quaerat reiciendis natus sint ut asperiores vel dolor, dolore
        hic commodi cum. Pariatur vel cumque at ipsa sequi deleniti sit tempore
        quisquam repellendus. Suscipit rem sequi voluptatibus fugit architecto
        ratione repudiandae fuga reiciendis illum quaerat ea incidunt, dolores
        id, atque minus ducimus repellendus impedit sunt nihil laboriosam beatae
        expedita, placeat numquam quod? Ad laborum quia amet velit suscipit
        accusamus incidunt beatae, cumque commodi facilis, explicabo ut
        reprehenderit molestias cupiditate ipsam aliquid porro possimus esse quo
        distinctio dolore! Repellat esse laudantium at, eligendi itaque quod
        animi architecto? Fugit a vitae eveniet fugiat necessitatibus
        asperiores. Dolorem, tenetur atque perspiciatis ipsum eligendi impedit?
        Aliquid necessitatibus, nisi tempore ea accusantium dolorem sunt odit
        officia autem voluptatum? Ipsa officiis voluptatibus et hic voluptas
        tempore, necessitatibus voluptatum qui modi magnam eligendi doloribus
        laboriosam itaque repellat optio accusamus harum eius illo excepturi
        voluptate! Ad repellat delectus, inventore reprehenderit possimus neque
        laboriosam temporibus soluta ipsam ab vero sed, asperiores accusamus
        mollitia? Nihil sequi veniam impedit ratione. Est, quia natus.{" "}
      </div>
    </div>
  );
};

export default ChatMain;
