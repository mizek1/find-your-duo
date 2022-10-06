import * as Checkbox from '@radix-ui/react-checkbox';
import * as Dialog from '@radix-ui/react-dialog';
import * as Select from '@radix-ui/react-select';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import axios, { AxiosResponse } from 'axios';
import { CaretDown, Check, GameController } from 'phosphor-react';
import { FormEvent, useEffect, useState } from 'react';
import { CreateAd } from '../types/CreateAd';
import { Game } from '../types/Game';
import { Input } from './Form/Input';

export function CreateAdModal() {
  const weekDays = [
    { label: 'Domingo', abbreviation: 'D' },
    { label: 'Segunda', abbreviation: 'S' },
    { label: 'Terça', abbreviation: 'T' },
    { label: 'Quarta', abbreviation: 'Q' },
    { label: 'Quinta', abbreviation: 'Q' },
    { label: 'Sexta', abbreviation: 'S' },
    { label: 'Sábado', abbreviation: 'S' },
  ];

  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game['id']>();
  const [selectedDays, setSelectedDays] = useState<string[]>(['0']);
  const [useVoiceChannel, setUseVoiceChannel] = useState(false);

  useEffect(() => {
    axios('http://localhost:3333/games').then(
      (response: AxiosResponse<Game[]>) => {
        setGames(response.data);
      }
    );
  }, []);

  async function handleCreateAd(event: FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    try {
      await axios.post<any, any, CreateAd>(
        `http://localhost:3333/games/${selectedGame}/ads`,
        {
          discord: data.idDiscord as string,
          name: data.name as string,
          yearsPlaying: Number(data.yearsPlaying),
          weekDays: selectedDays.map(Number),
          hourStart: data.hourStart as string,
          hourEnd: data.hourEnd as string,
          useVoiceChannel,
        }
      );
      alert('Anúncio criado com sucesso!');
    } catch (error) {
      alert('Erro ao criar anúncio!');
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-slate-900 rounded-lg py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] shadow-lg shadow-black/25">
        <Dialog.Title className="text-3xl font-black">
          Publique um anúncio
        </Dialog.Title>
        <form onSubmit={handleCreateAd} className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="game">
              Qual o game?
            </label>
            <select
              data-cy="select-game"
              aria-label="game"
              className="bg-zinc-800 rounded px-4 py-3 text-sm flex items-center justify-between"
              name="game"
              id="game"
              placeholder="Selecione o game que deseja jogar"
              value={selectedGame}
              onChange={(event) => setSelectedGame(event.target.value)}
            >
              {games.map((game) => {
                return (
                  <option
                    className="text-white flex items-center gap-2 py-1 px-3 rounded hover:bg-blue-600 hover:cursor-pointer"
                    value={game.id}
                    key={game.id}
                    data-cy={game.title}
                  >
                    {game.title}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="name">
              Seu nome ou nickname
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Como você prefere ser chamado?"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="yearsPlaying">
                Joga há quantos anos?
              </label>
              <Input
                id="yearsPlaying"
                name="yearsPlaying"
                type="number"
                placeholder="Tudo bem ser 0 (zero)"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="idDiscord">
                Qual seu Discord?
              </label>
              <Input
                id="idDiscord"
                name="idDiscord"
                type="text"
                placeholder="Usuário#0000"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="weekDays">
                Quando costuma jogar?
              </label>
              <ToggleGroup.Root
                className="flex flex-wrap gap-2"
                type="multiple"
                value={selectedDays}
                onValueChange={setSelectedDays}
              >
                {weekDays.map((weekDay, index) => {
                  return (
                    <ToggleGroup.Item
                      className={`w-8 h-8 rounded  ${
                        selectedDays.includes(index.toString())
                          ? 'bg-blue-600'
                          : 'bg-zinc-800'
                      }`}
                      key={index}
                      value={index.toString()}
                      title={weekDay.label}
                      aria-label={weekDay.label}
                    >
                      {weekDay.abbreviation}
                    </ToggleGroup.Item>
                  );
                })}
              </ToggleGroup.Root>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label className="font-semibold" htmlFor="hourStart">
                Qual horário do dia?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <Input
                  id="hourStart"
                  name="hourStart"
                  type="time"
                  placeholder="De"
                />
                <Input
                  id="hourEnd"
                  name="hourEnd"
                  type="time"
                  placeholder="Até"
                />
              </div>
            </div>
          </div>

          <label className="mt-2 flex items-center gap-2 text-sm font-semibold cursor-pointer">
            <Checkbox.Root
              className="w-6 h-6 p-1 rounded bg-zinc-800"
              checked={useVoiceChannel}
              onCheckedChange={(checked) => {
                setUseVoiceChannel(!!checked);
              }}
            >
              <Checkbox.Indicator>
                <Check size={16} className="text-emerald-400" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </label>

          <footer className="mt-4 flex gap-4 justify-end">
            <Dialog.Close
              type="button"
              className="bg-zinc-600 text-white font-semibold px-5 h-12 rounded-md hover:bg-zinc-700"
            >
              Cancelar
            </Dialog.Close>

            <button
              className="bg-blue-600 text-white font-semibold px-5 h-12 rounded-md flex items-center gap-3 hover:bg-blue-700"
              type="submit"
            >
              <GameController size={24} />
              Encontrar duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
