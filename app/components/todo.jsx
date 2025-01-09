//any component you created by default will be server
//but you can't use hook
//to use hook you must add "use client"

"use client";// to use hook
import React, { useEffect, useState } from "react";

function Todo() {
  let [todo, setTodo] = useState({});

  async function fetchData() {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/4"//by default ssg   ststic side generation
        ,{
        //ssr server side rendering

        // cache:'no-store' 

        //isg  incremental static regeneration
        next:{
          revalidate:60
        }
    });
    let data = await res.json();
    setTodo(data);
  }

  useEffect(()=>{
    fetchData()
  },[])


  return (
  <div>
    <h1>{todo.title}</h1>

  </div>
  );
}

export default Todo;
