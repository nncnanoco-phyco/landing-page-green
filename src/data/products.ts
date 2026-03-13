export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  images?: string[];
  banners?: string[];
  category: string;
  brand?: string;
  origin?: string;
  price?: string;
  ingredients?: { name: string; amount: string }[];
  ingredientsText?: string;
  usage?: string[];
  target?: string[];
  dosage?: string[];
  packaging?: string;
  storage?: string;
  expiry?: string;
  purchaseUrl?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  products: Product[];
}

export const agentInfo = {
  name: 'Radio Shopping',
  phone: '0939313653',
  email: 'radioshopvn@gmail.com',
  title: 'ĐẠI LÝ PHÂN PHỐI CHÍNH HÃNG RADIO SHOPPING',
  address:
    'Số 46, Đường 5, KDC Vạn Phúc, P. Hiệp Bình Phước, TP. Thủ Đức, TP. HCM',
  warehouse:
    'Số 24, Đường số 6, KDC Xây Dựng, Phường Hưng Thạnh, Quận Cái Răng, TP Cần Thơ',
  facebook: 'https://www.facebook.com/profile.php?id=61579259477848',
  tiktok:
    'https://www.tiktok.com/@vesinhnhacuaradio?is_from_webapp=1&sender_device=pc',
  mainWebsite: 'https://radioshop.vn/',
};

export const brandInfo = {
  name: 'GREEN 100',
  tagline: 'Giải Pháp Xanh Cho Ngôi Nhà Sạch',
  subtitle: 'CÔNG NGHỆ SINH HỌC TỪ CANADA BỔ SUNG LỢI KHUẨN',
  description:
    'Sản phẩm vệ sinh sinh học vi sinh – an toàn cho sức khỏe, thân thiện môi trường, tiết kiệm chi phí.',
  highlights: [
    'Ứng dụng công nghệ sinh học từ Canada bổ sung lợi khuẩn',
    'An toàn cho sức khỏe',
    'Bảo vệ môi trường',
    'Tiết kiệm chi phí',
  ],
};

export const technologyInfo = {
  title: 'ĐỘC ĐÁO CÔNG NGHỆ',
  subtitle: 'ĐIỀU GÌ LÀM SẢN PHẨM CHÚNG TÔI KHÁC BIỆT?',
  steps: [
    { label: 'Enzyme chiết xuất tự nhiên', icon: '🧪' },
    { label: 'BỔ SUNG LỢI KHUẨN', icon: '🦠' },
    {
      label:
        'Ngân hàng vi sinh làm sạch (vi sinh vật tự nhiên) độc quyền từ CANADA',
      icon: '🌿',
    },
  ],
  result: 'SẢN PHẨM XANH AN TOÀN',
  tagline: 'Dùng sức mạnh tự nhiên làm sạch một cách tự nhiên',
  description: 'An toàn cho người sử dụng và thân thiện với môi trường',
};

export const mechanismSteps = [
  {
    step: 1,
    title: 'Chất hoạt động bề mặt XANH sẽ bóc tách vết bẩn ra khỏi bề mặt',
    description:
      'Chất hoạt động bề mặt có khả năng phân hủy sinh học cao sẽ ngay lập tức loại bỏ bụi bẩn khỏi bề mặt.',
  },
  {
    step: 2,
    title: 'Đồng thời các Enzyme chiết xuất tự nhiên cắt nhỏ bụi bẩn',
    description:
      'Đồng thời, chất chiết xuất lên men (Enzyme) phá vỡ chất bẩn và bụi bẩn - làm cho chúng dễ dàng hòa tan trong nước hơn.',
  },
  {
    step: 3,
    title:
      'Thành phần vi sinh thấm sâu xuống bề mặt tiêu hóa bụi bẩn và làm sạch một cách an toàn',
    description:
      'Thành phần vi sinh thấm sâu xuống bề mặt để tiêu hóa chất bẩn mỏi hòa tan, giúp loại bỏ mùi hôi.',
  },
  {
    step: 4,
    title: 'Thành phần vi sinh sẽ ở lại trên bề mặt để làm sạch lâu dài',
    description:
      'Vi sinh tiếp tục làm sạch và xâm nhập vào các bề mặt xốp nhiều ngày sau khi được lau chùi, giữ cho bề mặt của bạn sạch lâu hơn.',
  },
];

export const whyChooseReasons = [
  {
    icon: '💰',
    title: 'Chi phí thấp',
    description:
      'Chai xịt tái sử dụng nhiều lần, tiết kiệm chi phí bao tay khi thao tác. Tiết kiệm nước, không dùng nước nóng, không cần lau lại => tiết kiệm công sức. Đa năng, 1 sp dùng nhiều khu vực.',
  },
  {
    icon: '⚡',
    title: 'Hiệu suất cao',
    description:
      'Là sạch hiệu quả sạch kéo dài (72 giờ) nhờ lợi khuẩn duy trì. Trọng lượng nhẹ, thuận tiện vận chuyển lưu kho.',
  },
  {
    icon: '🌱',
    title: 'Thân thiện môi trường',
    description:
      'Phân hủy thành hữu cơ tái tạo môi trường. An toàn cho con người, các sinh vật, không có độc tính thủy sinh. Không cần rửa lại bằng nước, tạo lớp màng sinh học bảo vệ da tay.',
  },
  {
    icon: '🧪',
    title: 'Ph trung tính',
    description: 'Không ăn mòn cơ sở hạ tầng, thiết bị điện tử.',
  },
  {
    icon: '🛡️',
    title: 'Không hợp chất hữu cơ bay hơi độc hại (VOC)',
    description:
      'An toàn tuyệt đối cho người sử dụng và môi trường xung quanh.',
  },
  {
    icon: '🏅',
    title: 'Chứng nhận môi trường cao nhất',
    description:
      'Điểm LEED points tổ chức môi trường thế giới. Nguyên liệu 100% nhập khẩu chứng nhận Ecologo, Ecolabel, Châu Âu và Bắc Mỹ.',
  },
];

export const productCategories: ProductCategory[] = [
  {
    id: 'kitchen',
    name: 'SẢN PHẨM LAU CHÙI NHÀ BẾP',
    products: [
      // Bộ vi sinh lau chùi dầu mỡ KITCHEN KLEEN (01 Chai 500ml + 01 ống 5ml)
      {
        id: 'kitchen-kleen-set-1',
        name: 'Bộ vi sinh lau chùi dầu mỡ KITCHEN KLEEN (01 Chai 500ml + 01 ống 5ml)',
        subtitle: 'Kitchen Kleen Set 1',
        description:
          'Kitchen KLEEN ứng dụng công nghệ sinh học từ Canada. Với thành phần chứa vi sinh đặc biệt chuyển hóa vết dầu mỡ trong nhà bếp thành nước giúp dễ lau chùi, hạn chế mùi hôi và vi khuẩn gây bệnh.\n\nCông nghệ vi sinh – enzyme sinh học: Giúp phân hủy và làm sạch hiệu quả các vết dầu mỡ bám lâu ngày trên bếp gas, mặt bếp, sàn bếp, lò nướng và các bề mặt trong nhà bếp.\nCông thức an toàn pH = 7: Không gây kích ứng da, không ăn mòn bề mặt thiết bị và an toàn khi sử dụng hằng ngày.\nThành phần thân thiện môi trường: Chứa lợi khuẩn, enzyme và các thành phần tự nhiên dễ phân hủy sinh học, hạn chế tác động xấu đến môi trường.\nGiảm mùi hôi và vi khuẩn: Lợi khuẩn giúp hạn chế mùi khó chịu trong khu vực bếp, giữ không gian bếp luôn sạch sẽ và dễ chịu.',
        image: '/products/kitchen/kitchen-kleen-set-1/1.jpg',
        images: [
          '/products/kitchen/kitchen-kleen-set-1/1.jpg',
          '/products/kitchen/kitchen-kleen-set-1/2.jpg',
          '/products/kitchen/kitchen-kleen-set-1/3.jpg',
          '/products/kitchen/kitchen-kleen-set-1/4.jpg',
          '/products/kitchen/kitchen-kleen-set-1/5.jpg',
          '/products/kitchen/kitchen-kleen-set-1/6.jpg',
        ],
        banners: [
          '/products/kitchen/SACH-SAU.jpg',
          '/products/kitchen/2-2.jpg',
          '/products/kitchen/3.jpg',
          '/products/kitchen/4.jpg',
          '/products/kitchen/5.jpg',
        ],
        category: 'kitchen',
        brand: 'kitchen KLEEN',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '139,000 ₫',
        ingredientsText:
          'Lợi khuẩn, enzyme, chất hoạt động bề mặt, màu và hương tự nhiên',
        usage: [
          'Bước 1: “Đánh thức” lợi khuẩn bằng cách pha 1 ống dung dịch vi sinh 5ml với 500ml nước sạch vào chai, sau đó lắc đều trước khi sử dụng.',
          'Bước 2: Xoay đầu vòi sang chế độ SPRAY (phun sương) hoặc STREAM (phun tia) tùy nhu cầu sử dụng.',
          'Bước 3: Xịt dung dịch trực tiếp lên bề mặt cần làm sạch như mặt bếp, bếp gas, sàn bếp hoặc khu vực bám dầu mỡ. Chờ khoảng 10–15 giây để dung dịch phát huy tác dụng, sau đó dùng khăn khô lau sạch, không cần lau lại bằng nước.',
        ],
        target: ['Tất cả'],
        packaging:
          'Bộ: 1 chai rỗng dung tích 500ml + 1 ống dung dịch 5ml đậm đặc',
        storage:
          'Bảo quản sản phẩm ở nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và nhiệt độ cao. Đậy kín nắp sau khi sử dụng và để xa tầm tay trẻ em để đảm bảo chất lượng sản phẩm.',
        expiry: '24 tháng kể từ ngày sản xuất',
        purchaseUrl:
          'https://radioshop.vn/product/kitchen-kleen-lau-chui-dau-mo-bo-1-1.html',
      },

      // Bộ vi sinh lau chùi dầu mỡ KITCHEN KLEEN (01 Chai 500ml + 03 ống 5ml)
      {
        id: 'kitchen-kleen-set-3',
        name: 'Bộ vi sinh lau chùi dầu mỡ KITCHEN KLEEN (01 Chai 500ml + 03 ống 5ml)',
        subtitle: 'Kitchen Kleen Set 3',
        description:
          'Kitchen KLEEN ứng dụng công nghệ sinh học từ Canada. Với thành phần chứa vi sinh đặc biệt chuyển hóa vết dầu mỡ trong nhà bếp thành nước giúp dễ lau chùi, hạn chế mùi hôi và vi khuẩn gây bệnh.\n\nCông nghệ vi sinh – enzyme sinh học: Giúp phân hủy và làm sạch hiệu quả các vết dầu mỡ bám lâu ngày trên bếp gas, mặt bếp, sàn bếp, lò nướng và các bề mặt trong nhà bếp.\nCông thức an toàn pH = 7: Không gây kích ứng da, không ăn mòn bề mặt thiết bị và an toàn khi sử dụng hằng ngày.\nThành phần thân thiện môi trường: Chứa lợi khuẩn, enzyme và các thành phần tự nhiên dễ phân hủy sinh học, hạn chế tác động xấu đến môi trường.\nGiảm mùi hôi và vi khuẩn: Lợi khuẩn giúp hạn chế mùi khó chịu trong khu vực bếp, giữ không gian bếp luôn sạch sẽ và dễ chịu.',
        image: '/products/kitchen/kitchen-kleen-set-3/1.jpg',
        images: [
          '/products/kitchen/kitchen-kleen-set-3/1.jpg',
          '/products/kitchen/kitchen-kleen-set-3/2.jpg',
          '/products/kitchen/kitchen-kleen-set-3/3.jpg',
          '/products/kitchen/kitchen-kleen-set-3/4.jpg',
          '/products/kitchen/kitchen-kleen-set-3/5.jpg',
          '/products/kitchen/kitchen-kleen-set-3/6.jpg',
        ],
        banners: [
          '/products/kitchen/SACH-SAU.jpg',
          '/products/kitchen/2-2.jpg',
          '/products/kitchen/3.jpg',
          '/products/kitchen/4.jpg',
          '/products/kitchen/5.jpg',
        ],
        category: 'kitchen',
        brand: 'KITCHEN KLEEN',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '349,000 ₫',
        ingredientsText:
          'Lợi khuẩn, enzyme, chất hoạt động bề mặt, màu và hương tự nhiên',
        usage: [
          'Bước 1: “Đánh thức” lợi khuẩn bằng cách pha 1 ống dung dịch vi sinh 5ml với 500ml nước sạch vào chai, sau đó lắc đều trước khi sử dụng.',
          'Bước 2: Xoay đầu vòi sang chế độ SPRAY (phun sương) hoặc STREAM (phun tia) tùy nhu cầu sử dụng.',
          'Bước 3: Xịt dung dịch trực tiếp lên bề mặt cần làm sạch như mặt bếp, bếp gas, sàn bếp hoặc khu vực bám dầu mỡ. Chờ khoảng 10–15 giây để dung dịch phát huy tác dụng, sau đó dùng khăn khô lau sạch, không cần lau lại bằng nước.',
        ],
        target: ['Tất cả'],
        packaging: 'Bộ: 1 chai dung tích 500ml + 3 ống dung dịch 5ml đậm đặc',
        storage:
          'Bảo quản sản phẩm ở nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và nhiệt độ cao. Đậy kín nắp sau khi sử dụng và để xa tầm tay trẻ em để đảm bảo chất lượng sản phẩm.',
        expiry: '24 tháng kể từ ngày sản xuất',
        purchaseUrl:
          'https://radioshop.vn/product/kitchen-kleen-lau-chui-dau-mo-bo-1-3.html',
      },

      // Hộp vi sinh lau chùi dầu mỡ KITCHEN KLEEN (01 ống 5ml)
      {
        id: 'kitchen-kleen-refill-1',
        name: 'Hộp vi sinh lau chùi dầu mỡ KITCHEN KLEEN (01 ống 5ml)',
        subtitle: 'Kitchen Kleen Refill 1',
        description:
          'Hộp vi sinh lau chùi dầu mỡ Kitchen Kleen (01 ống 5ml) dùng để lau chùi các vết bám dầu mỡ trong khu vực bếp như mặt bếp, sàn bếp, bếp gas, bàn ghế, lò nướng… Thành phần chứa lợi khuẩn và enzyme đặc biệt chuyển hóa vết dầu mỡ thành nước giúp dễ lau chùi, hạn chế mùi hôi và vi khuẩn gây bệnh.',
        image: '/products/kitchen/kitchen-kleen-refill-1/1.jpg',
        images: [
          '/products/kitchen/kitchen-kleen-refill-1/1.jpg',
          '/products/kitchen/kitchen-kleen-refill-1/2.jpg',
          '/products/kitchen/kitchen-kleen-refill-1/3.jpg',
          '/products/kitchen/kitchen-kleen-refill-1/4.jpg',
          '/products/kitchen/kitchen-kleen-refill-1/5.jpg',
        ],
        banners: [
          '/products/kitchen/SACH-SAU.jpg',
          '/products/kitchen/2-2.jpg',
          '/products/kitchen/3.jpg',
          '/products/kitchen/4.jpg',
          '/products/kitchen/5.jpg',
        ],
        category: 'kitchen',
        brand: 'kitchen KLEEN',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '55,000 ₫',
        ingredientsText:
          'Lợi khuẩn, enzyme, chất hoạt động bề mặt, màu và hương tự nhiên',
        usage: [
          'Bước 1: “Đánh thức” lợi khuẩn bằng cách pha 1 ống 5ml với 500ml nước sạch, lắc đều trước khi sử dụng',
          'Bước 2: Xoay đầu vòi sang chế độ SPRAY/STREAM',
          'Bước 3: Xịt dung dịch trực tiếp vào khu vực cần lau, để 10-15s sau đó dùng khăn khô lau sạch. Không cần lau lại bằng nước.',
        ],
        target: ['Tất cả'],
        packaging: 'Hộp: 1 ống dung dịch 5ml đậm đặc',
        storage: 'Bảo quản ở điều kiện thông thường',
        expiry: '2 năm kể từ ngày sản xuất',
        purchaseUrl:
          'https://radioshop.vn/product/kitchen-kleen-lau-chui-dau-mo-ong-5ml.html',
      },

      // Hộp vi sinh lau chùi dầu mỡ KITCHEN KLEEN (03 ống 5ml)
      {
        id: 'kitchen-kleen-refill-3',
        name: 'Hộp vi sinh lau chùi dầu mỡ KITCHEN KLEEN (03 ống 5ml)',
        subtitle: 'Kitchen Kleen Refill 3',
        description:
          'Kitchen KLEEN ứng dụng công nghệ sinh học từ Canada. Với thành phần chứa vi sinh đặc biệt chuyển hóa vết dầu mỡ trong nhà bếp thành nước giúp dễ lau chùi, hạn chế mùi hôi và vi khuẩn gây bệnh.\n\nCông nghệ vi sinh – enzyme sinh học: Giúp phân hủy và làm sạch hiệu quả các vết dầu mỡ bám lâu ngày trên bếp gas, mặt bếp, sàn bếp, lò nướng và các bề mặt trong nhà bếp.\nCông thức an toàn pH = 7: Không gây kích ứng da, không ăn mòn bề mặt thiết bị và an toàn khi sử dụng hằng ngày.\nThành phần thân thiện môi trường: Chứa lợi khuẩn, enzyme và các thành phần tự nhiên dễ phân hủy sinh học, hạn chế tác động xấu đến môi trường.\nGiảm mùi hôi và vi khuẩn: Lợi khuẩn giúp hạn chế mùi khó chịu trong khu vực bếp, giữ không gian bếp luôn sạch sẽ và dễ chịu.',
        image: '/products/kitchen/kitchen-kleen-refill-3/1.jpg',
        images: [
          '/products/kitchen/kitchen-kleen-refill-3/1.jpg',
          '/products/kitchen/kitchen-kleen-refill-3/2.jpg',
          '/products/kitchen/kitchen-kleen-refill-3/3.jpg',
          '/products/kitchen/kitchen-kleen-refill-3/4.jpg',
          '/products/kitchen/kitchen-kleen-refill-3/5.jpg',
          '/products/kitchen/kitchen-kleen-refill-3/6.jpg',
        ],
        banners: [
          '/products/kitchen/SACH-SAU.jpg',
          '/products/kitchen/2-2.jpg',
          '/products/kitchen/3.jpg',
          '/products/kitchen/4.jpg',
          '/products/kitchen/5.jpg',
        ],
        category: 'kitchen',
        brand: 'KLEEN',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '139,000 ₫',
        ingredientsText:
          'Lợi khuẩn, enzyme, chất hoạt động bề mặt, màu và hương tự nhiên',
        usage: [
          'Bước 1: “Đánh thức” lợi khuẩn bằng cách pha 1 ống dung dịch vi sinh 5ml với 500ml nước sạch vào chai, sau đó lắc đều trước khi sử dụng.',
          'Bước 2: Xoay đầu vòi sang chế độ SPRAY (phun sương) hoặc STREAM (phun tia) tùy nhu cầu sử dụng.',
          'Bước 3: Xịt dung dịch trực tiếp lên bề mặt cần làm sạch như mặt bếp, bếp gas, sàn bếp hoặc khu vực bám dầu mỡ. Chờ khoảng 10–15 giây để dung dịch phát huy tác dụng, sau đó dùng khăn khô lau sạch, không cần lau lại bằng nước.',
        ],
        target: ['Gia đình, nhà hàng, quán ăn, khách sạn,…'],
        packaging: 'Hộp: 3 ống dung dịch 5ml đậm đặc',
        storage:
          'Bảo quản sản phẩm ở nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và nhiệt độ cao. Đậy kín nắp sau khi sử dụng và để xa tầm tay trẻ em để đảm bảo chất lượng sản phẩm.',
        expiry: '24 tháng kể từ ngày sản xuất',
        purchaseUrl:
          'https://radioshop.vn/product/kitchen-kleen-lau-chui-dau-mo-hop-3-ong.html',
      },

      // Hộp vi sinh lau chùi dầu mỡ KITCHEN KLEEN (10 ống 5ml)
      {
        id: 'kitchen-kleen-refill-10',
        name: 'Hộp vi sinh lau chùi dầu mỡ KITCHEN KLEEN (10 ống 5ml)',
        subtitle: 'Kitchen Kleen Refill 10',
        description:
          'Kitchen KLEEN ứng dụng công nghệ sinh học từ Canada. Với thành phần chứa vi sinh đặc biệt chuyển hóa vết dầu mỡ trong nhà bếp thành nước giúp dễ lau chùi, hạn chế mùi hôi và vi khuẩn gây bệnh.\n\nCông nghệ vi sinh – enzyme sinh học: Giúp phân hủy và làm sạch hiệu quả các vết dầu mỡ bám lâu ngày trên bếp gas, mặt bếp, sàn bếp, lò nướng và các bề mặt trong nhà bếp.\nCông thức an toàn pH = 7: Không gây kích ứng da, không ăn mòn bề mặt thiết bị và an toàn khi sử dụng hằng ngày.\nThành phần thân thiện môi trường: Chứa lợi khuẩn, enzyme và các thành phần tự nhiên dễ phân hủy sinh học, hạn chế tác động xấu đến môi trường.\nGiảm mùi hôi và vi khuẩn: Lợi khuẩn giúp hạn chế mùi khó chịu trong khu vực bếp, giữ không gian bếp luôn sạch sẽ và dễ chịu.',
        image: '/products/kitchen/kitchen-kleen-refill-10/1.jpg',
        images: [
          '/products/kitchen/kitchen-kleen-refill-10/1.jpg',
          '/products/kitchen/kitchen-kleen-refill-10/2.jpg',
          '/products/kitchen/kitchen-kleen-refill-10/3.jpg',
          '/products/kitchen/kitchen-kleen-refill-10/4.jpg',
          '/products/kitchen/kitchen-kleen-refill-10/5.jpg',
          '/products/kitchen/kitchen-kleen-refill-10/6.jpg',
        ],
        banners: [
          '/products/kitchen/SACH-SAU.jpg',
          '/products/kitchen/2-2.jpg',
          '/products/kitchen/3.jpg',
          '/products/kitchen/4.jpg',
          '/products/kitchen/5.jpg',
        ],
        category: 'kitchen',
        brand: 'Kitchen KLEEN',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '399,000 ₫',
        ingredientsText:
          'Lợi khuẩn, enzyme, chất hoạt động bề mặt, màu và hương tự nhiên',
        usage: [
          'Bước 1: “Đánh thức” lợi khuẩn bằng cách pha 1 ống dung dịch vi sinh 5ml với 500ml nước sạch vào chai, sau đó lắc đều trước khi sử dụng.',
          'Bước 2: Xoay đầu vòi sang chế độ SPRAY (phun sương) hoặc STREAM (phun tia) tùy nhu cầu sử dụng.',
          'Bước 3: Xịt dung dịch trực tiếp lên bề mặt cần làm sạch như mặt bếp, bếp gas, sàn bếp hoặc khu vực bám dầu mỡ. Chờ khoảng 10–15 giây để dung dịch phát huy tác dụng, sau đó dùng khăn khô lau sạch, không cần lau lại bằng nước.',
        ],
        target: ['Tất cả'],
        packaging: '10 ống dung dịch 5ml đậm đặc',
        storage:
          'Bảo quản sản phẩm ở nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và nhiệt độ cao. Đậy kín nắp sau khi sử dụng và để xa tầm tay trẻ em để đảm bảo chất lượng sản phẩm.',
        expiry: '24 tháng kể từ ngày sản xuất',
        purchaseUrl:
          'https://radioshop.vn/product/kitchen-kleen-lau-chui-dau-mo-hop-10-ong.html',
      },
    ],
  },
  {
    id: 'multipurpose',
    name: 'SẢN PHẨM LAU CHÙI ĐA NĂNG',
    products: [
      // Bộ vi sinh lau chùi đa năng 3E Kleen (01 Chai 500ml + 01 ống 5ml)
      {
        id: '3e-kleen',
        name: 'Bộ vi sinh lau chùi đa năng 3E Kleen (01 Chai 500ml + 01 ống 5ml)',
        subtitle: '3E Kleen',
        description:
          '3E KLEEN lau chùi đa năng ứng dụng công nghệ sinh học từ Canada, với công thức vi sinh đặc biệt giúp làm sạch sâu các bề mặt, khử mùi và hạn chế vi khuẩn gây bệnh.\n\nSản phẩm chứa các thành phần tự nhiên dễ phân hủy sinh học, đạt tiêu chuẩn Châu Âu, an toàn cho sức khỏe và thân thiện với môi trường, phù hợp sử dụng hằng ngày.\nCông thức pH trung tính không gây kích ứng da, không ăn mòn bề mặt thiết bị và không chứa hợp chất hữu cơ bay hơi (VOCs) độc hại.',
        image: '/products/multipurpose/3e-kleen/1.jpg',
        images: [
          '/products/multipurpose/3e-kleen/1.jpg',
          '/products/multipurpose/3e-kleen/2.jpg',
          '/products/multipurpose/3e-kleen/3.jpg',
          '/products/multipurpose/3e-kleen/4.jpg',
          '/products/multipurpose/3e-kleen/5.jpg',
          '/products/multipurpose/3e-kleen/6.jpg',
        ],
        category: 'multipurpose',
        brand: '3E KLEEN',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '139,000 ₫',
        ingredientsText:
          'Lợi khuẩn, enzyme sinh học, chất hoạt động bề mặt xanh, màu và hương tự nhiên',
        usage: [
          'Bước 1: “Đánh thức” lợi khuẩn bằng cách pha 1 ống dung dịch vi sinh 5ml với 500ml nước sạch vào chai, sau đó lắc đều trước khi sử dụng.',
          'Bước 2: Xoay đầu vòi sang chế độ SPRAY (phun sương) hoặc STREAM (phun tia) tùy nhu cầu sử dụng.',
          'Bước 3: Xịt dung dịch trực tiếp lên bề mặt cần làm sạch như bề mặt như gương, mặt bàn, bồn vệ sinh, sàn nhà, nền gỗ, an toàn cho inox, sứ, nhựa melamine, đá, thủy tinh và các bề mặt kháng nước khác. Chờ khoảng 10–15 giây để dung dịch phát huy tác dụng, sau đó dùng khăn khô lau sạch, không cần lau lại bằng nước.',
        ],
        target: ['Gia đình, văn phòng…'],
        packaging:
          'Bộ: 1 chai rỗng dung tích 500ml + 1 ống dung dịch 5ml đậm đặc',
        banners: [
          '/products/multipurpose/9-2-2048x1151.jpg',
          '/products/multipurpose/2-1-1400x787.jpg',
          '/products/multipurpose/8-1400x787.jpg',
          '/products/multipurpose/3-1-1400x787.jpg',
          '/products/multipurpose/4-1400x787.jpg',
        ],
        expiry: '24 tháng kể từ ngày sản xuất',
        storage:
          'Bảo quản sản phẩm ở nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và nhiệt độ cao. Đậy kín nắp sau khi sử dụng và để xa tầm tay trẻ em để đảm bảo chất lượng sản phẩm.',
        purchaseUrl:
          'https://radioshop.vn/product/3e-kleen-lau-chui-da-nang-bo-1-1.html',
      },

      // Bộ vi sinh lau chùi đa năng 3E Kleen (01 chai 500ml + 03 ống 5ml)
      {
        id: '3e-kleen-set-3',
        name: 'Bộ vi sinh lau chùi đa năng 3E Kleen (01 chai 500ml + 03 ống 5ml)',
        subtitle: '3E Kleen Set 3',
        description:
          '3E KLEEN lau chùi đa năng ứng dụng công nghệ sinh học từ Canada, với công thức vi sinh đặc biệt giúp làm sạch sâu các bề mặt, khử mùi và hạn chế vi khuẩn gây bệnh.\n\nSản phẩm chứa các thành phần tự nhiên dễ phân hủy sinh học, đạt tiêu chuẩn Châu Âu, an toàn cho sức khỏe và thân thiện với môi trường, phù hợp sử dụng hằng ngày.\nCông thức pH trung tính không gây kích ứng da, không ăn mòn bề mặt thiết bị và không chứa hợp chất hữu cơ bay hơi (VOCs) độc hại.',
        image: '/products/multipurpose/3e-kleen-set-3/1.jpg',
        images: [
          '/products/multipurpose/3e-kleen-set-3/1.jpg',
          '/products/multipurpose/3e-kleen-set-3/2.jpg',
          '/products/multipurpose/3e-kleen-set-3/3.jpg',
          '/products/multipurpose/3e-kleen-set-3/4.jpg',
          '/products/multipurpose/3e-kleen-set-3/5.jpg',
          '/products/multipurpose/3e-kleen-set-3/6.jpg',
        ],
        category: 'multipurpose',
        brand: '3E KLEEN',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '349,000 ₫',
        ingredientsText:
          'Lợi khuẩn, enzyme sinh học, chất hoạt động bề mặt xanh, màu và hương tự nhiên',
        usage: [
          'Bước 1: “Đánh thức” lợi khuẩn bằng cách pha 1 ống dung dịch vi sinh 5ml với 500ml nước sạch vào chai, sau đó lắc đều trước khi sử dụng.',
          'Bước 2: Xoay đầu vòi sang chế độ SPRAY (phun sương) hoặc STREAM (phun tia) tùy nhu cầu sử dụng.',
          'Bước 3: Xịt dung dịch trực tiếp lên bề mặt cần làm sạch như bề mặt như gương, mặt bàn, bồn vệ sinh, sàn nhà, nền gỗ, an toàn cho inox, sứ, nhựa melamine, đá, thủy tinh và các bề mặt kháng nước khác. Chờ khoảng 10–15 giây để dung dịch phát huy tác dụng, sau đó dùng khăn khô lau sạch, không cần lau lại bằng nước.',
        ],
        target: ['Gia đình, văn phòng…'],
        packaging:
          'Bộ: 1 chai dung tích 500ml + 1 hộp 3 ống dung dịch 5ml đậm đặc',
        banners: [
          '/products/multipurpose/9-2-2048x1151.jpg',
          '/products/multipurpose/2-1-1400x787.jpg',
          '/products/multipurpose/8-1400x787.jpg',
          '/products/multipurpose/3-1-1400x787.jpg',
          '/products/multipurpose/4-1400x787.jpg',
        ],
        expiry: '24 tháng kể từ ngày sản xuất',
        storage:
          'Bảo quản sản phẩm ở nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và nhiệt độ cao. Đậy kín nắp sau khi sử dụng và để xa tầm tay trẻ em để đảm bảo chất lượng sản phẩm.',
        purchaseUrl:
          'https://radioshop.vn/product/3e-kleen-lau-chui-da-nang-bo-1-3.html',
      },

      // Hộp vi sinh lau chùi đa năng 3E Kleen (1 ống 5ml)
      {
        id: '3e-kleen-refill-1',
        name: 'Hộp vi sinh lau chùi đa năng 3E Kleen (1 ống 5ml)',
        subtitle: '3E Kleen Refill 1',
        description:
          'Hộp vi sinh lau chùi đa năng 3E Kleen (1 ống 5ml) dùng để lau chùi các vết bám dầu mỡ trong khu vực bếp như mặt bếp, sàn bếp, bếp gas, bàn ghế, lò nướng… Công thức vi sinh đặc biệt giúp làm sạch sâu, khử mùi và hạn chế vi khuẩn.',
        image: '/products/multipurpose/3e-kleen-refill-1/1.jpg',
        images: [
          '/products/multipurpose/3e-kleen-refill-1/1.jpg',
          '/products/multipurpose/3e-kleen-refill-1/2.jpg',
          '/products/multipurpose/3e-kleen-refill-1/3.jpg',
          '/products/multipurpose/3e-kleen-refill-1/4.jpg',
          '/products/multipurpose/3e-kleen-refill-1/5.jpg',
        ],
        banners: [
          '/products/multipurpose/9-2-2048x1151.jpg',
          '/products/multipurpose/2-1-1400x787.jpg',
          '/products/multipurpose/8-1400x787.jpg',
          '/products/multipurpose/3-1-1400x787.jpg',
          '/products/multipurpose/4-1400x787.jpg',
        ],
        category: 'multipurpose',
        brand: '3E KLEEN',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '55,000 ₫',
        ingredientsText:
          'Lợi khuẩn, enzyme, chất hoạt động bề mặt, màu và hương tự nhiên',
        usage: [
          'Bước 1: “Đánh thức” lợi khuẩn bằng cách pha 1 ống 5ml với 500ml nước sạch, lắc đều trước khi sử dụng',
          'Bước 2: Xoay đầu vòi sang chế độ SPRAY/STREAM',
          'Bước 3: Xịt dung dịch trực tiếp vào khu vực cần lau, để 10-15s sau đó dùng khăn khô lau sạch. Không cần lau lại bằng nước.',
        ],
        target: ['Tất cả'],
        packaging: '1 ống dung dịch 5ml đậm đặc',
        expiry: '2 năm kể từ ngày sản xuất',
        storage: 'Bảo quản ở điều kiện thông thường',
        purchaseUrl:
          'https://radioshop.vn/product/3e-kleen-lau-chui-da-nang-ong-5ml.html',
      },

      // Hộp vi sinh lau chùi đa năng 3E Kleen (03 ống 5ml)
      {
        id: '3e-kleen-refill-3',
        name: 'Hộp vi sinh lau chùi đa năng 3E Kleen (03 ống 5ml)',
        subtitle: '3E Kleen Refill 3',
        description:
          '3E KLEEN lau chùi đa năng ứng dụng công nghệ sinh học từ Canada, với công thức vi sinh đặc biệt giúp làm sạch sâu các bề mặt, khử mùi và hạn chế vi khuẩn gây bệnh.\n\nSản phẩm chứa các thành phần tự nhiên dễ phân hủy sinh học, đạt tiêu chuẩn Châu Âu, an toàn cho sức khỏe và thân thiện với môi trường, phù hợp sử dụng hằng ngày.\nCông thức pH trung tính không gây kích ứng da, không ăn mòn bề mặt thiết bị và không chứa hợp chất hữu cơ bay hơi (VOCs) độc hại.',
        image: '/products/multipurpose/3e-kleen-refill-3/1.jpg',
        images: [
          '/products/multipurpose/3e-kleen-refill-3/1.jpg',
          '/products/multipurpose/3e-kleen-refill-3/2.jpg',
          '/products/multipurpose/3e-kleen-refill-3/3.jpg',
          '/products/multipurpose/3e-kleen-refill-3/4.jpg',
          '/products/multipurpose/3e-kleen-refill-3/5.jpg',
          '/products/multipurpose/3e-kleen-refill-3/6.jpg',
        ],
        category: 'multipurpose',
        brand: '3E KLEEN',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '139,000 ₫',
        ingredientsText:
          'Lợi khuẩn, enzyme sinh học, chất hoạt động bề mặt xanh, màu và hương tự nhiên',
        usage: [
          'Bước 1: “Đánh thức” lợi khuẩn bằng cách pha 1 ống 5ml với 500ml nước sạch, lắc đều trước khi sử dụng',
          'Bước 2: Xoay đầu vòi sang chế độ SPRAY/STREAM',
          'Bước 3: Xịt dung dịch trực tiếp vào khu vực cần lau, để 10-15s sau đó dùng khăn khô lau sạch. Không cần lau lại bằng nước.',
        ],
        target: ['Gia đình, văn phòng…'],
        packaging: 'Hộp 3 ống dung dịch 5ml đậm đặc',
        banners: [
          '/products/multipurpose/9-2-2048x1151.jpg',
          '/products/multipurpose/2-1-1400x787.jpg',
          '/products/multipurpose/8-1400x787.jpg',
          '/products/multipurpose/3-1-1400x787.jpg',
          '/products/multipurpose/4-1400x787.jpg',
        ],
        expiry: '24 tháng kể từ ngày sản xuất',
        storage:
          'Bảo quản sản phẩm ở nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và nhiệt độ cao. Đậy kín nắp sau khi sử dụng và để xa tầm tay trẻ em để đảm bảo chất lượng sản phẩm.',
        purchaseUrl:
          'https://radioshop.vn/product/3e-kleen-lau-chui-da-nang-hop-3-ong.html',
      },

      // Hộp vi sinh lau chùi đa năng 3E Kleen (10 ống 5ml)
      {
        id: '3e-kleen-refill-10',
        name: 'Hộp vi sinh lau chùi đa năng 3E Kleen (10 ống 5ml)',
        subtitle: '3E Kleen Refill 10',
        description:
          '3E KLEEN lau chùi đa năng ứng dụng công nghệ sinh học từ Canada, với công thức vi sinh đặc biệt giúp làm sạch sâu các bề mặt, khử mùi và hạn chế vi khuẩn gây bệnh.\n\nSản phẩm chứa các thành phần tự nhiên dễ phân hủy sinh học, đạt tiêu chuẩn Châu Âu, an toàn cho sức khỏe và thân thiện với môi trường, phù hợp sử dụng hằng ngày.\nCông thức pH trung tính không gây kích ứng da, không ăn mòn bề mặt thiết bị và không chứa hợp chất hữu cơ bay hơi (VOCs) độc hại.',
        image: '/products/multipurpose/3e-kleen-refill-10/1.jpg',
        images: [
          '/products/multipurpose/3e-kleen-refill-10/1.jpg',
          '/products/multipurpose/3e-kleen-refill-10/2.jpg',
          '/products/multipurpose/3e-kleen-refill-10/3.jpg',
          '/products/multipurpose/3e-kleen-refill-10/4.jpg',
          '/products/multipurpose/3e-kleen-refill-10/5.jpg',
          '/products/multipurpose/3e-kleen-refill-10/6.jpg',
        ],
        banners: [
          '/products/multipurpose/9-2-2048x1151.jpg',
          '/products/multipurpose/2-1-1400x787.jpg',
          '/products/multipurpose/8-1400x787.jpg',
          '/products/multipurpose/3-1-1400x787.jpg',
          '/products/multipurpose/4-1400x787.jpg',
        ],
        category: 'multipurpose',
        brand: '3E KLEEN',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '399,000 ₫',
        ingredientsText:
          'Lợi khuẩn, enzyme sinh học, chất hoạt động bề mặt xanh, màu và hương tự nhiên',
        usage: [
          'Bước 1: “Đánh thức” lợi khuẩn bằng cách pha 1 ống dung dịch vi sinh 5ml với 500ml nước sạch vào chai, sau đó lắc đều trước khi sử dụng.',
          'Bước 2: Xoay đầu vòi sang chế độ SPRAY (phun sương) hoặc STREAM (phun tia) tùy nhu cầu sử dụng.',
          'Bước 3: Xịt dung dịch trực tiếp lên bề mặt cần làm sạch như bề mặt như gương, mặt bàn, bồn vệ sinh, sàn nhà, nền gỗ, an toàn cho inox, sứ, nhựa melamine, đá, thủy tinh và các bề mặt kháng nước khác. Chờ khoảng 10–15 giây để dung dịch phát huy tác dụng, sau đó dùng khăn khô lau sạch, không cần lau lại bằng nước.',
        ],
        target: ['Tất cả'],
        packaging: '10 ống dung dịch 5ml đậm đặc',
        expiry: '24 tháng kể từ ngày sản xuất',
        storage:
          'Bảo quản sản phẩm ở nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và nhiệt độ cao. Đậy kín nắp sau khi sử dụng và để xa tầm tay trẻ em để đảm bảo chất lượng sản phẩm.',
        purchaseUrl:
          'https://radioshop.vn/product/3e-kleen-lau-chui-da-nang-hop-10-ong.html',
      },
    ],
  },
  {
    id: 'pet',
    name: 'SẢN PHẨM KHỬ MÙI THÚ CƯNG',
    products: [
      // Bộ vi sinh khử mùi chuồng trại thú cưng PET KLEEN (1 chai 500ml + 1 ống 5ml)
      {
        id: 'pet-kleen-set-1',
        name: 'Bộ vi sinh khử mùi chuồng trại thú cưng PET KLEEN (1 chai 500ml + 1 ống 5ml)',
        subtitle: 'Pet Kleen Set 1',
        description:
          'PET KLEEN là giải pháp khử mùi chuồng trại và khu vực nuôi thú cưng ứng dụng công nghệ sinh học từ Canada. Công thức vi sinh đặc biệt giúp triệt tiêu mùi tận gốc, xử lý hiệu quả mùi từ rác hữu cơ, nước tiểu, phân và ngăn chặn sự phát triển của vi khuẩn gây mùi, ẩm mốc.\n\nCông nghệ khử mùi tận gốc: Các lợi khuẩn thấm sâu vào bề mặt, phân hủy các hợp chất gây mùi thay vì chỉ che lấp bằng hương thơm.\nAn toàn tuyệt đối: Sản phẩm 100% tự nhiên, không gây kích ứng da và mắt, an toàn cho cả thú cưng và người nuôi.\nThân thiện môi trường: Thành phần dễ phân hủy sinh học, đạt tiêu chuẩn an toàn quốc tế.\nHiệu quả lâu dài: Duy trì môi trường sống sạch sẽ, thoáng mát và hạn chế các mầm bệnh từ vi khuẩn, nấm mốc.',
        image: '/products/pet/pet-kleen-set-1/1 (1).jpg',
        images: [
          '/products/pet/pet-kleen-set-1/1 (1).jpg',
          '/products/pet/pet-kleen-set-1/2.jpg',
          '/products/pet/pet-kleen-set-1/3.jpg',
          '/products/pet/pet-kleen-set-1/4.jpg',
          '/products/pet/pet-kleen-set-1/5.jpg',
          '/products/pet/pet-kleen-set-1/6.jpg',
        ],
        category: 'pet',
        brand: 'pet KLEEN',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '139,000 ₫',
        ingredientsText:
          'Lợi khuẩn, enzyme, chất hoạt động bề mặt, màu và hương tự nhiên',
        usage: [
          'Bước 1: “Đánh thức” các lợi khuẩn bằng cách pha 1 ống 5ml với 500ml nước sạch, lắc đều trước khi sử dụng',
          'Bước 2: Xoay đầu vòi sang chế độ SPRAY/STREAM',
          'Bước 3: Xịt trực tiếp vào khu vực cần khử mùi, để 10-15s cho các lợi khuẩn thấm sâu và tiêu diệt mùi tận gốc.',
        ],
        target: ['Các hộ gia đình nuôi thú cưng, các trại nuôi…'],
        packaging: 'Bộ: 1 chai dung tích 500ml + 1 ống dung dịch 5ml đậm đặc',
        banners: [
          '/products/pet/KHU-MUI.jpg',
          '/products/pet/2.jpg',
          '/products/pet/3.jpg',
          '/products/pet/4.jpg',
          '/products/pet/5.jpg',
        ],
        expiry: '24 tháng kể từ ngày sản xuất',
        storage:
          'Bảo quản sản phẩm ở nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và nhiệt độ cao. Đậy kín nắp sau khi sử dụng và để xa tầm tay trẻ em để đảm bảo chất lượng sản phẩm.',
        purchaseUrl:
          'https://radioshop.vn/product/pet-kleen-khu-mui-chuong-trai-thu-cung-bo-1-1.html',
      },

      // Bộ vi sinh khử mùi chuồng trại thú cưng PET KLEEN (1 chai 500ml + 3 ống 5ml)
      {
        id: 'pet-kleen-set-3',
        name: 'Bộ vi sinh khử mùi chuồng trại thú cưng PET KLEEN (1 chai 500ml + 3 ống 5ml)',
        subtitle: 'Pet Kleen Set 3',
        description:
          'PET KLEEN là giải pháp khử mùi chuồng trại và khu vực nuôi thú cưng ứng dụng công nghệ sinh học từ Canada. Công thức vi sinh đặc biệt giúp triệt tiêu mùi tận gốc, xử lý hiệu quả mùi từ rác hữu cơ, nước tiểu, phân và ngăn chặn sự phát triển của vi khuẩn gây mùi, ẩm mốc.\n\nCông nghệ khử mùi tận gốc: Các lợi khuẩn thấm sâu vào bề mặt, phân hủy các hợp chất gây mùi thay vì chỉ che lấp bằng hương thơm.\nAn toàn tuyệt đối: Sản phẩm 100% tự nhiên, không gây kích ứng da và mắt, an toàn cho cả thú cưng và người nuôi.\nThân thiện môi trường: Thành phần dễ phân hủy sinh học, đạt tiêu chuẩn an toàn quốc tế.\nHiệu quả lâu dài: Duy trì môi trường sống sạch sẽ, thoáng mát và hạn chế các mầm bệnh từ vi khuẩn, nấm mốc.',
        image: '/products/pet/pet-kleen-set-3/1.jpg',
        images: [
          '/products/pet/pet-kleen-set-3/1.jpg',
          '/products/pet/pet-kleen-set-3/2.jpg',
          '/products/pet/pet-kleen-set-3/3.jpg',
          '/products/pet/pet-kleen-set-3/4.jpg',
          '/products/pet/pet-kleen-set-3/5.jpg',
          '/products/pet/pet-kleen-set-3/6.jpg',
        ],
        category: 'pet',
        brand: 'pet KLEEN',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '359,000 ₫',
        ingredientsText:
          'Lợi khuẩn, enzyme, chất hoạt động bề mặt xanh không ion, chất hoạt động bề mặt lưỡng tính, màu và hương tự nhiên',
        usage: [
          'Bước 1: “Đánh thức” lợi khuẩn bằng cách pha 1 ống 5ml với 500ml nước sạch, lắc đều trước khi sử dụng',
          'Bước 2: Xoay đầu vòi sang chế độ SPRAY/STREAM',
          'Bước 3: Xịt dung dịch trực tiếp lên bề mặt cần vệ sinh và khử mùi, để 10-15 giây sau đó dùng khăn khô lau lại (nếu cần). Không cần lau lại bằng nước.',
        ],
        target: [
          'Chuồng trại thú cưng, cơ sở thú y, bệnh viện thú y, gia đình,…',
        ],
        packaging: 'Bộ: 1 chai dung tích 500ml + 3 ống dung dịch 5ml đậm đặc',
        banners: [
          '/products/pet/1-2.jpg',
          '/products/pet/2-1-2.jpg',
          '/products/pet/3-1-2.jpg',
          '/products/pet/4-2.jpg',
          '/products/pet/5-2.jpg',
        ],
        expiry: '24 tháng kể từ ngày sản xuất',
        storage:
          'Bảo quản sản phẩm ở nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và nhiệt độ cao. Đậy kín nắp sau khi sử dụng và để xa tầm tay trẻ em để đảm bảo chất lượng sản phẩm.',
        purchaseUrl:
          'https://radioshop.vn/product/pet-kleen-khu-mui-chuong-trai-thu-cung-bo-1-3.html',
      },

      // Hộp vi sinh khử mùi chuồng trại thú cưng Pet Kleen (1 ống 5ml)
      // {
      //   id: 'pet-kleen-refill-1',
      //   name: 'Hộp vi sinh khử mùi chuồng trại thú cưng Pet Kleen (1 ống 5ml)',
      //   subtitle: 'Pet Kleen Refill 1',
      //   description:
      //     'Hộp vi sinh khử mùi chuồng trại thú cưng Pet Kleen (1 ống 5ml) với công thức vi sinh đặc biệt bẻ gãy các liên kết mùi giúp khử mùi triệt để các vết mùi do thú cưng để lại. Thành phần lợi khuẩn và enzyme hữu cơ tự nhiên từ Canada an toàn tuyệt đối cho người và vật nuôi.',
      //   image: '/products/pet/pet-kleen-refill-1/1.jpg',
      //   images: [
      //     '/products/pet/pet-kleen-refill-1/1.jpg',
      //     '/products/pet/pet-kleen-refill-1/2.jpg',
      //     '/products/pet/pet-kleen-refill-1/3.jpg',
      //     '/products/pet/pet-kleen-refill-1/4.jpg',
      //     '/products/pet/pet-kleen-refill-1/5.jpg',
      //   ],
      //   category: 'pet',
      //   brand: 'pet KLEEN',
      //   origin:
      //     'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
      //   price: '59,000 ₫',
      //   ingredientsText:
      //     'Lợi khuẩn, enzyme, chất hoạt động bề mặt xanh không ion, chất hoạt động bề mặt lưỡng tính, màu và hương tự nhiên',
      //   usage: [
      //     'Bước 1: “Đánh thức” lợi khuẩn bằng cách pha 1 ống 5ml với 500ml nước sạch, lắc đều trước khi sử dụng',
      //     'Bước 2: Xoay đầu vòi sang chế độ SPRAY/STREAM',
      //     'Bước 3: Xịt dung dịch trực tiếp lên bề mặt cần vệ sinh và khử mùi, để 10-15 giây sau đó dùng khăn khô lau lại (nếu cần). Không cần lau lại bằng nước.',
      //   ],
      //   target: [
      //     'Chuồng trại thú cưng, cơ sở thú y, bệnh viện thú y, gia đình,…',
      //   ],
      //   packaging: 'Hộp chứa 1 ống dung dịch đậm đặc 5ml',

      //   expiry: '24 tháng kể từ ngày sản xuất',
      //   storage:
      //     'Bảo quản sản phẩm ở nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và nhiệt độ cao. Đậy kín nắp sau khi sử dụng và để xa tầm tay trẻ em để đảm bảo chất lượng sản phẩm.',
      //   purchaseUrl:
      //     'https://radioshop.vn/product/pet-kleen-khu-mui-chuong-trai-thu-cung-hop-3-ong.html',
      // },

      // Hộp vi sinh khử mùi chuồng trại thú cưng Pet Kleen (3 ống 5ml)
      {
        id: 'pet-kleen-refill-3',
        name: 'Hộp vi sinh khử mùi chuồng trại thú cưng Pet Kleen (3 ống 5ml)',
        subtitle: 'Pet Kleen Refill 3',
        description:
          'PET KLEEN là giải pháp khử mùi chuồng trại và khu vực nuôi thú cưng ứng dụng công nghệ sinh học từ Canada. Công thức vi sinh đặc biệt giúp triệt tiêu mùi tận gốc, xử lý hiệu quả mùi từ rác hữu cơ, nước tiểu, phân và ngăn chặn sự phát triển của vi khuẩn gây mùi, ẩm mốc.\n\nCông nghệ khử mùi tận gốc: Các lợi khuẩn thấm sâu vào bề mặt, phân hủy các hợp chất gây mùi thay vì chỉ che lấp bằng hương thơm.\nAn toàn tuyệt đối: Sản phẩm 100% tự nhiên, không gây kích ứng da và mắt, an toàn cho cả thú cưng và người nuôi.\nThân thiện môi trường: Thành phần dễ phân hủy sinh học, đạt tiêu chuẩn an toàn quốc tế.\nHiệu quả lâu dài: Duy trì môi trường sống sạch sẽ, thoáng mát và hạn chế các mầm bệnh từ vi khuẩn, nấm mốc.',
        image: '/products/pet/pet-kleen-refill-3/1.jpg',
        images: [
          '/products/pet/pet-kleen-refill-3/1.jpg',
          '/products/pet/pet-kleen-refill-3/2.jpg',
          '/products/pet/pet-kleen-refill-3/3.jpg',
          '/products/pet/pet-kleen-refill-3/4.jpg',
          '/products/pet/pet-kleen-refill-3/5.jpg',
          '/products/pet/pet-kleen-refill-3/6.jpg',
        ],
        category: 'pet',
        brand: 'pet KLEEN',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '149,000 ₫',
        ingredientsText:
          'Lợi khuẩn, enzyme, chất hoạt động bề mặt xanh không ion, chất hoạt động bề mặt lưỡng tính, màu và hương tự nhiên',
        usage: [
          'Bước 1: “Đánh thức” lợi khuẩn bằng cách pha 1 ống 5ml với 500ml nước sạch, lắc đều trước khi sử dụng',
          'Bước 2: Xoay đầu vòi sang chế độ SPRAY/STREAM',
          'Bước 3: Xịt dung dịch trực tiếp lên bề mặt cần vệ sinh và khử mùi, để 10-15 giây sau đó dùng khăn khô lau lại (nếu cần). Không cần lau lại bằng nước.',
        ],
        target: [
          'Chuồng trại thú cưng, cơ sở thú y, bệnh viện thú y, gia đình,…',
        ],
        packaging: 'Hộp chứa 3 ống dung dịch đậm đặc 5ml',
        banners: [
          '/products/pet/1-2.jpg',
          '/products/pet/2-1-2.jpg',
          '/products/pet/3-1-2.jpg',
          '/products/pet/4-2.jpg',
          '/products/pet/5-2.jpg',
        ],
        expiry: '24 tháng kể từ ngày sản xuất',
        storage:
          'Bảo quản sản phẩm ở nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và nhiệt độ cao. Đậy kín nắp sau khi sử dụng và để xa tầm tay trẻ em để đảm bảo chất lượng sản phẩm.',
        purchaseUrl:
          'https://radioshop.vn/product/pet-kleen-khu-mui-chuong-trai-thu-cung-hop-3-ong.html',
      },
    ],
  },
  {
    id: 'specialty',
    name: 'SẢN PHẨM CHUYÊN DỤNG',
    products: [
      // Khử mùi nước tiểu sinh học Smell Gone 100ml
      {
        id: 'smell-gone-100',
        name: 'Khử mùi nước tiểu sinh học Smell Gone 100ml',
        subtitle: 'Smell Gone 100ml',
        description:
          'Sản phẩm khử mùi Smell Gone được sản xuất với nguyên liệu nhập khẩu 100% từ Canada. Thành phần bao gồm các lợi khuẩn và chất hoạt động bề mặt xanh, hương thơm tự nhiên, giúp triệt tiêu mùi tận gốc thay vì chỉ che lấp bằng hương liệu.\n\nCơ chế triệt tiêu mùi sinh học: Các lợi khuẩn thấm sâu vào bề mặt và tiêu diệt các vi khuẩn gây mùi, giúp khử hiệu quả mùi nước tiểu, mùi nôn ói, mùi rác thải và mùi ẩm mốc.\nAn toàn và lành tính: Sản phẩm không chứa hóa chất độc hại, an toàn khi tiếp xúc và thân thiện với môi trường.\nHiệu quả đa năng: Có thể xịt trực tiếp lên nhiều bề mặt như bồn tiểu, bồn cầu, mặt sàn, khu vực vệ sinh hoặc nơi phát sinh mùi khó chịu.\nLưu lại hương thơm dễ chịu: Hương gốc tự nhiên mang đến cảm giác thoáng mát, sạch sẽ sau khi sử dụng.',
        image: '/products/specialty/smell-gone-100/1.jpg',
        images: [
          '/products/specialty/smell-gone-100/1.jpg',
          '/products/specialty/smell-gone-100/2.jpg',
          '/products/specialty/smell-gone-100/3.jpg',
          '/products/specialty/smell-gone-100/4.jpg',
          '/products/specialty/smell-gone-100/5.jpg',
          '/products/specialty/smell-gone-100/6.jpg',
        ],
        category: 'specialty',
        brand: 'SMELL GONE',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '89,000 ₫',
        ingredientsText:
          'Lợi khuẩn, chất hoạt động bề mặt xanh, hương gốc tự nhiên',
        usage: [
          'Xịt trực tiếp lên các bề mặt: bồn tiểu, bồn cầu, mặt sàn, khu vực vệ sinh, nơi có mùi nôn ói, ẩm mốc, …',
        ],
        target: ['Gia đình, nhà hàng, khách sạn, quán ăn, trường học,…'],
        packaging: 'Chai 100ml',
        expiry: '24 tháng kể từ ngày sản xuất',
        storage:
          'Bảo quản sản phẩm ở nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và nhiệt độ cao. Đậy kín nắp sau khi sử dụng và để xa tầm tay trẻ em để đảm bảo chất lượng sản phẩm.',
        purchaseUrl: 'https://radioshop.vn/product/smell100.html',
      },

      // Khử mùi nước tiểu sinh học Smell Gone 200ml
      {
        id: 'smell-gone-200',
        name: 'Khử mùi nước tiểu sinh học Smell Gone 200ml',
        subtitle: 'Smell Gone 200ml',
        description:
          'Sản phẩm khử mùi Smell Gone được sản xuất với nguyên liệu nhập khẩu 100% từ Canada. Thành phần bao gồm các lợi khuẩn và chất hoạt động bề mặt xanh, hương thơm tự nhiên, giúp triệt tiêu mùi tận gốc thay vì chỉ che lấp bằng hương liệu.\n\nCơ chế triệt tiêu mùi sinh học: Các lợi khuẩn thấm sâu vào bề mặt và tiêu diệt các vi khuẩn gây mùi, giúp khử hiệu quả mùi nước tiểu, mùi nôn ói, mùi rác thải và mùi ẩm mốc.\nAn toàn và lành tính: Sản phẩm không chứa hóa chất độc hại, an toàn khi tiếp xúc và thân thiện với môi trường.\nHiệu quả đa năng: Có thể xịt trực tiếp lên nhiều bề mặt như bồn tiểu, bồn cầu, mặt sàn, khu vực vệ sinh hoặc nơi phát sinh mùi khó chịu.\nLưu lại hương thơm dễ chịu: Hương gốc tự nhiên mang đến cảm giác thoáng mát, sạch sẽ sau khi sử dụng.',
        image: '/products/specialty/smell-gone-200/1.jpg',
        images: [
          '/products/specialty/smell-gone-200/1.jpg',
          '/products/specialty/smell-gone-200/2.jpg',
          '/products/specialty/smell-gone-200/3.jpg',
          '/products/specialty/smell-gone-200/4.jpg',
          '/products/specialty/smell-gone-200/5.jpg',
          '/products/specialty/smell-gone-200/6.jpg',
        ],
        category: 'specialty',
        brand: 'SMELL GONE',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '159,000 ₫',
        ingredientsText:
          'Lợi khuẩn, chất hoạt động bề mặt xanh, hương gốc tự nhiên',
        usage: [
          'Xịt trực tiếp lên các bề mặt: bồn tiểu, bồn cầu, mặt sàn, khu vực vệ sinh, nơi có mùi nôn ói, ẩm mốc, …',
        ],
        target: ['Gia đình, nhà hàng, khách sạn, quán ăn, trường học,…'],
        packaging: 'Chai 200ml',
        expiry: '24 tháng kể từ ngày sản xuất',
        storage:
          'Bảo quản sản phẩm ở nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và nhiệt độ cao. Đậy kín nắp sau khi sử dụng và để xa tầm tay trẻ em để đảm bảo chất lượng sản phẩm.',
        purchaseUrl: 'https://radioshop.vn/product/smell200.html',
      },

      // Sạch cặn canxi và sáng inox Bio KANATA
      {
        id: 'bio-kanata',
        name: 'Sạch cặn canxi và sáng inox Bio KANATA',
        subtitle: 'Bio Kanata',
        description:
          'Bio KANATA là giải pháp làm sạch cặn canxi và đánh bóng inox ứng dụng công nghệ sinh học tiên tiến. Sản phẩm kết hợp các chất hoạt động bề mặt dễ phân hủy sinh học cùng chiết xuất từ quá trình lên men lactic, giúp loại bỏ các vết bẩn cứng đầu mà không cần tác động mài mòn mạnh.\n\nCông nghệ làm sạch sinh học: Chiết xuất lên men tự nhiên tác động sâu, loại bỏ hiệu quả các ion canxi và magie – tác nhân chính gây đóng cặn khoáng trên vòi sen, vòi nước, kính và các bề mặt inox.\nLàm sáng bóng bề mặt: Không chỉ làm sạch vết bẩn, Bio KANATA còn giúp bề mặt inox sáng bóng trở lại như mới, bảo vệ độ bền của thiết bị.\nAn toàn cho người dùng: Không chứa các hóa chất có tính axit hoặc kiềm mạnh, không gây kích ứng da và an toàn cho sức khỏe khi sử dụng thường xuyên.\nThân thiện với môi trường: Thành phần 100% sinh học, dễ phân hủy và không gây hại cho hệ sinh thái.',
        image: '/products/specialty/bio-kanata/1.jpg',
        images: [
          '/products/specialty/bio-kanata/1.jpg',
          '/products/specialty/bio-kanata/2.jpg',
          '/products/specialty/bio-kanata/3.jpg',
          '/products/specialty/bio-kanata/4.jpg',
          '/products/specialty/bio-kanata/5.jpg',
          '/products/specialty/bio-kanata/6.jpg',
        ],
        banners: ['/products/specialty/bio-kanata/6.png'],
        category: 'specialty',
        brand: 'Bio KANATA',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        ingredientsText:
          'Axit lactic, chất hoạt động bề mặt xanh, màu và hương gốc tự nhiên.',
        usage: [
          'Bước 1: Xịt dung dịch lên bề mặt cần làm sạch.',
          'Bước 2: Để khoảng 1–2 phút cho dung dịch thấm và làm mềm các vết đóng cặn.',
          'Bước 3: Dùng bàn chải mềm hoặc khăn lau sạch vết bẩn, sau đó rửa lại bằng nước sạch.',
        ],
        target: ['Tất cả.'],
        packaging: 'Bình xịt 500ml có vòi trong đó chứa 45ml tinh chất.',
        expiry:
          '3 năm kể từ ngày sản xuất đối với tinh chất và 6 tháng sau khi đã pha loãng với nước',
        storage:
          'Bảo quản sản phẩm ở nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và nhiệt độ cao. Đậy kín nắp sau khi sử dụng và để xa tầm tay trẻ em để đảm bảo chất lượng sản phẩm.',
        purchaseUrl: 'https://radioshop.vn/product/bio-katana.html',
      },

      // Chai Xịt Khử Mùi Cool (100ml)
      {
        id: 'cool-deodorizer-100',
        name: 'Chai Xịt Khử Mùi Cool (100ml)',
        subtitle: 'Cool Deodorizer 100ml',
        description:
          'Cool Deodorizer là sản phẩm khử mùi hôi đa năng (giày, mũ bảo hiểm, nhà vệ sinh, mùi rác…) ứng dụng công nghệ sinh học từ Canada. Sản phẩm giúp triệt tiêu mùi hôi tận gốc, diệt khuẩn và mang lại cảm giác thoáng mát, dễ chịu ngay sau khi xịt.\n\nCông nghệ khử mùi sinh học: Chứa các lợi khuẩn thấm sâu vào bề mặt, tiêu diệt vi khuẩn gây mùi thay vì chỉ dùng hương thơm để che lấp.\nHiệu quả tức thì và lâu dài: Giúp loại bỏ nhanh chóng các mùi hôi cứng đầu trong giày, mũ bảo hiểm hoặc các không gian nhỏ, ngăn chặn mùi hôi quay trở lại.\nAn toàn và dịu nhẹ: Sản phẩm an toàn cho sức khỏe, không gây kích ứng da, sử dụng nguyên liệu thân thiện với môi trường.\nHương thơm tươi mát: Mang lại mùi hương dễ chịu, sạch sẽ cho đồ dùng và không gian sống.',
        image: '/products/specialty/cool-deodorizer-100/1.jpg',
        images: [
          '/products/specialty/cool-deodorizer-100/1.jpg',
          '/products/specialty/cool-deodorizer-100/2.jpg',
          '/products/specialty/cool-deodorizer-100/3.jpg',
          '/products/specialty/cool-deodorizer-100/4.jpg',
          '/products/specialty/cool-deodorizer-100/5.jpg',
          '/products/specialty/cool-deodorizer-100/6.jpg',
        ],
        banners: [
          '/products/specialty/smell-gone-banner/banner-1.jpg',
          '/products/specialty/smell-gone-banner/banner-2.jpg',
          '/products/specialty/smell-gone-banner/banner-3.jpg',
          '/products/specialty/smell-gone-banner/banner-4.jpg',
          '/products/specialty/smell-gone-banner/banner-5.jpg',
        ],
        category: 'specialty',
        brand: 'Cool',
        origin: 'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu từ Canada',
        price: '109,000 ₫',
        ingredientsText:
          'Hỗn hợp tinh dầu thực vật (tinh dầu quế, thông, khuynh diệp, chanh, bạc hà) và nước',
        usage: [
          'Xịt trực tiếp vào không gian, khu vực, phòng có mùi khó chịu hoặc trực tiếp vào giày, mũ bảo hiểm… và chờ 10-15s để phát huy tác dụng.',
        ],
        target: ['Tất cả'],
        packaging: 'Dung tích 100ml / chai',
        expiry: '24 tháng kể từ ngày sản xuất',
        storage:
          'Bảo quản sản phẩm ở nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và nhiệt độ cao. Đậy kín nắp sau khi sử dụng và để xa tầm tay trẻ em để đảm bảo chất lượng sản phẩm.',
        purchaseUrl:
          'https://radioshop.vn/product/cool-100ml-khu-mui-khong-gian.html',
      },

      // Chai Xịt Khử Mùi Cool (200ml)
      {
        id: 'cool-deodorizer-200',
        name: 'Chai Xịt Khử Mùi Cool (200ml)',
        subtitle: 'Cool Deodorizer 200ml',
        description:
          'Cool Deodorizer là sản phẩm khử mùi hôi đa năng (giày, mũ bảo hiểm, nhà vệ sinh, mùi rác…) ứng dụng công nghệ sinh học từ Canada. Sản phẩm giúp triệt tiêu mùi hôi tận gốc, diệt khuẩn và mang lại cảm giác thoáng mát, dễ chịu ngay sau khi xịt.\n\nCông nghệ khử mùi sinh học: Chứa các lợi khuẩn thấm sâu vào bề mặt, tiêu diệt vi khuẩn gây mùi thay vì chỉ dùng hương thơm để che lấp.\nHiệu quả tức thì và lâu dài: Giúp loại bỏ nhanh chóng các mùi hôi cứng đầu trong giày, mũ bảo hiểm hoặc các không gian nhỏ, ngăn chặn mùi hôi quay trở lại.\nAn toàn và dịu nhẹ: Sản phẩm an toàn cho sức khỏe, không gây kích ứng da, sử dụng nguyên liệu thân thiện với môi trường.\nHương thơm tươi mát: Mang lại mùi hương dễ chịu, sạch sẽ cho đồ dùng và không gian sống.',
        image: '/products/specialty/cool-deodorizer-200/1.jpg',
        images: [
          '/products/specialty/cool-deodorizer-200/1.jpg',
          '/products/specialty/cool-deodorizer-200/2.jpg',
          '/products/specialty/cool-deodorizer-200/3.jpg',
          '/products/specialty/cool-deodorizer-200/4.jpg',
          '/products/specialty/cool-deodorizer-200/5.jpg',
          '/products/specialty/cool-deodorizer-200/6.jpg',
        ],
        banners: [
          '/products/specialty/smell-gone-banner/banner-1.jpg',
          '/products/specialty/smell-gone-banner/banner-2.jpg',
          '/products/specialty/smell-gone-banner/banner-3.jpg',
          '/products/specialty/smell-gone-banner/banner-4.jpg',
          '/products/specialty/smell-gone-banner/banner-5.jpg',
        ],
        category: 'specialty',
        brand: 'Cool',
        origin: 'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu từ Canada',
        price: '189,000 ₫',
        ingredientsText:
          'Hỗn hợp tinh dầu thực vật (tinh dầu quế, thông, khuynh diệp, chanh, bạc hà) và nước',
        usage: [
          'Xịt trực tiếp vào không gian, khu vực, phòng có mùi khó chịu hoặc trực tiếp vào giày, mũ bảo hiểm… và chờ 10-15s để phát huy tác dụng.',
        ],
        target: ['Tất cả'],
        packaging: 'Dung tích 200ml / chai',
        expiry: '24 tháng kể từ ngày sản xuất',
        storage:
          'Bảo quản sản phẩm ở nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và nhiệt độ cao. Đậy kín nắp sau khi sử dụng và để xa tầm tay trẻ em để đảm bảo chất lượng sản phẩm.',
        purchaseUrl:
          'https://radioshop.vn/product/cool-200ml-khu-mui-khong-gian.html',
      },
    ],
  },
];
