
function App() {
  return (
    <div className="App">
      <h1>Todo List</h1> 
      <form data-testid="form-element">
        <input type="text" placeholder="Enter a task..." data-testid="form-input" />
        <input type="submit" value="Add" data-testid="form-submit" />
      </form>
    </div>
  );
}

export default App;
