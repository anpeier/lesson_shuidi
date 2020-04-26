/* eslint-disable import/no-extraneous-dependencies */
import { Request, Response } from 'express';
 // express 服务
const getTag = (req: Request, res: Response) => {
  // console.log(req,res)
  res.json({
    data: [
      {
        id: 1,
        title: 'vue',
      },
      {
        id: 2,
        title: 'react',
      },
      {
        id: 3,
        title: 'antd',
      },
      {
        id: 4,
        title: 'umi'
      }
    ],
  });
};
export default {
  'GET /api/tag/all': getTag,
};
