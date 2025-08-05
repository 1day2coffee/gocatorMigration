import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Camera } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

interface ImageDisplayProps {
  type: 'tube' | 'shaft' | 'total';
  isActive: boolean;
}

export function ImageDisplay({ type, isActive }: ImageDisplayProps) {
  // 모든 이미지를 동일하게 /result.png에서 가져옴
  const images = [
    "/Shaft_0도.png",
    "/Shaft_90도.png",
    "/Shaft_180도.png",
    "/Shaft_270도.png"
  ];
  const imagesSam = [
    "/Shaft_0도_SAM.png",
    "/Shaft_90도_SAM.png",
    "/Shaft_180도_SAM.png",
    "/Shaft_270도_SAM.png"
  ];
  const label = type === "tube" ? "TUBE SIDE VIEW"
    : type === "shaft" ? "SHAFT SIDE VIEW"
      : undefined;

  const [rotate, setRotate] = useState<["0°", "90°", "180°", "270°"]>(["0°", "90°", "180°", "270°"])
  const [activeRotateIdx, setActiveRotateIdx] = useState(0); // 기본: 0°가 활성화


  if (type === "total") {
    return (
      <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm h-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-white">{type.toUpperCase()} Image Display</CardTitle>
            </div>
            {/* <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20">
                <Camera className="w-3 h-3 mr-1" />
                Live
              </Badge>
            </div> */}
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-8">
            {/* Tube Side View */}
            <div>

              <h4 className="text-xl font-medium text-slate-300 text-left mb-4">
                TUBE SIDE VIEW
              </h4>
              <div className="flex justify-between gap-4">

                {images.map((src, idx) => (
                  <div key={idx} className="flex-1 flex items-center justify-center">
                    <img
                      src={src}
                      alt={`Tube ${idx + 1}`}
                      className="object-contain w-full h-40 bg-black rounded shadow"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between gap-4">
                {rotate.map((contents, idx) => (
                  <div key={idx} className="flex-1 flex items-center justify-center mt-1">
                    <div className="text-white">{contents}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shaft Side View */}
            <div>
              <h4 className="text-xl font-medium text-slate-300 text-left mb-4">
                SHAFT SIDE VIEW
              </h4>
              <div className="flex justify-between gap-4">
                {images.map((src, idx) => (
                  <div key={idx} className="flex-1 flex items-center justify-center">
                    <img
                      src={src}
                      alt={`Shaft ${idx + 1}`}
                      className="object-contain w-full h-40 bg-black rounded shadow"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between gap-4">
                {rotate.map((contents, idx) => (
                  <div key={idx} className="flex-1 flex items-center justify-center mt-1">
                    <div className="text-white">{contents}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // tube/shaft 단일일 때는 1장만
  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-white">{type.toUpperCase()} Image Display</CardTitle>
          </div>
          <div className="flex justify-between">
            <div className="flex justify-between">
              {rotate.map((contents, idx) => (
                <div key={idx} className="flex-1 flex items-center justify-center mr-2">
                  <Button
                    className={`text-white ${activeRotateIdx === idx
                      ? "bg-green-700 border-green-700"
                      : "bg-white-100 border-white-300"}
                      hover:bg-green-700 hover:border-green-700
                    `}
                    onClick={() => setActiveRotateIdx(idx)}
                  >
                    {contents}
                  </Button>
                </div>
              ))}

            </div>
            {/* <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20">
                <Camera className="w-3 h-3 mr-1" />
                Live
              </Badge>
            </div> */}
          </div>

        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-center h-[480px] bg-gray rounded">
            <img
              src={images[activeRotateIdx]}
              alt={label}
              className="object-contain max-h-full max-w-full rounded"
              style={{ width: "50%", height: "100%" }}
            />
            <img
              src={imagesSam[activeRotateIdx]}
              alt={label}
              className="object-contain max-h-full max-w-full rounded"
              style={{ width: "50%", height: "100%" }}
            />
          </div>
        </div>


        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div className="bg-slate-700/50 rounded-lg p-3">
            <div className="text-slate-400 mb-1">Resolution</div>
            <div className="text-white">1920 x 1080</div>
          </div>
          <div className="bg-slate-700/50 rounded-lg p-3">
            <div className="text-slate-400 mb-1">FPS</div>
            <div className="text-white">30</div>
          </div>
          <div className="bg-slate-700/50 rounded-lg p-3">
            <div className="text-slate-400 mb-1">Exposure</div>
            <div className="text-white">1/60s</div>
          </div>
          <div className="bg-slate-700/50 rounded-lg p-3">
            <div className="text-slate-400 mb-1">Gain</div>
            <div className="text-white">1.0</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}