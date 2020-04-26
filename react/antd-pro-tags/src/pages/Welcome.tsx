import React, { useState, useEffect } from 'react';
import { TagItem } from '../components/TagItem/index';
// Function Component   @types/react
// {/* <> 泛型 props  */}
// 1. umi alley  react 开发框架  next.js ssr
// tags  每一项是社么？
import { ITag } from '../interface/tag';
import { fetchData } from '../utils/fetch';

const initialTags: ITag[] = [
  {
    id: 1,
    title: '一嗨租车',
  },
];

const WelcomePage: React.FC<{}> = () => {
  // hooks 可以讲class react 组件给干掉
  // useState 提供状态及修改   useEffects lifecycle
  // tags
  const [tags, setTag] = useState(initialTags);
  useEffect(() => {
    const url = '/api/tag/all';
    fetchData(url, 'GET').then((data) => {
      setTag(data.data);
    });
  }, []);
  return (
    <div className="inputPageWrapper">
      {tags.map((tagObject) => (
        <TagItem key={tagObject.id} tagObject={tagObject} />
      ))}
    </div>
  );
};

export default WelcomePage;
