import './App.css';
 

import { QueryClient, QueryClientProvider } from 'react-query'
import {PixabayRImage} from './components/PixabayRImage';
const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
     <PixabayRImage query="fruits"  />
     <PixabayRImage query="computer" lang="ch"  />
    </div>
    </QueryClientProvider>
  );
}

export default App;
