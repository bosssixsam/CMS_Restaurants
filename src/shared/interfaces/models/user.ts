import { Nullable } from "../shared";
import { Role } from "./role";

export interface User {
  id: number;
  name: Nullable<string>;
  email: Nullable<string>;
  email_verified_at: Nullable<string>;
  verified: number;
  verified_at: Nullable<string>;
  phone: Nullable<string>;
  verification_token: string;
  tas_id: string;
  updated_at: Nullable<string>;
  deleted_at: Nullable<string>;
  created_at: Nullable<string>;
  status: number;
  need_to_checkin: number;
  roles: Array<Role>;
  weekly_schedule: Record<string, any>;
}

// [
//   {
//     restaurants: [
//       {
//         id: 5,
//         name: "NORI 235 Lê Hồng Phong",
//         avatar: {
//           id: 775,
//           model_type: "App\\Models\\Restaurant",
//           model_id: 5,
//           uuid: "354191ac-cbf6-42dd-90d8-6a51c7355873",
//           collection_name: "avatar",
//           name: "622b00489cc26_n2",
//           file_name: "622b00489cc26_n2.jpg",
//           mime_type: "image/jpeg",
//           disk: "s3",
//           conversions_disk: "s3",
//           size: 310221,
//           manipulations: [],
//           custom_properties: {
//             generated_conversions: {
//               thumb: true,
//               preview: true,
//             },
//           },
//           responsive_images: [],
//           order_column: 613,
//           created_at: "2022-03-11T00:54:51.000000Z",
//           updated_at: "2022-03-11T00:54:51.000000Z",
//           generated_conversions: null,
//           url: "https://cdn.norifood.vn/775/622b00489cc26_n2.jpg",
//           thumbnail: "https://cdn.norifood.vn/775/conversions/622b00489cc26_n2-thumb.jpg",
//           preview: "https://cdn.norifood.vn/775/conversions/622b00489cc26_n2-preview.jpg",
//           original_url: "https://cdn.norifood.vn/775/622b00489cc26_n2.jpg",
//           preview_url: "",
//         },
//         featured_images: [
//           {
//             id: 2062,
//             model_type: "App\\Models\\Restaurant",
//             model_id: 5,
//             uuid: "f35a38c9-7949-4be7-b3ff-cf3505f70f2f",
//             collection_name: "featured_image",
//             name: "3DC5F3E0-9A48-4A93-9C82-36676595E673",
//             file_name: "3DC5F3E0-9A48-4A93-9C82-36676595E673.jpg",
//             mime_type: "image/jpeg",
//             disk: "s3",
//             conversions_disk: "s3",
//             size: 1931773,
//             manipulations: [],
//             custom_properties: [],
//             responsive_images: [],
//             order_column: 614,
//             created_at: "2023-08-19T04:09:29.000000Z",
//             updated_at: "2023-08-19T04:09:33.000000Z",
//             generated_conversions: {
//               thumb: true,
//               preview: true,
//             },
//             url: "https://cdn.norifood.vn/2062/3DC5F3E0-9A48-4A93-9C82-36676595E673.jpg",
//             thumbnail: "https://cdn.norifood.vn/2062/conversions/3DC5F3E0-9A48-4A93-9C82-36676595E673-thumb.jpg",
//             preview: "https://cdn.norifood.vn/2062/conversions/3DC5F3E0-9A48-4A93-9C82-36676595E673-preview.jpg",
//             original_url: "https://cdn.norifood.vn/2062/3DC5F3E0-9A48-4A93-9C82-36676595E673.jpg",
//             preview_url: "https://cdn.norifood.vn/2062/conversions/3DC5F3E0-9A48-4A93-9C82-36676595E673-preview.jpg",
//           },
//           {
//             id: 2064,
//             model_type: "App\\Models\\Restaurant",
//             model_id: 5,
//             uuid: "b777aa7a-b167-4bb1-b942-2ccc44c243df",
//             collection_name: "featured_image",
//             name: "3DC5F3E0-9A48-4A93-9C82-36676595E673",
//             file_name: "3DC5F3E0-9A48-4A93-9C82-36676595E673.jpg",
//             mime_type: "image/jpeg",
//             disk: "s3",
//             conversions_disk: "s3",
//             size: 1931773,
//             manipulations: [],
//             custom_properties: [],
//             responsive_images: [],
//             order_column: 616,
//             created_at: "2023-08-19T04:12:06.000000Z",
//             updated_at: "2023-08-19T04:12:08.000000Z",
//             generated_conversions: {
//               thumb: true,
//               preview: true,
//             },
//             url: "https://cdn.norifood.vn/2064/3DC5F3E0-9A48-4A93-9C82-36676595E673.jpg",
//             thumbnail: "https://cdn.norifood.vn/2064/conversions/3DC5F3E0-9A48-4A93-9C82-36676595E673-thumb.jpg",
//             preview: "https://cdn.norifood.vn/2064/conversions/3DC5F3E0-9A48-4A93-9C82-36676595E673-preview.jpg",
//             original_url: "https://cdn.norifood.vn/2064/3DC5F3E0-9A48-4A93-9C82-36676595E673.jpg",
//             preview_url: "https://cdn.norifood.vn/2064/conversions/3DC5F3E0-9A48-4A93-9C82-36676595E673-preview.jpg",
//           },
//         ],
//         configuration: {},
//       },
//     ],
//     weekly_schedule: {
//       id: 3,
//       monday: [],
//       tuesday: [],
//       wednesday: [],
//       thursday: [],
//       friday: [],
//       saturday: [],
//       sunday: [],
//       user_id: 210,
//       created_at: "2023-09-12 19:23:25",
//       updated_at: "2023-09-12 19:23:25",
//       deleted_at: null,
//       monday_shifts: [],
//       tuesday_shifts: [],
//       wednesday_shifts: [],
//       thursday_shifts: [],
//       friday_shifts: [],
//       saturday_shifts: [],
//       sunday_shifts: [],
//     },
//   },
// ];
