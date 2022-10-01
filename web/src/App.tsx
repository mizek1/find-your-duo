import * as Dialog from '@radix-ui/react-dialog';
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import logoImage from './assets/logo.svg';
import { CreateAdBanner } from './components/CreateAdBanner';
import { CreateAdModal } from './components/CreateAdModal';
import { GameBanner } from './components/GameBanner';
import './styles/main.css';
import { Game } from './types/Game';

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios('http://localhost:3333/games').then(
      (response: AxiosResponse<Game[]>) => {
        setGames(response.data);
      }
    );
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImage} alt="logo" />

      <h1 className="text-6xl text-white font-bold mt-20 drop-shadow-[0_4px_4px_#00000040]">
        Encontre seu{' '}
        <span className="text-transparent bg-galaxy-gradient bg-clip-text font-black">
          duo
        </span>
        .
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16 text-white">
        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}
            ></GameBanner>
          );
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default App;
