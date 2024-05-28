export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div>
          Post Title: <input type="text" />
        </div>
        <div>
          Type your post here: <input type="text" />
        </div>
        <div>
          Would you like to add an image url: <input src="url" />
        </div>
        <button type="submit">Post Your Entry!</button>
      </form>
    </div>
  );
}
