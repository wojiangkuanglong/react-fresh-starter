import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { RouteComponent } from '../src/routes/markdown';

vi.mock('streamdown', () => ({
  Streamdown: ({ children }: { children: string }) => (
    <div data-testid="streamdown-content">{children}</div>
  ),
}));

describe('Markdown RouteComponent', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('基础渲染测试', () => {
    it('应该正确渲染组件', () => {
      render(<RouteComponent />);

      expect(screen.getByText('流式渲染控制面板')).toBeInTheDocument();
      expect(screen.getByText('开始渲染')).toBeInTheDocument();
      expect(screen.getByText('暂停')).toBeInTheDocument();
      expect(screen.getByText('重置')).toBeInTheDocument();
      expect(screen.getByText('显示全部')).toBeInTheDocument();
      expect(screen.getByText('渲染速度:')).toBeInTheDocument();
    });

    it('应该显示初始状态', () => {
      render(<RouteComponent />);
      expect(screen.getByText('开始渲染')).toBeInTheDocument();
      expect(screen.getByText('暂停')).toBeDisabled();
      expect(screen.getByText('重置')).not.toBeDisabled();
      expect(screen.getByText('显示全部')).not.toBeDisabled();

      expect(screen.getByText('进度: 0 / 372 字符')).toBeInTheDocument();

      const speedSlider = screen.getByRole('slider');
      expect(speedSlider).toHaveValue('20');
      expect(screen.getByText('20ms')).toBeInTheDocument();
    });

    it('应该渲染Streamdown组件', () => {
      render(<RouteComponent />);

      const streamdownContent = screen.getByTestId('streamdown-content');
      expect(streamdownContent).toBeInTheDocument();
      expect(streamdownContent).toHaveTextContent('');
    });
  });

  describe('按钮交互测试', () => {
    it('点击开始渲染按钮应该开始流式渲染', () => {
      render(<RouteComponent />);

      const startButton = screen.getByText('开始渲染');
      fireEvent.click(startButton);

      expect(screen.getByText('渲染中...')).toBeInTheDocument();
      expect(screen.getByText('暂停')).not.toBeDisabled();
      expect(startButton).toBeDisabled();
    });

    it('点击暂停按钮应该暂停渲染', () => {
      render(<RouteComponent />);

      const startButton = screen.getByText('开始渲染');
      const pauseButton = screen.getByText('暂停');

      fireEvent.click(startButton);
      expect(screen.getByText('渲染中...')).toBeInTheDocument();

      fireEvent.click(pauseButton);
      expect(screen.getByText('开始渲染')).toBeInTheDocument();
      expect(screen.getByText('暂停')).toBeDisabled();
    });

    it('点击重置按钮应该重置所有状态', () => {
      render(<RouteComponent />);

      const startButton = screen.getByText('开始渲染');
      const resetButton = screen.getByText('重置');

      fireEvent.click(startButton);

      act(() => {
        vi.advanceTimersByTime(100);
      });

      fireEvent.click(resetButton);

      expect(screen.getByText('开始渲染')).toBeInTheDocument();
      expect(screen.getByText('暂停')).toBeDisabled();
      expect(screen.getByText('进度: 0 / 372 字符')).toBeInTheDocument();
    });

    it('流式渲染应该逐步显示内容', () => {
      render(<RouteComponent />);

      const startButton = screen.getByText('开始渲染');
      fireEvent.click(startButton);

      const streamdownContent = screen.getByTestId('streamdown-content');
      expect(streamdownContent).toHaveTextContent('');

      act(() => {
        vi.advanceTimersByTime(20);
      });

      act(() => {
        vi.advanceTimersByTime(20);
      });

      act(() => {
        vi.advanceTimersByTime(20);
      });

      expect(streamdownContent.textContent?.length).toBeGreaterThan(0);
    });

    it('显示全部按钮应该立即显示所有内容', () => {
      render(<RouteComponent />);

      const showAllButton = screen.getByText('显示全部');
      fireEvent.click(showAllButton);

      const streamdownContent = screen.getByTestId('streamdown-content');
      expect(streamdownContent.textContent?.length).toBeGreaterThan(100);
      expect(screen.getByText('进度: 372 / 372 字符')).toBeInTheDocument();
    });
  });
});
