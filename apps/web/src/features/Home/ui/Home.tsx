import type { FindPetsByStatusQueryParamsStatusEnumKey } from '@repo/services/model/pet/FindPetsByStatus';
import { Card, Col, Row, Select, Spin } from 'antd';
import { useState } from 'react';
import { usePetFindByStatus } from '../api/usePetApi';

export const Home = () => {
  const [status, setStatus] = useState<FindPetsByStatusQueryParamsStatusEnumKey>('available');
  const { data, isLoading } = usePetFindByStatus({ status });

  return (
    <div>
      <Select
        className="mb-4"
        value={status}
        onChange={setStatus}
        options={[
          { value: 'available', label: 'available' },
          { value: 'pending', label: 'pending' },
          { value: 'sold', label: 'sold' },
        ]}
      />
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
