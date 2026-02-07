import { useState, useEffect } from "react";
import { Client, Databases, ID, Query, Permission, Role } from "appwrite";
import "./styling/Chat.css";

// Appwrite setup (move to a separate file later if you want)
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const databases = new Databases(client);

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

function Chat() {
  const [allComments, setAllComments] = useState([]);
  const [currentTab, setCurrentTab] = useState("verified");
  const [currentFilter, setCurrentFilter] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    category: "medicine",
    message: "",
  });
  const [loading, setLoading] = useState(true);

  // Load comments from Appwrite on mount
  // useEffect(() => {
  //   loadComments();

  //   // Optional: real-time updates (new comments appear instantly)
  //   const unsubscribe = client.subscribe(
  //     `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`,
  //     (response) => {
  //       if (response.events.includes("databases.*.collections.*.documents.*.create")) {
  //         loadComments(); // refresh list when new comment is added
  //       }
  //     }
  //   );

  //   return () => unsubscribe(); // cleanup
  // }, []);
  useEffect(() => {
    loadComments();

    const unsubscribe = client.subscribe(
      `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`,
      (response) => {
        // Only handle NEW comments
        if (
          response.events.includes(
            "databases.*.collections.*.documents.*.create",
          )
        ) {
          const doc = response.payload;

          const newComment = {
            id: doc.$id,
            username: doc.username,
            message: doc.message,
            category: doc.category,
            location: doc.location || "Unknown",
            upvotes: doc.upvotes || 0,
            downvotes: doc.downvotes || 0,
            isExpertVerified: doc.isExpertVerified || false,
            createdAt: doc.createdAt,
          };

          // Avoid duplicates (important!)
          setAllComments((prev) => {
            if (prev.some((c) => c.id === newComment.id)) return prev;
            return [newComment, ...prev];
          });
        }
      },
    );

    return () => unsubscribe();
  }, []);

  const loadComments = async () => {
    try {
      setLoading(true);
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [
          Query.orderDesc("createdAt"), // newest first
        ],
      );

      const comments = response.documents.map((doc) => ({
        id: doc.$id,
        username: doc.username,
        message: doc.message,
        category: doc.category,
        location: doc.location || "Unknown",
        upvotes: doc.upvotes || 0,
        downvotes: doc.downvotes || 0,
        isExpertVerified: doc.isExpertVerified || false,
        createdAt: doc.createdAt,
      }));

      setAllComments(comments);
    } catch (err) {
      console.error("Error loading comments from Appwrite:", err);
      setAllComments([]);
    } finally {
      setLoading(false);
    }
  };

  const handleVote = async (commentId, voteType) => {
    try {
      // Get current comment
      const comment = await databases.getDocument(
        DATABASE_ID,
        COLLECTION_ID,
        commentId,
      );

      let updatedUp = comment.upvotes || 0;
      let updatedDown = comment.downvotes || 0;

      if (voteType === "up") updatedUp += 1;
      if (voteType === "down") updatedDown += 1;

      await databases.updateDocument(DATABASE_ID, COLLECTION_ID, commentId, {
        upvotes: updatedUp,
        downvotes: updatedDown,
      });

      // Optimistic UI update
      setAllComments((prev) =>
        prev.map((c) =>
          c.id === commentId
            ? { ...c, upvotes: updatedUp, downvotes: updatedDown }
            : c,
        ),
      );
    } catch (err) {
      console.error("Vote failed:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = {
      username: formData.username.trim() || "Anonymous",
      message: formData.message.trim(),
      category: formData.category,
      location: "Unknown",
      upvotes: 0,
      downvotes: 0,
      isExpertVerified: false, // new comments are unverified by default
      createdAt: new Date().toISOString(),
    };

    try {
      await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        newComment,
        [
          Permission.read(Role.any()), // anyone can read
          Permission.write(Role.any()), // anyone can vote/comment (adjust later)
        ],
      );

      // Optimistic UI + close modal
      // setAllComments((prev) => [
      //   { ...newComment, id: "temp-" + Date.now() },
      //   ...prev,
      // ]);
      // setFormData({ username: "", category: "medicine", message: "" });
      // setModalOpen(false);

      // // Real fetch will replace the temp one
      // setTimeout(loadComments, 500);
      setFormData({ username: "", category: "medicine", message: "" });
      setModalOpen(false);
      // Real-time subscription will add the comment automatically
    } catch (err) {
      console.error("Failed to post comment:", err);
      alert("Could not post comment. Try again.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Split & filter logic (same as before)
  const verifiedComments = allComments.filter(
    (c) => c.isExpertVerified === true,
  );
  const unverifiedComments = allComments.filter(
    (c) => c.isExpertVerified !== true,
  );

  const getFiltered = (list) => {
    if (currentFilter === "all") return list;
    return list.filter(
      (c) => c.category.toLowerCase() === currentFilter.toLowerCase(),
    );
  };

  const displayedComments =
    currentTab === "verified"
      ? getFiltered(verifiedComments)
      : getFiltered(unverifiedComments);

  const formatCategory = (cat) =>
    cat.replace(/-/g, " ").replace(/\b\w/g, (ch) => ch.toUpperCase());

  const CommentCard = ({ comment }) => (
    <div className="chat-comment-card">
      <div className="chat-vote-column">
        <button
          className="chat-vote-button up"
          onClick={() => handleVote(comment.id, "up")}
          aria-label="Upvote"
        >
          ▲
        </button>
        <span className="chat-vote-count">
          {(comment.upvotes || 0) - (comment.downvotes || 0)}
        </span>
        <button
          className="chat-vote-button down"
          onClick={() => handleVote(comment.id, "down")}
          aria-label="Downvote"
        >
          ▼
        </button>
      </div>

      <div className="chat-comment-body">
        <div className="chat-comment-header">
          <strong className="chat-username">{comment.username}</strong>
          {comment.isExpertVerified && (
            <span className="chat-badge chat-badge-expert">
              Expert Verified
            </span>
          )}
          <span className="chat-badge chat-badge-category">
            {formatCategory(comment.category)}
          </span>
        </div>
        <p className="chat-comment-text">{comment.message}</p>
        <small className="chat-timestamp">
          {new Date(comment.createdAt).toLocaleString()}
        </small>
      </div>
    </div>
  );

  return (
    <div className="chat-app-container">
      <div className="chat-main-content">
        <h1 className="chat-page-title">Health Community Chat</h1>

        <div className="chat-tab-bar">
          <button
            className={`chat-tab ${currentTab === "verified" ? "active" : ""}`}
            onClick={() => setCurrentTab("verified")}
          >
            Verified
          </button>
          <button
            className={`chat-tab ${currentTab === "unverified" ? "active" : ""}`}
            onClick={() => setCurrentTab("unverified")}
          >
            Community
          </button>
        </div>

        <div className="chat-filter-bar">
          {["all", "medicine", "fitness", "mental-health", "nutrition"].map(
            (f) => (
              <button
                key={f}
                className={`chat-filter-chip ${currentFilter === f ? "active" : ""}`}
                onClick={() => setCurrentFilter(f)}
              >
                {f === "all" ? "All" : formatCategory(f)}
              </button>
            ),
          )}
        </div>

        {loading ? (
          <p className="chat-empty-text">Loading comments...</p>
        ) : (
          <>
            <div
              className={`chat-section ${currentTab === "verified" ? "active" : ""}`}
            >
              <div className="chat-comments-container">
                {displayedComments.length === 0 ? (
                  <p className="chat-empty-text">No verified comments yet.</p>
                ) : (
                  displayedComments.map((c) => (
                    <CommentCard key={c.id} comment={c} />
                  ))
                )}
              </div>
            </div>

            <div
              className={`chat-section ${currentTab === "unverified" ? "active" : ""}`}
            >
              <div className="chat-comments-container">
                {displayedComments.length === 0 ? (
                  <p className="chat-empty-text">No community comments yet.</p>
                ) : (
                  displayedComments.map((c) => (
                    <CommentCard key={c.id} comment={c} />
                  ))
                )}
              </div>

              <button
                className="chat-add-button"
                onClick={() => setModalOpen(true)}
              >
                +
              </button>
            </div>
          </>
        )}
      </div>

      {modalOpen && (
        <div className="chat-modal-overlay">
          <div className="chat-modal">
            <button
              className="chat-modal-close"
              onClick={() => setModalOpen(false)}
            >
              ×
            </button>
            <h2 className="chat-modal-title">Share Your Opinion</h2>

            <form onSubmit={handleSubmit}>
              <div className="chat-form-field">
                <label htmlFor="username">Your Name</label>
                <input
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="chat-form-field">
                <label htmlFor="category">Category</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="medicine">Medicine</option>
                  <option value="fitness">Fitness</option>
                  <option value="mental-health">Mental Health</option>
                  <option value="nutrition">Nutrition</option>
                </select>
              </div>

              <div className="chat-form-field">
                <label htmlFor="message">Your Comment</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button type="submit" className="chat-submit-button">
                Post Comment
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
