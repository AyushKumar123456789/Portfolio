// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Blogs = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [isEditing, setIsEditing] = useState(false);
//   const [editId, setEditId] = useState(null);

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const fetchBlogs = async () => {
//     const res = await axios.get("http://localhost:5000/api/blogs");
//     setBlogs(res.data);
//   };

//   const handleCreate = async () => {
//     await axios.post("http://localhost:5000/api/blogs", { title, content });
//     fetchBlogs();
//     setTitle("");
//     setContent("");
//   };

//   const handleEdit = async (id) => {
//     const blog = blogs.find((b) => b._id === id);
//     setTitle(blog.title);
//     setContent(blog.content);
//     setIsEditing(true);
//     setEditId(id);
//   };

//   const handleUpdate = async () => {
//     await axios.put(`http://localhost:5000/api/blogs/${editId}`, {
//       title,
//       content,
//     });
//     fetchBlogs();
//     setTitle("");
//     setContent("");
//     setIsEditing(false);
//     setEditId(null);
//   };

//   const handleDelete = async (id) => {
//     await axios.delete(`http://localhost:5000/api/blogs/${id}`);
//     fetchBlogs();
//   };

//   return (
//     <div>
//       <h1>Blog Page</h1>
//       {isEditing ? (
//         <div>
//           <input
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Title"
//           />
//           <textarea
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             placeholder="Content"
//           />
//           <button onClick={handleUpdate}>Update Blog</button>
//         </div>
//       ) : (
//         <div>
//           <input
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Title"
//           />
//           <textarea
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             placeholder="Content"
//           />
//           <button onClick={handleCreate}>Create Blog</button>
//         </div>
//       )}
//       <div>
//         {blogs.map((blog) => (
//           <div key={blog._id}>
//             <h2>{blog.title}</h2>
//             <p>{blog.content}</p>
//             <p>Views: {blog.views}</p>
//             <button onClick={() => handleEdit(blog._id)}>Edit</button>
//             <button onClick={() => handleDelete(blog._id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Blogs;
