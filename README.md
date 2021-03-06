# Framework Nodejs With Typescript
## Giới thiệu
- Project sử dụng NodeJS, ExpressJS cho việc tạo API Server theo mô hình MVC.
- Giúp cho việc khởi tạo project API Nodejs Server một cách nhanh chống và cấu trúc.
- Tự động tạo ra các unit test trên Controller
- Sử dụng command line cho việc khởi tạo Model, Controller
## Cấu trúc Project
```bash
├── src (Thư mục chứa code của chương trình)
│   ├── controllers
│   │   ├── **/*.ts
│   ├── models
│   │   ├── **/*.ts
│   ├── App.ts
│   └── server.ts
├── public (Nếu có)
├── dist (thư mục build ts -> js)
├── node_modules
├── test
├── package.json
├── tsconfig.json
├── tslint.json
├── README.md
└── .gitignore

```

## Hướng Dẫn Cài Đặt
``` 
git clone https://github.com/gitcuongnguyen8797/nodejs-framework.git
cd nodejs-framework
npm install
npm start (Build and Run Server)
```
## Hướng Dẫn Sử Dụng
### Tạo Controller
``` 
node make controller:<Folder.ControllerName> 
```
* Folder là thư mục con chứa Controller trong thư mục src/controllers. Nếu không có thư mục mặc định controller được tạo tại src/controllers/<ControllerName>
### Tạo Model
 ``` 
node make controller:<Folder.ModelName> 
```
* Folder là thư mục con chứa Controller trong thư mục src/models. Nếu không có thư mục mặc định controller được tạo tại src/models/<ModelName>

