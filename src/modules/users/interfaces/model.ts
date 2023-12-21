export interface IPermissionsItem {
  id: number;
  responsible_department: null | any;
  title: string;
}

export interface IUser {
  name: string;
  permissions: Array<string>;
  restaurants: Array<{
    id: number;
    latitude: number;
    longitude: number;
    name: string;
  }>;
  roles: Array<IPermissionsItem>;
}
