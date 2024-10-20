import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// 組件容器
const EditorContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1002; /* 確保高於其他元素 */
`;

// 主按鈕樣式
const EditorButton = styled.button`
  background-color: #007BFF; /* 固定按鈕背景色 */
  color: #FFFFFF; /* 固定按鈕文字色 */
  border: none;
  padding: 12px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 8px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #0056b3; /* 按鈕懸停顏色 */
  }
`;

// 編輯面板樣式
const EditorPanel = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 60px;
  left: 0;
  background-color: rgba(255, 255, 255, 0.95); /* 高對比度背景 */
  border: 1px solid #007BFF; /* 固定邊框色 */
  border-radius: 8px;
  width: 350px;
  max-height: 80vh;
  overflow-y: auto;
  padding: 20px;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px); /* 模糊背景，增強辨識度 */
`;

// 各個區塊
const Section = styled.div`
  margin-bottom: 20px;
`;

// 標籤樣式
const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333333; /* 固定文字顏色 */
`;

// 輸入框樣式
const Input = styled.input`
  width: 100%;
  padding: 6px 8px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

// 下拉選單樣式
const Dropdown = styled.select`
  width: 100%;
  padding: 6px 8px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #000;
`;

// 變數行樣式
const VariableRow = styled.div`
  display: flex;
  flex-direction: column; /* 使用垂直佈局 */
  margin-bottom: 10px;
  padding: 0 80px;
`;

// 變數標籤樣式
const VariableLabel = styled.span`
  margin-bottom: 4px;
  color: #333333; /* 固定文字顏色 */
`;

// 變數輸入框樣式
const VariableInput = styled.input`
  padding: 4px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

// 按鈕群組樣式
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

// 行動按鈕樣式
const ActionButton = styled.button`
  background-color: #28a745; /* 固定按鈕背景色 */
  color: #FFFFFF; /* 固定按鈕文字色 */
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  margin-top: 10px;
  min-width: 80px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838; /* 按鈕懸停顏色 */
  }
`;

// 繁體中文翻譯函數
const translateVarName = (varName: string): string => {
  const translations: { [key: string]: string } = {
    '--text-color': '文字顏色',
    '--background-color': '背景顏色',
    '--link-color': '連結顏色',
    '--link-hover-color': '連結懸停顏色',
    '--button-background': '按鈕背景色',
    '--button-hover-color': '按鈕懸停顏色',
    '--button-focus-outline': '按鈕聚焦外框',
  };
  return translations[varName] || varName;
};

// 定義配色方案類型
interface CustomScheme {
  variables: { [key: string]: string };
}

interface CustomSchemes {
  [key: string]: CustomScheme;
}

// 預設配色方案
const defaultSchemes: { [key: string]: CustomScheme } = {
  'color-scheme-dark': {
    variables: {
      '--text-color': '#FFFFFF',
      '--background-color': '#000000',
      '--link-color': '#FF4500',
      '--link-hover-color': '#FF6347',
      '--button-background': '#333333',
      '--button-hover-color': '#FF4500',
      '--button-focus-outline': '#FF4500', // 變數名稱已修改為更具體
    },
  },
  'color-scheme-light': {
    variables: {
      '--text-color': '#000000',
      '--background-color': '#F0F0F0',
      '--link-color': '#0000FF',
      '--link-hover-color': '#0000AA',
      '--button-background': '#CCCCCC',
      '--button-hover-color': '#0000FF',
      '--button-focus-outline': '#0000FF',
    },
  },
  // 可在此處添加更多預設配色方案
};

// ColorEditor Component
const ColorEditor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentScheme, setCurrentScheme] = useState<string>('color-scheme-dark');
  const [schemeName, setSchemeName] = useState<string>('暗色模式');
  const [variables, setVariables] = useState<{ [key: string]: string }>({
    '--text-color': '#FFFFFF',
    '--background-color': '#000000',
    '--link-color': '#FF4500',
    '--link-hover-color': '#FF6347',
    '--button-background': '#333333',
    '--button-hover-color': '#FF4500',
    '--button-focus-outline': '#FF4500',
  });

  // 函數：從CSS變數讀取當前配色方案
  const readCSSVariables = (root: HTMLElement): { [key: string]: string } => {
    const computedStyle = getComputedStyle(root);
    const vars: { [key: string]: string } = { ...variables };
    Object.keys(vars).forEach(varName => {
      if (varName === '--button-focus-outline') {
        const fullValue = computedStyle.getPropertyValue('--button-focus-outline').trim();
        const color = fullValue.split(' ').pop() || '#FF4500';
        vars[varName] = color;
      } else {
        vars[varName] = computedStyle.getPropertyValue(varName).trim();
      }
    });
    return vars;
  };

  // 當組件打開時，讀取當前配色方案
  useEffect(() => {
    if (isOpen) {
      const root = document.documentElement;
      const classes = root.className.split(' ');
      const scheme = classes.find(cls => cls.startsWith('color-scheme-')) || 'color-scheme-dark';
      setCurrentScheme(scheme);

      // 讀取 CSS 變數
      const vars = readCSSVariables(root);
      setVariables(vars);

      // 設定方案名稱
      const schemeNames: { [key: string]: string } = {
        'color-scheme-dark': '暗色模式',
        'color-scheme-light': '淺色模式',
        'color-scheme-gray': '灰色模式',
        'color-scheme-colorful-high-contrast-bright': '色彩豐富高對比亮色',
        'color-scheme-colorful-high-contrast-dark': '色彩豐富高對比暗色',
        'color-scheme-colorful-low-contrast-bright': '色彩豐富低對比亮色',
        'color-scheme-colorful-low-contrast-dark': '色彩豐富低對比暗色',
      };
      setSchemeName(schemeNames[scheme] || '自定義模式');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]); // 移除 'variables' 依賴以避免不必要的觸發

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSchemeChange = (scheme: string) => {
    const root = document.documentElement;

    // 清除所有 color-scheme-* 類別
    root.className = ''; // 清除所有類別
    root.classList.add(scheme); // 添加新的配色方案類別
    setCurrentScheme(scheme);

    // 設定方案名稱
    const schemeNames: { [key: string]: string } = {
      'color-scheme-dark': '暗色模式',
      'color-scheme-light': '淺色模式',
      'color-scheme-gray': '灰色模式',
      'color-scheme-colorful-high-contrast-bright': '色彩豐富高對比亮色',
      'color-scheme-colorful-high-contrast-dark': '色彩豐富高對比暗色',
      'color-scheme-colorful-low-contrast-bright': '色彩豐富低對比亮色',
      'color-scheme-colorful-low-contrast-dark': '色彩豐富低對比暗色',
    };
    setSchemeName(schemeNames[scheme] || '自定義模式');

    // 清除之前透過 inline style 設定的 CSS 變數
    Object.keys(variables).forEach(varName => {
      root.style.removeProperty(varName);
    });

    // 讀取 CSS 變數
    const vars = readCSSVariables(root);
    setVariables(vars);

    // 保存到 localStorage
    const storedSchemes = localStorage.getItem('customSchemes');
    let customSchemes: CustomSchemes = { ...defaultSchemes };
    if (storedSchemes) {
      try {
        const parsedSchemes = JSON.parse(storedSchemes) as CustomSchemes;
        customSchemes = { ...customSchemes, ...parsedSchemes };
      } catch (error) {
        console.error('Failed to parse customSchemes from localStorage:', error);
      }
    }
    customSchemes[scheme] = {
      variables: vars,
    };
    localStorage.setItem('customSchemes', JSON.stringify(customSchemes));
  };

  const handleVariableChange = (varName: string, value: string) => {
    setVariables(prev => ({
      ...prev,
      [varName]: value,
    }));
    if (varName === '--button-focus-outline') {
      // 程式中添加 "4px auto"
      document.documentElement.style.setProperty('--button-focus-outline', `4px auto ${value}`);
    } else {
      // 實時更新其他 CSS 變數
      document.documentElement.style.setProperty(varName, value);
    }

    // 更新自定義配色方案
    const storedSchemes = localStorage.getItem('customSchemes');
    let customSchemes: CustomSchemes = { ...defaultSchemes };
    if (storedSchemes) {
      try {
        const parsedSchemes = JSON.parse(storedSchemes) as CustomSchemes;
        customSchemes = { ...customSchemes, ...parsedSchemes };
      } catch (error) {
        console.error('Failed to parse customSchemes from localStorage:', error);
      }
    }
    customSchemes[currentScheme] = {
      variables: {
        ...variables,
        [varName]: value,
      },
    };
    localStorage.setItem('customSchemes', JSON.stringify(customSchemes));
  };

  const handleCopy = () => {
    const cssContent = generateCSSContent();
    navigator.clipboard.writeText(cssContent).then(() => {
      alert('配色方案已複製到剪貼簿！');
    }).catch(err => {
      alert('複製失敗，請手動複製。');
      console.error(err);
    });
  };

  const handleExport = () => {
    const cssContent = generateCSSContent();
    const blob = new Blob([cssContent], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${schemeName}.css`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const generateCSSContent = () => {
    let css = `.${schemeName} {\n`;
    Object.entries(variables).forEach(([key, value]) => {
      if (key === '--button-focus-outline') {
        css += `  ${key}: 4px auto ${value};\n`;
      } else {
        css += `  ${key}: ${value};\n`;
      }
    });
    css += `}`;
    return css;
  };

  return (
    <EditorContainer>
      <EditorButton onClick={toggleOpen}>
        🎨
      </EditorButton>
      <EditorPanel $isOpen={isOpen}>
        <Section>
          <Label>選擇配色方案</Label>
          <Dropdown
            value={currentScheme}
            onChange={(e) => handleSchemeChange(e.target.value)}
          >
            <option value="color-scheme-dark">暗色模式</option>
            <option value="color-scheme-light">淺色模式</option>
            <option value="color-scheme-gray">灰色模式</option>
            <option value="color-scheme-colorful-high-contrast-bright">色彩豐富高對比亮色</option>
            <option value="color-scheme-colorful-high-contrast-dark">色彩豐富高對比暗色</option>
            <option value="color-scheme-colorful-low-contrast-bright">色彩豐富低對比亮色</option>
            <option value="color-scheme-colorful-low-contrast-dark">色彩豐富低對比暗色</option>
            {/* 可以在這裡動態添加自定義配色方案 */}
          </Dropdown>
        </Section>
        <Section>
          <Label>配色方案名稱</Label>
          <Input
            type="text"
            value={schemeName}
            onChange={(e) => setSchemeName(e.target.value)}
          />
        </Section>
        <Section>
          <Label>變數名稱與色碼</Label>
          {Object.entries(variables).map(([varName, value]) => (
            <VariableRow key={varName}>
              {varName === '--button-focus-outline' ? (
                <>
                  <VariableLabel>按鈕聚焦外框</VariableLabel>
                  <VariableInput
                    type="color"
                    value={value}
                    onChange={(e) => handleVariableChange(varName, e.target.value)}
                  />
                </>
              ) : (
                <>
                  <VariableLabel>{translateVarName(varName)}</VariableLabel>
                  <VariableInput
                    type="color"
                    value={value}
                    onChange={(e) => handleVariableChange(varName, e.target.value)}
                  />
                </>
              )}
            </VariableRow>
          ))}
        </Section>
        <ButtonGroup>
          <ActionButton onClick={handleCopy}>複製</ActionButton>
          <ActionButton onClick={handleExport}>匯出</ActionButton>
        </ButtonGroup>
      </EditorPanel>
    </EditorContainer>
  );
};

export default ColorEditor;
