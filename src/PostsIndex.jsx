export function PostsIndex(props) {
  console.log(props)
  return (
    <div id="posts-index">
      <h1>ALL POSTS:</h1>
      <p>pre loop text just for reference</p>
      {props.posts.map(post => (
        <div className="posts"> 
          <h2>{post.title}</h2>
          <p>{post.date}</p>
          <img src={post.image}/>
          <p>
           Post: {post.body}
          </p>
        </div>
      ))};
    </div>
  )
}