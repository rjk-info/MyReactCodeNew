import { useState } from "react";
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'username cannot be empty';
    }
    return errors;
};

export default function CommentsForm({ addNewComment }) {

    const formik = useFormik({
        initialValues: {
            username: "",
            remark: "",
            rating: 5
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            addNewComment(values);
            resetForm();
        },
    });

    return (
        <div className="comments-form">
            <h4>Give a comment!</h4>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">User Name</label>
                <input
                    placeholder="username"
                    type="text"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    id="username"
                    name="username"
                />
                {formik.errors.username ? <div>{formik.errors.username}</div> : null}

                <br /><br /><br />

                <label htmlFor="remark">Text Area</label>
                <textarea
                    value={formik.values.remark}
                    onChange={formik.handleChange}
                    id="remark"
                    name="remark"
                />
                <br /><br /><br />

                <label htmlFor="rating">Rating</label>
                <input
                    placeholder="rating"
                    type="number"
                    min={1} max={5}
                    value={formik.values.rating}
                    onChange={formik.handleChange}
                    id="rating"
                    name="rating"
                />
                <br /><br /><br />
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
}
