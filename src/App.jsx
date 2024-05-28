function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  )
}
function PostsNew() {
  return(
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div>
          Post Title: <input type="text"/>
        </div>
        <div>
          Type your post here: <input type="text"/>
        </div>
        <div>
          Would you like to add an image url: <input src="url"/>
        </div>
        <button type="submit">Post Your Entry!</button>
      </form>
    </div>
  )
}

function PostsIndex() {
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <h2>Post Turrican, Date: January 23, 2011</h2>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYTHOVYDjaL0b80ZmYC6rOTB4M_5co5UsKkkJkP62PQ&s" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit laboriosam ratione amet nostrum. Error eaque, ipsum enim neque vel libero placeat quia iste vero amet quis necessitatibus similique sequi praesentium.</p>
      <h2>Post Super Mario Sunshine, Date: January 23, 2041</h2>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFz4DPeS28tY6f9ldRNqAVZPmamJqrulPraGelulJhsw&s" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit laboriosam ratione amet nostrum. Error eaque, ipsum enim neque vel libero placeat quia iste vero amet quis necessitatibus similique sequi praesentium.</p>
    </div>
  )
}
function Content() {
  return (
    <div>
      <PostsNew />
      <PostsIndex />
    </div>
    
  )
}

function Footer() {
  return (
  <footer>
    <p>Copyright 2024</p>
    <p>Site by: Jordan O'Boyle</p>
  </footer>
  )
}

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