import "./style.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Checkout />} />
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
        </Routes>
      </Router>
    </div>
  );
}