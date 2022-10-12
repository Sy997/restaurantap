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
    user: 'phamhoangsy777@gmail.com',
    matkhau: 123456
  },
  {

    user: 'phamhoangsy@gmail.com',
    matkhau: 234567
  },
  {

    user: 'phamhoangsy7@gmail.com',
    matkhau: 345678
  },
  {

    user: 'phamhoangsy77@gmail.com',
    matkhau: 456789
  },
]


const tieccuois = [
  {
    classify: 'Vip',
    percent: '20%',
    cost: '350.000.000Vnđ',
    sales: '250.000.000Vnđ',
    descr: 'Phòng được thiết kế như một ngôi Thánh Đường thực sự'
  },
  {
    classify: 'Vip 2',
    cost: '320.000.000Vnđ',
    percent: '30%',
    sales: '230.000.000Vnđ',
    descr: 'Phòng được cách tân Châu Âu và Châu Á, được phục vụ bằng chất lượng hàng đầu'
  },
  {
    classify: 'Trung binh',
    cost: '300.000.000Vnđ',
    percent: '40%',
    sales: '200.000.000Vnđ',
    descr: 'Phòng được thiết kế với nhưng vật liệu sang trọng và đầy đủ sự rực rỡ'
  },
  {
    classify: 'Thường',
    cost: '200.000.000Vnđ',
    percent: '50%',
    sales: '150.000.000Vnđ',
    descr: 'Phòng được thiết kế sang trọng với đầy đủ tiện nghi'
  },
]

const tiecsinhnhats = [
  {
    classify: 'Vip',
    cost: '200.000.000Vnđ',
    percent: '20%',
    sales: '150.000.000Vnđ',
    descr: 'Sự ấm cúng được diễn tả hết trong buổi sinh nhật',
  },
  {
    classify: 'Vip 2',
    cost: '199.000.000Vnđ',
    percent: '30%',
    sales: '99.000.000Vnđ',
    descr: 'Nó được trang trí để cho bạn có cảm giác mọi người luôn nhớ đến ngày sinh của bạn'
  },
  {
    classify: 'Trung binh',
    cost: '150.000.000Vnđ',
    percent: '40%',
    sales: '69.000.000Vnđ',
    descr: 'Phòng được thiết kế như phong cảnh trong truyện bước ra'
  },
  {
    classify: 'Thường',
    cost: '100.000.000Vnđ',
    percent: '50%',
    sales: '50.000.000Vnđ',
    descr: 'Phòng được thiết kế dành riêng cho bạn và những người luôn bên bạn'
  },
]

const tiecgiatiens = [
  {
    classify: 'Vip',
    cost: '200.000.000Vnđ',
    percent: '20%',
    sales: '150.000.000Vnđ',
    descr: 'Con cháu luôn tưởng nhớ đến ông bà tổ tiên và chúng tôi luôn phục vụ những gì tốt nhất mà chúng tôi có'
  },
  {
    classify: 'Vip 2',
    cost: '199.000.000Vnđ',
    percent: '30%',
    sales: '99.000.000Vnđ',
    descr: 'Con cháu luôn tưởng nhớ đến ông bà tổ tiên và chúng tôi luôn phục vụ những gì tốt nhất mà chúng tôi có'
  },
  {
    classify: 'Trung binh',
    cost: '150.000.000Vnđ',
    percent: '40%',
    sales: '69.000.000Vnđ',
    descr: 'Con cháu luôn tưởng nhớ đến ông bà tổ tiên và chúng tôi luôn phục vụ những gì tốt nhất mà chúng tôi có'
  },
  {
    classify: 'Thường',
    cost: '100.000.000Vnđ',
    percent: '50%',
    sales: '50.000.000Vnđ',
    descr: 'Con cháu luôn tưởng nhớ đến ông bà tổ tiên và chúng tôi luôn phục vụ những gì tốt nhất mà chúng tôi có'
  },
]

const tiecdaythangs = [
  {
    classify: 'Vip',
    cost: '200.000.000Vnđ',
    percent: '20%',
    sales: '150.000.000Vnđ',
    descr: 'Những đứa con bé bỏng luôn là động lực của những người Cha Mẹ, chúng tối đồng hành cùng bạn'
  },
  {
    classify: 'Vip 2',
    cost: '199.000.000Vnđ',
    percent: '30%',
    sales: '99.000.000Vnđ',
    descr: 'Con cháu luôn tưởng nhớ đến ông bà tổ tiên và chúng tôi luôn phục vụ những gì tốt nhất mà chúng tôi có'
  },
  {
    classify: 'Trung binh',
    cost: '150.000.000Vnđ',
    percent: '40%',
    sales: '69.000.000Vnđ',
    descr: 'Con cháu luôn tưởng nhớ đến ông bà tổ tiên và chúng tôi luôn phục vụ những gì tốt nhất mà chúng tôi có'
  },
  {
    classify: 'Thường',
    cost: '100.000.000Vnđ',
    percent: '40%',
    sales: '50.000.000Vnđ',
    descr: 'Con cháu luôn tưởng nhớ đến ông bà tổ tiên và chúng tôi luôn phục vụ những gì tốt nhất mà chúng tôi có'
  },
]

const tiecmungthos = [
  {
    classify: 'Vip',
    cost: '200.000.000Vnđ',
    percent: '20%',
    sales: '150.000.000Vnđ',
    descr: 'Con cháu luôn tưởng nhớ đến ông bà tổ tiên và chúng tôi luôn phục vụ những gì tốt nhất mà chúng tôi có'
  },
  {
    classify: 'Vip 2',
    cost: '199.000.000Vnđ',
    percent: '40%',
    sales: '99.000.000Vnđ',
    descr: 'Con cháu luôn tưởng nhớ đến ông bà tổ tiên và chúng tôi luôn phục vụ những gì tốt nhất mà chúng tôi có'
  },
  {
    classify: 'Trung binh',
    cost: '150.000.000Vnđ',
    percent: '40%',
    sales: '69.000.000Vnđ',
    descr: 'Con cháu luôn tưởng nhớ đến ông bà tổ tiên và chúng tôi luôn phục vụ những gì tốt nhất mà chúng tôi có'
  },
  {
    classify: 'Thường',
    cost: '100.000.000Vnđ',
    percent: '20%',
    sales: '50.000.000Vnđ',
    descr: 'Con cháu luôn tưởng nhớ đến ông bà tổ tiên và chúng tôi luôn phục vụ những gì tốt nhất mà chúng tôi có'
  },
]

const tiecngoaitrois = [
  {
    classify: 'Vip',
    cost: '200.000.000Vnđ',
    sales: '150.000.000Vnđ',
    percent: '20%',
    descr: 'Con cháu luôn tưởng nhớ đến ông bà tổ tiên và chúng tôi luôn phục vụ những gì tốt nhất mà chúng tôi có'
  },
  {
    classify: 'Vip 2',
    cost: '199.000.000Vnđ',
    sales: '99.000.000Vnđ',
    percent: '20%',
    descr: 'Con cháu luôn tưởng nhớ đến ông bà tổ tiên và chúng tôi luôn phục vụ những gì tốt nhất mà chúng tôi có'
  },
  {
    classify: 'Trung binh',
    cost: '150.000.000Vnđ',
    sales: '69.000.000Vnđ',
    percent: '20%',
    descr: 'Con cháu luôn tưởng nhớ đến ông bà tổ tiên và chúng tôi luôn phục vụ những gì tốt nhất mà chúng tôi có'
  },
  {
    classify: 'Thường',
    cost: '100.000.000Vnđ',
    sales: '50.000.000Vnđ',
    percent: '20%',
    descr: 'Con cháu luôn tưởng nhớ đến ông bà tổ tiên và chúng tôi luôn phục vụ những gì tốt nhất mà chúng tôi có'
  },
]

const payment = [
  {
    id: 1,
    phuongthuc: "Momo",
    url: `${images.momo}`,
    payment: './momo'
  },
  {
    id: 2,
    phuongthuc: "Zalopay",
    url: `${images.zalopay}`,
    payment: './zalopay'
  },
  {
    id: 3,
    phuongthuc: "Banking",
    url: `${images.banking}`,
    payment: './banking'
  },
  {
    id: 4,
    phuongthuc: "Visa",
    url: `${images.visa}`,
    payment: './visa'
  }
]

export default { wines, beer, awards, chinhanhs, loaitiecs, userAdmin,tiecngoaitrois,tiecmungthos ,tiecgiatiens, tiecdaythangs,tiecsinhnhats, tieccuois, payment };
