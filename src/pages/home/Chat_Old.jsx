// import { useState, useEffect } from "react";
// import "./styling/Chat.css"; // renamed file

// function Chat() {
//   const [allComments, setAllComments] = useState([]);
//   const [currentTab, setCurrentTab] = useState("verified");
//   const [currentFilter, setCurrentFilter] = useState("all");
//   const [modalOpen, setModalOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     username: "",
//     category: "medicine",
//     message: "",
//   });

//   useEffect(() => {
//     loadComments();
//   }, []);

//   const loadComments = async () => {
//     try {
//       // Load original comments from public/data/comments.json
//       const response = await fetch("/data/comments.json");
//       if (!response.ok) throw new Error("Failed to load comments");
//       const data = await response.json();

//       // Load user-added comments & vote modifications from localStorage
//       const stored = localStorage.getItem("healthChat_comments");
//       let userComments = stored ? JSON.parse(stored) : [];

//       // Merge: original + user-added comments
//       const merged = [...data.comments, ...userComments];

//       // Apply any vote changes from localStorage
//       const storedVotes = localStorage.getItem("healthChat_votes");
//       const voteMap = storedVotes ? JSON.parse(storedVotes) : {};

//       const commentsWithVotes = merged.map((c) => {
//         const key = c.id;
//         if (voteMap[key]) {
//           return { ...c, upvotes: voteMap[key].up, downvotes: voteMap[key].down };
//         }
//         return c;
//       });

//       setAllComments(commentsWithVotes);
//     } catch (err) {
//       console.error("Error loading comments:", err);
//       setAllComments([]);
//     }
//   };

//   const saveUserComment = (newComment) => {
//     const stored = localStorage.getItem("healthChat_comments");
//     const existing = stored ? JSON.parse(stored) : [];
//     const updated = [...existing, newComment];
//     localStorage.setItem("healthChat_comments", JSON.stringify(updated));
//   };

//   const saveVote = (commentId, up, down) => {
//     const stored = localStorage.getItem("healthChat_votes");
//     const votes = stored ? JSON.parse(stored) : {};
//     votes[commentId] = { up, down };
//     localStorage.setItem("healthChat_votes", JSON.stringify(votes));
//   };

//   // Split comments
//   const verifiedComments = allComments.filter((c) => c.isExpertVerified === true);
//   const unverifiedComments = allComments.filter((c) => c.isExpertVerified !== true);

//   const getFiltered = (list) => {
//     if (currentFilter === "all") return list;
//     return list.filter((c) => c.category.toLowerCase() === currentFilter.toLowerCase());
//   };

//   const displayedComments =
//     currentTab === "verified" ? getFiltered(verifiedComments) : getFiltered(unverifiedComments);

//   const handleVote = (commentId, voteType) => {
//     setAllComments((prev) =>
//       prev.map((c) => {
//         if (c.id !== commentId) return c;
//         let { upvotes = 0, downvotes = 0 } = c;
//         if (voteType === "up") upvotes += 1;
//         if (voteType === "down") downvotes += 1;
//         saveVote(commentId, upvotes, downvotes);
//         return { ...c, upvotes, downvotes };
//       })
//     );
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newComment = {
//       id: Date.now().toString(),
//       username: formData.username.trim() || "Anonymous",
//       message: formData.message.trim(),
//       category: formData.category,
//       location: "Unknown",
//       upvotes: 0,
//       downvotes: 0,
//       isExpertVerified: false,
//       createdAt: new Date().toISOString(),
//     };

//     // Add to local state
//     setAllComments((prev) => [...prev, newComment]);

//     // Save to localStorage
//     saveUserComment(newComment);

//     // Reset form
//     setFormData({ username: "", category: "medicine", message: "" });
//     setModalOpen(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const formatCategory = (cat) =>
//     cat.replace(/-/g, " ").replace(/\b\w/g, (ch) => ch.toUpperCase());

//   const CommentCard = ({ comment }) => (
//     <div className="chat-comment-card">
//       <div className="chat-vote-column">
//         <button
//           className="chat-vote-button up"
//           onClick={() => handleVote(comment.id, "up")}
//           aria-label="Upvote"
//         >
//           ▲
//         </button>
//         <span className="chat-vote-count">
//           {(comment.upvotes || 0) - (comment.downvotes || 0)}
//         </span>
//         <button
//           className="chat-vote-button down"
//           onClick={() => handleVote(comment.id, "down")}
//           aria-label="Downvote"
//         >
//           ▼
//         </button>
//       </div>

//       <div className="chat-comment-body">
//         <div className="chat-comment-header">
//           <strong className="chat-username">{comment.username}</strong>
//           {comment.isExpertVerified && (
//             <span className="chat-badge chat-badge-expert">Expert Verified</span>
//           )}
//           <span className="chat-badge chat-badge-category">
//             {formatCategory(comment.category)}
//           </span>
//         </div>
//         <p className="chat-comment-text">{comment.message}</p>
//         <small className="chat-timestamp">
//           {comment.createdAt ? new Date(comment.createdAt).toLocaleString() : "No date"}
//         </small>
//       </div>
//     </div>
//   );

//   return (
//     <div className="chat-app-container">
//       <div className="chat-main-content">
//         <h1 className="chat-page-title">Health Community Chat</h1>

//         <div className="chat-tab-bar">
//           <button
//             className={`chat-tab ${currentTab === "verified" ? "active" : ""}`}
//             onClick={() => setCurrentTab("verified")}
//           >
//             Verified
//           </button>
//           <button
//             className={`chat-tab ${currentTab === "unverified" ? "active" : ""}`}
//             onClick={() => setCurrentTab("unverified")}
//           >
//             Community
//           </button>
//         </div>

//         <div className="chat-filter-bar">
//           {["all", "medicine", "fitness", "mental-health", "nutrition"].map((f) => (
//             <button
//               key={f}
//               className={`chat-filter-chip ${currentFilter === f ? "active" : ""}`}
//               onClick={() => setCurrentFilter(f)}
//             >
//               {f === "all" ? "All" : formatCategory(f)}
//             </button>
//           ))}
//         </div>

//         <div className={`chat-section ${currentTab === "verified" ? "active" : ""}`}>
//           <div className="chat-comments-container">
//             {displayedComments.length === 0 ? (
//               <p className="chat-empty-text">No verified comments yet.</p>
//             ) : (
//               displayedComments.map((c) => <CommentCard key={c.id} comment={c} />)
//             )}
//           </div>
//         </div>

//         <div className={`chat-section ${currentTab === "unverified" ? "active" : ""}`}>
//           <div className="chat-comments-container">
//             {displayedComments.length === 0 ? (
//               <p className="chat-empty-text">No community comments yet.</p>
//             ) : (
//               displayedComments.map((c) => <CommentCard key={c.id} comment={c} />)
//             )}
//           </div>

//           <button className="chat-add-button" onClick={() => setModalOpen(true)}>
//             +
//           </button>
//         </div>
//       </div>

//       {modalOpen && (
//         <div className="chat-modal-overlay">
//           <div className="chat-modal">
//             <button className="chat-modal-close" onClick={() => setModalOpen(false)}>
//               ×
//             </button>
//             <h2 className="chat-modal-title">Share Your Opinion</h2>

//             <form onSubmit={handleSubmit}>
//               <div className="chat-form-field">
//                 <label htmlFor="username">Your Name</label>
//                 <input
//                   id="username"
//                   name="username"
//                   value={formData.username}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>

//               <div className="chat-form-field">
//                 <label htmlFor="category">Category</label>
//                 <select
//                   id="category"
//                   name="category"
//                   value={formData.category}
//                   onChange={handleInputChange}
//                   required
//                 >
//                   <option value="medicine">Medicine</option>
//                   <option value="fitness">Fitness</option>
//                   <option value="mental-health">Mental Health</option>
//                   <option value="nutrition">Nutrition</option>
//                 </select>
//               </div>

//               <div className="chat-form-field">
//                 <label htmlFor="message">Your Comment</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={5}
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>

//               <button type="submit" className="chat-submit-button">
//                 Post Comment
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Chat;