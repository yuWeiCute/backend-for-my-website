# Sanity Content Studio


博文：
key[解释的唯一编码];     
[array]: title[string]; description[string]; publishAt[datetime]; image[image]; links[string]; categoriesID[array]; userID[string]; comment[array]; richtext[string]

用户：
key[userID];     
[array]: userName[string]; role[string]; platform[string]; image[string]; savePostID[string]; publishPostID[string];

分类：
key[categoriesID]; 
[array]: categoryName[string]; imageUrl[string]

角色-权限列表：
key[解释的唯一编码];  
[array]: role[string]; accessControl[array]

