import { useCallback, useEffect, useId, useState } from 'react';
import { Streamdown } from 'streamdown';

export const Markdown = () => {
  const [displayedContent, setDisplayedContent] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [streamSpeed, setStreamSpeed] = useState(20); // 毫秒
  const speedId = useId();

  const fullMarkdown = `
# Flowchart Example

\`\`\`mermaid
graph TD
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    D --> B
\`\`\`

# Sequence Diagram

\`\`\`mermaid
sequenceDiagram
    participant User
    participant API
    participant Database

    User->>API: Request data
    API->>Database: Query
    Database-->>API: Results
    API-->>User: Response
\`\`\`
  `;

  // 流式渲染效果
  useEffect(() => {
    if (!isStreaming || currentIndex >= fullMarkdown.length) {
      setIsStreaming(false);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedContent((prev) => prev + fullMarkdown[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, streamSpeed);

    return () => clearTimeout(timer);
  }, [isStreaming, currentIndex, streamSpeed]);

  const startStreaming = useCallback(() => {
    setIsStreaming(true);
  }, []);

  const pauseStreaming = useCallback(() => {
    setIsStreaming(false);
  }, []);

  const resetStreaming = useCallback(() => {
    setIsStreaming(false);
    setDisplayedContent('');
    setCurrentIndex(0);
  }, []);

  const showFullContent = useCallback(() => {
    setIsStreaming(false);
    setDisplayedContent(fullMarkdown);
    setCurrentIndex(fullMarkdown.length);
  }, []);

  return (
    <div className="size-full overflow-auto p-4">
      {/* 控制面板 */}
      <div className="mb-4 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">流式渲染控制面板</h3>
        <div className="flex gap-2 mb-3">
          <button
            type="button"
            onClick={startStreaming}
            disabled={isStreaming || currentIndex >= fullMarkdown.length}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isStreaming ? '渲染中...' : '开始渲染'}
          </button>
          <button
            type="button"
            onClick={pauseStreaming}
            disabled={!isStreaming}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            暂停
          </button>
          <button
            type="button"
            onClick={resetStreaming}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            重置
          </button>
          <button
            type="button"
            onClick={showFullContent}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            显示全部
          </button>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor={speedId} className="text-sm font-medium">
            渲染速度:
          </label>
          <input
            id={speedId}
            type="range"
            min="10"
            max="200"
            value={streamSpeed}
            onChange={(e) => setStreamSpeed(Number(e.target.value))}
            className="flex-1"
          />
          <span className="text-sm text-gray-600">{streamSpeed}ms</span>
        </div>
        <div className="mt-2 text-sm text-gray-600">
          进度: {currentIndex} / {fullMarkdown.length} 字符
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentIndex / fullMarkdown.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* 渲染区域 */}
      <div className="border rounded-lg p-4 min-h-[400px]">
        <Streamdown>{displayedContent}</Streamdown>
        {isStreaming && <span className="inline-block w-2 h-5 bg-blue-500 animate-pulse ml-1" />}
      </div>
    </div>
  );
};
