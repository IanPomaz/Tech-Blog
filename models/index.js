const User = require("./user");
const Post = ("./post");
const Comment = ("./comment");

// Post.belongsTo(User,{
//     foreignkey:"userId",
//     onDelete:"Cascade"
// });

// Post.hasMany(Comment,{
//     foreignkey:"postId",
//     onDelete:"Cascade"
// });

// Comment.belongsTo(User,{
//     foreignkey:"userId",
//     onDelete:"Cascade"
// });

module.exports={User,Comment,Post};


