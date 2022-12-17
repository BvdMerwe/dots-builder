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
          "Background_Chocolate Milk.png.png",
          "Background_Dusk.png",
          "Background_Fern.png",
          "Background_Grape.png",
          "Background_Grass.png",
          "Background_Lavender.png",
          "Background_Metal.png",
          "Background_Mint.png",
          "Background_Mustard.png",
          "Background_Raspberry.png",
          "Background_Rose.png",
          "Background_Sky.png",
          "Background_Tangerine.png",
          "Background_Toxic.png",
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
          "Paint_Tech Tone.png",
          "Paint_1 Hour Later.png",
          "Paint_3...2..1..Go.png",
          "Paint_Blueberry.png",
          "Paint_Brass.png",
          "Paint_Bulletproof.png",
          "Paint_Camoflauge.png",
          "Paint_Captains Ship.png",
          "Paint_Caution.png",
          "Paint_Chemical.png",
          "Paint_Copper Coil.png",
          "Paint_Desert Camo.png",
          "Paint_Fertilizer.png",
          "Paint_Floating.png",
          "Paint_Gilded.png",
          "Paint_Ice Cream.png",
          "Paint_Important.png",
          "Paint_Incognito.png",
          "Paint_Indecisive.png",
          "Paint_Indestructible.png",
          "Paint_Ivory.png",
          "Paint_Magic.png",
          "Paint_Matrix.png",
          "Paint_Mite.png",
          "Paint_Moshpit.png",
          "Paint_Moss.png",
          "Paint_Not for Sale.png",
          "Paint_Pink Dream.png",
          "Paint_Plugged In.png",
          "Paint_Post Apocalyptic.png",
          "Paint_Rave.png",
          "Paint_Roses.png",
          "Paint_Rusted.png",
          "Paint_Sterile.png",
          "Paint_Sturdy.png",
          "Paint_Test.png",
          "Paint_Vibes.png",
          "Paint_Wander the Forest.png",
          "Paint_Wild.png",
          "Paint_Worn Down.png",
        ],
      },
      {
        name: "Clothing",
        options: [
          "Clothing_Brick Layer.png",
          "Clothing_Astronaut.png",
          "Clothing_Atompunk.png",
          "Clothing_Baseball.png",
          "Clothing_Berserker.png",
          "Clothing_Classy.png",
          "Clothing_Comfy.png",
          "Clothing_Cook.png",
          "Clothing_Cyber Spy.png",
          "Clothing_Dancer.png",
          "Clothing_Dapper.png",
          "Clothing_Death Metal.png",
          "Clothing_Detective.png",
          "Clothing_Developer.png",
          "Clothing_Doc.png.png",
          "Clothing_Explosive.png",
          "Clothing_Fisherman.png",
          "Clothing_Gamer.png",
          "Clothing_Gardener.png",
          "Clothing_Hacker.png",
          "Clothing_Inhabit.png",
          "Clothing_Leather.png",
          "Clothing_Merchant.png",
          "Clothing_Muse.png",
          "Clothing_Pilot.png",
          "Clothing_Pirate.png.png",
          "Clothing_Prospector.png",
          "Clothing_Protective.png",
          "Clothing_Racer.png.png",
          "Clothing_Repurposed.png",
          "Clothing_Scientific Sorcery.png",
          "Clothing_Squad.png",
          "Clothing_Steampunk.png",
          "Clothing_Street.png",
          "Clothing_Swat.png",
          "Clothing_Travel.png",
          "Clothing_Warm.png",
          "Clothing_Wasteland.png",
          "Clothing_Weather Appropriate.png",
          "Clothing_Witch.png",
        ]
      },
      {
        name: "Eargear",
        options: [
          "Eargear_Audio.png",
          "Eargear_By The Lake.png",
          "Eargear_Cant See Without You.png",
          "Eargear_Discover.png",
          "Eargear_Earmuffs Please.png",
          "Eargear_Exhausted.png",
          "Eargear_Feel The Music.png",
          "Eargear_Holster.png",
          "Eargear_Lets Check Your Ears.png",
          "Eargear_Life.png",
          "Eargear_Loud.png",
          "Eargear_Not So Cold.png",
          "Eargear_Oxygen Needed.png",
          "Eargear_Rock On.png",
          "Eargear_Sorceress.png",
          "Eargear_Stick to the Script.png",
          "Eargear_Subscripting 101.png",
          "Eargear_The Sound of $.png",
          "Eargear_Wait for My Call.png",
          "Eargear_X Marks The Spot.png",
        ]
      },
      {
        name: "Eyewear",
        options: [
          "Eyewear_DDoS.png",
          "Eyewear_Always Watching.png",
          "Eyewear_Clockwork.png",
          "Eyewear_Crop-Tender.png",
          "Eyewear_Deep-Sea.png",
          "Eyewear_Default-Eye.png",
          "Eyewear_Digital Reality.png",
          "Eyewear_Exquisite Design.png",
          "Eyewear_Found These.png",
          "Eyewear_Groovy.png",
          "Eyewear_Grow Trees.png",
          "Eyewear_Havoc.png",
          "Eyewear_Installer.png",
          "Eyewear_Madness.png",
          "Eyewear_Molecule.png",
          "Eyewear_Necromancer.png",
          "Eyewear_No-pickles.png",
          "Eyewear_Ore-Hunting.png",
          "Eyewear_Patch.png.png",
          "Eyewear_Reload.png",
          "Eyewear_Representative.png",
          "Eyewear_Rocketeer.png",
          "Eyewear_Shred On.png",
          "Eyewear_SOLD!.png",
          "Eyewear_Speedy-Recovery.png",
          "Eyewear_Stoplight.png",
          "Eyewear_Tear Gas Malfunction.png",
          "Eyewear_Volume Up.png",
          "Eyewear_Voyage.png",
          "Eyewear_WARNING.png",
          "Eyewear_Warrior.png",
        ]
      },
      {
        name: "Headgear",
        options: [
          "Headgear_Closed.png",
          "Headgear_Access Denied.png",
          "Headgear_Always Wear a.png",
          "Headgear_Beast.png",
          "Headgear_Camera Feed.png",
          "Headgear_Cat.png.png",
          "Headgear_Clue.png.png",
          "Headgear_Concert Chaos.png.png",
          "Headgear_Construction-Zone.png",
          "Headgear_Demolition.png",
          "Headgear_Disco Fever.png",
          "Headgear_Distressed.png",
          "Headgear_Enchantress.png",
          "Headgear_Expensive Taste.png",
          "Headgear_Fallout.png.png",
          "Headgear_Festival.png",
          "Headgear_Friend-or-Fo.png.png",
          "Headgear_Game On.png",
          "Headgear_Genetic Code.png",
          "Headgear_Industrial.png",
          "Headgear_Mediator.png.png",
          "Headgear_Mining.png.png",
          "Headgear_Mote.png",
          "Headgear_On the line!.png",
          "Headgear_Recycle.png",
          "Headgear_Red _ Blue.png.png",
          "Headgear_Rover.png",
          "Headgear_Sawbones.png",
          "Headgear_Sound.png.png",
          "Headgear_Space Visitor.png",
          "Headgear_Sticks.png",
          "Headgear_Tactical Maneuver.png",
          "Headgear_Tactical.png.png",
          "Headgear_Throned.png",
          "Headgear_Unexpected.png",
          "Headgear_Walk The Plank.png",
          "Headgear_Wave the Checkered Flag.png",
          "Headgear_Whats in Here.png",
          "Headgear_Whats on the Menu.png",
          "Headgear_Wrangler.png.png",
        ]
      },
      {
        name: "Mouthgear",
        options: [
          "Mouthgear_Flock.png.png",
          "Mouthgear_Adventure.png",
          "Mouthgear_Angler.png",
          "Mouthgear_Audio Tracking.png",
          "Mouthgear_Barebones.png",
          "Mouthgear_Buy This From Me.png",
          "Mouthgear_Cosmonaut.png",
          "Mouthgear_Crusher.png",
          "Mouthgear_Data Magic.png",
          "Mouthgear_Destruction.png",
          "Mouthgear_Gladiator.png",
          "Mouthgear_Hex.png",
          "Mouthgear_Horticulturalist.png",
          "Mouthgear_Lunch Break.png",
          "Mouthgear_Mainframe.png",
          "Mouthgear_Music.png",
          "Mouthgear_Need Comms.png",
          "Mouthgear_NONE.png.png",
          "Mouthgear_Order Up.png",
          "Mouthgear_Oxygen-Activated.png",
          "Mouthgear_Particle.png",
          "Mouthgear_Shimmy.png",
          "Mouthgear_Shrieking Vocals.png",
          "Mouthgear_Silver Tongue.png",
          "Mouthgear_Slow Down.png",
          "Mouthgear_Smoke Out.png",
          "Mouthgear_Snack.png",
          "Mouthgear_Surgeon.png",
          "Mouthgear_Talk-Lies-Talk-Truth.png",
          "Mouthgear_Tinkerer.png",
          "Mouthgear_Treasure Hunt.png",
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
