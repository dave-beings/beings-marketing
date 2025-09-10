interface Props {
  children?: React.ReactNode;
}

const App = ({ children }: Props) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Beings Marketing</h1>
        <p>Welcome to the Beings marketing website</p>
      </header>
      {children}
    </div>
  )
}

export default App
