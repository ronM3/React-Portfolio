import freshmarket from "../assets/Freshmarket-shop.gif";
import freshmarket11 from "../assets/Freshmarket-shop11.gif";
import freshmarket1 from "../assets/freshmarket1.png"
import freshmarket2 from "../assets/freshmarket2.png"
import freshmarket3 from "../assets/freshmarket3.png"
import vacation from "../assets/vacation-project.png";
import vacation1 from "../assets/vacation-project1.png";
import vacation2 from "../assets/vacation-project2.png";
import vacation3 from "../assets/vacation-project3.png";
import todo from "../assets/todo-list.gif";
import todolist from "../assets/todolist.png";


export const projects = [
    {
        title: "Freshmarket shop",
        description:
          "e commerce shop build with angular & rxjs, Backend: Node.js, Express, bcrypt, mysql. Frontend: Angular, RxJs, Reactive forms, CSS/Bootstrap, file upload feature",
        user: 'Demo User: got@gmail.com Password: 123456',
        images: [`${freshmarket11}`, `${freshmarket2}`, `${freshmarket3}`],
        live: 'https://freshmarketapp.herokuapp.com/',
        repository: 'https://github.com/ronM3/Freshmarket-shop'
      },
      {
        title: "Ultimate Vacations",
        description:
          "Vacations Tagging system, login to watch vacations offers, tag them and watch how many followers each one has, every change in the system is in real time using Socket.IO. this project built with React, Node.js, and mySql",
          user: 'Demo User: tony, Password: 123456',
          images: [`${vacation}`, `${vacation2}`, `${vacation1}`, `${vacation3}`],
          live: 'https://uvacations.herokuapp.com/',
          repository: 'https://github.com/ronM3/vacations-client'
      },
      {
        title: "Customizable Do List",
        description:
          "A Friendly and customizable To-Do List where you can add, delete or edit tasks written with Vanilla JavaScript, HTML, CSS, Bootstrap Project is also mobile responsive and dark mode available also using external libraries.",
          images: [`${todolist}`, `${freshmarket1}`],
          live: 'https://customtodo.onrender.com/',
          repository: 'https://github.com/ronM3/Customizable-To-Do-List'
      },
      {
        title: "Freshmarket shop",
        description:
          "e commerce shop build with angular & rxjs, Backend: Node.js, Express, bcrypt, mysql. Frontend: Angular, RxJs, Reactive forms, CSS/Bootstrap, file upload feature",
          images: [`${freshmarket}`, `${freshmarket1}`],
      },
]
