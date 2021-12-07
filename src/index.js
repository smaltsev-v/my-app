import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';



ReactDOM.render(<App/>,
  document.querySelector('#root'),
);

// function Painting(props) {
//   const { url, title, profileUrl, author, price } = props;

//   return(
//    <div>
//      <img src={url} alt={title} width="480" />
//      <h2>{title}</h2>
//      <p>
//         Автор: <a href={profileUrl}>{author}</a>
//      </p>
//      <p>Цена:{price} кредитов</p>
//      <p>Доступность: заканчивается или есть в наличии</p>
//      <button type="button">Добавить в корзину</button>
//    </div>
//  ); 
//  }
// const painting = paintings[2];
// <Painting
//     url={painting.url}
//     title={painting.title}
//     authorName={painting.author.tag}
//     profileUrl={painting.author.url}
//     price={painting.price }
//   />,



// const data = paintings[0];
// const data2 = paintings[1];

// // const elem1 = React.createElement('span', { children: 'Привет' });
// // const elem2 = React.createElement('span', { children: 'мир' });

// // JXS = использовать всегда 
// const elem1 = <span>Привет</span>;


// const elem2 = <span>мир</span>
// const jxsElement = (
//   <div>
//     {elem1}
//     {elem2}
//   </div>
// );


// // const element = React.createElement('div', {
// //   a: 5,
// //   b: 10,
// //   children: 'Привет мир',
// // });
// // const jxsElement = <div>Привет мир</div>;

// console.log(jxsElement);
// // ReactDOM.render(element,document.querySelector('#root'));
//Создание компанента 
// const painting1 = (

// );
// const painting2 = (
// <div>
//     <img src={data2.url} alt={data2.title} width="480" />
//   <h2>{data2.title}</h2>
//   <p>
//       Автор:<a href={data2.author.url}>{data2.author.tag}</a>
//   </p>
//     <p>Цена: {data2.price} кредитов</p>
//   <p>Доступность: заканчиваються или есть в наличии</p>
//   <button type="button">Добавить в корзину</button>
// </div>
// );
//
// const data = {
//   "id": "id-1",
//   "url": "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
//   "title": "Feathers. Art abstract",
//   "price": 500,
//   "author": {
//     "tag": "ractapopulous",
//     "url": "https://pixabay.com/users/ractapopulous-24766/"
//   },
//   "quantity": 10
// };


