import React, { useState } from 'react';
import { MdEdit } from 'react-icons/md';

function BlogForm() {
    const [blogData, setBlogData] = useState({
        title: '',
        author: '',
        content: '',
        tags: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBlogData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(blogData);
        // Typically you would send this data to a server here
    };

    return (
        <>
            <div className="p-2 flex justify-center w-full">
                <form className="max-w-screen-sm w-full" onSubmit={handleFormSubmit}>
                    <h2 className="m-3 flex justify-center items-center text-2xl font-semibold text-blue-500 border p-3 text-center rounded-md border-blue-400 hover:text-white hover:bg-blue-400">
                        <MdEdit size={'30px'} /> &nbsp; Add a Blog Post
                    </h2>
                    <div className="mb-3">
                        <label className="block mb-1">Title:</label>
                        <input
                            className="w-full border rounded-md px-3 py-2"
                            type="text"
                            name="title"
                            value={blogData.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block mb-1">Author:</label>
                        <input
                            className="w-full border rounded-md px-3 py-2"
                            type="text"
                            name="author"
                            value={blogData.author}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block mb-1">Content:</label>
                        <textarea
                            className="w-full border rounded-md px-3 py-2"
                            name="content"
                            value={blogData.content}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block mb-1">Tags:</label>
                        <input
                            className="w-full border rounded-md px-3 py-2"
                            type="text"
                            name="tags"
                            value={blogData.tags}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button
                        className="bg-green-500 text-white px-6 py-3 rounded-md"
                        type="submit"
                    >
                        Add Blog Post
                    </button>
                </form>
            </div>
        </>
    );
}

export default BlogForm;
