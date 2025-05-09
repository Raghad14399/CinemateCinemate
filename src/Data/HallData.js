export const Hall = [
  {
    name: "4k",
    hallType: "4k",
    id: "1",
    image: `${process.env.PUBLIC_URL}/images/halls/hall1.jpg`,
    rows: 12,
    columns: 10,
    aisles: 2, // تم استخدام aisles فقط
    totalseats: 120,
  },
  {
    name: "Vip",
    hallType: "Vip",
    id: "2",
    image: `${process.env.PUBLIC_URL}/images/halls/hall2.jpg`,
    rows: 8,
    columns: 10,
    aisles: 1, // تم استخدام aisles فقط
    totalseats: 80,
  },
  {
    name: "Standard",
    hallType: "Standard",
    id: "3",
    image: `${process.env.PUBLIC_URL}/images/halls/hall3.jpg`,
    rows: 10,
    columns: 15,
    aisles: 1, // تم استخدام aisles فقط
    totalseats: 150,
  },
];

export const Ticket = [
  {
    name: "Raghad",
    phoneNumber: "0537865768",
    image: `${process.env.PUBLIC_URL}/images/users/user.png`,
    hallNumber: "1",
    seat: "C7",
    movieName: "Harry Potter",
    status: "paid",
  },
  {
    name: "Raghad",
    phoneNumber: "0537865768",
    image: `${process.env.PUBLIC_URL}/images/users/user.png`,
    hallNumber: "1",
    seat: "C7",
    movieName: "Harry Potter",
    status: "paid",
  },
  {
    name: "Raghad",
    phoneNumber: "0537865768",
    image: `${process.env.PUBLIC_URL}/images/users/user.png`,
    hallNumber: "1",
    seat: "C7",
    movieName: "Harry Potter",
    status: "paid",
  },
  {
    name: "Raghad",
    phoneNumber: "0537865768",
    image: `${process.env.PUBLIC_URL}/images/users/user.png`,
    hallNumber: "1",
    seat: "C7",
    movieName: "Harry Potter",
    status: "paid",
  },
];

export const Employe = [
  {
    name: "Raghad",
    phoneNumber: "0537865768",
    email: "raghad@gmail.com",
    role: "admin",
    image: `${process.env.PUBLIC_URL}/images/employees/employee1.png`, // أضف صورة إذا كانت موجودة
  },
  {
    name: "Leen",
    phoneNumber: "0537865768",
    email: "leen@gmail.com",
    role: "admin",
    image: `${process.env.PUBLIC_URL}/images/employees/employee2.png`, // أضف صورة إذا كانت موجودة
  },
  {
    name: "Mouayad",
    phoneNumber: "0537865768",
    email: "mouayad@gmail.com",
    role: "scanner",
    image: `${process.env.PUBLIC_URL}/images/employees/employee3.png`, // أضف صورة إذا كانت موجودة
  },
  {
    name: "Khaled",
    phoneNumber: "0537865768",
    email: "khaled@gmail.com",
    role: "owner",
    image: `${process.env.PUBLIC_URL}/images/employees/employee4.png`, // أضف صورة إذا كانت موجودة
  },
];
