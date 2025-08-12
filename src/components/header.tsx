import { Camera, FileText, Settings, Wifi } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function Header() {

    return (
        <>
            {/* Header */}
            <header className="border-b border-slate-700 bg-slate-800/50 backdrop-blur-sm">
                <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <img className="h-24 w-24" src="product_logo.png" />
                                <h1 className="text-lg text-white center">3D GenAI Anomaly Detection Solution</h1>
                            </div>
                            {/* <Camera className="h-8 w-8 text-blue-400" /> */}
                            {/* <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/10">
                                <Wifi className="w-3 h-3 mr-1" />
                                Connected
                                </Badge> */}
                        </div>

                        <div className="flex items-center space-x-4">
                            <img className="h-8 w-20" src="logo.png" />
                            {/* <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                                <Settings className="w-4 h-4 mr-2" />
                                Settings
                            </Button>
                            <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                                <FileText className="w-4 h-4 mr-2" />
                                Logs
                            </Button> */}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}