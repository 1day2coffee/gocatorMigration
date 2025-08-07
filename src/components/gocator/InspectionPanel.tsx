'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Play,
  Pause,
  Square,
  CheckCircle,
  XCircle,
  Activity,
  Wifi,
  WifiOff
} from 'lucide-react'

interface InspectionData {
  face: number
  staking1: { depth: number; width: number; height: number; volume: number }
  staking2: { depth: number; width: number; height: number; volume: number }
  staking3: { depth: number; width: number; height: number; volume: number }
  staking4: { depth: number; width: number; height: number; volume: number }
}

interface InspectionPanelProps {
  title: string
  type: 'tube' | 'shaft' | 'total'
  isActive: boolean
  onStatusChange: (status: 'ok' | 'ng') => void
}

export function InspectionPanel({ title, type, isActive, onStatusChange }: InspectionPanelProps) {
  const [isConnected, setIsConnected] = useState(true)
  const [isRunning, setIsRunning] = useState(false)
  const [barcode, setBarcode] = useState('')
  const [inspectionResult, setInspectionResult] = useState<'ok' | 'ng'>('ok')
  const [inspectionData, setInspectionData] = useState<InspectionData[]>([
    { face: 0, staking1: { depth: 0, width: 0, height: 0, volume: 0 }, staking2: { depth: 0, width: 0, height: 0, volume: 0 }, staking3: { depth: 0, width: 0, height: 0, volume: 0 }, staking4: { depth: 0, width: 0, height: 0, volume: 0 } },
    { face: 90, staking1: { depth: 0, width: 0, height: 0, volume: 0 }, staking2: { depth: 0, width: 0, height: 0, volume: 0 }, staking3: { depth: 0, width: 0, height: 0, volume: 0 }, staking4: { depth: 0, width: 0, height: 0, volume: 0 } },
    { face: 180, staking1: { depth: 0, width: 0, height: 0, volume: 0 }, staking2: { depth: 0, width: 0, height: 0, volume: 0 }, staking3: { depth: 0, width: 0, height: 0, volume: 0 }, staking4: { depth: 0, width: 0, height: 0, volume: 0 } },
    { face: 270, staking1: { depth: 0, width: 0, height: 0, volume: 0 }, staking2: { depth: 0, width: 0, height: 0, volume: 0 }, staking3: { depth: 0, width: 0, height: 0, volume: 0 }, staking4: { depth: 0, width: 0, height: 0, volume: 0 } }
  ])

  // 시뮬레이션 데이터 생성 및 결과 판정
  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        const newData = inspectionData.map(face => ({
          ...face,
          staking1: {
            depth: Math.random() * 10 + 5,
            width: Math.random() * 20 + 15,
            height: Math.random() * 20 + 15,
            volume: Math.random() * 1000 + 500
          },
          staking2: {
            depth: Math.random() * 10 + 5,
            width: Math.random() * 20 + 15,
            height: Math.random() * 20 + 15,
            volume: Math.random() * 1000 + 500
          },
          staking3: {
            depth: Math.random() * 10 + 5,
            width: Math.random() * 20 + 15,
            height: Math.random() * 20 + 15,
            volume: Math.random() * 1000 + 500
          },
          staking4: {
            depth: Math.random() * 10 + 5,
            width: Math.random() * 20 + 15,
            height: Math.random() * 20 + 15,
            volume: Math.random() * 1000 + 500
          }
        }))

        setInspectionData(newData)

        // 결과 판정 로직 (예시: 모든 값이 특정 범위 내에 있으면 OK)
        const allValues = newData.flatMap(face => [
          face.staking1.depth, face.staking1.width, face.staking1.height, face.staking1.volume,
          face.staking2.depth, face.staking2.width, face.staking2.height, face.staking2.volume,
          face.staking3.depth, face.staking3.width, face.staking3.height, face.staking3.volume,
          face.staking4.depth, face.staking4.width, face.staking4.height, face.staking4.volume
        ])

        // 판정 기준: 깊이 5-15, 가로폭 15-35, 세로폭 15-35, 체적 500-1500
        const isOK = allValues.every((value, index) => {
          const measurementType = index % 4 // 0: depth, 1: width, 2: height, 3: volume
          switch (measurementType) {
            case 0: return value >= 5 && value <= 15 // depth
            case 1: return value >= 15 && value <= 35 // width
            case 2: return value >= 15 && value <= 35 // height
            case 3: return value >= 500 && value <= 1500 // volume
            default: return true
          }
        })

        const newResult = isOK ? 'ok' : 'ng'
        setInspectionResult(newResult)
        onStatusChange(newResult)
      }, 2000)

      return () => clearInterval(interval)
    }
  }, [isRunning, onStatusChange])

  const handleStart = () => {
    setIsRunning(true)
    setBarcode(`BC${Date.now()}`)
  }

  const handleStop = () => {
    setIsRunning(false)
  }

  const handlePause = () => {
    setIsRunning(false)
  }

  // 자동으로 검사 시작 (시뮬레이션용)
  useEffect(() => {
    const timer = setTimeout(() => {
      handleStart()
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm h-full">
      <CardHeader>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 h-1">

          <CardTitle className="text-white">{title}</CardTitle>

          {/* <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <span className="text-lg text-slate-400 whitespace-nowrap">BarCode:</span>
            <input
              type="text"
              value={barcode}
              onChange={(e) => setBarcode(e.target.value)}
              disabled
              placeholder="Enter barcode..."
              className="bg-slate-700 border border-slate-600 rounded px-2 py-1 text-white placeholder-slate-400 text-lg w-full lg:w-auto max-w-[190px]"
            />
          </div> */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="flex space-x-2">
              <Button
                size="lg"
                className={`whitespace-nowrap ${inspectionResult === 'ok'
                  ? 'bg-green-600 hover:bg-green-600'
                  : 'bg-slate-600 text-slate-400 cursor-not-allowed'
                  }`}
                disabled={inspectionResult !== 'ok'}
              >
                <CheckCircle className="w-4 h-4 mr-1" />
                OK
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={`whitespace-nowrap ${inspectionResult === 'ng'
                  ? 'bg-red-600 hover:bg-red-600 text-white'
                  : 'bg-slate-600 text-slate-400 cursor-not-allowed'
                  }`}
                disabled={inspectionResult !== 'ng'}
              >
                <XCircle className="w-4 h-4 mr-1" />
                NG
              </Button>
            </div>
          </div>
        </div>

      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {inspectionData.map((face) => (
            <div key={face.face} className="space-y-3">
              <h4 className="text-xl font-medium text-slate-300 text-left">
                Face {face.face}°
              </h4>
              <div className="bg-slate-700/50 rounded-lg p-3 space-y-2">
                <div className="grid grid-cols-5 gap-1 text-xs items-center">
                  {/* 첫번째 열: 헤더, 2~5열: Staking1~4 값 */}
                  {/* 1행: 헤더(Staking) */}
                  <div></div>
                  <div className="text-slate-400 text-center">Staking1</div>
                  <div className="text-slate-400 text-center">Staking2</div>
                  <div className="text-slate-400 text-center">Staking3</div>
                  <div className="text-slate-400 text-center">Staking4</div>

                  {/* 2행: 깊이 */}
                  <div className="text-slate-400 text-center">Depth</div>
                  <div className="text-white text-center" title={face.staking1.depth.toFixed(3)}>{face.staking1.depth.toFixed(3)}</div>
                  <div className="text-white text-center" title={face.staking2.depth.toFixed(3)}>{face.staking2.depth.toFixed(3)}</div>
                  <div className="text-white text-center" title={face.staking3.depth.toFixed(3)}>{face.staking3.depth.toFixed(3)}</div>
                  <div className="text-white text-center" title={face.staking4.depth.toFixed(3)}>{face.staking4.depth.toFixed(3)}</div>

                  {/* 3행: 가로폭 */}
                  <div className="text-slate-400 text-center">Width</div>
                  <div className="text-white text-center" title={face.staking1.width.toFixed(3)}>{face.staking1.width.toFixed(3)}</div>
                  <div className="text-white text-center" title={face.staking2.width.toFixed(3)}>{face.staking2.width.toFixed(3)}</div>
                  <div className="text-white text-center" title={face.staking3.width.toFixed(3)}>{face.staking3.width.toFixed(3)}</div>
                  <div className="text-white text-center" title={face.staking4.width.toFixed(3)}>{face.staking4.width.toFixed(3)}</div>

                  {/* 4행: 세로폭 */}
                  <div className="text-slate-400 text-center">Height</div>
                  <div className="text-white text-center" title={face.staking1.height.toFixed(3)}>{face.staking1.height.toFixed(3)}</div>
                  <div className="text-white text-center" title={face.staking2.height.toFixed(3)}>{face.staking2.height.toFixed(3)}</div>
                  <div className="text-white text-center" title={face.staking3.height.toFixed(3)}>{face.staking3.height.toFixed(3)}</div>
                  <div className="text-white text-center" title={face.staking4.height.toFixed(3)}>{face.staking4.height.toFixed(3)}</div>

                  {/* 5행: 체적 */}
                  <div className="text-slate-400 text-center">Volume</div>
                  <div className="text-white text-center" title={face.staking1.volume.toFixed(3)}>{face.staking1.volume.toFixed(3)}</div>
                  <div className="text-white text-center" title={face.staking2.volume.toFixed(3)}>{face.staking2.volume.toFixed(3)}</div>
                  <div className="text-white text-center" title={face.staking3.volume.toFixed(3)}>{face.staking3.volume.toFixed(3)}</div>
                  <div className="text-white text-center" title={face.staking4.volume.toFixed(3)}>{face.staking4.volume.toFixed(3)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>

    </Card>
  )
} 