import { Modal, Spin } from 'antd';
import { useGetUserByName } from '@/shared/services/react-query/user/useGetUserByName';
import { useDemoModalStore } from '../model/useDemoModalStore';

/** 测试 Demo 弹窗 */
export const DemoModal = () => {
  const visible = useDemoModalStore((state) => state.visible);
  const setVisible = useDemoModalStore((state) => state.setVisible);

  const { data, isLoading } = useGetUserByName(
    { username: 'chengzhenghao' },
    { query: { enabled: visible } },
  );

  return (
    <Modal centered open={visible} title={'测试弹窗'} onCancel={() => setVisible(false)}>
      <Spin spinning={isLoading}>
        {data?.username}
        {'-'}
        {data?.email}
      </Spin>
    </Modal>
  );
};
