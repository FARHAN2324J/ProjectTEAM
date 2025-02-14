// import { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import '../post.css'
// import Navbar from "../Navbar";
// import Footer from "./Footer";

// const Post = () => {
//     const [image, setImage] = useState(null);
//     const [name, setName] = useState("");
//     const [description, setDescription] = useState("");
//     const [step, setStep] = useState(1);
//     const [posts, setPosts] = useState([]); // State جدید برای ذخیره پست‌ها

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setImage(reader.result);
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const handleNext = () => {
//         if (step === 1 && image) {
//             setStep(2);
//         } else if (step === 2) {
//             setStep(3);
//         }
//     };

//     const handleSubmit = () => {
//         const newPost = {
//             name: name,
//             description: description,
//             image: image
//         };
//         setPosts([...posts, newPost]); // اضافه کردن پست جدید به لیست پست‌ها
//         // Reset the form fields
//         setName("");
//         setDescription("");
//         setImage(null);
//         setStep(1); // بازگشت به مرحله اول
//     };

//     const handleDelete = () => {
//         // Reset the form fields
//         setName("");
//         setDescription("");
//         setImage(null);
//         setStep(1); // بازگشت به مرحله اول
//     };

//     return (
//         <div>
//                 <Navbar/>
//                 <div className="flex flex-col items-center my-30">
//                 {step === 1 && (
//                     <div className="w-[100%]">
//                         <div className="bg-[#161617cc] w-[90%] sm:w-[40%] lg:w-[50%] xl:w-[40%] md:w-[60%] m-auto rounded-2xl">
//                             <div className="flex items-center">
//                             </div>
//                             <div className="flex flex-col text-center"><img className="w-[10%] m-auto py-5" src="/src/FooterIcons/image-svgrepo-com (1).svg" alt="" /><span className="text-[#9ca3af] text-lg">Drag Your Photos here</span></div>
//                             <div className="p-4 text-center my-5">
//                                     <label htmlFor="file-upload" className="px-11 py-1 bg-[#9ca3af] text-[#161617cc] rounded-md cursor-pointer border-1 border-[#9ca3af] transition hover:bg-[#161617cc] hover:text-[#9ca3af]">Choose file</label>
//                                     <input type="file" accept="image/*" className="hidden" id="file-upload" onChange={handleFileChange} />
//                             </div>
//                             {image && (
//                             <div className="w-full img-create">
//                                 <img src={image} className="w-[80%] py-5 m-auto rounded-md" alt="Uploaded" />
//                             </div>
//                             )}
//                             <div className="p-4 text-center">
//                                     <button className="px-4 py-2 my-5 bg-[#161617cc] text-[#9ca3af] border-1 border[#9ca3af] rounded-lg cursor-pointer active:bg-[#9ca3af] active:text-[#161617cc] transition" onClick={handleNext}>Next</button>
//                                 </div>
//                         </div>
//                     </div>
//                 )}

//                 {step === 2 && (
//                     <div className="w-[100%]">
//                         <div className="bg-[#161617cc] w-[90%] sm:w-[40%] lg:w-[50%] xl:w-[40%] md:w-[60%] m-auto flex-col md:flex-row flex gap-5 items-center  justify-between px-5 py-2 rounded-tl-2xl rounded-tr-2xl container-content">
//                             <div className="flex gap-2 items-center w-[100%]">
//                                 <input 
//                                     className="sm:text-md text-sm my-2 text-[#9ca3af]"
//                                     type="text" 
//                                     placeholder="Add location" 
//                                     value={name} 
//                                     onChange={(e) => setName(e.target.value)} 
//                                 /> <i className="text-[#9ca3af] fas fa-map-marker-alt"></i>
//                             </div>
//                             <div className="w-[100%]">
//                                 <textarea 
//                                 className="text-[#9ca3af] sm:text-md text-sm my-2"
//                                 placeholder="Enter description" 
//                                 value={description} 
//                                 onChange={(e) => setDescription(e.target.value)} 
//                                 />
//                             </div>
//                             <button onClick={handleNext} className="text-[#9ca3af] cursor-pointer">Next</button>
//                         </div>
//                         {image && (
//                             <div className=" bg-[#161617cc] w-[90%] sm:w-[40%] lg:w-[50%] xl:w-[40%] md:w-[60%] m-auto rounded-bl-2xl rounded-br-2xl p-5">
//                                 <img className="md:w-[60%] w-[100%] m-auto" src={image} alt="Uploaded" />
//                             </div>
//                             )}
//                     </div>
//                 )}

//                 {step === 3 && (
//                     <div className=" flex flex-col justify-center items-center post-image-container p-5">
//                         <div className="text-center">
//                             <h2 className="my-5 font-bold text-xl text-[#9ca3af]">Your Post</h2>
//                             <img src={image} alt="Uploaded" className="w-[100%] md:w-[50%] m-auto" />
//                         </div>
//                         <div className="py-3 text-[#9ca3af]">
//                             <p className="my-5"><strong>Location: </strong> {name}</p>
//                             <p className="my-5"><strong>description: </strong> {description}</p>
//                             <button className="text-[#eee] transition hover:bg-transparent cursor-pointer border-1 border-[#2f00ff] py-2 px-4 rounded-lg bg-[#2f00ff]" onClick={handleSubmit}>Submit</button>
//                             <button className="text-[#eee] transition hover:bg-[#B22222] cursor-pointer py-2 px-4 rounded-lg bg-[#8B0000]" onClick={handleDelete} style={{ marginLeft: '10px' }}>Delete</button> {/* دکمه حذف */}
//                         </div>
//                     </div>
//                 )}
                
//                 {/* نمایش پست‌ها */}
//                 <div className="posts-container">
//                     <div className="my-5 mx-8 grid-post">
//                             {posts.map((post, index) => (
//                         <div key={index} className="post">
//                             {post.image && <img src={post.image} alt="Uploaded"  />}
//                             <h3 className="p-5">Location: {post.name}</h3>
//                             <p className="p-5">Description: {post.description}</p>
//                         </div>
//                         ))}   
//                         </div>
//                     </div>
//             </div>
//             <Footer/>
//         </div>
//     );
// };

// export default Post;

// import { useState } from "react";
// import '../post.css';
// import Navbar from "../Navbar";
// import Footer from "./Footer";

// const Post = () => {
//   const [image, setImage] = useState(null);
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [step, setStep] = useState(1);
//   const [posts, setPosts] = useState([]); // State جدید برای ذخیره پست‌ها
    // const navigate = useNavigate();
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleNext = () => {
//     if (step === 1 && image) {
//       setStep(2);
//     } else if (step === 2) {
//       setStep(3);
//     }
//   };

//   const handleGoBack = () => {
//     if (step === 2) {
//       setStep(1);
//     } else if (step === 3) {
//       setStep(2);
//     }
//   };

//   const handleSubmit = () => {
//     const newPost = {
//       name: name,
//       description: description,
//       image: image
//     };
//     setPosts([...posts, newPost]); // اضافه کردن پست جدید به لیست پست‌ها
//     // Reset the form fields
//     setName("");
//     setDescription("");
//     setImage(null);
//     setStep(1); // بازگشت به مرحله اول
        // navigate('/posts', { state: { posts: [...posts, newPost] } }); // هدایت به صفحه‌ی AllPosts با انتقال پست‌ها به آن
//   };

//   const handleDelete = () => {
//     // Reset the form fields
//     setName("");
//     setDescription("");
//     setImage(null);
//     setStep(1); // بازگشت به مرحله اول
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="flex flex-col items-center my-30">
//         {step === 1 && (
//           <div className="w-[100%]">
//             <div className="bg-[#161617cc] w-[90%] sm:w-[40%] lg:w-[50%] xl:w-[40%] md:w-[60%] m-auto rounded-2xl">
//               <div className="flex items-center">
//               </div>
//               <div className="flex flex-col text-center">
//                 <img className="w-[10%] m-auto py-5" src="/src/FooterIcons/image-svgrepo-com (1).svg" alt="" />
//                 <span className="text-[#9ca3af] text-lg">Drag Your Photos here</span>
//               </div>
//               <div className="p-4 text-center my-5">
//                 <label htmlFor="file-upload" className="px-11 py-1 bg-[#9ca3af] text-[#161617cc] rounded-md cursor-pointer border-1 border-[#9ca3af] transition hover:bg-[#161617cc] hover:text-[#9ca3af]">Choose file</label>
//                 <input type="file" accept="image/*" className="hidden" id="file-upload" onChange={handleFileChange} />
//               </div>
//               {image && (
//                 <div className="w-full img-create">
//                   <img src={image} className="w-[80%] py-5 m-auto rounded-md" alt="Uploaded" />
//                 </div>
//               )}
//               <div className="p-4 text-center">
//                 <button className="px-4 py-2 my-5 bg-[#161617cc] text-[#9ca3af] border-1 border[#9ca3af] rounded-lg cursor-pointer active:bg-[#9ca3af] active:text-[#161617cc] transition" onClick={handleNext}>Next</button>
//               </div>
//             </div>
//           </div>
//         )}

//         {step === 2 && (
//           <div className="w-[100%]">
//             <div className="bg-[#161617cc] w-[90%] sm:w-[40%] lg:w-[50%] xl:w-[40%] md:w-[60%] m-auto flex-col md:flex-row flex gap-5 items-center justify-between px-5 py-2 rounded-tl-2xl rounded-tr-2xl container-content">
//             <div className="flex justify-between w-[90%] sm:w-[40%] lg:w-[50%] xl:w-[40%] md:w-[60%] m-auto">
//               <button onClick={handleGoBack} className="text-[#9ca3af] m-auto cursor-pointer">Back</button>
//             </div>
//               <div className="flex gap-2 items-center w-[100%]">
//                 <input
//                   className="sm:text-md text-sm my-2 text-[#9ca3af]"
//                   type="text"
//                   placeholder="Add location"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 /> <i className="text-[#9ca3af] fas fa-map-marker-alt"></i>
//               </div>
//               <div className="w-[100%]">
//                 <textarea
//                   className="text-[#9ca3af] sm:text-md text-sm my-2"
//                   placeholder="Enter description"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                 />
//               </div>
//               <button onClick={handleNext} className="text-[#9ca3af] cursor-pointer">Next</button>
//             </div>
//             {image && (
//               <div className="bg-[#161617cc] w-[90%] sm:w-[40%] lg:w-[50%] xl:w-[40%] md:w-[60%] m-auto rounded-bl-2xl rounded-br-2xl p-5">
//                 <img className="md:w-[60%] w-[100%] m-auto" src={image} alt="Uploaded" />
//               </div>
//             )}
            
//           </div>
//         )}

//         {step === 3 && (
//           <div className="flex flex-col justify-center items-center post-image-container p-5">
//             <div className="text-center">
//               <h2 className="my-5 font-bold text-xl text-[#9ca3af]">Your Post</h2>
//               <img src={image} alt="Uploaded" className="w-[100%] md:w-[50%] m-auto" />
//             </div>
//             <div className="py-3 text-[#9ca3af]">
//               <p className="my-5"><strong>Location: </strong> {name}</p>
//               <p className="my-5"><strong>description: </strong> {description}</p>
//               <button className="text-[#eee] transition hover:bg-transparent cursor-pointer border-1 border-[#2f00ff] py-2 px-4 rounded-lg bg-[#2f00ff]" onClick={handleSubmit}>Submit</button>
//               <button className="text-[#eee] transition hover:bg-[#B22222] cursor-pointer py-2 px-4 rounded-lg bg-[#8B0000]" onClick={handleDelete} style={{ marginLeft: '10px' }}>Delete</button>
//             </div>
//             <button onClick={handleGoBack} className="text-[#9ca3af] cursor-pointer">Back</button>
//           </div>
//         )}

//         {/* نمایش پست‌ها */}
//         <div className="posts-container">
//           <div className="my-5 mx-8 grid-post">
//             {posts.map((post, index) => (
//               <div key={index} className="post">
//                 {post.image && <img src={post.image} alt="Uploaded" />}
//                 <h3 className="p-5">Location: {post.name}</h3>
//                 <p className="p-5">Description: {post.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Post;


// import { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import '../post.css';
// import Navbar from "../Navbar";
// import Footer from "./Footer";

// const Post = () => {
//   const [image, setImage] = useState(null);
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [step, setStep] = useState(1);
//   const [posts, setPosts] = useState([]); // State جدید برای ذخیره پست‌ها
//   const navigate = useNavigate();

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleNext = () => {
//     if (step === 1 && image) {
//       setStep(2);
//     } else if (step === 2) {
//       setStep(3);
//     }
//   };

//   const handleGoBack = () => {
//     if (step === 2) {
//       setStep(1);
//     } else if (step === 3) {
//       setStep(2);
//     }
//   };

//   const handleSubmit = () => {
//     const newPost = {
//       name: name,
//       description: description,
//       image: image
//     };
//     setPosts([...posts, newPost]); // اضافه کردن پست جدید به لیست پست‌ها
//     // Reset the form fields
//     setName("");
//     setDescription("");
//     setImage(null);
//     setStep(1); // بازگشت به مرحله اول
//     navigate('/posts', { state: { posts: [...posts, newPost] } }); // هدایت به صفحه‌ی AllPosts با انتقال پست‌ها به آن
//   };

//   const handleDelete = () => {
//     // Reset the form fields
//     setName("");
//     setDescription("");
//     setImage(null);
//     setStep(1); // بازگشت به مرحله اول
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="flex flex-col items-center my-30">
//         {step === 1 && (
//           <div className="w-[100%]">
//             <div className="bg-[#161617cc] w-[90%] sm:w-[40%] lg:w-[50%] xl:w-[40%] md:w-[60%] m-auto rounded-2xl">
//               <div className="flex items-center">
//               </div>
//               <div className="flex flex-col text-center">
//                 <img className="w-[10%] m-auto py-5" src="/src/FooterIcons/image-svgrepo-com (1).svg" alt="" />
//                 <span className="text-[#9ca3af] text-lg">Drag Your Photos here</span>
//               </div>
//               <div className="p-4 text-center my-5">
//                 <label htmlFor="file-upload" className="px-11 py-1 bg-[#9ca3af] text-[#161617cc] rounded-md cursor-pointer border-1 border-[#9ca3af] transition hover:bg-[#161617cc] hover:text-[#9ca3af]">Choose file</label>
//                 <input type="file" accept="image/*" className="hidden" id="file-upload" onChange={handleFileChange} />
//               </div>
//               {image && (
//                 <div className="w-full img-create">
//                   <img src={image} className="w-[80%] py-5 m-auto rounded-md" alt="Uploaded" />
//                 </div>
//               )}
//               <div className="p-4 text-center">
//                 <button className="px-4 py-2 my-5 bg-[#161617cc] text-[#9ca3af] border-1 border[#9ca3af] rounded-lg cursor-pointer active:bg-[#9ca3af] active:text-[#161617cc] transition" onClick={handleNext}>Next</button>
//               </div>
//             </div>
//           </div>
//         )}

//         {step === 2 && (
//           <div className="w-[100%]">
//             <div className="bg-[#161617cc] w-[90%] sm:w-[40%] lg:w-[50%] xl:w-[40%] md:w-[60%] m-auto flex-col md:flex-row flex gap-5 items-center justify-between px-5 py-2 rounded-tl-2xl rounded-tr-2xl container-content">
//               <div className="flex gap-2 items-center w-[100%]">
//                 <input
//                   className="sm:text-md text-sm my-2 text-[#9ca3af]"
//                   type="text"
//                   placeholder="Add location"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 /> <i className="text-[#9ca3af] fas fa-map-marker-alt"></i>
//               </div>
//               <div className="w-[100%]">
//                 <textarea
//                   className="text-[#9ca3af] sm:text-md text-sm my-2"
//                   placeholder="Enter description"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                 />
//               </div>
//               <button onClick={handleNext} className="text-[#9ca3af] cursor-pointer">Next</button>
//             </div>
//             {image && (
//               <div className="bg-[#161617cc] w-[90%] sm:w-[40%] lg:w-[50%] xl:w-[40%] md:w-[60%] m-auto rounded-bl-2xl rounded-br-2xl p-5">
//                 <img className="md:w-[60%] w-[100%] m-auto" src={image} alt="Uploaded" />
//               </div>
//             )}
//             <div className="flex justify-between w-[90%] sm:w-[40%] lg:w-[50%] xl:w-[40%] md:w-[60%] m-auto">
//               <button onClick={handleGoBack} className="text-[#9ca3af] cursor-pointer">Back</button>
//             </div>
//           </div>
//         )}
//          {step === 3 && (
//            <div className="flex flex-col justify-center items-center post-image-container p-5">
//              <div className="text-center">
//                <h2 className="my-5 font-bold text-xl text-[#9ca3af]">Your Post</h2>
//                <img src={image} alt="Uploaded" className="w-[100%] md:w-[50%] m-auto" />
//              </div>
//              <div className="py-3 text-[#9ca3af]">
//                <p className="my-5"><strong>Location: </strong> {name}</p>
//                <p className="my-5"><strong>description: </strong> {description}</p>
//                <button className="text-[#eee] transition hover:bg-transparent cursor-pointer border-1 border-[#2f00ff] py-2 px-4 rounded-lg bg-[#2f00ff]" onClick={handleSubmit}>Submit</button>
//                <button className="text-[#eee] transition hover:bg-[#B22222] cursor-pointer py-2 px-4 rounded-lg bg-[#8B0000]" onClick={handleDelete} style={{ marginLeft: '10px' }}>Delete</button>
//              </div>
//              <button onClick={handleGoBack} className="text-[#9ca3af] cursor-pointer">Back</button>
//            </div>
//          )}

//          {/* نمایش پست‌ها */}
//          <div className="posts-container">
//            <div className="my-5 mx-8 grid-post">
//              {posts.map((post, index) => (
//                <div key={index} className="post">
//                  {post.image && <img src={post.image} alt="Uploaded" />}
//                  <h3 className="p-5">Location: {post.name}</h3>
//                  <p className="p-5">Description: {post.description}</p>
//                </div>
//              ))}
//            </div>
//          </div>
//        </div>
//        <Footer />
//      </div>
//    );
//  };

//  export default Post;

import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import '../post.css';
import Navbar from "../Navbar";
import Footer from "./Footer";

const Post = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [step, setStep] = useState(1);
  const [posts, setPosts] = useState([]); // State جدید برای ذخیره پست‌ها
  const navigate = useNavigate();

  // Load posts from localStorage on component mount
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNext = () => {
    if (step === 1 && image) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleGoBack = () => {
    if (step === 2) {
      setStep(1);
    } else if (step === 3) {
      setStep(2);
    }
  };

  const handleSubmit = () => {
    const newPost = {
      name: name,
      description: description,
      image: image
    };
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts); // اضافه کردن پست جدید به لیست پست‌ها
    localStorage.setItem('posts', JSON.stringify(updatedPosts)); // ذخیره پست‌ها در لوکال استوریج

    // Reset the form fields
    setName("");
    setDescription("");
    setImage(null);
    setStep(1); // بازگشت به مرحله اول
    navigate('/posts'); // هدایت به صفحه‌ی AllPosts
  };

  const handleDelete = () => {
    // Reset the form fields
    setName("");
    setDescription("");
    setImage(null);
    setStep(1); // بازگشت به مرحله اول
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center my-30">
        {step === 1 && (
          <div className="w-[100%]">
            <div className="bg-[#161617cc] w-[90%] sm:w-[40%] lg:w-[50%] xl:w-[40%] md:w-[60%] m-auto rounded-2xl">
              <div className="flex items-center">
              </div>
              <div className="flex flex-col text-center">
                <img className="w-[10%] m-auto py-5" src="/src/FooterIcons/image-svgrepo-com (1).svg" alt="" />
                <span className="text-[#9ca3af] text-lg">Drag Your Photos here</span>
              </div>
              <div className="p-4 text-center my-5">
                <label htmlFor="file-upload" className="px-11 py-1 bg-[#9ca3af] text-[#161617cc] rounded-md cursor-pointer border-1 border-[#9ca3af] transition hover:bg-[#161617cc] hover:text-[#9ca3af]">Choose file</label>
                <input type="file" accept="image/*" className="hidden" id="file-upload" onChange={handleFileChange} />
              </div>
              {image && (
                <div className="w-full img-create">
                  <img src={image} className="w-[80%] py-5 m-auto rounded-md" alt="Uploaded" />
                </div>
              )}
              <div className="p-4 text-center">
                <button className="px-4 py-2 my-5 bg-[#161617cc] text-[#9ca3af] border-1 border[#9ca3af] rounded-lg cursor-pointer active:bg-[#9ca3af] active:text-[#161617cc] transition" onClick={handleNext}>Next</button>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="w-[100%]">
            <div className="bg-[#161617cc] w-[90%] sm:w-[40%] lg:w-[50%] xl:w-[40%] md:w-[60%] m-auto flex-col md:flex-row flex gap-5 items-center justify-between px-5 py-2 rounded-tl-2xl rounded-tr-2xl container-content">
              <div className="flex gap-2 items-center w-[100%]">
                <input
                  className="sm:text-md text-sm my-2 text-[#9ca3af]"
                  type="text"
                  placeholder="Add location"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                /> <i className="text-[#9ca3af] fas fa-map-marker-alt"></i>
              </div>
              <div className="w-[100%]">
                <textarea
                  className="text-[#9ca3af] sm:text-md text-sm my-2"
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <button onClick={handleNext} className="text-[#9ca3af] cursor-pointer">Next</button>
            </div>
            {image && (
              <div className="bg-[#161617cc] w-[90%] sm:w-[40%] lg:w-[50%] xl:w-[40%] md:w-[60%] m-auto rounded-bl-2xl rounded-br-2xl p-5">
                <img className="md:w-[60%] w-[100%] m-auto" src={image} alt="Uploaded" />
              </div>
            )}
            <div className="flex justify-between w-[90%] sm:w-[40%] lg:w-[50%] xl:w-[40%] md:w-[60%] m-auto">
              <button onClick={handleGoBack} className="text-[#9ca3af] cursor-pointer">Back</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col justify-center items-center post-image-container p-5">
            <div className="text-center">
              <h2 className="my-5 font-bold text-xl text-[#9ca3af]">Your Post</h2>
              <img src={image} alt="Uploaded" className="w-[100%] md:w-[50%] m-auto" />
            </div>
            <div className="py-3 text-[#9ca3af]">
              <p className="my-5"><strong>Location: </strong> {name}</p>
              <p className="my-5"><strong>Description: </strong> {description}</p>
              <button className="text-[#eee] transition hover:bg-transparent cursor-pointer border-1 border-[#2f00ff] py-2 px-4 rounded-lg bg-[#2f00ff]" onClick={handleSubmit}>Submit</button>
              <button className="text-[#eee] transition hover:bg-[#B22222] cursor-pointer py-2 px-4 rounded-lg bg-[#8B0000]" onClick={handleDelete} style={{ marginLeft: '10px' }}>Delete</button>
            </div>
            <button onClick={handleGoBack} className="text-[#9ca3af] cursor-pointer">Back</button>
          </div>
        )}

        {/* نمایش پست‌ها */}
        <div className="posts-container">
          <div className="my-5 mx-8 grid-post">
            {posts.map((post, index) => (
              <div key={index} className="post">
                {post.image && <img src={post.image} alt="Uploaded" />}
                <h3 className="p-5">Location: {post.name}</h3>
                <p className="p-5">Description: {post.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Post;

        
