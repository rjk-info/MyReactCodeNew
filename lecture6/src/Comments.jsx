import { useState } from "react";
import "./Comments.css";
import CommentsForm from "./CommentsForm";

export default function Comments() {
    let [comments, setComments] = useState([{
        username: "@Rk",
        remarks: "great job!",
        rating: 4
    },
]);

    let addNewComment = (comment) => {
        setComments((currComments) => [...currComments, comment]);
        console.log("added new comments") ;
    };

    return (
        <>
            <div>
                <h3>All comments</h3>
                {comments.map((comment, idx) => (
                    <div className="comment" key={idx}>
                        <span>{comment.remarks}</span>
                        <span>(rating = {comment.rating})</span>
                        <p>-{comment.username}</p>
                    </div>
                ))}
            </div>
            <hr />
            <CommentsForm addNewComment={addNewComment} />
        </>
    );
}
