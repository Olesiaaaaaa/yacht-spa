import YachtCard from './components/YachtCard/YachtCard'
function App() {
  return (
    <main className="container my-5">
      <h2 className="text-center mb-4">My Favorite Yacht Models</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
        <YachtCard title="Portugal" image="/Португалия.jpg" description="the westernmost country in continental Europe." links={[{ label: 'YachtAll', url: 'https://www.yachtall.com/ru/parusnye-lodki' }]} trainingLink="https://iytnet.com" searchLink="https://www.yachtall.com/ru/parusnye-lodki/portugaliya" searchText="Yachts in Portugal" />
      </div>
    </main>
  )
}
export default App