interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
  return (
    <a className="relative rounded-lg overflow-hidden" href="">
      <img src={props.bannerUrl} alt={props.title + ' banner'} />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0">
        <strong className="font-bold block">{props.title}</strong>
        <span className="text-zinc-300 text-sm block">
          {props.adsCount} anúncio(s)
        </span>
      </div>
    </a>
  );
}
