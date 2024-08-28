import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
    <div className="container">
      <h1>Chess Board</h1>
      <table>
        <tr className='row'>
          <td className='black'><i class="fa-solid fa-chess-rook"></i></td>
          <td className='white'><i class="fa-solid fa-chess-knight"></i></td>
          <td className='black'><i class="fa-solid fa-chess-bishop"></i></td>
          <td className='white'><i class="fa-solid fa-chess-queen"></i></td>
          <td className='black'><i class="fa-solid fa-chess-king"></i></td>
          <td className='white'><i class="fa-solid fa-chess-bishop"></i></td>
          <td className='black'><i class="fa-solid fa-chess-knight"></i></td>
          <td className='white'><i class="fa-solid fa-chess-rook"></i></td>
        </tr>
        <tr className='row'>
          <td className='white'><i class="fa-solid fa-chess-pawn"></i></td>
          <td className='black'><i class="fa-solid fa-chess-pawn"></i></td>
          <td className='white'><i class="fa-solid fa-chess-pawn"></i></td>
          <td className='black'><i class="fa-solid fa-chess-pawn"></i></td>
          <td className='white'><i class="fa-solid fa-chess-pawn"></i></td>
          <td className='black'><i class="fa-solid fa-chess-pawn"></i></td>
          <td className='white'><i class="fa-solid fa-chess-pawn"></i></td>
          <td className='black'><i class="fa-solid fa-chess-pawn"></i></td>
        </tr>
        <tr className='row'>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
        </tr>
        <tr className='row'>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
        </tr>
        <tr className='row'>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
        </tr>
        <tr className='row'>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
        </tr>
        <tr className='row whitecoin'>
          <td className='black'><i class="fa-solid fa-chess-pawn"></i></td>
          <td className='white'><i class="fa-solid fa-chess-pawn"></i></td>
          <td className='black'><i class="fa-solid fa-chess-pawn"></i></td>
          <td className='white'><i class="fa-solid fa-chess-pawn"></i></td>
          <td className='black'><i class="fa-solid fa-chess-pawn"></i></td>
          <td className='white'><i class="fa-solid fa-chess-pawn"></i></td>
          <td className='black'><i class="fa-solid fa-chess-pawn"></i></td>
          <td className='white'><i class="fa-solid fa-chess-pawn"></i></td>
        </tr>
        <tr className='row whitecoin'>
          <td className='white'><i class="fa-solid fa-chess-rook"></i></td>
          <td className='black'><i class="fa-solid fa-chess-knight"></i></td>
          <td className='white'><i class="fa-solid fa-chess-bishop"></i></td>
          <td className='black'><i class="fa-solid fa-chess-queen"></i></td>
          <td className='white'><i class="fa-solid fa-chess-king"></i></td>
          <td className='black'><i class="fa-solid fa-chess-bishop"></i></td>
          <td className='white'><i class="fa-solid fa-chess-knight"></i></td>
          <td className='black'><i class="fa-solid fa-chess-rook"></i></td>
        </tr>
        
      </table>
      </div>
      </div>
  );
}

export default App;
