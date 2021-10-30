# RESTfull-API-Novel
npm i 
npm i express
npm i mongoose
npm i dotenv
npm i email-validator
npm i multer
npm i body-parser

การใช้งาน
เกี่ยวกับ Profile

ดูข้อมูลส่วนตัวของตัวเอง
* /api/user/me/<id>/<username>
* จะส่งข้อมูลของตัวเองนั้นกลับออกมา

เเก้ไขข้อมูลส่วนตัว
* /api/user/update/<id>/<username>
* โดยเจ้าของโปรไฟล์จะสามารถเเก้ไขข้อมูลของตัวเองได้ เเต่จะไม่สามาารถเข้าถึงหรือเเก้ไขข้อมูลคนอื่นได้
  {
  "username":"",
  "name":"",
  "bird":"",
  "email":"",
  "password":"",
  "is_active:bool,
  "profilePic":""
  }
