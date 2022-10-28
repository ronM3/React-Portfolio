import freshmarket from "../assets/Freshmarket-shop.gif";
import freshmarket1 from "../assets/freshmarket1.png"
import freshmarket2 from "../assets/freshmarket2.png"
import freshmarket3 from "../assets/freshmarket3.png"
import vacation from "../assets/vacation-project.png";
import todo from "../assets/todo-list.gif";
import todolist from "../assets/todolist.png";


export const projects = [
    {
        title: "Freshmarket shop",
        description:
          "e commerce shop build with angular & rxjs, Backend: Node.js, Express, bcrypt, mysql. Frontend: Angular, RxJs, Reactive forms, CSS/Bootstrap, file upload feature",
        user: 'Demo User: got@gmail.com, Password: 123456',
        images: [`${freshmarket}`, `${freshmarket2}`, `${freshmarket3}`],
        live: 'https://freshmarketapp.herokuapp.com/',
        repository: 'https://github.com/ronM3/Freshmarket-shop'
      },
      {
        title: "Ultimate Vacations",
        description:
          "e commerce shop build with angular & rxjs, Backend: Node.js, Express, bcrypt, mysql. Frontend: Angular, RxJs, Reactive forms, CSS/Bootstrap, file upload feature",
          images: [`${vacation}`, `${freshmarket1}`],
      },
      {
        title: "Customizable-To-Do-List",
        description:
          "A Friendly and customizable To-Do List where you can add, delete or edit tasks written with Vanilla JavaScript, HTML, CSS, Bootstrap Project is also mobile responsive and dark mode available also using external toast library and font-awesome.",
          images: [`${todolist}`, `${freshmarket1}`],
      },
      {
        title: "Freshmarket shop",
        description:
          "e commerce shop build with angular & rxjs, Backend: Node.js, Express, bcrypt, mysql. Frontend: Angular, RxJs, Reactive forms, CSS/Bootstrap, file upload feature",
          images: [`${freshmarket}`, `${freshmarket1}`],
      },
]
