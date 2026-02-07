import { Product, Salesman, Invoice } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '#8832',
    name: 'Matcha Latte',
    category: 'Beverages',
    price: 4.50,
    stock: 12,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPKhrCYg3eHiHf_AJZT59VkNDktR79c_MBw_ww9RfvjB5RZkJSlJrz6yczxz-WNBcqwkP1QaaXYM5esjW9zZ3S2weCL6TDjA4fVir5AOJ_jNEmLAfU70y7QG05UO8rCsgRPNJipYhfazmdVQpF3Gtuzi2jspet06bMMHxoa1PX4hDEOj1rKWNqx_KFFV1Re3GI3EKxwj9lXbgy85WBJ91laSvCcmgecgsLgigyqzXLrdj5kb0P1eYVD0QTNf3_og4Kd4vOsMPsuzHE',
    status: 'active',
    expiryDate: '2024-12-15'
  },
  {
    id: '#8833',
    name: 'Butter Croissant',
    category: 'Pastries',
    price: 3.00,
    stock: 3,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHKspHNPe2FjaaE_p3UUF0RN9ukTwK_shXG7PKP2Ufd8qMbE-nz3vfPQDex68II1KiVRo8lGNuAmGSk9YRUd0dsXq1y3RS-QBpN6PsMdJxKVeSE6Y5KxtvH8muMg6-Wfbl_ENWtT5CHrUpuePpRl2ZYad-EBOB-rQPkfLSeqxBWyFwbpC5kcIioXu_6u-MibHPK9KldfjjxH3zr2jSkGeteWhU0NCGNscU68lumuZ0jmEsa3AAPDJ9yTsWNyILux5fz75YEx0UPPD1',
    status: 'low_stock',
    expiryDate: '2023-10-25',
    batchNumber: '#9921'
  },
  {
    id: '#8834',
    name: 'Espresso Shot',
    category: 'Beverages',
    price: 3.00,
    stock: 24,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb16Ubn_oSGGu5WIfQdPmr9Lb4NsZbTFReo71_n2HvxEPKIRmHSQPZYA0WKFFT55l9YQDSjpwGnm7B9YuFctyiCzhmtbc7Be2yqg27UYjEOsi_XcrnRqLnQ90WByRQy3xvT0fP0tRYKoCnJmn221fZJpaJijqxryzxkJD4lU4NFDR4bITZjDVfkpunMtihQ3et-hLwmbOFpZSpFUwJBqc_U71P_B5i8pp2Vs9IEql4Y8RcmrzFtRpYWO60Ts02U6YaKroRNIMTuD1E',
    status: 'active',
    expiryDate: '2024-06-10'
  },
  {
    id: '#8835',
    name: 'Blueberry Muffin',
    category: 'Pastries',
    price: 3.50,
    stock: 0,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBED-H0Myla8q0De7pARP-LxU0Loz0eWIRavNqjzE9d_tn4wA2dsgE8-ZKY8e-Pd9RlEOwIgcZHdXmtZfmKK0koPU89-KaDDGBe6MmdUAN_tvPye3YTNa7Wc9rgHt5toSWLBQJJ5Ce1yw4bVQfQNYxIVyfTa-2AtqdCcYOcroOfBZJN1vDGIwW6s-DZBYuWyhDCABYZOgn34DD9P1P_Amu9h1WyTnjRsd_0UU2D3nfh61hl4uKjoopdLR_Zp4E-OeyslPCLOdHMOhcP',
    status: 'expired',
    expiryDate: '2023-10-23',
    batchNumber: '#8812'
  },
  {
    id: '#8836',
    name: 'Iced Americano',
    category: 'Beverages',
    price: 3.75,
    stock: 18,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSY1BOJktDJsNtXxx8TAVUsC9jZrhgechBcASXxS4SlONcI-fuFEEz41WcujyQMi0TVqkdazqSREaf9w7QbrAxlSOo5WeXYRw3wbDvyvpsroAYitFZ6XZ-PT9hHx6YL1GFq4ngAgbm7Gv2ZsWW0xe4mDWywEspYlovFiBIXoV2qjltw-x5_koDWJxCsNo2Kcx49hEIMsMJ3c5Xuwjoo_LZFdzZuPoHNADCPL2IpcWai1iNCLXi77i7Pr9eYjdWEragPZe4mjGrH7B2',
    status: 'active',
    expiryDate: '2024-12-20'
  },
  {
    id: '#8837',
    name: 'Cappuccino',
    category: 'Beverages',
    price: 4.00,
    stock: 8,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2_sRp-UvZAQwPef3XXizqZwXQmpKzKikeUyuwtOXVz-Z8zX5kDnAQpICjq4n5zQ9QlOiwf4x6xfOFLOPHYiyy7YHpEI-pwr2b7zFb9sYJeTOMQ_ID_xgCAcAZ1bnJYca8OHKq3G-ilOZQKUSikIlrHW6N6RNQqnnA6_OPTV1v7FXzH_PxPGEU7bRkf7tIBqhwovWYfGpc4_Vxsuc6VKTqlKrsX_OTbcGENgUW6vGcOOF0Z7_XcK-qEw9Z3Ak3DoOiuTrMtnQ2JxnS',
    status: 'low_stock',
    expiryDate: '2024-11-05'
  },
];

export const SALESMEN: Salesman[] = [
  {
    id: '#8201',
    name: 'James Wilson',
    username: '@jwilson_sales',
    phone: '+1 (555) 123-4567',
    status: 'active',
    totalSales: 14200,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb16Ubn_oSGGu5WIfQdPmr9Lb4NsZbTFReo71_n2HvxEPKIRmHSQPZYA0WKFFT55l9YQDSjpwGnm7B9YuFctyiCzhmtbc7Be2yqg27UYjEOsi_XcrnRqLnQ90WByRQy3xvT0fP0tRYKoCnJmn221fZJpaJijqxryzxkJD4lU4NFDR4bITZjDVfkpunMtihQ3et-hLwmbOFpZSpFUwJBqc_U71P_B5i8pp2Vs9IEql4Y8RcmrzFtRpYWO60Ts02U6YaKroRNIMTuD1E'
  },
  {
    id: '#8204',
    name: 'Sarah Connor',
    username: '@s_connor',
    phone: '+1 (555) 987-6543',
    status: 'active',
    totalSales: 12450,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSY1BOJktDJsNtXxx8TAVUsC9jZrhgechBcASXxS4SlONcI-fuFEEz41WcujyQMi0TVqkdazqSREaf9w7QbrAxlSOo5WeXYRw3wbDvyvpsroAYitFZ6XZ-PT9hHx6YL1GFq4ngAgbm7Gv2ZsWW0xe4mDWywEspYlovFiBIXoV2qjltw-x5_koDWJxCsNo2Kcx49hEIMsMJ3c5Xuwjoo_LZFdzZuPoHNADCPL2IpcWai1iNCLXi77i7Pr9eYjdWEragPZe4mjGrH7B2'
  },
  {
    id: '#8199',
    name: 'David Miller',
    username: '@d_miller',
    phone: '+1 (555) 246-8135',
    status: 'inactive',
    totalSales: 8900,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2_sRp-UvZAQwPef3XXizqZwXQmpKzKikeUyuwtOXVz-Z8zX5kDnAQpICjq4n5zQ9QlOiwf4x6xfOFLOPHYiyy7YHpEI-pwr2b7zFb9sYJeTOMQ_ID_xgCAcAZ1bnJYca8OHKq3G-ilOZQKUSikIlrHW6N6RNQqnnA6_OPTV1v7FXzH_PxPGEU7bRkf7tIBqhwovWYfGpc4_Vxsuc6VKTqlKrsX_OTbcGENgUW6vGcOOF0Z7_XcK-qEw9Z3Ak3DoOiuTrMtnQ2JxnS'
  },
  {
    id: '#8207',
    name: 'Elena Rodriguez',
    username: '@elena_r',
    phone: '+1 (555) 777-8888',
    status: 'active',
    totalSales: 11200,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZUDuGdwDzQIgqPLgeblLcQBhqbCIrpmT3AdeimUJEg-v4tU8t9EhgIr7PFdhUHQZZFWA7a6UQjvk8zIR7BVx4ubCmzc6svShiv7bIQQm57P23deJHycVoYqDtfs0CGaHfnb-oD59A22IKHCoNmOHwcRSPCqU0A0W4VdpG40QPmMxavD5PNG7jVIWqg-HAemqJZuVQTLa4ovkb0ZiaY7xzp5On2ZG1vhqzrvgKfOTkIld1azR-BXPtJJ411185diMRO1i_Z2j4Z5XX'
  },
   {
    id: '#8209',
    name: 'Marcus Chen',
    username: '@marcus_c',
    phone: '+1 (555) 444-2222',
    status: 'active',
    totalSales: 9800,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHKspHNPe2FjaaE_p3UUF0RN9ukTwK_shXG7PKP2Ufd8qMbE-nz3vfPQDex68II1KiVRo8lGNuAmGSk9YRUd0dsXq1y3RS-QBpN6PsMdJxKVeSE6Y5KxtvH8muMg6-Wfbl_ENWtT5CHrUpuePpRl2ZYad-EBOB-rQPkfLSeqxBWyFwbpC5kcIioXu_6u-MibHPK9KldfjjxH3zr2jSkGeteWhU0NCGNscU68lumuZ0jmEsa3AAPDJ9yTsWNyILux5fz75YEx0UPPD1'
  }
];

export const INVOICES: Invoice[] = [
  { id: '#8832', customerName: 'Walk-in', time: '10:42 AM', salesman: 'Sarah J.', amount: 156.00, status: 'paid', items: [] },
  { id: '#8831', customerName: 'Walk-in', time: '10:15 AM', salesman: 'Mike R.', amount: 42.50, status: 'paid', items: [] },
  { id: '#8830', customerName: 'Walk-in', time: '09:58 AM', salesman: 'Sarah J.', amount: 89.00, status: 'pending', items: [] },
  { id: '#8829', customerName: 'Walk-in', time: '09:30 AM', salesman: 'Emily W.', amount: 210.00, status: 'refund', items: [] },
];

export const CURRENT_ADMIN_AVATAR = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1OdF9FwRS8Qx052BOXxKxVemirs7gIBS_NT0TFdlmlJF2n4uCxApqbrNxGdNORQg54GNHQNec3bziBZmguTVTqZ5xcKjoCuD1sLBCYRgI1wa0V1gj-UbjwsvCWVpogV9jTakZYMWn219uXpo0cmk7g8OYPnaoa0IjcFDUeQOy9u-WByG0DRMEVQ9O8kxGMYKAjkRCsrmWbuk6qIuLcqiSMuSX4bHO8gf-AsWSsXYPQzJDcTeKK_Gb4t0qThAZWUF5HGoW5yzqmUef';
