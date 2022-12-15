import React, {useEffect, useState} from 'react';
import './App.css';

interface Layers {
  name: string;
  options: string[];
  order?: number;
}

function App() {
  
  const [layers, setLayers] = useState<Layers[]>();
  const [selectedLayers, setSelectedLayers] = useState<string[]>([]);
  
  useEffect(() => {
    setLayers([
      {
        name: "Backgrounds",
        options: [
          "Background_Toxic.png",
          "Background_Tangerine.png",
          "Background_Sky.png",
          "Background_Rose.png",
          "Background_Raspberry.png",
          "Background_Mustard.png",
          "Background_Mint.png",
          "Background_Metal.png",
          "Background_Lavender.png",
          "Background_Grass.png",
          "Background_Grape.png",
          "Background_Fern.png",
          "Background_Dusk.png",
          "Background_Chocolate Milk.png",
        ]
      },
      {
        name: "Back",
        options: [
          "Back_Bard.png",
          "Back_Builder.png",
          "Back_Demo Expert.png",
          "Back_Diplomat.png",
          "Back_Explorer.png",
          "Back_Gun Expert.png",
          "Back_Medic.png",
          "Back_Miner.png",
          "Back_Scavenger.png",
          "Back_Subscripter.png",
          "Back_Terraformer.png",
          "Back_Trader.png",
        ],
        order: 0
      },
      {
        name: "Paint",
        options: [
          "Paint_Gilded.png",
          "Paint_Bulletproof.png",
        ],
      },
      {
        name: "Clothing",
        options: [
          "Clothing_Death Metal.png",
          "Clothing_Astronaut.png",
          "Clothing_Baseball.png",
          "Clothing_Berserker.png",
          "Clothing_Dancer.png",
          "Clothing_Dapper.png",
          "Clothing_Doc.png",
          "Clothing_Gamer.png",
          "Clothing_Gardener.png",
          "Clothing_Hacker.png",
          "Clothing_Inhabit.png",
          "Clothing_Leather.png",
          "Clothing_Merchant.png",
          "Clothing_Pirate.png",
          "Clothing_Prospector.png",
          "Clothing_Racer.png",
          "Clothing_Repurposed.png",
          "Clothing_Steampunk.png",
          "Clothing_Street.png",
          "Clothing_Swat.png",
          "Clothing_Wasteland.png",
          "Clothing_Weather Appropriate.png",
          "Clothing_Witch.png",
        ]
      },
      {
        name: "Eargear",
        options: [
          "Eargear_X Marks The Spot.png",
          "Eargear_Wait for My Call.png",
          "Eargear_Sorceress.png",
          "Eargear_Stick to the Script.png",
          "Eargear_Rock On.png",
          "Eargear_Oxygen Needed.png",
          "Eargear_Not So Cold.png",
          "Eargear_Loud.png",
          "Eargear_Life.png",
          "Eargear_Lets Check Your Ears.png",
          "Eargear_Holster.png",
          "Eargear_Exhausted.png",
          "Eargear_Earmuffs Please.png",
          "Eargear_Discover.png",
          "Eargear_Cant See Without You.png",
          "Eargear_By The Lake.png",
        ]
      },
      {
        name: "Eyewear",
        options: [
          "Eyewear_Always Watching.png",
          "Eyewear_Clockwork.png",
          "Eyewear_DDoS.png",
          "Eyewear_Deep Sea.png",
          "Eyewear_Default Eye.png",
          "Eyewear_Digital Reality.png",
          "Eyewear_Exquisite Design.png",
          "Eyewear_Found These.png",
          "Eyewear_Installer.png",
          "Eyewear_Madness.png",
          "Eyewear_Molecule.png",
          "Eyewear_Necromancer.png",
          "Eyewear_No pickles.png",
          "Eyewear_Ore Hunting.png",
          "Eyewear_Representative.png",
          "Eyewear_Rocketeer.png",
          "Eyewear_SOLD!.png",
          "Eyewear_Volume Up.png",
          "Eyewear_Voyage.png",
        ]
      },
      {
        name: "Headgear",
        options: [
          "Headgear_Always Wear a.png",
          "Headgear_Camera Feed.png",
          "Headgear_Cat.png",
          "Headgear_Clue.png",
          "Headgear_Concert Chaos.png",
          "Headgear_Fallout.png",
          "Headgear_Friend or Fo.png",
          "Headgear_Industrial.png",
          "Headgear_Mediator.png",
          "Headgear_Mining.png",
          "Headgear_Mote.png",
          "Headgear_On the line!.png",
          "Headgear_Red _ Blue.png",
          "Headgear_Sound.png",
          "Headgear_Tactical Maneuver.png",
          "Headgear_Tactical.png",
          "Headgear_Throned.png",
          "Headgear_Wave the Checkered Flag.png",
          "Headgear_Wrangler.png",
        ]
      },
      {
        name: "Mouthgear",
        options: [
          "Mouthgear_Adventure.png",
          "Mouthgear_Audio Tracking.png",
          "Mouthgear_Barebones.png",
          "Mouthgear_Cosmonaut.png",
          "Mouthgear_Crusher.png",
          "Mouthgear_Gladiator.png",
          "Mouthgear_Horticulturalist.png",
          "Mouthgear_Mainframe.png",
          "Mouthgear_Need Comms.png",
          "Mouthgear_NONE.png",
          "Mouthgear_Order Up.png",
          "Mouthgear_Oxygen Activated.png",
          "Mouthgear_Particle.png",
          "Mouthgear_Shimmy.png",
          "Mouthgear_Silver Tongue.png",
          "Mouthgear_Slow Down.png",
          "Mouthgear_Talk Lies Talk Truth.png",
        ]
      },
    ]);
  }, [])
  
  return (
    <div className="container m-auto">
      <header className="rounded border mt-10 text-center">
        <h1 className="font-black">DOTS Builder</h1>
      </header>
      <main className="flex flex-col md:flex-row mb-10">
        <div className="w-full md:w-1/2 p-3">
          <form>
          {layers?.map((layer, n) => (
            <label key={n} className="w-full block">
              <span className="">{layer.name}</span>
              <select onChange={(e) => {
                selectedLayers[n] = e.target.value;
                setSelectedLayers([...selectedLayers])
              }} className="w-full py-2 px-1 border rounded">
                <option key={n} value=""></option>
                {layer.options.map((image, n) => (
                  <option key={n} value={`${layer.name}/${image}`}>{image.replace(".png", "")}</option>
                ))}
              </select>
            </label>
          ))}
          </form>
        </div>
        <div className="w-full md:w-1/2 p-3 aspect-square">
          <div className="p-3 relative">
            {selectedLayers.map((url, n) => (
              url && <img alt={`layer-${n}`} className="absolute inset-0 object-contain" style={{zIndex: n}} src={`https://bernardus.co.za/dots_images/images/${url}`} key={n}/>
            ))}
          </div>
        </div>
      </main>
      <footer className="text-center !text-[12px] pb-2">
        <p className="text-[12px]">
          made with 🧠 by &nbsp;
          <a className="text-[12px]" href="https://twitter.com/bnardus">@bnardus.eth</a>&nbsp;&&nbsp;
          <a className="text-[12px]" href="https://twitter.com/juicyjama_">@juicyjama.eth</a> 
        </p>
      </footer>
    </div>
  );
}

export default App;
