export interface Renegotiations {
  id?: number;
  type: number;
  title: string;
  value: number;
  settled: boolean;
  createdAt: string;
  dueDate: string;
  parcelPay?: number;
  parcelValue?: number | any;
  parcels?: number;
}
