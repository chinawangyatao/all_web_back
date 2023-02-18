import { Controller, Get } from '@nestjs/common';

@Controller('category')
export class CategoryController {
    @Get()
    index(){
        return {
            status:200,
            success:'请求成功',
            data:[
                {title:'首页'},
                {title:'前端'},
                {title:'后端'},
                {title:'组件库'},
                {title:'项目的经验'},
                {title:'兴趣'},
                {title:'简历'},
            ]}
    } 
}
