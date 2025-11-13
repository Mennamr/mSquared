import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layout/auth-layout/auth-layout.component';
import { authGuard } from './core/guards/auth/auth.guard';
import { loggedUserGuard } from './core/guards/auth/logged-user.guard';
import { ProductsPerCategoryComponent } from './features/pages/products-per-category/products-per-category.component';

export const routes: Routes = [
    {path:"auth", component:AuthLayoutComponent, children:[
        {path:"",canActivate:[loggedUserGuard] , loadComponent:()=>import("./core/pages/register/register.component").then(c=>c.RegisterComponent)},
        {path:"login" ,canActivate:[loggedUserGuard] ,loadComponent:()=>import("./core/pages/login/login.component").then(c=>c.LoginComponent)},
        {path:"forget-password",canActivate:[loggedUserGuard] , loadComponent:()=>import("./core/pages/forget-password/forget-password.component").then(c=>c.ForgetPasswordComponent)},
    ]},
    {path:"", loadComponent:()=>import("./core/pages/login/login.component").then(c=>c.LoginComponent) },
    {path:"home", canActivate:[authGuard], loadComponent:()=>import("./features/pages/home/home.component").then(c=>c.HomeComponent) },
    {path:"brands", loadComponent:()=>import("./features/pages/brands/brands.component").then(c=>c.BrandsComponent) },
    {path:"products", loadComponent:()=>import("./features/pages/products/products.component").then(c=>c.ProductsComponent) },
    {path:"categories", loadComponent:()=>import("./features/pages/categories/categories.component").then(c=>c.CategoriesComponent) },
    {path:"cart", loadComponent:()=>import("./features/pages/cart/cart.component").then(c=>c.CartComponent) },
    {path:"productDetails/:id", loadComponent:()=>import("./features/pages/product-details/product-details.component").then(c=>c.ProductDetailsComponent) },
    {path:"checkout/:cartId", loadComponent:()=>import("./features/pages/checkout/checkout.component").then(c=>c.CheckoutComponent) },


    {path: 'products-per-category/:id', loadComponent:()=>import("./features/pages/products-per-category/products-per-category.component").then(c=>c.ProductsPerCategoryComponent)},
    {path: 'products-per-brand/:id', loadComponent:()=>import("./features/pages/products-per-brand/products-per-brand.component").then(c=>c.ProductsPerBrandComponent)},



    {path:"**", loadComponent:()=>import("./core/pages/not-found/not-found.component").then(c=>c.NotFoundComponent) },
];
