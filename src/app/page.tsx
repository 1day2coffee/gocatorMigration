'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { InspectionPanel } from '@/components/gocator/InspectionPanel'
import { ImageDisplay } from '@/components/gocator/ImageDisplay'
import {
  Activity,
  RotateCw,
  BarChart3,
  Settings,
  Play,
  Pause,
  Square,
  FileText,
} from 'lucide-react'
import { Header } from '@/components/header'

export default function GocatorDashboard() {
  const [tubeStatus, setTubeStatus] = useState<'ok' | 'ng'>('ok')
  const [shaftStatus, setShaftStatus] = useState<'ok' | 'ng'>('ok')
  const [activeDisplay, setActiveDisplay] = useState<'tube' | 'shaft' | 'total'>('tube')
  const [camera1Status, setCamera1Status] = useState(false)
  const [camera2Status, setCamera2Status] = useState(true)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header></Header>

      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-4 py-4">
        {/* Control Panel */}
        <div className="mb-4">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-white">Control Panel</CardTitle>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className={`text-xs whitespace-nowrap ${camera1Status
                    ? 'bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/10'
                    : 'bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/10'
                    }`} >
                    Camera1: {camera1Status ? `Connected` : "Disconnected"}
                  </Badge>
                  <Badge variant="secondary" className={`text-xs whitespace-nowrap ${camera2Status
                    ? 'bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/10'
                    : 'bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/10'
                    }`} >
                    Camera2: {camera2Status ? `Connected` : "Disconnected"}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <Button className="bg-green-600 hover:bg-green-700 whitespace-nowrap">
                    <Play className="w-4 h-4 mr-2" />
                    Start Inspection
                  </Button>
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 whitespace-nowrap">
                    <Pause className="w-4 h-4 mr-2" />
                    Pause
                  </Button>
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 whitespace-nowrap">
                    <Square className="w-4 h-4 mr-2" />
                    Stop
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                    <span className="text-sm text-slate-400 whitespace-nowrap">Display:</span>
                    <div className="flex space-x-1">
                      <Button
                        size="sm"
                        className={`text-xs whitespace-nowrap ${activeDisplay === 'tube'
                          ? 'bg-blue-700 hover:bg-blue-700 text-white border-blue-700'
                          : 'bg-white border-slate-700 text-slate-700 hover:bg-slate-700'
                          }`}
                        onClick={() => setActiveDisplay('tube')}
                      >
                        Tube
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className={`text-xs whitespace-nowrap ${activeDisplay === 'shaft'
                          ? 'bg-blue-700 hover:bg-blue-700 text-white border-blue-700'
                          : 'white border-slate-700 text-slate-700 hover:bg-slate-700'
                          }`}
                        onClick={() => setActiveDisplay('shaft')}
                      >
                        Shaft
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className={`text-xs whitespace-nowrap ${activeDisplay === 'total'
                          ? 'bg-blue-700 hover:bg-blue-700 text-white border-blue-700'
                          : 'white border-slate-700 text-slate-700 hover:bg-slate-700'
                          }`}
                        onClick={() => setActiveDisplay('total')}
                      >
                        Total
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-5 gap-4">
          {/* Image Display */}
          <div className="lg:col-span-3">
            <ImageDisplay
              type={activeDisplay}
              isActive={true}
            />
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-2">
            <InspectionPanel
              title={`${activeDisplay.toUpperCase()} Result`}
              type={activeDisplay}
              isActive={true}
              onStatusChange={activeDisplay === 'tube' ? setTubeStatus : setShaftStatus}
            />
          </div>
        </div>

        {/* Navigation Bar */}
        {/* <div className="mt-4">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-4">
                <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 whitespace-nowrap">
                  <Activity className="w-4 h-4 mr-2" />
                  Main
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Tube
                </Button>
                <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 whitespace-nowrap">
                  <RotateCw className="w-4 h-4 mr-2" />
                  Shaft
                </Button>
                <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 whitespace-nowrap">
                  <FileText className="w-4 h-4 mr-2" />
                  Log
                </Button>
                <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 whitespace-nowrap">
                  <Settings className="w-4 h-4 mr-2" />
                  Exit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </div>
  )
} 