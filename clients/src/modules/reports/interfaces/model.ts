export interface IReportByDateItem {
  id: number;
  restaurant_id: number;
  total_revenue: string | null;
  product_revenue: string | null;
  fee_revenue: string | null;
  tax_revenue: string | null;
  discount_revenue: string | null;
  cash_payment: string | null;
  card_payment: string | null;
  transfer_payment: string | null;
  e_wallet_payment: string | null;
  debt: string | null;
  real_money: string | null;
  guest_total: number | null;
  date: string | Date | null;
  created_at: string | Date | null;
  updated_at: string | Date | null;
}
