import images from './images';

const wines = [
  {
    title: 'Táo mèo',
    price: '20.000Vnđ',
    tags: 'Lít | Bottle',
  },
  {
    title: 'Chuối hột',
    price: '15.000Vnđ',
    tags: 'Lít | Bottle',
  },
  {
    title: 'Đinh Ba',
    price: '30.000Vnđ',
    tags: 'Lít | Bottle',
  },
  {
    title: 'Rắn hổ mang',
    price: '45.000Vnđ',
    tags: 'Lít | Bottle',
  },
  {
    title: 'Nhân sâm',
    price: '100.000Vnđ',
    tags: 'Lít | Bottle',
  },
];

const beer = [
  {
    title: 'Bia Sài Gòn',
    price: '20.000Vnđ',
    tags: 'Chai | Lon | 300 ml',
  },
  {
    title: "Bia Hà Nội",
    price: '18.000Vnđ',
    tags: 'Chai | Lon | 300 ml',
  },
  {
    title: 'Bia Huda',
    price: '15.000Vnđ',
    tags: 'Chai | Lon | 300 ml',
  },
  {
    title: 'Bia Huế',
    price: '15.000Vnđ',
    tags: 'Chai | Lon | 300 ml',
  },
  {
    title: 'Bia 333',
    price: '15.000Vnđ',
    tags: 'Chai | Lon | 300 ml',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Nhà hàng chất lượng nhất',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Nhà hàng uy tín nhất',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'Nhà hàng vệ sinh nhất',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'nhà hàng phục vụ tốt nhất',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

const chinhanhs = [
  {
    stt: 1,
    diachi:'30 Nguyễn Bỉnh Khiêm, Đa Kao, Quận 1'
  }, 
  {
    stt: 2,
    diachi:'45 Trần Não, Quận 2'
  }, 
  {
    stt: 3,
    diachi:'42 Lý Thường Kiệt, Quận 3'
  },
  {
    stt: 12,
    diachi:'56 Võ Thi Sáu, Quận 4'
  },
  {
    stt: 4,
    diachi:'69 Ngô Gia Tự, Quận 5'
  }, 
  {
    stt: 5,
    diachi:'96 Mai Thuc Bach, Quận 6'
  }, 
  {
    stt: 6,
    diachi:'76 Phú Mỹ Hưng, Quận 7'
  }, 
  {
    stt: 7,
    diachi:'86 Hai Bà Trưng, Quận 8'
  }, 
  {
    stt: 8,
    diachi:'99 Phạm Ngũ Lão, Quận 9'
  }, 
  {
    stt: 9,
    diachi:'101 Mạc Đỉnh Chi, Quận 10'
  }, 
  {
    stt: 10,
    diachi:'111 Nguyễn Trãi, Quận 11'
  }, 
  {
    stt: 11,
    diachi:'178 Tô Kí, Quận 12'
  }
]

const loaitiecs = [
  {
    stt: 1,
    loaitiec: 'Tiệc Cưới'
  },
  {
    stt: 2,
    loaitiec: 'Tiệc Gia Tiên'
  },
  {
    stt: 3,
    loaitiec: 'Tiệc Sinh Nhật'
  },
  {
    stt: 3,
    loaitiec: 'Tiệc Đầy Tháng'
  },
  {
    stt: 4,
    loaitiec: 'Tiệc Mừng Thọ'
  },
  {
    stt: 5,
    loaitiec: 'Tiệc Ngoài Trời'
  }
]

const userAdmin = [
  {
    stt: 1, 
    user: 'phamhoangsy777@gmail.com',
    matkhau: 123456
  },
  {
    stt: 2, 
    user: 'phamhoangsy@gmail.com',
    matkhau: 234567
  },
  {
    stt: 3, 
    user: 'phamhoangsy7@gmail.com',
    matkhau: 345678
  },
  {
    stt: 4, 
    user: 'phamhoangsy77@gmail.com',
    matkhau: 456789
  },
]

export default { wines, beer, awards, chinhanhs, loaitiecs, userAdmin };
