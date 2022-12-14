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
          "CHOCOLATE.png",
          "DUSK.png",
          "FERN.png",
          "GRAPE.png",
          "GRASS.png",
          "LAVENDER.png",
          "METAL.png",
          "MINT.png",
          "MUSTARD.png",
          "RASBERRY.png",
          "ROSE.png",
          "SKY.png",
          "TANGERINE.png",
          "TOXIC.png",
        ]
      },
      {
        name: "Back",
        options: [
          "_0000s_0002_Inserted-Image.png",
          "_0000s_0003_Back-Miner.png",
          "_0000s_0004_Back-Gun.png",
          "_0000s_0006_Inserted-Image.png",
        ],
        order: 0
      },
      {
        name: "Clothing",
        options: [
          "_0000s_0009_From-selection.png",
          "_0000s_0008_From-selection.png",
          "_0000s_0007_Inserted-Image.png",
          "_0000s_0005_From-selection.png",
          "_0000s_0006_From-selection.png",
          "_0000s_0004_From-selection.png",
          "_0000s_0003_From-selection.png",
          "_0000s_0002_From-selection.png",
          "_0000s_0001_From-selection.png",
        ]
      },
      {
        name: "Eargear",
        options: [
        ]
      },
      {
        name: "Eyewear",
        options: [
          "_0000s_0008_From-selection.png",
          "_0000s_0007_From-selection.png",
          "_0000s_0006_From-selection.png",
          "_0000s_0004_From-selection.png",
        ]
      },
      {
        name: "Headgear",
        options: [
          "_0000s_0003_Inserted-Image.png",
          "_0000s_0002_From-selection.png",
          "_0000s_0000_From-selection.png",
        ]
      },
      {
        name: "Mouthgear",
        options: []
      },
      {
        name: "Paint",
        options: []
      },
    ]);
  }, [])
  
  return (
    <div className="container m-auto ">
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
              url && <img alt={`layer-${n}`} className="absolute inset-0 object-contain" style={{zIndex: n}} src={`${process.env.PUBLIC_URL}/images/${url}`} key={n}/>
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
