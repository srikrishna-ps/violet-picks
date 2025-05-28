import { useEffect, useState } from 'react';
import Header from '../components/Header';
import AlbumCard from '../components/AlbumCard';
import { Music, Heart, Sparkles } from 'lucide-react';

const albums = [
  {
    title: "Imaginal Disk",
    artist: "Magdalena Bay",
    coverImage: "https://upload.wikimedia.org/wikipedia/en/4/4b/Magdalena_Bay_-_Imaginal_Disk.png",
    genres: ["neo-psychedelia", "synth-pop", "dance-pop", "pop-rock"],
    feeling: "If time is meant for living, why's it killing me?",
    description: "Feels like converting space dust into sonics. The arrangements of each track feel so mesmerizingly intertwined, and the flow is one of a kind. Call it my obsession with synth pop but goddamn is this my album of the decade."
  },
  {
    title: "LP!",
    artist: "JPEGMAFIA",
    coverImage: "https://upload.wikimedia.org/wikipedia/en/1/19/Jpegmafia_LP!.jpg",
    genres: ["experimental hip hop", "noise rap", "glitch hop"],
    feeling: "They be fucking up my lyrics on Genius/ And these pussy ass critics repeat it :sobs",
    description: "I'll pretend to not realise that the genre is not right up your alley. Each song is made so well it sounds like an instant powerhouse, and REBOUND! really has to be one of the most sticking sounds I've heard from 2021. Wake up, better not sleep on his beats and bars ;)"
  },
  {
    title: "Calico",
    artist: "Ryan Beatty",
    coverImage: "https://upload.wikimedia.org/wikipedia/en/0/08/Ryan_Beatty_Calico_Album_Cover.jpg",
    genres: ["indie folk", "singer-songwriter", "indie pop"],
    feeling: "The stars are your burden/ The lights and the curtains burned to the ground/ But now and again I'll put on your movie/ When no one is around",
    description: "His voice is such a cozy hug man. Simple acoustics and percussions, beautiful delivery and some amazing lyricism. Perhaps the perfect summer album, but well people do not realise it (glad tbh). But here you go, because well we love indie and good music :D"
  },
  {
    title: "The Forever Story",
    artist: "JID",
    coverImage: "https://upload.wikimedia.org/wikipedia/en/4/4e/JID_-_The_Forever_Story.png",
    genres: ["hip hop", "southern hip hop", "jazz rap"],
    feeling: "You know it rains for somethin', you know the pain's for somethin'/ I hope a change is comin', just keep on swangin' on",
    description: "Again pretends that this is your cozy genre because well, J-I-D back in the city with it. With a ridiculously impressive performance, value-adding features and just exciting directions for tracks, the album feels like a whole experience aaaaaaa"
  },
  {
    title: "Javelin",
    artist: "Sufjan Stevens",
    coverImage: "https://upload.wikimedia.org/wikipedia/en/5/55/Sufjan_Stevens_-_Javelin.png",
    genres: ["indie folk", "singer-songwriter", "folktronica"],
    feeling: "Hello, wildness, please forgive me now/ For the heartache and the misery I create/ Take my suffering as I take my vow/ Wash me now, anoint me with that golden blade",
    description: "I don't think my words canNOT describe how beautiful this album is, so I'll just drop the review from one of the articles: 'And such is the ethos of Javelin: a deeply personal, Earth- moving masterpiece exploring relationship tensions with the gravitas of an apocalypse and the simplicity of a melody passed down through generations.'"
  },
  {
    title: "the record",
    artist: "boygenius",
    coverImage: "https://upload.wikimedia.org/wikipedia/en/2/21/Boygenius_-_the_record.jpg",
    genres: ["indie rock", "indie folk", "singer-songwriter"],
    feeling: "There's something in the static/ I think I've been having revelations/ Coming to in the front seat, nearly empty/ Skip the exit to our old street and go home/ Go home alone",
    description: "While I still highly believe that their self-titled EP is so much more superior, I can't deny that this album sounds so refreshing. The songwriting is so sublime (and sad, no surprise because well Phoebe) and conversational, this stylistic body of work balances the odds so well that I'm just left confused if I should be hopeful or just, well, kill myself."
  },
  {
    title: "Lahai",
    artist: "Sampha",
    coverImage: "https://upload.wikimedia.org/wikipedia/en/9/9b/Sampha_-_Lahai.png",
    genres: ["alternative R&B", "soul", "electronic", "jazz"],
    feeling: "In another life, I don't know who you are/ I'm a troubled mind, reality divorced/ When you ask me if I love you, I'm/ Suspended",
    description: "I stumbled upon this album because the cover genuinely looked exciting (because well why tf was he pointing a four), but anyways, this album gives me peak musician for some reason. The piano sounds hallucinating, and each track exudes this beautiful quality that I'm just left, suspended."
  },
  {
    title: "five seconds flat",
    artist: "Lizzy McAlpine",
    coverImage: "https://upload.wikimedia.org/wikipedia/en/8/8e/The_cover_for_the_second_studio_album_by_American_singer-songwriter_Lizzy_McAlpine.jpeg",
    genres: ["indie pop", "singer-songwriter"],
    feeling: "I think it all kinda feels like an Orange Show Speedway/ When you're racing head-first towards something that'll kill you in five seconds flat/ When I'm racing head-first towards everything that I want back",
    description: "Hopped onto this seeing FINNEAS on the producer list, and I'm so glad I did because I can't recall the last time I was pissed (nvm). The production sticks up so well with her focused and sharp narratives about daydreaming, or crushing and moving on. If I'm dying in a car accident, it better be with reckless driving :)"
  },
  {
    title: "Diamond Jubilee",
    artist: "Cindy Lee",
    coverImage: "https://upload.wikimedia.org/wikipedia/en/7/70/Diamond_Jubilee_by_Cindy_Lee.jpg",
    genres: ["psychedelic pop", "noise pop"],
    feeling: "What could I find/ In a fantasy?/ A burning memory/ Of something true/ Something true",
    description: "I can imagine you just looking at the track number and turning away before listening, but DON'T (and it's sadly not on streaming services). The compilation feels so float-y, and once you get into the feeling it's just amazing. Of course it's not a 10/10 but well bedroomy introspection demands music likewise and it cannot get any better when time's not a problem :)"
  },
  {
    title: "Patterns in Repeat",
    artist: "Laura Marking",
    coverImage: "https://upload.wikimedia.org/wikipedia/en/4/4d/Patterns_in_Repeat_Laura_Marling_album_cover.jpg",
    genres: ["singer-songwriter", "chamber folk"],
    feeling: "And now the time leaps by and starts to fly/ And only then can I see/ That we're patterns in repeat/ And we'll always be",
    description: "I think you'd have listened to this, but I'm still dropping it here because 2024 had way too much going on. She has found her way into delving into themes of adulthood with such mature songwriting and amazing production, I bet the birds will stay by the window and listen if I ever put her music on speakers. Man she deserves SO MUCH LOVE I'm just grateful she shares her music with the world. can't wait for you to write poems inspired by this :)"
  }
];

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
    document.documentElement.classList.add('dark');
  }, []);

  if (!mounted) return null;

  const topRowAlbums = albums.slice(0, 5);
  const bottomRowAlbums = albums.slice(5, 10);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#121212]">
      <div className="relative z-10 container mx-auto px-6 py-8">
        <Header />

        <main className="mt-12 space-y-8">
          {/* Top Row - Albums 1-5 */}
          <div className="w-full max-w-6xl mx-auto">
            <fieldset className="album-accordion">
              {topRowAlbums.map((album, index) => (
                <AlbumCard
                  key={`top-${album.artist}-${album.title}`}
                  {...album}
                  index={index}
                  albumNumber={index + 1}
                  isSelected={selectedAlbum === index}
                  onSelect={() => setSelectedAlbum(selectedAlbum === index ? null : index)}
                />
              ))}
            </fieldset>

            {/* Selected Album Details Card */}
            {selectedAlbum !== null && selectedAlbum < 5 && (
              <div className="mt-6 bg-[#121212] rounded-2xl p-6 border border-[#444444] animate-fade-in">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {topRowAlbums[selectedAlbum].genres.map((genre, genreIndex) => (
                      <span
                        key={genre}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-[#444444]/20 text-[#888888] border border-[#444444]/30"
                      >
                        #{genre}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-[#B0B0B0] italic leading-relaxed font-outfit">
                    "{topRowAlbums[selectedAlbum].feeling}"
                  </p>

                  <div className="border-t border-[#444444] pt-4">
                    <p className="text-sm text-[#B0B0B0] leading-relaxed font-outfit">
                      {topRowAlbums[selectedAlbum].description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Row - Albums 6-10 */}
          <div className="w-full max-w-6xl mx-auto">
            <fieldset className="album-accordion">
              {bottomRowAlbums.map((album, index) => (
                <AlbumCard
                  key={`bottom-${album.artist}-${album.title}`}
                  {...album}
                  index={index + 5}
                  albumNumber={index + 6}
                  isSelected={selectedAlbum === index + 5}
                  onSelect={() => setSelectedAlbum(selectedAlbum === index + 5 ? null : index + 5)}
                />
              ))}
            </fieldset>

            {/* Selected Album Details Card */}
            {selectedAlbum !== null && selectedAlbum >= 5 && (
              <div className="mt-6 bg-[#121212] rounded-2xl p-6 border border-[#444444] animate-fade-in">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {bottomRowAlbums[selectedAlbum - 5].genres.map((genre, genreIndex) => (
                      <span
                        key={genre}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-[#444444]/20 text-[#888888] border border-[#444444]/30"
                      >
                        #{genre}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-[#B0B0B0] italic leading-relaxed font-outfit">
                    "{bottomRowAlbums[selectedAlbum - 5].feeling}"
                  </p>

                  <div className="border-t border-[#444444] pt-4">
                    <p className="text-sm text-[#B0B0B0] leading-relaxed font-outfit">
                      {bottomRowAlbums[selectedAlbum - 5].description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>

        <footer className="mt-20 pb-8">
          <div className="text-center space-y-6">
            <div className="h-px bg-gradient-to-r from-transparent via-[#444444] to-transparent mx-auto max-w-md" />

            <div className="flex justify-center items-center space-x-4 text-[#888888]">
              <Music className="w-5 h-5 animate-float" />
              <Heart className="w-4 h-4 animate-float animate-delay-200" />
              <Sparkles className="w-5 h-5 animate-float animate-delay-400" />
            </div>

            <p className="text-[#B0B0B0] font-outfit text-sm">
              violetpicks — a love letter to the albums I have adored post 2020
            </p>

            <p className="text-[#888888] font-mono text-xs">
              crafted with love for the music that moves us
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
