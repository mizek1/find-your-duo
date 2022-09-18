import { MagnifyingGlassPlus } from 'phosphor-react';
import logoImage from './assets/logo.svg';
import './styles/main.css';

function App() {
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
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/image 1.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0">
            <strong className="font-bold block">League of Legends</strong>
            <span className="text-zinc-300 text-sm block">0 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/image 2.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0">
            <strong className="font-bold block">Dota 2</strong>
            <span className="text-zinc-300 text-sm block">0 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/image 3.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0">
            <strong className="font-bold block">CS:GO</strong>
            <span className="text-zinc-300 text-sm block">0 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/image 5.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0">
            <strong className="font-bold block">Apex Legends</strong>
            <span className="text-zinc-300 text-sm block">0 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/image 6.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0">
            <strong className="font-bold block">Fortnite</strong>
            <span className="text-zinc-300 text-sm block">0 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/image 7.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0">
            <strong className="font-bold block">World of Warcraft</strong>
            <span className="text-zinc-300 text-sm  block">0 anúncios</span>
          </div>
        </a>
      </div>

      <div className="self-stretch rounded-lg pt-1 mt-8 bg-galaxy-gradient overflow-hidden">
        <div className="bg-gray-900 px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

          <button className="py-3 px-4 text-white rounded-md bg-blue-600 hover:bg-blue-700 flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
