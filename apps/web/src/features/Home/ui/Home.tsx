import type { FindPetsByStatusQueryParamsStatusEnumKey } from '@repo/services/model';
import { Card, Col, Row, Spin } from 'antd';
import { useState } from 'react';
import { usePetFindByStatus } from '../api/usePetApi';

export const Home = () => {
  const [status] = useState<FindPetsByStatusQueryParamsStatusEnumKey>('available');
  const { data, isLoading } = usePetFindByStatus({ status });

  return (
    <div>
      <Spin spinning={isLoading}>
        <Row gutter={16}>
          {data?.map((pet) => (
            <Col span={8} key={pet.id}>
              <Card title={pet.name}>
                <p>Status: {pet.status}</p>
                <p>Category: {pet.category?.name}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Spin>
    </div>
  );
};
