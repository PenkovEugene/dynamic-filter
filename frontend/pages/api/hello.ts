// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';

// export type FilterData = {
//   data: {
//     projects: [{
//       id: number;
//       title: string;
//       is_active: boolean;
//       disabled: boolean;
//     }];
//     rooms: [{
//       number: number;
//       is_active: boolean;
//       disabled: boolean;
//     }];
//     square: {
//       min: number;
//       max: number;
//     };
//     price: {
//       min_range: number;
//       max_range: number;
//       min: number;
//       max: number;
//     };
//   }
// }

// export interface FlatData {
//     id: number;
//     project_title: string;
//     rooms: number;
//     studio: number;
//     price: boolean;
//     old_price: string;
//     square: string;
//     release_dates: string;
//     floor: string;
//     image: string;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<{ filterData: FilterData; flatData: FlatData }>,
// ) {
//   try {
//     const [filtersResponse, flatsResponse] = await Promise.all([
//       axios.get("https://dynamic-filter.aerokod.ru/api/v1/filters"),
//       axios.get("https://dynamic-filter.aerokod.ru/api/v1/flats"),
//     ]);
    
//     const filterData: FilterData = filtersResponse.data;
//     const flatData: FlatData = flatsResponse.data;

//     res.status(200).json({ filterData, flatData });
//   } catch (error) {
//     console.error("Ошибка извлечения данных фильтров:", error);
//   }
// }
