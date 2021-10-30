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

สมัครสมาชิก
* /api/auth/register
* สมาัคสมาชิก
{
  "username":"",
  "email":"",
  "password:""
}

*/api/auth/login
*เข้าสู่ระบบ
{
  "username":"",
  "password":""
}
*จะส่งค่า_id, เเล้วก็username ออกมาเพื่อเอาไปใช้ต่อ

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
*โดยเราสามารถเเก้ไขข้อมูลเเค่บางส่วนได้เพียงเองตามฟีลล
  
  
  
