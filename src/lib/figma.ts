// Figma 디자인 토큰 타입 정의
export interface FigmaTokens {
  colors: {
    primary: {
      50: string
      100: string
      200: string
      300: string
      400: string
      500: string
      600: string
      700: string
      800: string
      900: string
    }
    secondary: {
      50: string
      100: string
      200: string
      300: string
      400: string
      500: string
      600: string
      700: string
      800: string
      900: string
    }
    accent: {
      50: string
      100: string
      200: string
      300: string
      400: string
      500: string
      600: string
      700: string
      800: string
      900: string
    }
  }
  spacing: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    '2xl': string
    '3xl': string
  }
  borderRadius: {
    sm: string
    md: string
    lg: string
    xl: string
    '2xl': string
    '3xl': string
  }
  typography: {
    fontSizes: {
      xs: string
      sm: string
      base: string
      lg: string
      xl: string
      '2xl': string
      '3xl': string
      '4xl': string
      '5xl': string
      '6xl': string
    }
    fontWeights: {
      normal: string
      medium: string
      semibold: string
      bold: string
    }
  }
}

// Figma API 연동 함수
export async function fetchFigmaTokens(fileKey: string, accessToken: string): Promise<FigmaTokens> {
  try {
    const response = await fetch(`https://api.figma.com/v1/files/${fileKey}`, {
      headers: {
        'X-Figma-Token': accessToken,
      },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch Figma tokens')
    }

    const data = await response.json()
    
    // Figma 데이터를 토큰 형태로 변환
    return transformFigmaDataToTokens(data)
  } catch (error) {
    console.error('Error fetching Figma tokens:', error)
    throw error
  }
}

// Figma 데이터를 토큰으로 변환하는 함수
function transformFigmaDataToTokens(figmaData: any): FigmaTokens {
  // 실제 구현에서는 Figma API 응답 구조에 따라 변환 로직을 작성
  return {
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
      },
      secondary: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
      },
      accent: {
        50: '#fdf4ff',
        100: '#fae8ff',
        200: '#f5d0fe',
        300: '#f0abfc',
        400: '#e879f9',
        500: '#d946ef',
        600: '#c026d3',
        700: '#a21caf',
        800: '#86198f',
        900: '#701a75',
      },
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '3rem',
      '3xl': '4rem',
    },
    borderRadius: {
      sm: '0.125rem',
      md: '0.25rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
    },
    typography: {
      fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      fontWeights: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
    },
  }
}

// CSS 변수로 토큰을 생성하는 함수
export function generateCSSVariables(tokens: FigmaTokens): string {
  let css = ':root {\n'
  
  // 색상 변수 생성
  Object.entries(tokens.colors).forEach(([colorName, shades]) => {
    Object.entries(shades).forEach(([shade, value]) => {
      css += `  --${colorName}-${shade}: ${value};\n`
    })
  })
  
  // 간격 변수 생성
  Object.entries(tokens.spacing).forEach(([name, value]) => {
    css += `  --spacing-${name}: ${value};\n`
  })
  
  // 테두리 반경 변수 생성
  Object.entries(tokens.borderRadius).forEach(([name, value]) => {
    css += `  --radius-${name}: ${value};\n`
  })
  
  css += '}'
  return css
} 