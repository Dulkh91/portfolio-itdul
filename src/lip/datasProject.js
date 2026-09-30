import bookReading from '../assets/book.png'
import todoImage from '../assets/todo.png'
import blogView from '../assets/blogView.png'
import movieSearch from '../assets/moviesearch.png'
import portfolio from '../assets/portfolio.png'
import cofePos from '../assets/cofe-pos.jpg'



export const datasProject = ()=>{
    const taiolerImage = "https://github.com/Dulkh91/tailer-shop/raw/main/src/lib/assets/image/homeview.jpg"

    return[
        {title:"POS & Sales Dashboard (In Progress)", image:cofePos, body:`A full-stack Point of Sale (POS) and sales management application designed for small businesses to manage products, inventory, sales, invoices, and business analytics in one place.

The application provides a dashboard for monitoring sales performance, managing products and stock, processing sales, and generating invoices. It also includes search, filtering, pagination, and sales analytics with daily, weekly, and monthly views.`, 
            src:'https://learning-nextjs-five-phi.vercel.app/pos', repo: 'https://github.com/Dulkh91/next-moviedb-search',
            tag:[{label:'Nextjs', name:'nextjs'},{label:'Typescript', name:'typescript'},{label:'Tailwind', name:'tailwind'},{label:'Shadcn-UI', name:'shadcn'},{label:'PostgresSQL', name:'postgresql'}]},

        {title:"Tailor Shop Management System", image:taiolerImage, body:`A specialized management system designed for custom tailoring businesses to streamline customer measurement tracking and customer info management. Account Demo: User: dul1, Password: 12345`, 
            src:'https://tailer-shop.vercel.app/', repo: 'https://github.com/Dulkh91/tailer-shop',
            tag:[{label:'Sveltkit', name:'html'},{label:'Typescript', name:'typescript'},{label:'Tailwind', name:'tailwind'},{label:'Mongodb atlas', name:'mongodb'}]},

        {title:"Movie Searching", image:movieSearch, body:"A dynamic movie search platform built with Next.js, leveraging the MovieDB API to deliver fast and accurate search results. With a sleek, responsive design, it offers users an intuitive way to explore movie details and discover new favorites.", 
            src:'https://next-moviedb-search.vercel.app', repo: 'https://github.com/Dulkh91/next-moviedb-search',
            tag:[{label:'Nextjs', name:'nextjs'},{label:'Typescript', name:'typescript'},{label:'Tailwind', name:'tailwind'},{label:'antd', name:'antd'}]},

        {title:"To do list", image:todoImage, body:"Todo List application built with React, designed to help users manage tasks efficiently. Featuring a clean interface, real-time updates, and responsive design, it ensures a seamless user experience across devices.", 
            src:'https://react-todos-lake-mu.vercel.app', repo: "https://github.com/Dulkh91/react_todos",
            tag:[{label:'React', name:'react'}]},
        {title:"Blog view", image:blogView, body:"A modern blog platform built with React, offering a clean and responsive interface for seamless content browsing. It features dynamic post rendering, intuitive navigation, and an engaging design, perfect for sharing and exploring ideas.", 
            src:'https://react-blog-view.vercel.app', repo:"https://github.com/Dulkh91/react_blogView",
            tag:[{label:'React', name:'react'},{label:'Tailwind', name:'tailwind'}]},
        {title:"Korea book reading", image:bookReading, body:"A user-friendly online bookstore featuring a curated selection of Korean literature and educational resources. Built with modern web technologies, it offers seamless browsing, secure transactions, and an engaging experience for book enthusiasts.", 
            src:'https://korea-book-online.vercel.app', repo: "https://github.com/Dulkh91/korea-book-online",
            tag:[{label:'Vue', name:'vue'},{label:'Tailwind', name:'tailwind'},{label:'sheets', name:'sheets'}]},
        {title:"Portfolio", image:portfolio, body:"My portfolio showcases my journey and accomplishments as a web developer, highlighting projects built during my learning and practice. It demonstrates my skills in creating responsive, user-friendly web applications using modern technologies.", 
             src:'https://portfolio-itdul.vercel.app/', repo: 'https://github.com/Dulkh91/portfolio-itdul',
            tag:[{label:'Astro', name:'astro'},{label:'Typescript', name:'typescript'},{label:'Tailwind', name:'tailwind'}]}

    ]
}