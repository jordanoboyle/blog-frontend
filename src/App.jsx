import { Header } from "./Header";
import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";
import { Content } from "./Content";
import { Footer } from "./Footer";


// function Content() {
//   let posts = [ /* normally this is a logic broken down api call? */
//     {
//       id: 1,
//       date: "Jan 23, 2011",
//       title: "Turrican is a Special Experience",
//       body: "test test test test test test",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYTHOVYDjaL0b80ZmYC6rOTB4M_5co5UsKkkJkP62PQ&s",
//     },
//     {
//       id: 2,
//       date: "Feb 14, 2012",
//       title: "Mario Sunshine is Unique for its Immersion",
//       body: "test test test test test test",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFz4DPeS28tY6f9ldRNqAVZPmamJqrulPraGelulJhsw&s",
//     },
//     {
//       id: 3,
//       date: "Feb 29, 2012",
//       title: "Final Fantasy 15 is Underrated",
//       body: "test test test test test test",
//       image: "https://upload.wikimedia.org/wikipedia/en/5/5a/FF_XV_cover_art.jpg",
//     },
//   ];
//   return (
//     <div>
//       <PostsNew />
//       <PostsIndex posts={posts}/>
//     </div>
//   )
// }

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;