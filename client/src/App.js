import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <p class="navbar-brand">DAILY JOURNAL</p>
          </div>
          <ul class="nav navbar-nav navbar-right">
            <li id="home"><a href="/">HOME</a></li>
          <li id="about"><a href="/about">ABOUT US</a></li>
            <li id="contact"><a href="/contact">CONTACT US</a></li>
          </ul>
        </div>
      </nav>
      <h1>Home</h1>
      <p>
        Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.
      </p>
      <h1>Day 1</h1>
      <p>
        Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.        
        <a href="/posts/<%=post._id%>">Read More</a>
      </p>
      <div class="footer-padding"></div>
      <div class="footer">
        <p>Made with ❤️ by The App Brewery</p>
      </div>
    </div>
  );
}

export default App;
