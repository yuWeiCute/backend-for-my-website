# Sanity Content Studio


## 博文：     
key[解释的唯一编码];       
[array]:     
1. title[string];    
2. description[string];   
3. publishAt[datetime];    
4. image[image];    
5. links[string];    
6. categoriesID[array];   
7. userID[string];    
8. comment[array];    
9. richtext[string]   

## 用户：     
key[userID];       
[array]:      
1. userName[string];    
2. role[string];    
3. platform[string];    
4. image[string];    
5. savePostID[string];   
6. publishPostID[string];    

## 分类：    
key[categoriesID];    
[array]:      
1. categoryName[string];      
2. imageUrl[string]  

## 角色-权限列表：       
key[解释的唯一编码];     
[array]:      
1. role[string];     
2. accessControl[array]     

