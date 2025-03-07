import { useState } from "react";

export default function CommentsForm({ addNewComment }) {

    let [formData, setFormData] = useState({
        username: "",
        remark: "",
        rating: 5
    });


    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        });
    };

    let handleSubmit = (event) => {
       
        console.log(formData);
        addNewComment(formData);
        setFormData({
            username: "",
            remark: "",
            rating: 5
        });
    };

    return (
        <div className="comments-form">
            <h4>Give a comment!</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">User Name</label>
                <input
                    placeholder="username"
                    type="text"
                    value={formData.username}
                    onChange={handleInputChange}
                    id="username"
                    name="username"
                />
                <br /><br /><br />

                <label htmlFor="remark">Text Area</label>
                <textarea
                    value={formData.remark}
                    onChange={handleInputChange}
                    id="remark"
                    name="remark"
                />
                <br /><br /><br />

                <label htmlFor="rating">Rating</label>
                <input
                    placeholder="rating"
                    type="number"
                    min={1} max={5}
                    value={formData.rating}
                    onChange={handleInputChange}
                    id="rating"
                    name="rating"
                />
                <br /><br /><br />
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
}
