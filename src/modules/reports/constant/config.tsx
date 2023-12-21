export const TYPE_KEY = {
  by_date: "by_date",
  by_product: "by_product",
};

export const TYPE_EXPORT_LIST = {
  by_date: "sale_by_date_list",
  by_product: "sale_by_product_list",
};

export const TYPE_LIST = [
  {
    label: "Báo cáo tổng hợp bán hàng theo ngày",
    value: TYPE_KEY.by_date,
  },
  {
    label: "Báo cáo doanh thu theo mặt hàng",
    value: TYPE_KEY.by_product,
  },
];

// -- title config ---

export const TITLE_DETAIL = {
  [TYPE_KEY.by_date]: "Bảng kê hóa đơn",
  [TYPE_KEY.by_product]: "Bảng kê chi tiết doanh thu mặt hàng theo hóa đơn",
};

// table config ---

export const TABLE_SALE_BY_DATE = [
  {
    title: "Ngày",
    key: "date",
    dataIndex: "date",
    type: "date",
    url: "by_date",
    align: "center",
    width: 120,
  },
  {
    title: "Doanh thu",
    children: [
      {
        title: (
          <span className="flex items-center text-center">
            Tổng <br /> (5) = (1) + (2) + (3) - (4)
          </span>
        ),
        dataIndex: "product_revenue",
        key: "product_revenue",
        type: "price",
        summary: true,
        className: "text-right",
        width: 200,
      },
      {
        title: (
          <span className="flex items-center text-center">
            Tiền hàng <br /> (1)
          </span>
        ),
        dataIndex: "product_revenue",
        key: "product_revenue",
        type: "price",
        summary: true,
        width: 120,
        className: "text-right",
      },
      {
        title: (
          <span className="flex items-center text-center">
            Tiền phí <br /> (2)
          </span>
        ),
        dataIndex: "fee_revenue",
        key: "fee_revenue",
        type: "price",
        summary: true,
        width: 120,
        className: "text-right",
      },
      {
        title: (
          <span className="flex items-center text-center">
            Thuế <br /> (3)
          </span>
        ),
        dataIndex: "tax_revenue",
        key: "tax_revenue",
        type: "price",
        summary: true,
        width: 120,
        className: "text-right",
      },
      {
        title: (
          <span className="flex items-center text-center">
            Khuyến mãi <br /> (4)
          </span>
        ),
        dataIndex: "discount_revenue",
        key: "discount_revenue",
        type: "price",
        summary: true,
        width: 120,
        className: "text-right",
      },
    ],
  },
  {
    title: "Hình thức thanh toán",
    children: [
      {
        title: <span>Tiền mặt</span>,
        dataIndex: "cash_payment",
        key: "cash_payment",
        type: "price",
        summary: true,
        width: 120,
        className: "text-right",
      },
      {
        title: <span>Cà thẻ</span>,
        dataIndex: "card_payment",
        key: "card_payment",
        type: "price",
        summary: true,
        width: 120,
        className: "text-right",
      },
      {
        title: <span>Chuyển khoản</span>,
        dataIndex: "transfer_payment",
        key: "transfer_payment",
        type: "price",
        summary: true,
        width: 120,
        className: "text-right",
      },
      {
        title: <span>Khách nợ</span>,
        dataIndex: "debt",
        key: "debt",
        type: "price",
        summary: true,
        width: 120,
        className: "text-right",
      },
    ],
  },
  {
    title: `Thực thu`,
    dataIndex: "real_money",
    key: "real_money",
    type: "price",
    summary: true,
    width: 120,
    className: "text-right",
  },
  {
    title: "Số khách",
    dataIndex: "guest_total",
    key: "guest_total",
    type: "price",
    summary: true,
    width: 120,
    className: "text-right",
  },
];

export const TABLE_SALE_BY_PRODUCT = [
  {
    title: "STT",
    width: 80,
    align: "center",
    type: "number",
  },
  {
    title: "Mã món",
    key: "product_id",
    dataIndex: "product_id",
    align: "center",
    width: 140,
  },
  {
    title: "Tên món",
    key: "product_name",
    dataIndex: "product_name",
    width: 360,
    url: "by_product",
  },
  {
    title: "ĐVT",
    key: "product_unit_name",
    dataIndex: "product_unit_name",
    width: 120,
  },
  {
    title: "SL bán",
    key: "quantity",
    dataIndex: "quantity",
    width: 120,
    summary: true,
  },
  {
    title: "SL theo con",
    key: "selling_unit_count",
    dataIndex: "selling_unit_count",
    width: 120,
  },
  {
    title: "Đơn giá trung bình",
    key: "average_unit_price",
    dataIndex: "average_unit_price",
    width: 120,
    type: "price",
  },
  {
    title: "Doanh thu",
    align: "center",
    children: [
      {
        title: <span className="flex justify-center text-center">Tổng</span>,
        width: 200,
        className: "text-right",
        dataIndex: "total_revenue",
        key: "total_revenue",
        type: "price",
        summary: true,
      },
      {
        title: <span className="flex justify-center text-center">Tiền hàng</span>,
        width: 130,
        className: "text-right",
        dataIndex: "product_revenue",
        key: "product_revenue",
        type: "price",
        summary: true,
      },
      {
        title: <span className="flex justify-center text-center">Khuyến mãi</span>,
        width: 130,
        className: "text-right",
        dataIndex: "discount_revenue",
        key: "discount_revenue",
        type: "price",
        summary: true,
      },
    ],
  },
  {
    title: "Doanh mục sản phẩm",
    key: "product_category_name",
    dataIndex: "product_category_name",
    width: 200,
  },
];

export const TABLE_DETAIL_SALE_BY_DATE = [
  {
    title: "Ngày",
    dataIndex: "date",
    key: "date",
    align: "center",
    width: 120,
  },
  {
    title: "Giờ vào - ra",
    align: "center",
    width: 180,
    type: "time",
  },
  {
    title: "Số hóa đơn",
    dataIndex: ["receipt", "code"],
    key: "receipt",
    align: "center",
    width: 150,
    url: "order",
  },
  {
    title: "Doanh thu",
    align: "center",
    children: [
      {
        title: (
          <span>
            Tổng <br /> (5) = (1) + (2) + (3) - (4)
          </span>
        ),
        className: "text-right",
        width: 200,
        key: "total_revenue",
        dataIndex: "total_revenue",
        type: "price",
      },
      {
        title: (
          <span>
            Tiền hàng <br /> (1)
          </span>
        ),
        width: 120,
        className: "text-right",
        dataIndex: "product_revenue",
        key: "product_revenue",
        type: "price",
      },
      {
        title: (
          <span>
            Tiền phí <br /> (2)
          </span>
        ),
        width: 120,
        className: "text-right",
        dataIndex: "fee_revenue",
        key: "fee_revenue",
        type: "price",
      },
      {
        title: (
          <span>
            Thuế <br /> (3)
          </span>
        ),
        width: 120,
        className: "text-right",
        dataIndex: "tax_revenue",
        key: "tax_revenue",
        type: "price",
      },
      {
        title: (
          <span>
            Khuyến mãi <br /> (4)
          </span>
        ),
        width: 120,
        className: "text-right",
        dataIndex: "discount_revenue",
        key: "discount_revenue",
        type: "price",
      },
    ],
  },
  {
    title: "Hình thức thanh toán",
    align: "center",
    children: [
      {
        title: <span>Tiền mặt</span>,
        width: 120,
        className: "text-right",
        dataIndex: "cash_payment",
        key: "cash_payment",
        type: "price",
      },
      {
        title: <span>Cà thẻ</span>,
        width: 120,
        className: "text-right",
        dataIndex: "card_payment",
        key: "card_payment",
        type: "price",
      },
      {
        title: <span>Chuyển khoản</span>,
        width: 120,
        className: "text-right",
        dataIndex: "transfer_payment",
        key: "transfer_payment",
        type: "price",
      },
      {
        title: <span>Khách nợ</span>,
        width: 120,
        className: "text-right",
        dataIndex: "debt",
        key: "debt",
        type: "price",
      },
    ],
  },
  {
    title: `Thực thu`,
    width: 120,
    className: "text-right",
    dataIndex: "real_money",
    key: "real_money",
    type: "price",
  },
  {
    title: `Dịch vụ`,
    width: 150,
    className: "text-right",
    dataIndex: ["receipt", "order", "type"],
    key: "receipt",
    type: "order",
  },
  {
    title: `Khách hàng`,
    width: 150,
    className: "text-right",
    dataIndex: ["receipt", "customer", "full_name"],
    key: "receipt",
  },
  {
    title: `NV Phục vụ`,
    width: 150,
    className: "text-right",
    dataIndex: ["receipt", "order", "staff", "name"],
    key: "receipt",
  },
  {
    title: `NV Thu Ngân`,
    width: 150,
    className: "text-right",
    dataIndex: ["receipt", "cashier", "name"],
    key: "receipt",
  },
  {
    title: `Bàn`,
    width: 120,
    className: "text-right",
    // dataIndex: ["receipt", "order", "tables"],
    key: "receipt",
    type: "table",
  },

  {
    title: `Số khách`,
    width: 120,
    className: "text-right",
    dataIndex: ["receipt", "order", "slot"],
    key: "receipt",
  },
];

export const TABLE_DETAIL_SALE_BY_PRODUCT = [
  {
    title: "Ngày",
    dataIndex: "date",
    key: "date",
    align: "center",
    width: 120,
  },
  {
    title: "Giờ vào - ra",
    align: "center",
    width: 180,
    type: "time",
  },
  {
    title: "Số hóa đơn",
    dataIndex: "receipt_code",
    key: "receipt_code",
    align: "center",
    width: 180,
    url: "order",
  },
  {
    title: "ĐVT",
    dataIndex: "product_unit_name",
    key: "product_unit_name",
    align: "center",
    width: 120,
  },
  {
    title: "SL Bán",
    dataIndex: "quantity",
    key: "quantity",
    align: "center",
    width: 120,
  },
  {
    title: "Đơn giá",
    align: "center",
    width: 120,
    key: "total_price",
    dataIndex: "total_price",
    type: "price",
  },
  {
    title: "Tiền hàng",
    align: "center",
    width: 120,
    key: "price",
    dataIndex: "price",
    type: "price",
  },
  {
    title: "Khuyến mãi",
    align: "center",
    width: 120,
    key: "discount",
    dataIndex: "discount",
    type: "price",
  },
  {
    title: "Doanh thu trước thuế",
    align: "center",
    width: 200,
    key: "re_tax_revenue",
    dataIndex: "re_tax_revenue",
    type: "price",
  },
];
