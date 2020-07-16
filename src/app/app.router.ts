import {Routes} from "@angular/router"
import {DirectoryComponent} from "./directory/directory.component"
import {HomeComponent} from "./home/home.component"
import {ModuleWithProviders} from "@angular/core"
import {RouterModule} from "@angular/router"

const appRoutes: Routes = [
//    当根目录接/directory, 显示 DirectoryComponent 内容
//    当根目录什么都不接, 显示 HomeComponent 内容
    {path: 'directory', component: DirectoryComponent},
    {path: '', component: HomeComponent},

//    路有参数
//    {path: 'directory/:person', component: DirectoryComponent}

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
