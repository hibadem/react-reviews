import './App.scss';
import Review from './Review';

function App() {
  return (
    <main className='reviews'>
        <h1 className='reviews__title'>Our Reviews</h1>
        <Review />
    </main>
  );
}

export default App;
