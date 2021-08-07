import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <div className="content-container">
        <div className="search">
          <form action="/search" method="POST">
            <input type="text" name="query" placeholder="Search" />
            <input type="submit" value="search" />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
